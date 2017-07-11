const ATTR_NAME = 'data-translate';

export default {

  replaceText(node, text) {
    node.textContent = text || node.textContent;
  },
  /*
  function _replaceStyle(styles, style) {
    styles.setAttribute('href',
      styles.getAttribute('href').replace(/css\/(.*?.min.css)/g, 'css/' + style + '.min.css'));
  }

  function syncStyles(styles, observable) {
    _replaceStyle(styles, observable.styles);
    _observe('styles', function cb() {
      _replaceStyle(styles, observable.styles);
    });
  }
  */
  syncNodeText(node, observable, property) {
    this._replaceText(node, i18n.t([observable.language][property]));
    this._observe('language', function cb() {
      this._replaceText(node, i18n.t([observable.language][property]));
    });
  },

  parseDOM(parent, observable) {
    const texts = parent.querySelectorAll(`[${ATTR_NAME}]:not([${ATTR_NAME}=""])`);
    // const styles = document.querySelector('link#skin');

    // syncStyles(styles, observable);

    texts.forEach((textNode) => {
      this.syncNodeText(textNode, observable, textNode.attributes[`${ATTR_NAME}`].value);
    });
  }
};
// parseDOM(document.body, App.data);
