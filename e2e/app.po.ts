import { browser, by, element } from 'protractor';

export class BuzzyBrainTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
