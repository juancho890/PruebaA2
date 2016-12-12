import { ProyectofinalPage } from './app.po';

describe('proyectofinal App', function() {
  let page: ProyectofinalPage;

  beforeEach(() => {
    page = new ProyectofinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
