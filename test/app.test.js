import Cooksent from '@/Cooksent';
import App from '@/app';

describe('App', () => {
  const app = App.factory();

  it('Is instanciated', () => {
    expect(app).toBeInstanceOf(Cooksent);
  });
});
