import { browser, element, by } from 'protractor';

/* tslint:disable */
export class ElectronAngularPage {
  navigateTo(route: string) {
    return browser.get(route);
  }
}
