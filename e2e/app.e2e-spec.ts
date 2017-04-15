import { WeatherWidgetPage } from './app.po';

describe('weather-widget App', () => {
  let page: WeatherWidgetPage;

  beforeEach(() => {
    page = new WeatherWidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
