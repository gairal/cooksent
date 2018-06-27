export default class Butt {
  constructor(selector, onClick) {
    this.$html = document.querySelector(`.js-test__${selector}`);

    this.onClick = onClick;
  }

  /* eslint-disable-next-line class-methods-use-this */
  onClick() {

  }

  init() {
    this.$html.addEventListener('click', this.onClick);
  }

  static factory(selector, onClick) {
    const butt = new Butt(selector, onClick);
    return butt.init();
  }
}
