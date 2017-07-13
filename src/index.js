import I18n from './i18n';
import Observator from './observator';
import Styles from './styles';
import TextNodes from './text_nodes';

let customizable = null;

let textNodes = null;

const checkStringsProvider = (stringsProvider) => {
  if (!stringsProvider || stringsProvider.getString === undefined) {
    throw TypeError('stringsProvider debe implementar el método getString');
  }
};

export default {
  init(stringsProvider, config) {
    let Observable;
    const defaults = { 'language': 'es_ES', 'skin': 'styles' };

    customizable = config || defaults;
    checkStringsProvider(stringsProvider);

    const lang = new I18n(stringsProvider, customizable.language);
    const styles = document.querySelector('link#skin');

    Observable = Observator(customizable);
    textNodes = new TextNodes(document.body, lang, Observable);

    Observable.observe('language', () => { lang.language = customizable.language; });

    Styles.syncStyles(styles, Observable);
    textNodes.watch();
  },

  changeLanguage(lang) {
    customizable.language = lang;
  },

  changeSkin(skin) {
    customizable.skin = skin;
  },

  reset() {
    textNodes.reset();
  }
};
