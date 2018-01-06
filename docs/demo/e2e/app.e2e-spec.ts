import { TestPage } from './app.po';

describe('test App', () => {
  let page: TestPage;

  beforeEach(() => {
    page = new TestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
