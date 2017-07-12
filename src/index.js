import I18n from './i18n';
import Observator from './observator';
import Styles from './styles';
import TextNodes from './text_nodes';

const checkStringsProvider = (stringsProvider) => {
  if (!stringsProvider || stringsProvider.getString === undefined) {
    throw TypeError('stringsProvider debe implementar el método getString');
  }
};

export default {
  customizable: null,

  textNodes: null,

  init(stringsProvider, config) {
    let Observable;
    const defaults = { 'language': 'es_ES', 'skin': 'styles' };

    this.customizable = config || defaults;
    checkStringsProvider(stringsProvider);

    const lang = new I18n(stringsProvider, this.customizable.language);
    const styles = document.querySelector('link#skin');

    Observable = Observator(this.customizable);
    this.textNodes = new TextNodes(document.body, lang, Observable);

    Observable.observe('language', () => { lang.language = this.customizable.language; });

    Styles.syncStyles(styles, Observable);
    this.textNodes.watch();
  },

  changeLanguage(lang) {
    this.customizable.language = lang;
  },

  changeSkin(skin) {
    this.customizable.skin = skin;
  },

  reset() {
    this.textNodes.reset();
  }
};
