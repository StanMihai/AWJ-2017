import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Message } from 'app/datatypes';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
  private _messagesList: AngularFireList<Message> = null;

  constructor(private _afDatabase: AngularFireDatabase) { }

  public getMessages():Observable<Message[]> {
    if(this._messagesList === null) {
      this._messagesList = this._afDatabase.list<Message>('/messages');
    }
    return this._messagesList.valueChanges();
  }

  public sendMessage(message: Message): Promise<Message> {
    return new Promise<Message>((resolve, reject) => {
      if(this._messagesList === null)
        reject(null);
      else {
        this._messagesList.push(message).then(endSuccess => {
          resolve(message);
        }, endUnsuccess => {
          reject(null);
        });
      }
    });
  }
}
