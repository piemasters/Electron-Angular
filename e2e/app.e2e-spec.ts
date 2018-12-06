import { ElectronAngularPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('electron-angular App', () => {
  let page: ElectronAngularPage;

  beforeEach(() => {
    page = new ElectronAngularPage();
  });

  it('should display message saying App works !', () => {
    page.navigateTo('/');
    expect(element(by.css('app-home h1')).getText()).toMatch('App works !');
  });
});
