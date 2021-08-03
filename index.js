const isGenitivePlural = num =>
  num > 10 && num % 100 - num % 100 % 10 === 10 ||
  num % 10 === 0 || num % 10 >= 5;

const isGenitiveSingular = num => Math.floor(num) !== num || num % 10 >= 2;

const pluralize = (word, singular, plural, options = {}) => num => {
  const { withNumber = true } = options;
  const displayNum = withNumber ? `${num} ` : '';
  const abs = Math.abs(num);
  if (abs === 1) return `${displayNum}${word}`;
  if (!plural) return `${displayNum}${singular}`;
  if (isGenitivePlural(abs)) return `${displayNum}${plural}`;
  if (isGenitiveSingular(abs)) return `${displayNum}${singular}`;
  return `${displayNum}${word}`;
};

export default function numd(num, ...params) {
  return typeof num === 'number' ?
    pluralize(...params)(num) :
    pluralize(num, ...params);
}
