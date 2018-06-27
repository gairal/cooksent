import Storage from './Storage';

export default class Cooksent {
  constructor(opts) {
    this.opts = { ...Cooksent.defaultOpts, ...opts };
    this.storage = new Storage({
      key: this.opts.storageKey,
    });
  }

  static get defaultOpts() {
    return {
      selector: 'js-cooksent',
      btnSelector: 'js-cooksent__btn',
      title: 'Cookie Consent',
      description: 'By continuing your navigation without changing your cookie settings, you accept the use of cookies to analyse and measure audience, attendance, navigation and redirection from external websites.',
      btnLabel: 'ok',
      onConsent: () => {},
      storageKey: 'COOKSENT',
    };
  }

  /**
   * Title prop
   *
   * @readonly
   * @memberof Cooksent
   */
  get title() {
    return this.opts.title;
  }

  /**
   * btnSelector prop
   *
   * @readonly
   * @memberof Cooksent
   */
  get btnSelector() {
    return this.opts.btnSelector;
  }

  /**
   * Selector prop
   *
   * @readonly
   * @memberof Cooksent
   */
  get selector() {
    return this.opts.selector;
  }

  /**
   * Description prop
   *
   * @readonly
   * @memberof Cooksent
   */
  get description() {
    return this.opts.description;
  }

  /**
   * BtnLabel prop
   *
   * @readonly
   * @memberof Cooksent
   */
  get btnLabel() {
    return this.opts.btnLabel;
  }

  /**
   * onConsent prop
   *
   * @readonly
   * @memberof Cooksent
   */
  get onConsent() {
    return this.opts.onConsent;
  }

  /**
   * Hide Div
   *
   * @memberof Cooksent
   */
  hide() {
    if (this.$section) this.$section.style.display = 'none';
  }

  /**
   * Show div
   *
   * @memberof Cooksent
   */
  show() {
    if (this.$section) this.$section.style.display = 'block';
  }

  /**
   * Returns the popin html view
   *
   * @readonly
   * @memberof Cooksent
   */
  get view() {
    return `
      <section class="cooksent ${this.selector}" tabindex="-1" aria-hidden="true" style="display: none;">
        <div class="cooksent__title">${this.title}</div>
        <div class="cooksent__body">
          <div class="cooksent__description">${this.description}</div>
          <div class="cooksent__btn-div">
            <button type="button" class="cooksent__btn ${this.btnSelector}">${this.btnLabel}</button>
          </div>
        </div>
      </section>
    `;
  }

  injectView() {
    // Main section
    this.$section = document.createElement('section');
    this.$section.className = `cooksent ${this.selector}`;

    // Title
    const $title = document.createElement('div');
    $title.className = 'cooksent__title';
    $title.innerText = this.title;

    // Description
    const $description = document.createElement('div');
    $description.className = 'cooksent__description';
    $description.innerText = this.description;

    // Button
    this.$btn = document.createElement('button');
    this.$btn.className = `cooksent__btn ${this.btnSelector}`;
    this.$btn.type = 'button';
    this.$btn.innerText = this.btnLabel;

    const $btnDiv = document.createElement('div');
    $btnDiv.className = 'cooksent__btn-div';
    $btnDiv.appendChild(this.$btn);

    // Section body
    const $body = document.createElement('div');
    $body.className = 'cooksent__body';
    $body.appendChild($description);
    $body.appendChild($btnDiv);

    this.$section.appendChild($title);
    this.$section.appendChild($body);
    document.body.appendChild(this.$section);
  }

  /**
   * Executed when the user click on the OK button
   *
   * @memberof Cooksent
   */
  consent() {
    this.storage.hasOptIn = true;
    this.hide();
    this.onConsent();
  }

  /**
   * Init the component
   *
   * @param {boolean} [force=false] for the init even if the localStorage already contains the key
   * @returns
   * @memberof Cooksent
   */
  init(force = false) {
    // We init the popin only if the user didn't already opt-in
    if (!this.storage.hasOptIn || force) {
      // Inject the div into the DOM
      this.injectView();
      this.$btn.addEventListener('click', () => this.consent());

      if (!this.storage.hasOptIn) this.show();
      else this.hide();
    }

    return this;
  }

  /**
   * Static factory method returning an instance of the cookie consent
   *
   * @static
   * @param {*} opts
   * @returns
   * @memberof Cooksent
   */
  static factory(opts) {
    const cooksent = new Cooksent(opts);
    return cooksent.init();
  }
}
