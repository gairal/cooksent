import Cooksent from '@/Cooksent';

describe('Logger', () => {
  const cooksent = new Cooksent();

  it('Has default properties', () => {
    expect(cooksent).toBeInstanceOf(Cooksent);
    expect(cooksent.opts).toBeDefined();
    expect(cooksent.storage).toBeDefined();
    expect(cooksent.selector).toEqual('js-cooksent');
    expect(cooksent.btnSelector).toEqual('js-cooksent__btn');
    expect(cooksent.title).toEqual('Cookie Consent');
    expect(cooksent.description).toEqual('By continuing your navigation without changing your cookie settings, you accept the use of cookies to analyse and measure audience, attendance, navigation and redirection from external websites.');
    expect(cooksent.opts.storageKey).toEqual('COOKSENT');
  });

  it('Inits', () => {
    cooksent.init();

    expect(cooksent.$section).toBeDefined();
    expect(cooksent.$btn).toBeDefined();
    expect(cooksent.$section.style.display).toEqual('block');
    expect(cooksent.storage.hasOptIn).toBeFalsy();
  });

  it('Consents', () => {
    cooksent.consent();

    expect(cooksent.$section.style.display).toEqual('none');
    expect(cooksent.storage.hasOptIn).toBeTruthy();
  });

  it('Force Inits', () => {
    cooksent.init(true);

    expect(cooksent.storage.hasOptIn).toBeTruthy();
  });

  it('Hides and show', () => {
    cooksent.show();
    expect(cooksent.$section.style.display).toEqual('block');
    cooksent.hide();
    expect(cooksent.$section.style.display).toEqual('none');
  });
});
