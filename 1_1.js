function numberToText(n) {
    const ones = ["", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять", "десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];
    const tens = ["", "", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"];
  
    if (n >= 10 && n <= 99) {
      const tensDigit = Math.floor(n / 10);
      const onesDigit = n % 10;
      if (onesDigit === 0) {
        return tens[tensDigit];
      } else if (tensDigit === 1) {
        return ones[tensDigit * 10 + onesDigit];
      } else {
        return tens[tensDigit] + " " + ones[onesDigit];
      }
    } else {
      return "Помилка: Введене число не є двозначним";
    }
  }
