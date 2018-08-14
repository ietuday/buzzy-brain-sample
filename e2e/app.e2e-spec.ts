import { BuzzyBrainTestPage } from './app.po';

describe('buzzy-brain-test App', () => {
  let page: BuzzyBrainTestPage;

  beforeEach(() => {
    page = new BuzzyBrainTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
