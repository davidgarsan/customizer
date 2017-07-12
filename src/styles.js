export default {
  replaceStyle(stylesLink, style) {
    stylesLink.setAttribute('href',
      stylesLink.getAttribute('href').replace(/css\/(.*?.min.css)/g, 'css/' + style + '.min.css'));
  },

  syncStyles(styles, observable) {
    this.replaceStyle(styles, observable.data.skin);
    observable.observe('skin', () => {
      this.replaceStyle(styles, observable.data.skin);
    });
  }
};

