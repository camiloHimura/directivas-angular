import { PruebasAngularDosPage } from './app.po';

describe('pruebas-angular-dos App', () => {
  let page: PruebasAngularDosPage;

  beforeEach(() => {
    page = new PruebasAngularDosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
