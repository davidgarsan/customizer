const LANG_DEFAULT = 'es_ES';

export default class I18n {
  constructor(stringsProvider, stringsHanler, language) {
    this._strings = stringsProvider;
    this._handler = stringsHanler;
    this._language = language;
  }

  get language() {
    return this._language;
  }

  set language(language) {
    this._language = language;
    console.log('Changed language to ' + language);
    this._handler
  }

  t(key) {
    return this._strings.getString(this._language || LANG_DEFAULT, key);
  }
}

