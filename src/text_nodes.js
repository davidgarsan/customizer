const ATTR_NAME = 'data-translate';

function replaceText(node, text) {
  node.textContent = text || node.textContent;
}

function syncNodeText(node, observable, property, textGetter) {
  replaceText(node, textGetter(property));
  observable.observe('language', function callback() {
    replaceText(node, textGetter(property));
  });
}

export default class TextNodes {
  constructor(parent, i18n, observable) {
    this.parent = parent;
    this.i18n = i18n;
    this.observable = observable;
    this.nodes = [];
  }

  watch() {
    this.nodes = this.parent.querySelectorAll(`[${ATTR_NAME}]:not([${ATTR_NAME}=""])`);
    // const styles = document.querySelector('link#skin');

    // syncStyles(styles, observable);

    this.nodes.forEach((textNode) => {
      syncNodeText(textNode, this.observable, textNode.attributes[`${ATTR_NAME}`].value, this.i18n.t.bind(this.i18n));
    });
  }

  reset() {
    this.nodes = [];
  }
};

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
// parseDOM(document.body, App.data);
