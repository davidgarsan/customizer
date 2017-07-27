const ATTR_NAME = 'data-translate';

function replaceText(node, text) {
  const replace = (str) => { node.textContent = str || node.textContent;};

  if (text.constructor !== String && text.constructor !== Promise) {
    throw TypeError(
      `El método getString debe devolver un String o una Promise pero está devolviendo ${text.constructor.name}`);
  }

  if (text.constructor === Promise) {
    text.then(replace);
  } else {
    replace(text);
  }
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

    this.nodes.forEach((textNode) => {
      syncNodeText(textNode, this.observable, textNode.attributes[`${ATTR_NAME}`].value, this.i18n.t.bind(this.i18n));
    });
  }

  reset() {
    this.nodes = [];
  }
};
