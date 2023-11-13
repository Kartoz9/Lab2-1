function replaceDateFormats(text) {
    const regex = /(\d{4})\/(\d{2})\/(\d{2})/g;
    const replacedText = text.replace(regex, '$3.$2.$1');
    return replacedText;
  }