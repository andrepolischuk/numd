declare function numd(
  num: number,
  word: string,
  singular: string,
  plural?: string,
  options?: { withNumber?: boolean }
): string;
declare function numd(
  word: string,
  singular: string,
  plural?: string | null,
  options?: { withNumber?: boolean }
): (num: number) => string;
export default numd;
