// export type TAlgorithm = 'HS256' | 'HS384' | 'HS512' | 'RS256';

// export interface IOptions {
//   header: any;
// }

// export function decode(token: string, key: string, noVerify?: boolean, algorithm?: TAlgorithm): any;

// export function encode(payload: any, key: string, algorithm?: TAlgorithm, options?: IOptions): string;

// exports.serve = serve;                          // 
export function sha256(str: string): string;                        // 
// exports.jwt = jwt;                              // 
// exports.trace = trace;                          // = desctr => objOrFn => console.log(...JSON.str)
// export function trace(str: string)(obj: object): void;                          // = desctr => objOrFn => console.log(...JSON.str)
// exports._range = _range;                        // = (beg = 0, end = !end ? beg : beg = 0, step = 1, ret = []) => arr[0|beg...beg|end]
export function _range(beg: number, end?: number, step?: number): Array<number>;                        // = (beg = 0, end = !end ? beg : beg = 0, step = 1, ret = []) => arr[0|beg...beg|end]
// exports.f_chrBarMeter = f_chrBarMeter;          // = (desc, level, maxLvl = 30, chr = String.fromCodePoint(9613), LED = true) => [...bars]
// exports.danceMeter = danceMeter;                // = async (strArr, ms) => process.stdout.write([...barChrs])
// exports.tf_getYear = tf_getYear;                // = () => YYYYnum
// exports.f_capitalize = f_capitalize;            // = (str, type = 'none|words|sentences|allcaps') => str
// exports.f_strnum2OrdVals = f_strnum2OrdVals;    // = (str, divdr = '') => [ ...OrdVals ]
// exports.f_todayOrDate2YMD = f_todayOrDate2YMD;  // = (todayOrDate = new Date(), divdr = '-') => YYYY-MM-DDstr
// exports.f_randActyBlot = f_randActyBlot;        // = (daysFrToday, numOfActy, startOfBizDay = 0900, hoursInBizDay = 12, maxActyHours = 6, divdr = '-') => [...randomActs]
// exports.f_chkOrBookRm = f_chkOrBookRm;          // = (space, paxNum = 0, date = null, start = null, duratn = null, cux = null, interval = 30) =>
// exports.f_arrSort = f_arrSort;                  // = (arr, ascDes = -1) => [ ...ascDecStrNum ]
// exports.f_strOrArrReverse = f_strOrArrReverse;  // = (strOrArr, divdr = '', joinr = divdr) => revStrOrArr
export function f_rotajF(str: string): string;                    // = str => encryStr
export function f_rotjaF(str: string): string;                    // = str => encryStr
export function f_rotajG(str: string): string;                    // = str => encryStr
export function f_rotjaG(str: string): string;                    // = str => encryStr
// exports.f_rotjaF = f_rotjaF;                    // = str => decryStr
// exports.f_rotajG = f_rotajG;                    // = str => encryStr
// exports.f_rotjaG = f_rotjaG;                    // = str => decryStr
// exports.f_funLtrs = f_funLtrs;                  // = str => randomFunStr
// exports.f_sanitizeStr = f_sanitizeStr;          // = str => saneStr
// exports.f_strEncDec = f_strEncDec;              // = (str, pos = 0, num = 40967) => encStr | {error on num ranhe}
// exports.f_encDecName = f_encDecName;            // = (str, pos = 0, num = 42243) => {encEmailOrFullNameStr} | {error on num ranhe}
// exports.f_encDecName = f_encDecName;            // = (str, pos = 0, num = 42243) => {encEmailOrFullNameStr} | {error on num ranhe}
export function f_encDecUsrName(str: string, pos?: number): Array<object>;      // = (str, pos = 0) => {encEmailOrFullNameStr}
// exports.GreekAlphabet = GreekAlphabet;
// exports.GreekAlphabet = GreekAlphabet;
// exports.Codes = Codes;
export function f_genIssueToken(encID: string, hshPW: string, perms: string, defMin?: number, hshPIN?: string): string;
export function f_genLinkTokenWTimeExpry(digCnt?: number, nameOfLinkToken?: string, hrs2ExpireFmIssuance?: number, chars?: string): object;
