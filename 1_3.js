function toKebabCase(camelCaseStyle) {
    const words = camelCaseStyle.split(/(?=[A-Z])/);
    const kebabCaseStyle = words.map(word => word.toLowerCase()).join('-');
    return kebabCaseStyle;
  }

  