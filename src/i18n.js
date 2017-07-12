const LANG_DEFAULT = 'es_ES';

export default class I18n {
  constructor(stringsProvider, language) {
    this._strings = stringsProvider;
    this._language = language;
  }

  get language() {
    return this._language;
  }

  set language(language) {
    this._language = language;
  }

  t(key) {
    return this._strings.getString(this._language || LANG_DEFAULT, key);
  }
}

