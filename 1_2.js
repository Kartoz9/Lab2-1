function toCamelCase(cssStyle) {
    const words = cssStyle.split('-');
    if (words.length === 1) {
      return cssStyle;
    }
    const camelCaseWords = words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return words[0] + camelCaseWords.join('');
  }
  

  