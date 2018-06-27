import Cooksent from '@/Cooksent';

describe('Logger', () => {
  const cooksent = Cooksent.factory();

  it('Is instanciated', () => {
    expect(cooksent).toBeInstanceOf(Cooksent);
  });

  it.skip('Sillies', () => {
    expect(cooksent.silly('TEST')).toBeTruthy();
    expect(cooksent.debug('TEST')).toBeTruthy();
    expect(cooksent.verbose('TEST')).toBeTruthy();
  });
});
