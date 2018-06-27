import Cooksent from '@/Cooksent';
import Butt from './Butt';

export default class Examples {
  constructor() {
    // Force re-init of cooksent to inject the html
    this.cooksent1 = new Cooksent().init(true);
    this.cooksent2 = new Cooksent({
      selector: 'js-cooksent2',
      btnSelector: 'js-cooksent__btn2',
      title: 'Custom title',
      description: 'Custom description',
      btnLabel: 'Oki',
      storageKey: 'COOKSENT2',
    }).init(true);

    this.init();
  }

  init() {
    Butt.factory('simple', () => {
      this.cooksent1.storage.empty();
      this.cooksent1.show();
    });

    Butt.factory('opts', () => {
      this.cooksent2.storage.empty();
      this.cooksent2.show();
    });
  }

  static factory() {
    return new Examples();
  }
}
