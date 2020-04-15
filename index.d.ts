declare function numd(num: number, word: string, singular: string, plural?: string): string
declare function numd(word: string, singular: string, plural?: string): (num: number) => string
export default numd
