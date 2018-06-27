// TODO: fallback on cookie if no localStorage

export default class Storage {
  constructor(opts) {
    this.hasLocalStorage = Storage.hasLocalStorage();
    const defaultOpts = {
      key: 'COOKSENT',
    };

    this.opts = { ...defaultOpts, ...opts };
  }

  /**
   * Return the LocalStorage key
   *
   * @readonly
   * @memberof Storage
   */
  get key() {
    return this.opts.key;
  }

  get hasOptIn() {
    return this.hasLocalStorage ? localStorage.getItem(this.key) === '1' : false;
  }

  set hasOptIn(optin) {
    if (this.hasLocalStorage) localStorage.setItem(this.key, optin ? 1 : 0);
  }

  /**
   * Remove the key from the localStorage
   *
   * @memberof Storage
   */
  empty() {
    if (this.hasLocalStorage) localStorage.removeItem(this.key);
  }

  /**
   * Method checking if current browser has local storage
   *
   * @static
   * @returns
   * @memberof Storage
   */
  static hasLocalStorage() {
    const test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.getItem(test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
