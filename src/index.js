import I18n from './i18n';
import Observator from './observator';
import Text from './text';

const ATTR_NAME = 'data-translate';
const stringsService = (function () {
  const strings = {'es_ES': {'greeting': 'Hola'}, 'en_UK': {'greeting': 'Hi'}};

  return {
    getString(lang, key) {
      return strings[lang][key];
    }
  };
})();
const lang = new I18n(stringsService, 'es_ES');
const customizable = { 'language': lang.language, 'skin': 'ruralvia' };
const Observable = Observator(customizable);

function _parseDOM(parent, observable) {
    const texts = parent.querySelectorAll(`[${ATTR_NAME}]:not([${ATTR_NAME}=""])`);
    // const styles = document.querySelector('link#skin');

    // syncStyles(styles, observable);

    texts.forEach((textNode) => {
      this.syncNodeText(textNode, observable, textNode.attributes[`${ATTR_NAME}`].value);
    });
  }

Observable.observe('language', () => { lang.language = customizable.language; });
Observable.observe('skin', () => { console.log('Modificado skin'); });

customizable.language = 'en_UK';
customizable.skin = 'ruralvia';

export default {
  init() {
    _parseDOM(document.body, Observable.data);
  },
  changeLanguage(lang) {
    customizable.language = lang;
  },
  changeSkin(skin) {
    customizable.skin = skin;
  }
};
