const isGenitivePlural = num =>
  num > 10 && num % 100 - num % 100 % 10 === 10 ||
  num % 10 === 0 || num % 10 >= 5;

const isGenitiveSingular = num => Math.floor(num) !== num || num % 10 >= 2;

const pluralize = (word, singular, plural) => num => {
  const abs = Math.abs(num);
  if (num === 1) return `${num} ${word}`;
  if (!plural) return `${num} ${singular}`;
  if (isGenitivePlural(abs)) return `${num} ${plural}`;
  if (isGenitiveSingular(abs)) return `${num} ${singular}`;
  return `${num} ${word}`;
};

export default (num, ...words) =>
  typeof num === 'number' ?
    pluralize(...words)(num) :
    pluralize(num, ...words);
