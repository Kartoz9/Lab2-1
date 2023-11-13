function calculator(expression) {
    const result = eval(expression);
    if (typeof result === 'number' && isFinite(result)) {
      return result;
    } else {
      return "Помилка: Недійсний вираз";
    }
  }

  