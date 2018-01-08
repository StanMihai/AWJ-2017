import { Component, OnInit } from '@angular/core';
import { ChatService } from 'app/services/chat/chat.service';
import { AuthService } from 'app/services/auth/auth.service';
import { Message } from 'app/datatypes';
import { NgForm } from '@angular/forms/src/directives';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ],
  providers: [ AuthService, ChatService ],
})
export class HomeComponent implements OnInit {
  private _displayName: String;
  private _displayImage: String;
  private _authToken: String;

  private _messages: Message[];
  
  constructor(private _authService: AuthService, private _chatService: ChatService) {
    let subscription = this._authService.getAuthState().subscribe(authState => {
      this._displayName = authState.displayName;
      this._displayImage = authState.photoURL;
      this._authToken = authState.uid;
      console.log(authState);
    });
  }

  ngOnInit() {
    this._listenForMessages();
  }

  private _listenForMessages(): void {
    this._chatService.getMessages().subscribe(messages => {
      this._messages = messages;
    });
  }

  private _sendMessage(form: NgForm): void {
    let newMessage: Message = { 
      displayName: this._displayName,
      displayImage: this._displayImage,
      authToken: this._authToken,
      message: form.value.mesaj
    };
    console.log(newMessage);
    this._chatService.sendMessage(newMessage).then(resolve => {
      form.reset();
    }, err => {
      console.log("fix it again");
    });
  }
}
