export default {
  replaceStyle(stylesLink, style) {
    stylesLink.setAttribute('href',
      stylesLink.getAttribute('href').replace(/(\/css\/)(\w+)()/g, `$1${style}$3`));
  },

  syncStyles(styles, observable) {
    this.replaceStyle(styles, observable.data.skin);
    observable.observe('skin', () => {
      this.replaceStyle(styles, observable.data.skin);
    });
  }
};

