import { NgProjectRegistryPage } from './app.po';

describe('ng-project-registry App', () => {
  let page: NgProjectRegistryPage;

  beforeEach(() => {
    page = new NgProjectRegistryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
