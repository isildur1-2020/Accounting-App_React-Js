const getSeparators = () => {
  const separators = parseFloat(111000.11).toLocaleString().match(/[^\d]/g);
  return { thousandsSeparator: separators[0], decimalSeparator: separators[1] };
};

const testNaN = (n) => Number.isNaN(Number(n));

const localeString = (n) =>
  (Math.round((parseFloat(n) + Number.EPSILON) * 100) / 100).toLocaleString();

const formatDecimalPart = (value, decimalSeparator) => {
  const stringValue = localeString(value);
  const parts = stringValue.split(decimalSeparator);
  if (parts.length === 1) return "00";
  const decimalPart = parts[1];
  if (decimalPart.length >= 2) return decimalPart.slice(0, 2);
  if (decimalPart.length === 0) return "00";
  return `${decimalPart}0`;
};

const formatIntegerPart = (value, thousandsSeparator, decimalSeparator) => {
  const stringValue = localeString(value);
  const parts = stringValue.split(decimalSeparator);
  const integerPart = parts[0].replace(/[^\d]/g, "");

  let formattedInteger = "";
  if (integerPart.length > 3) {
    let reminder = integerPart;
    while (reminder.length > 3) {
      const tail = reminder.slice(-3, Number.POSITIVE_INFINITY);
      formattedInteger = `${thousandsSeparator}${tail}${formattedInteger}`;
      reminder = reminder.slice(0, -3);
    }
    formattedInteger = `${reminder}${formattedInteger}`;
  } else {
    formattedInteger = integerPart;
  }
  return formattedInteger;
};

export const formatValue = (value) => {
  const isNaN = testNaN(value);
  if (isNaN) return "";

  const numberValue = Number(value);
  const isNegative = numberValue < 0;
  const { thousandsSeparator, decimalSeparator } = getSeparators();
  const formattedDecimal = formatDecimalPart(Math.abs(value), decimalSeparator);
  const formattedInteger = formatIntegerPart(
    Math.abs(value),
    thousandsSeparator,
    decimalSeparator
  );
  const sign = isNegative ? "-" : "";
  const formattedValue = `${sign}${formattedInteger}${decimalSeparator}${formattedDecimal}`;

  return formattedValue;
};

export const money = (value) => {
  const formattedValue = formatValue(value);
  return `$ ${formattedValue}`;
};
