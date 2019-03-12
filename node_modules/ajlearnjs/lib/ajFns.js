'use strict';

const serve = require('./_core/ajExpressMWaresOnNodeServer');
const fs = require('./_core/ajExpressMWaresOnNodeServer').fs;
const sha256 = require('js-sha256').sha256;
const jwt = require('jwt-simple');

var nodemailer = require('nodemailer');


/**
 * Module exports.
 * @public
 */



/**
 * Module variables.
 * @private
 */


let crypto;
try {
    crypto = require('crypto');
} catch (err) {
    console.log('crypto support is disabled!');
}

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e

const cert1 = new crypto.Certificate();
const cert2 = crypto.Certificate();
console.log({ cert1, cert2 });




/**
 * expose object
 */
var ajFns = module.exports;
const Codes = require('./ajUnicodes.json');
const GreekAlphabet = require('./greekAlphaB.json');
/**
 * version
 */
// ajFns.version = '0.3.3';

const trace = (descrptr, termAdmin = 'aj') => objOrFn =>
    typeof objOrFn === 'object' ?
        console.log(`\n\x1b[1m\x1b[36m${termAdmin}:: \x1b[32m${descrptr} =\x1b[0m\n\b`, JSON.stringify(objOrFn, null, ' ' + '.'.repeat(2) + '\t'), `\n\x1b[33m_______________________\x1b[0m\n`)
        :
        console.log(`\n\x1b[1m\x1b[36m${termAdmin}:: \x1b[32m${descrptr} =\x1b[0m`, objOrFn, `\n\x1b[33m_______________________\x1b[0m\n`);


// trace('hi, this is James\' string', '************')('hi, this is James\' string');
// trace('Math.PI', '************')(Math.PI);
// trace('null', '************')(null);        // null is an object due to legacy reasons.
// trace('{ name: \'value\', idx: 5}')({ name: 'value', idx: 5 });
// trace('[\'array\', 5, 6.3463, {key: \'valueFF\'}]')(['array', 5, 6.3463, { key: 'valueFF' }]);

const _range = (beg = 10, end = beg, step = 1) => {
    for (var arr = [], beg = beg === end ? 0 : beg; (end - beg) * step > 0; arr.push(beg), beg += step);/* ret.push(beg) before beg += step */
    return arr;
}
// trace('noArgs', '_range()')(_range());
// trace('aj', '_range(6)')(_range(6));
// trace('aj', '_range(6, 29, 2)')(_range(6, 29, 2));

// console.log({ noArgs: _range() });
// console.log({ mylistx: _range(10) });
// console.log({ mylisty: _range(3, 10, 2) });
// console.log({ mylistz: _range(10, 3) });
// console.log({ list1: _range(10) });
// // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log({ list2: _range(65, 69) });
// // [65, 66, 67, 68]
// console.log({ list3: _range(10, -10.1, -5) });
// console.log({ list3a: _range(10, 4, -5) });
// console.log({ list3b: _range(-5, 14, -5) });
// console.log({ list3c: _range(-5, -14, -5) });
// // [10, 5, 0, -5, -10]
// console.log({ list4: _range(10, 1) });
// // []
// for (let i of _range(10, -10.1, -5)) console.log({ i });
// for (let i of 'aj was here.') console.log({ i });
// // for (let i in 'aj was here.') console.log(i + ':', 'aj was here.'[i].repeat(3));
// for (let i in 'aj was here.'.repeat(2)) console.log(i + ':', 'aj was here.'.repeat(2)[i].repeat(6));

const f_chrBarMeter = (desc, level, maxLvl = 30, chr = String.fromCodePoint(9613), LED = true) => {
    const codePtBarChrs = [1012, 2604, 3051, 3485, 3940, 4240, 5555, 9020, 9030, 9040, 9050, 9200, 9210, 9400, 9410, 9420, 9430, 9440, 9460, 9470, 9600, 9610, 9611, 9612, 9613, 9614, 9615, 9617, 9618, 9619, 9620, 9640, 9650, 9660, 9670, 9690, 60000];
    // console.log(chr.length);
    // console.log(chr.split(''));
    chr = chr.trim();
    chr = chr == '' ? String.fromCodePoint(codePtBarChrs[21]) : chr.charCodeAt(0) < 255 && chr.charCodeAt(1) < 255 ? chr[0] : chr;
    const dispMaxLvl = 30;
    let dispLevel = level / maxLvl * dispMaxLvl;

    if (LED) {
        for (var l = 1, chrBar = '', lvlRnd = dispLevel > dispMaxLvl ? dispMaxLvl : Math.round(dispLevel); l <= dispMaxLvl; l++)
            chrBar += (l <= lvlRnd) ?
                l <= 5 ? '\x1b[1m\x1b[35m' + chr
                    :
                    l <= 10 ? '\x1b[34m' + chr
                        :
                        l <= 15 ? '\x1b[36m' + chr
                            :
                            l <= 20 ? '\x1b[32m' + chr
                                :
                                l <= 25 ? '\x1b[33m' + chr
                                    :
                                    l <= 30 ? '\x1b[31m' + chr
                                        :
                                        '\x1b[0m'
                :
                ' ';
        console.log(`${desc} : \x1b[1m\x1b[32m${chrBar}\x1b[0m| lvl:\x1b[7m${String(level.toFixed(4).padStart(8, ' '))}\x1b[0m ${chr} --> ${maxLvl} (max)`/* , chr.charCodeAt(0) */);
        return `${desc} : \x1b[1m\x1b[32m${chrBar}\x1b[0m| lvl:\x1b[7m${String(level.toFixed(4).padStart(8, ' '))}\x1b[0m ${chr} --> ${maxLvl} (max)\r`;
    }
    else {
        for (var l = 1, chrBar = '', lvlRnd = dispLevel > dispMaxLvl ? dispMaxLvl : Math.round(dispLevel); l <= dispMaxLvl; l++)
            chrBar += (l <= lvlRnd) ? chr : ' ';
        console.log(`${desc} : ${chrBar}${String(level.toFixed(4).padStart(8, ' '))} ${chr} --> ${maxLvl} (max)`/* , chr.charCodeAt(0) */);
        return `${desc} : ${chrBar}${String(level.toFixed(4).padStart(8, ' '))} ${chr} --> ${maxLvl} (max)\r`;
    }
}

var sleep = ms => new Promise(res => setTimeout(res, ms));
var print = async (msg, ms) => { process.stdout.write(msg); await sleep(ms); }

const danceMeter = async (strArr, ms) => {
    for (let i = 0; i < strArr.length; i++)  await print(strArr[i], ms);
}

const tf_getYearA = (date = new Date, ms = 1, sec = 1000 * ms, min = 60 * sec, hr = 60 * min, d = 24 * hr, roughYr = Math.round(date / (d * 365.25) + 1970), numLeapYrs = Math.floor((roughYr - 1972) / 4) + 1, daysLeft = date / d - (roughYr % 4 === 0 ? numLeapYrs - 1 : numLeapYrs) * 366 - (roughYr - 1970 - numLeapYrs) * 365) => ({ date, roughYr, numLeapYrsSince1970: numLeapYrs, daysLeftAftCountgYrs: daysLeft -= Math.round(daysLeft) === 365 ? 365 : Math.round(daysLeft) === 366 ? 366 : Math.round(daysLeft) > 366 && roughYr % 4 === 0 ? 365 : 0, thereforeYear: roughYr/*  = daysLeft < 365 ? roughYr : roughYr + 1 */, thisYearLeap: roughYr % 4 === 0 ? 'yes' : 'no' });     // Cannot thisYearLeap: this.thereforeYear % 4...

const tf_getYearB = (date = new Date().getTime(), sec = 1000, min = 60 * sec, hr = 60 * min, d = 24 * hr, daysLeft = date / d) => {
    for (var yr = 1970, leap = false; daysLeft > 0; daysLeft -= yr % 4 === 0 ? 366 : 365, yr++ , leap = yr % 4 === 0 ? true : false) {
        // console.log({ daysLeft, yr, leap });
        if (Math.round(daysLeft) < 365) return { date, daysPastInThisYr: daysLeft, yr, leap };
        if (Math.round(daysLeft) === 365 && yr % 4 !== 0) return { date, daysPastInThisYr: daysLeft -= 365, yr: yr += 1, leap: leap = yr % 4 === 0 ? true : false };
        if (Math.round(daysLeft) === 366 && yr % 4 === 0) return { date, daysPastInThisYr: daysLeft -= 366, yr: yr += 1, leap: leap = yr % 4 === 0 ? true : false };
    }
};

const tf_getYear = (date = Date.now(), sec = 1000, min = 60 * sec, hr = 60 * min, d = 24 * hr, daysLeft = date / d) => {    // date = new Date().getIme()
    for (var yr = 1970, leap = false; Math.round(daysLeft) >= 365;
        // console.log({ daysLeft, yr, leap }),
        daysLeft -= yr % 4 === 0 ? 366 : 365,
        yr++ ,
        leap = yr % 4 === 0 ? true : false,
        daysLeft = daysLeft < 0 ? 0 : daysLeft);
    return { date, daysPastInThisYr: daysLeft, yr, leap }
}
// trace('tf_getYear((Date.now())')(tf_getYear(Date.now()));
// trace('tf_getYear()')(tf_getYear());
// trace('tf_getYear(1000)')(tf_getYear(1000));
// trace('tf_getYear(31536000001)')(tf_getYear(31536000001));
// trace('tf_getYear(1958682369150)')(tf_getYear(1958682369150));
// trace('tf_getYear(new Date(Date.UTC(2019, 0, 1)))')(tf_getYear(new Date(Date.UTC(2019, 0, 1))));
// trace('tf_getYear(1546272000000)')(tf_getYear(1546272000000));
// trace('tf_getYear(new Date(Date.UTC(2019, 0, 5)))')(tf_getYear(new Date(Date.UTC(2019, 0, 5))));
// trace('tf_getYear(new Date(Date.UTC(2019, 0, 31))')(tf_getYear(new Date(Date.UTC(2019, 0, 31))));
// trace('tf_getYear(new Date(Date.UTC(2032, 0, 1)))')(tf_getYear(new Date(Date.UTC(2032, 0, 1))));
// trace('tf_getYear(new Date(2019,1,1))')(tf_getYear(new Date(2019, 1, 1)));
// trace('tf_getYear(new Date(2019,1,5))')(tf_getYear(new Date(2019, 1, 5)));
// trace('tf_getYear(new Date(2019,1,28))')(tf_getYear(new Date(2019, 1, 28)));
// trace('tf_getYear(new Date(1971,0,1))')(tf_getYear(new Date(1971, 0, 1)));
// trace('tf_getYear(new Date(2019,0,1))')(tf_getYear(new Date(2019, 0, 1)));
// trace('tf_getYear(new Date(2032,0,1))')(tf_getYear(new Date(2032, 0, 1)));

const f_capitalize = (str, type = 'none') =>
    type === 'words' ?
        str.trim().split(' ').filter(word => word).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
        :
        type === 'sentences' ?
            f_capitalize(
                str.trim().split('.').filter(sentence => sentence).map(sentence => sentence.trim()).map((sentence, idx, arr) => sentence[0].toUpperCase() + sentence.substring(1) + (idx === arr.length - 1 ? arr[arr.length - 1].slice(-1).match(/[?!,]/) === null ? '.' : '' : '')).join('.  ')
            )
            :
            type === 'allcaps' ?
                str.trim().split(' ').filter(word => word).join(' ').toUpperCase() : str.trim().split(' ').filter(word => word).join(' ');
// trace('f_capitalize(\'hi thERE, my namE iS andrew tAN     chOon yew.\')')(f_capitalize('hi thERE, my namE iS andrew tAN     chOon yew.'));
// trace('f_capitalize(\'hi thERE, my       namE iS andrew tAN     chOon yew.\', \'words\')')(f_capitalize('hi thERE, my       namE iS andrew tAN     chOon yew.', 'words'));
// trace('f_capitalize(\'hi thERE, my namE iS andrew tAN chOon yew.   how do you              do?\', \'sentences\')')(f_capitalize('hi thERE, my namE iS andrew tAN chOon yew.   how do you              do?', 'sentences'));
// trace('f_capitalize(\'hi thERE, my namE iS andrew tAN chOon yew.     how do you do?\', \'allcaps\')')(f_capitalize('hi thERE, my namE iS andrew tAN chOon yew.     how do you do?', 'allcaps'));
// trace('f_capitalize(\'hi thERE, my namE iS andrew tAN chOon yew.    how do you do?\', \'words\')')(f_capitalize('hi thERE, my namE iS andrew tAN chOon yew.    how do you do?', 'words'));
// trace('f_capitalize(\'hi thERE, what\'s your name?    I\'m good.You?\', \'sentences\')')(f_capitalize('hi thERE, what\'s your name?    I\'m good.You?', 'sentences'));
// trace('f_capitalize(\' here    are some sentences in an array.  ok, some more.   can you see?\', \'sentences\')')(f_capitalize(' here    are some sentences in an array.  ok, some more.   can you see?', 'sentences'));
// trace('f_capitalize(\' here    are some sentences in an array.  ok, some more.   can you see?\', \'words\')')(f_capitalize(' here    are some sentences in an array.  ok, some more.   can you see?', 'words'));
// trace('f_capitalize(\' here    are some sentences in an array.  ok, some more.   can you see?\', \'allcaps\')')(f_capitalize(' here    are some sentences in an array.  ok, some more.   can you see?', 'allcaps'));
// trace('f_capitalize(\' here    are some sentences in an array.  ok, some more.   can you see?\')')(f_capitalize(' here    are some sentences in an array.  ok, some more.   can you see?'));


const f_strnum2OrdVals = (str, divdr = '') => str.trim().split(divdr).filter(chTkn => chTkn).map(chTkn => +chTkn ? +chTkn : chTkn === '0' ? 0 : chTkn);  // chTkn => Number(chTkn) ? +chTkn : chTkn
// trace('')(f_strnum2OrdVals('This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.'));
// trace('f_strnum2OrdVals_2387959823')(f_strnum2OrdVals('2387959823'));
// trace('f_strnum2OrdVals_2387959823.join(\'\'')(f_strnum2OrdVals('2387959823').join(''));    // joining numbers make a string again - not our purpose.
// trace('f_strnum2OrdVals_2018-4-23')(f_strnum2OrdVals('2018-4-23', '-'));
// trace('f_strnum2OrdVals_2018-4-23')(f_strnum2OrdVals('2018-Apr-23', '-'));
// trace('f_strnum2OrdVals(\'2018@gmail.com\', \'@\')')(f_strnum2OrdVals('2018@gmail.com', '@'));
// trace('f_strnum2OrdVals(\'hi thERE, my namE iS andrew tAN     chOon yew.\')')(f_strnum2OrdVals('hi thERE, my namE iS andrew tAN     chOon yew.', ' '));
// trace('f_strnum2OrdVals(\'hi thERE, my namE iS andrew tAN chOon yew. how do you do?   77   436347.2\', \' \')')(f_strnum2OrdVals('hi thERE, my namE iS andrew tAN chOon yew. how do you do?   77   436347.2', ' '));
// trace('f_strnum2OrdVals(\'ℱїαт ϟεℯкḯηℊ Ṳᾔⅾεґṧ⊥αη∂їηℊ\')')(f_strnum2OrdVals('ℱїαт ϟεℯкḯηℊ Ṳᾔⅾεґṧ⊥αη∂їηℊ').map(ch => ch + ' , ' + ch.codePointAt(0)));

const f_numstrPrepend0 = (num, digit = 4, numArr = f_strnum2OrdVals(String(num))) => {
    for (let i = 0; digit - numArr.length > 0; numArr.unshift(0));
    return numArr.join('');
}
// trace('')(f_numstrPrepend0('186', 7));
// trace('')(f_numstrPrepend0('1586'));
// trace('')(f_numstrPrepend0(1586));
// trace('')(f_numstrPrepend0(158622));
// trace('')(f_numstrPrepend0(586));
// trace('')(f_numstrPrepend0(89));
// trace('')(f_numstrPrepend0(9));


const f_todayOrDate2YMD = (todayOrDate = new Date(), joinr = '-') => todayOrDate.getFullYear() + joinr + (todayOrDate.getMonth() + 1) + joinr + todayOrDate.getDate();
// let date = new Date(2018, 10, 18);
// trace('f_strnum2OrdVals_newDate_2018_10_18')(f_strnum2OrdVals(f_todayOrDate2YMD(date, '.'), '.').join('|'));
// trace('newDate_2018_10_18 - notice timezone makes date diff from .getDate() method')(date); console.log({ date: date.getDate() });
// trace('f_strnum2OrdVals_newDate_')(f_strnum2OrdVals(f_todayOrDate2YMD(new Date(2032, 3, 23), '##'), '##'));
// trace('f_todayOrDate2YMD(new Date(1958682369150)), \'-\')')(f_strnum2OrdVals(f_todayOrDate2YMD(new Date(1958682369150)), '-'));

// trace('f_todayOrDate2YMD()')(f_todayOrDate2YMD());
// trace('f_strnum2OrdVals(f_todayOrDate2YMD(1948622369150, \'#\'), \'#\')')(f_strnum2OrdVals(f_todayOrDate2YMD(new Date(2019, 0, 1), '#'), '#'));

const f_mapResDesign2Space = (desArr, sortType = 'name') =>
    desArr.map((arr, idx, src,
        [x, y] = arr,
        z = `${x.charAt(0).toLowerCase() + x.charAt(1).toLowerCase() + x.charAt(2).toLowerCase()}_pax:${y}  --  serNo.${idx + 1}`
    ) =>
        [x, y, z] = [y, x, z]).sort((a, b, sortBy = sortType === 'name' ? 2 : 0) => a[sortBy] === b[sortBy] ?
            0
            :
            a[sortBy] < b[sortBy] ? -1 : 1);

const A_DaysInMonth = [['mth', `daysInRespectiveMthOfYear${tf_getYear().yr}`], [1, 31], [2, (tf_getYear().leap ? 29 : 28)], [3, 31], [4, 30], [5, 31], [6, 30], [7, 31], [8, 31], [9, 30], [10, 31], [11, 30], [12, 31]];

const f_randActyBlot = (daysFrToday, numOfActy, startOfBizDay = 900, hoursInBizDay = 12, maxActyHours = 6, divdr = '-') => {
    let rtnActyBlot = [];
    let [YYYY, MM, DD] = f_strnum2OrdVals(f_todayOrDate2YMD(), divdr = '-');
    for (let i = 0; i <= daysFrToday; i++) {
        for (let j = 1; j <= numOfActy; j++) {
            let start = startOfBizDay + Math.floor(Math.random() * hoursInBizDay) * 100;
            let duration = Math.ceil(Math.random() * maxActyHours) * 100;
            rtnActyBlot.push(`${YYYY}.${MM}.${DD}`, start + (Math.random() >= 0.5 ? 30 : 0), start + duration + (Math.random() >= 0.5 ? 30 : 0));
            rtnActyBlot.push('*Booked-NotAvailable*');
        }
        if (DD === A_DaysInMonth[MM][1]) {
            DD = 1;
            [MM, YYYY] = MM++ === 12 ? [1, YYYY + 1] : [MM, YYYY];
        }
        else DD++;
        // console.log({ YYYY, MM, DD/* , day  */ });
    }
    return rtnActyBlot;
};

const f_chkOrBookRm = (space, paxNum = 0, date = null, start = null, duratn = null, cux = null, interval = 30) => {
    let available = [], unavailable = [], booked = [];
    if (!cux && !start && !duratn) {
        for (let [idx, room] of space.entries()) {
            if (paxNum <= room[0]) available.push(room);
            // console.log({ room: room[3] });
        }
        return available;
    }
    else if (date && start && duratn) {
        for (let room of space) {
            if (paxNum <= room[0]) {
                // let chkFreeSlot = false;
                for (let i = 0; i < room[3].length; i += 4) {
                    if (date === room[3][i]) {
                        if (start >= room[3][i + 2] + interval || start + duratn * 100 <= room[3][i + 1] - interval) {
                            available.push(room[0], room[1], room[2], room[3][i], room[3][i + 1], room[3][i + 2], room[3][i + 3]);
                        }
                        else if (start >= room[3][i + 1] && start <= room[3][i + 2] || start + duratn * 100 >= room[3][i + 1] && start + duratn * 100 <= room[3][i + 2] ||
                            start <= room[3][i + 1] && start + duratn * 100 >= room[3][i + 2]) {
                            unavailable.push(room[0], room[1], room[2], room[3][i], room[3][i + 1], room[3][i + 2], room[3][i + 3]);
                        }
                    }
                }
            }
        }
        console.log({ available, unavailable });

        if (available && unavailable) {
            for (let i = 1; i + 5 <= unavailable.length; i += 7) {
                for (let j = 1; j + 5 <= available.length; j += 7) {
                    if (unavailable[i] === available[j]) {
                        available.splice(j - 1, 7); j -= 7;
                    }
                }
            };
            // console.log({ availableAftRemovedFromUnavailable: available });
            if (available && cux) {
                for (let room of space) {
                    if (room[1] === available[1]) {
                        room[3].push(date, start, start + duratn * 100, cux);
                        booked.push(room[0], room[1], room[2], date, start, start + duratn * 100, cux);
                        unavailable.push(room[0], room[1], room[2], date, start, start + duratn * 100, cux);
                        // console.log({ unavailable, unavailableLen: unavailable.length });

                        for (let i = 1; i + 5 <= unavailable.length; i += 7) {
                            for (let j = 1, z = 0; j + 5 <= available.length; j += 7) {
                                if (unavailable[i] === available[j]) {
                                    z++;
                                    available.splice(j - 1, 7); j -= 7;
                                    // console.log({ i, z, j, availableLen: available.length });
                                }
                            }
                        };
                        // console.log({ availableAdjusted: available, unavailableAftBooking: unavailable, room: room[1] }, room[3]);
                        return { booked, available };
                    }
                }
            }
        }
    }
    if (available.length === 0 && cux) booked.push(`no room available for ${cux}`);
    return { booked, available };
};

// const daysInMonth = [['mth', 'non-leap-days'], [1, 31], [2, 28], [3, 31], [4, 30], [5, 31], [6, 30], [7, 31], [8, 31], [9, 30], [10, 31], [11, 30], [12, 31]];

// const f_randActyBlot = (daysFrToday, numOfActy, startOfBizDay = 900, hoursInBizDay = 12, maxActyHours = 6, divdr = '-') => {
//     let rtnActyBlot = [];
//     let [YYYY, MM, DD]/*  = day */ = f_strnum2OrdVals(f_todayOrDate2YMD(), divdr = '-');
//     for (let i = 0; i <= daysFrToday; i++) {
//         for (let j = 1; j <= numOfActy; j++) {
//             let start = startOfBizDay + Math.floor(Math.random() * hoursInBizDay) * 100;
//             let duration = Math.ceil(Math.random() * maxActyHours) * 100;
//             rtnActyBlot.push(`${YYYY}.${MM}.${DD}`, start + (Math.random() >= 0.5 ? 30 : 0), start + duration + (Math.random() >= 0.5 ? 30 : 0));
//             rtnActyBlot.push('**NA**');
//         }
//         if (DD === daysInMonth[MM][1]) {
//             DD = 1;
//             [MM, YYYY] = MM++ === 12 ? [1, YYYY + 1] : [MM, YYYY];
//         }
//         else DD++;
//         // console.log({ YYYY, MM, DD/* , day  */ });
//     }

//     return rtnActyBlot;
// }

// const f_chkOrBookRm = (space, paxNum = 0, date = null, start = null, duratn = null, cux = null, interval = 30) => {
//     let available = [], unavailable = [], booked = [];
//     if (!cux && !start && !duratn) {
//         for (let [idx, room] of space.entries()) {
//             if (paxNum <= room[0]) available.push('id=' + (idx + 1), room);
//             // console.log({ room: room[3] });
//         }
//         return available;
//     }
//     else if (date && start && duratn) {
//         for (let room of space) {
//             if (paxNum <= room[0]) {
//                 // let chkFreeSlot = false;
//                 for (let i = 0; i < room[3].length; i += 4) {
//                     if (date === room[3][i]) {
//                         if (start >= room[3][i + 2] + interval || start + duratn * 100 <= room[3][i + 1] - interval) {
//                             available.push(room[0], room[1], room[2], room[3][i], room[3][i + 1], room[3][i + 2], room[3][i + 3]);
//                         }
//                         else if (start >= room[3][i + 1] && start <= room[3][i + 2] || start + duratn * 100 >= room[3][i + 1] && start + duratn * 100 <= room[3][i + 2] ||
//                             start <= room[3][i + 1] && start + duratn * 100 >= room[3][i + 2]) {
//                             unavailable.push(room[0], room[1], room[2], room[3][i], room[3][i + 1], room[3][i + 2], room[3][i + 3]);
//                         }
//                     }
//                 }
//             }
//         }
//         console.log({ available, unavailable });

//         if (available && unavailable) {
//             for (let i = 1; i + 5 <= unavailable.length; i += 7) {
//                 for (let j = 1; j + 5 <= available.length; j += 7) {
//                     if (unavailable[i] === available[j]) {
//                         available.splice(j - 1, 7); j -= 7;
//                     }
//                 }
//             };
//             console.log({ availableAftRemovedFromUnavailable: available });

//             if (available && cux) {
//                 for (let room of space) {
//                     if (room[1] === available[1]) {
//                         room[3].push(date, start, start + duratn * 100, cux);
//                         booked.push(room[0], room[1], room[2], date, start, start + duratn * 100, cux);
//                         unavailable.push(room[0], room[1], room[2], date, start, start + duratn * 100, cux);
//                         // console.log({ unavailable, unavailableLen: unavailable.length });

//                         for (let i = 1; i + 5 <= unavailable.length; i += 7) {
//                             for (let j = 1, z = 0; j + 5 <= available.length; j += 7) {
//                                 if (unavailable[i] === available[j]) {
//                                     z++;
//                                     available.splice(j - 1, 7); j -= 7;
//                                     // console.log({ i, z, j, availableLen: available.length });
//                                 }
//                             }
//                         };
//                         console.log({ availableAdjusted: available, unavailableAftBooking: unavailable, room: room[1] }, room[3]);
//                         return { booked, availableHere: available };
//                     }
//                 }
//             }
//         }
//     }
//     if (/* !available == [] */ available.length === 0 && cux) booked.push(`no room available for ${cux}`);
//     return { booked, available };
// };


// const f_arrSort = (arr, ascDes = -1) => {
//     let numStr = [[], []];
//     arr.map(ele => typeof ele === 'number' ? numStr[0].push(ele) : numStr[1].push(ele));
//     numStr.map(row => row.sort((a, b, x = typeof a === 'number' ? a : a.toLowerCase(), y = typeof b === 'number' ? b : b.toLowerCase()) =>
//         x === y ?       // Use x, y as rule-set to sort actual a,b, hence don't care if toLowerCase() or toUpperCase(), both works as comparison base.
//             0
//             :
//             ascDes === -1 ?
//                 x < y ? -1 : 1                  // The retns of values determine how sorting is done.
//                 :
//                 x > y ? -1 : 1));
//     numStr[1].forEach(str => numStr[0].push(str));  // Put numbers in front by codePointVal: \u0030-\u0039, then x41-5a/x61-7a.
//     return numStr[0];
// };

const f_arrSort = (arr, ascDsc = -1, numFirst = true) => {
    let numStr = [[], []];
    if (ascDsc === -1 || ascDsc === 1) {
        arr.map(ele => typeof ele === 'number' ? numStr[0].push(ele) : numStr[1].push(ele));
        numStr[0].sort((a, b) => ascDsc === -1 ? a - b : b - a);
        numStr[1].sort((a, b, x = a.length === 1 ? a : a.toLowerCase(), y = b.length === 1 ? b : b.toLowerCase()) =>
            x === y ?       // Use x, y as rule-set to sort actual a,b, hence don't care if toLowerCase() or toUpperCase(), both works as comparison base.
                0 :
                ascDsc === -1 ?
                    x < y ? -1 : 1      // The retns of values determine how sorting is done.
                    :
                    x > y ? -1 : 1);
        if (numFirst) {
            numStr[1].forEach(str => numStr[0].push(str));
            return numStr[0];
        };
        if (!numFirst) {
            numStr[0].forEach(num => numStr[1].push(num));
            return numStr[1];
        };
    } else return arr.sort((a, b) => 0.5 - Math.random());
}
// trace('f_arrSort([\'20\', 40, \'bz\', 100, \'10\', 1, 5, 25, 10, \'Zinger\', \'oppa\', \'apple\', \'Banana\', \'balm\'])')(f_arrSort(['20', 40, 'bz', 100, '10', 1, 5, 25, 10, 'Zinger', 'oppa', 'apple', 'Banana', 'balm']));
// trace('f_arrSort([\'20\', 40, \'bz\', 100, \'10\', 1, 5, 25, 10, \'Zinger\', \'oppa\', \'apple\', \'Banana\', \'balm\'], -1, false)')(f_arrSort(['20', 40, 'bz', 100, '10', 1, 5, 25, 10, 'Zinger', 'oppa', 'apple', 'Banana', 'balm'], -1, false));
// trace('f_arrSort([\'20\', 40, \'bz\', 100, \'10\', 1, 5, 25, 10, \'Zinger\', \'oppa\', \'apple\', \'Banana\', \'balm\'], 1)')(f_arrSort(['20', 40, 'bz', 100, '10', 1, 5, 25, 10, 'Zinger', 'oppa', 'apple', 'Banana', 'balm'], 1));
// let points = [40, 100, 1, 5, 25, 10, 'Zinger', 'oppa', 'apple', 'Banana', 'balm'];
// console.log(points.map(ele => typeof ele == 'number' ? ele : ele.toLowerCase()).sort((a, b) => a == b ? 0 : a < b ? -1 : 1));
// points = 'ƒºαßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²';
// trace('f_arrSort(f_strnum2OrdVals(\'ƒºαßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²\',-1))')(f_arrSort(f_strnum2OrdVals(points), -1).map(ch => `${ch} , ${ch.charCodeAt(0)}`));
// trace('f_arrSort(f_strnum2OrdVals(\'ƒºαßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²\',1))')(f_arrSort(f_strnum2OrdVals(points), 1).map(ch => `${ch} , ${ch.charCodeAt(0)}`));
// trace('f_arrSort(f_strnum2OrdVals(\'ƒºαßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²\',0))')(f_arrSort(f_strnum2OrdVals(points), 0).map(ch => `${ch} , ${ch.charCodeAt(0)}`));

// trace('f_arrSort(f_strnum2OrdVals(\'This is a sentence that contains Numbers 0,1,2,3,4,5,6,7,8,9,0.\'), -1, false).map(ch => (ch = ch.toString(), `${ch} , ${ch.charCodeAt(0)}`))')(f_arrSort(f_strnum2OrdVals('This is a sentence that contains Numbers 0,1,2,3,4,5,6,7,8,9,0.'), -1, false).map(ch => (ch = String(ch), `${ch} , ${ch.charCodeAt(0)}`)));
// trace('f_arrSort(f_strnum2OrdVals(\'This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.\'), -1, false).map(ch => (ch = ch.toString(), `${ch} , ${ch.charCodeAt(0)}`))')(f_arrSort(f_strnum2OrdVals('This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.'), -1, false).map(ch => (ch = String(ch), `${ch} , ${ch.charCodeAt(0)}`)));
// trace('f_arrSort(Array.from(\'This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.\'), -1, false).map(ch => (ch = ch.toString(), `${ch} , ${ch.charCodeAt(0)}`))')(f_arrSort(Array.from('This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.'), -1, false).map(ch => (ch = String(ch), `${ch} , ${ch.charCodeAt(0)}`)));
// trace('f_arrSort(f_strnum2OrdVals(\'This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.\'), 0).map(ch => typeof ch === \'number\' ? ch : `${ch} , ${ch.charCodeAt(0)}`)')(f_arrSort(f_strnum2OrdVals('This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.'), 0).map(ch => typeof ch === 'number' ? ch : `${ch} , ${ch.charCodeAt(0)}`));

/** ***************************************************************************************************
 * AJ: reverses a string with/without dividers/markers.
 * @param {string} strOrArr string | array to be reversed.
 * @param {string} divdr divider for str elements to be reversed, default = ''.
 * @param {string} joinr marker used to join reversed-str elements, default follow divdr.
 */
const f_strOrArrReverse = (strOrArr, divdr = '', joinr = divdr) =>
    typeof strOrArr === 'string' ?
        strOrArr.trim().split(divdr).map((chr, idx, str) => chr = str[str.length - 1 - idx]).join(joinr)
        :
        typeof strOrArr === 'object' ?
            strOrArr.map((ele, idx, arr) => ele = arr[arr.length - 1 - idx]) : 'not string nor array.';
// ***************************************************************************************************


const f_rotajF = str => str.replace(/[A-Za-z0-9]/g, ch => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".charAt(
    "MNBVCXZasdfghjklPOIUYTREWQASDFGHJKLmnbvcxzpoiuytrewq6172839405".indexOf(ch)));

const f_rotjaF = str => str.replace(/[A-Za-z0-9]/g, ch => "MNBVCXZasdfghjklPOIUYTREWQASDFGHJKLmnbvcxzpoiuytrewq6172839405".charAt(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".indexOf(ch)));

const f_rotajG = str => str.replace(/[A-Za-z0-9]/g, (ch) => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".charAt(
    "HJKLmnbvcxzpoiuytrewq6172839405MNBVCXZasdfghjklPOIUYTREWQASDFG".indexOf(ch)));

const f_rotjaG = str => str.replace(/[A-Za-z0-9]/g, (ch) => "HJKLmnbvcxzpoiuytrewq6172839405MNBVCXZasdfghjklPOIUYTREWQASDFG".charAt(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".indexOf(ch)));


const f_funLtrs = str => str.replace(/[A-Za-z0-9 ,.\'-]/g, (ch) =>
    (ch !== ' ' && ch !== ',' && ch !== '.' && ch !== '\'' && ch !== '-') ?
        "ÅɅѦᗾ฿ßℭᑖȻᕲÐᗬȄ≡Σ℉ℱƑǤḠᘜĦнḪƗɪЇɈJᒍḰƘḲℒḺŁMᙢмȠŊИỖѺϴƤṔǷɊℚƢƦᖇɌȘϟᔜтƬƮŲʊÜⅤVᕓʬШ₩卐ẌẌƔᗂ¥ℤẐȤααãɓ♭ɓ¢ḉᘹɖ∂ⅾεℯɇſẛƒℊ❡ʛƕɧ♄ḯїỉʝנɉƙḱкℓłlɱღɱηᾔŋøǿσ℘ρƥƍƣɋΓґɾṡṧṧᖶŧƫüµᘢ√ʋṽɯωẘ✕ϰẋɏ⑂ƴẕʐȝ111222333444555666777888999000".charAt(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".indexOf(ch) * 3 + Math.round(Math.random() * 2))
        :
        ch === ' ' ?                    // /* ✝, ⊥, ℨ, Þ, Ą, ⓠ, ḟ, ✞, ℝ. ᖱ, ᖳ, ð, ❜⦁❛❜❝❞ ❟❟❟⦁⦁⦁．ʺ و⎎⎍∙⎖ẞ*/
            ' '.repeat(3)
            :
            ch === ',' ?
                ' ,'
                :
                ch === '.' ?
                    ' ⦁ '
                    :
                    ch === '\'' ?
                        ' ʺ '
                        :
                        ch === '-' ? ' - ' : ch);


const f_sanitizeStr = str => str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, '').trim();

// encryption func. & decrypting func.
// const f_strEncDec = (str, pos = 0, num = 40967) =>
//     pos === 0 ?
//         (500 <= num && num <= 65000) ?
//             [...str].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + num))).join('') : ({ error: `ajEnc:err: num = ${num} is out of range 500-65000` })
//         :
//         (0 <= num && num <= 65000 && (str.charCodeAt(0) - num >= 0)) ?
//             [...str].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) - num))).join('') : ({ error: `ajDec:err: num = ${num} where (str.charCodeAt(0) - num) = ${str.charCodeAt(0) - num} is -ve, or num = ${num} is out of range 0-65000` });
const f_strEncDec = (str, pos = 0, encDecVal = 40967,
    num = pos === 0 ? encDecVal : -encDecVal,
    cpVal = num + str.slice(-1).charCodeAt(0)) =>
    (0 <= cpVal && cpVal <= 65000 && num >= -42243) ?
        str.trim().split('').map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + num))).join('')
        :
        ({
            error: pos === 0 ?
                `ajEnc:err: encDecVal = ${encDecVal} is out of range 0~65000 to encrypt.`
                :
                encDecVal > 42243 ?
                    `ajDec:err: encDecVal = ${encDecVal} is > 42243 to decrypt.` : `ajDec:err: encDecVal = ${encDecVal} is out of range 0~65000 (${cpVal}) to decrypt.`
        });

// console.log(f_strEncDec('Tan Choon Yew')); console.log(f_strEncDec('testString0123456789', 1, 13));
// console.log(f_strEncDec('apptreme.sg', 0, 42243)); console.log(f_strEncDec('ꕤꕳꕳꕷꕵꕨꕰꕨꔱꕶꕪ', 1, 42243)); console.log(f_strEncDec('ꕤꕳꕳꕷꕵꕨꕰꕨꔱꕶꕪ', 1, 42244));
// console.log(f_strEncDec('apptreme.sg', 0, 72243)); console.log(f_strEncDec('apptreme.sg', 1, 42243));
// let idStr = f_strEncDec(JSON.stringify({ legalFullNameID: 'anonymous\' Full Legal Name', emailID: 'alias@someEmail.domain', IDNum: 'SABCDEFGZ', race: 'Chinese', DOB: 'dd-mmm-yyyy', gender: 'Y', bloodGp: 'X\+', COB: 'State, Country', nationality: 'Singapore', postCode: '6-digit', postSt: 'Example St.', postBlk: 'XXXB', postUnit: '#YY-ZZ', dateOfAddr: '25-aug-2000', dateOfIssue: '28-feb-1994' }), 0);
// console.log({ idStr })
// console.log(/* JSON.parse */(f_strEncDec(idStr, 1, 40967)), '\n', f_strEncDec(idStr, 1, 40971));


// trace(`f_funLtrs(
//     \`   
//     \r  Anima Christi, sanctifica me. |✝| Soul of Christ, sanctify me.
//     \r  Corpus Christi, salva me. |✝| Body of Christ, save me.
//     \r  Sanguis Christi, inebria me. |✝| Blood of Christ, inebriate me.
//     \r  Aqua lateris Christi, lava me. |✝| Water from the side of Christ, wash me.

//     \r  Passio Christi, comforta me. |✝| Passion of Christ, strengthen me.
//     \r  O bone Iesu, exaudi me. |✝| Oh good Jesus, hear me.
//     \r  Intra tua vulnera, absconde me. |✝| Within thy wounds, hide me.

//     \r  Ne permittas me separari a te. |✝| Depart from thee, let me never be
//     \r  - suffer me not to be separated from thee.
//     \r  Ab hoste maligno, defende me. |✝| From thy malicious enemies, defend me.
//     \r  In hora mortis meae, voca me. |✝| At the hour of my death, please call me.

//     \r  Et iube me venire ad te, ut cum sanctis tuis laudem te,
//     \r  in saecula saeculorum, Amen. |✝|
//     \r  And bid me come unto thee, that I WILL praise thee, honour thee, 
//     \r  adore thee, glorify thee, and worship thee
//     \r  with the saints and thy angels,
//     \r  all the days of my life, forever and ever, Amen.
//     \`)`)(f_funLtrs(
//     `
//     \r  Anima Christi, sanctifica me. |✝| Soul of Christ, sanctify me.
//     \r  Corpus Christi, salva me. |✝| Body of Christ, save me.
//     \r  Sanguis Christi, inebria me. |✝| Blood of Christ, inebriate me.
//     \r  Aqua lateris Christi, lava me. |✝| Water from the side of Christ, wash me.

//     \r  Passio Christi, comforta me. |✝| Passion of Christ, strengthen me.
//     \r  O bone Iesu, exaudi me. |✝| Oh good Jesus, hear me.
//     \r  Intra tua vulnera, absconde me. |✝| Within thy wounds, hide me.

//     \r  Ne permittas me separari a te. |✝| Depart from thee, let me never be
//     \r  - suffer me not to be separated from thee.
//     \r  Ab hoste maligno, defende me. |✝| From thy malicious enemies, defend me.
//     \r  In hora mortis meae, voca me. |✝| At the hour of my death, please call me.

//     \r  Et iube me venire ad te, ut cum sanctis tuis laudem te,
//     \r  in saecula saeculorum, Amen. |✝|
//     \r  And bid me come unto thee, that I WILL praise thee, honour thee, 
//     \r  adore thee, glorify thee, and worship thee
//     \r  with the saints and thy angels,
//     \r  all the days of my life, forever and ever, Amen.
//     `));

// trace('f_funLtrs(f_capitalize(\'         this is a     sentence.you good? i\'m, o-k.\', \'words\'))')(f_funLtrs(f_capitalize('         this is a     sentence.you good? i\'m, o-k.', 'words')));
// trace('f_funLtrs(f_capitalize(\'         this is a     sentence.you good? i\'m, o-k.\', \'sentences\'))')(f_funLtrs(f_capitalize('         this is a     sentence.you good? i\'m, o-k.  ', 'sentences')));
// trace('f_funLtrs(f_capitalize(\'         this is a     sentence.you good? i\'m, o-k.\', \'allcaps\'))')(f_funLtrs(f_capitalize('         this is a     sentence.you good? i\'m, o-k.  ', 'allcaps')));

const f_encDecName = (str, pos = 0, num = 42243) =>
    pos === 0 ?
        (500 <= num && num <= 65000) ?
            str.indexOf('@') !== -1 ?
                str.trim().replace(/@/, '⌡⌠').split('⌡⌠')
                    .map(
                        (word, idx, src,
                            usrName = src[0],
                            domain = [...src[1]].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + num))).join('')
                        ) =>
                            ({ usrName, domain, encEmail: usrName + ' @ ' + domain }))[0]
                :
                str.indexOf(' ') !== -1 ?
                    f_capitalize(str.trim(), 'words')
                        .replace(/ /, '⌡⌠').split('⌡⌠')
                        .map(
                            (word, idx, src,
                                firstName = src[0],
                                otherName = [...src[1]].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + num))).join('')
                            ) =>
                                ({ firstName, otherName, encFullName: firstName + ' ' + otherName }))[0]
                    :
                    str
            :
            ({ error: `ajEncName:err: num = ${num} is out of range 500-65000` })
        :
        (0 <= num && num <= 65000 && (str.charCodeAt(str.length - 1) - num >= 0)) ?
            str.indexOf('@') !== -1 ?
                str.trim().split(' @ ')
                    .map(
                        (word, idx, src,
                            usrName = src[0],
                            domain = [...src[1]].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) - num))).join('')
                        ) =>
                            ({ usrName, domain, encEmail: usrName + '@' + domain }))[0]
                :
                str.indexOf(' ') !== -1 ?
                    str.trim().split(' ')
                        .map(
                            (word, idx, src,
                                firstName = src[0],
                                otherName = [...src[1]].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) - num))).join('')
                            ) =>
                                ({ firstName, otherName, fullName: firstName + ' ' + otherName }))[0]
                    :
                    str
            :
            ({ error: `ajDecName:err: num = ${num} where (str.charCodeAt(${str.length - 1}) - num) = ${str.charCodeAt(str.length - 1) - num} is -ve, or num = ${num} is out of range 0-65000` });

// trace('f_encDecName(\'   this is just a sentence, not a name.\')')(f_encDecName('   this is just a sentence, not a name.'));
// trace('f_encDecName(\'   andrew tan choo yew\')')(f_encDecName('   andrew tan choo yew'));
// trace('f_encDecName(\'   ajmindsoffire@gmail.com\')')(f_encDecName('   ajmindsoffire@gmail.com'));
// trace('f_encDecName("This ꕌꕶꔣꕍꕸꕶꕷꔣꕄꔣꕖꕨꕱꕷꕨꕱꕦꕨꔯꔣꕑꕲꕷꔣꕄꔣꕑꕤꕰꕨꔱ", -1)')(f_encDecName("This ꕌꕶꔣꕍꕸꕶꕷꔣꕄꔣꕖꕨꕱꕷꕨꕱꕦꕨꔯꔣꕑꕲꕷꔣꕄꔣꕑꕤꕰꕨꔱ", -1));
// trace('f_encDecName("Andrew ꕗꕤꕱꔣꕆꕫꕲꕲꔣꕜꕨꕺ", -1)')(f_encDecName("Andrew ꕗꕤꕱꔣꕆꕫꕲꕲꔣꕜꕨꕺ", -1));
// trace('f_encDecName("ajmindsoffire @ ꕪꕰꕤꕬꕯꔱꕦꕲꕰ", -1)')(f_encDecName("ajmindsoffire @ ꕪꕰꕤꕬꕯꔱꕦꕲꕰ", -1));
// trace('f_encDecName(\'   andrew tan choo yew\')')(f_encDecName('   andrew tan choo yew', 0, 6000));
// trace('f_encDecName("Andrew ោ៑៞ថឳ៘៟៟ថ៉៕៧", -1, 6000)')(f_encDecName("Andrew ោ៑៞ថឳ៘៟៟ថ៉៕៧", -1, 6000));
// trace('f_encDecName(\'   ajmindsoffire@gmail.com\')')(f_encDecName('   ajmindsoffire@gmail.com', 0, 15000));
// trace('f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 15000)')(f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 15000));
// trace('f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17000)')(f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17000));
// trace('f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17)')(f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17));


// const f_encDecUsrName = (str, pos = 0) =>
//     pos === 0 ?

//         str.indexOf('@') !== -1 ?
//             str.trim().replace(/@/, '⌡⌠').split('⌡⌠')
//                 .map(
//                     (word, idx, src,
//                         usrName = src[0],
//                         domain = src[1] ? f_rotajF(src[1]) : ''
//                     ) =>
//                         ({ usrName, domain, encEmail: usrName + '@' + domain }))[0]
//             :
//             str.indexOf(' ') !== -1 ?
//                 f_capitalize(str.trim(), 'words')
//                     .replace(/ /, '⌡⌠').split('⌡⌠')
//                     .map(
//                         (word, idx, src,
//                             firstName = src[0],
//                             otherName = src[1] ? f_rotajF(src[1]) : ''
//                         ) =>
//                             ({ firstName, otherName, encFullName: firstName + (otherName ? ' ' : '') + otherName }))[0]
//                 :
//                 str
//         :
//         str.indexOf('@') !== -1 ?
//             str.trim().split('@')
//                 .map(
//                     (word, idx, src,
//                         usrName = src[0],
//                         domain = src[1] ? f_rotjaF(src[1]) : ''
//                     ) =>
//                         ({ usrName, domain, encEmail: usrName + '@' + domain }))[0]
//             :
//             str.indexOf(' ') !== -1 ?
//                 str.trim().replace(/ /, '⌡⌠').split('⌡⌠')
//                     .map(
//                         (word, idx, src,
//                             firstName = src[0],
//                             otherName = src[1] ? f_rotjaF(src[1]) : ''
//                         ) =>
//                             ({ firstName, otherName, fullName: firstName + (otherName ? ' ' : '') + otherName }))[0]
//                 :
//                 str;

// const f_encDecUsrName = (str, pos = 0) =>

//     str.indexOf('@') !== -1 ?
//         str.trim().replace(/@/, '⌡⌠').split('⌡⌠')       // Do not use split('@', 2) in case email has two '@'.
//             .map((word, idx, src,
//                 usrName = src[0],
//                 domain = src[1] ? (pos === 0 ? f_rotajF(src[1]) : f_rotjaF(src[1])) : ''
//             ) =>
//                 ({ usrName, domain, email: usrName + '@' + domain }))[0]
//         :
//         str.indexOf(' ') !== -1 ?


//             (pos === 0 ? f_capitalize(str.trim(), 'words') : str.trim())
//                 .replace(/ /, '⌡⌠').split('⌡⌠')
//                 .map((word, idx, src,
//                     firstName = src[0],
//                     otherName = src[1] ? pos === 0 ? f_rotajF(src[1]) : f_rotjaF(src[1]) : ''
//                 ) =>
//                     ({
//                         firstName, otherName,
//                         fullName: firstName + (otherName ? ' ' : '') + otherName
//                     }))[0]
//             :
//             str

const f_encDecUsrName = (str, pos = 0, encDecVal = 'rotF',
    num = typeof encDecVal === 'number' ? pos === 0 ? encDecVal : -encDecVal : 0,
    cpVal = num + str.charCodeAt(str.length - 1)) =>
    (0 <= cpVal && cpVal <= 65000 && num >= -42243) ?

        str.indexOf('@') !== -1 ?
            str.trim().replace(/@/, '⌡⌠').split('⌡⌠')       // Do not use split('@', 2) in case email has two '@'.
                .map((word, idx, src,
                    usrName = src[0],
                    domain = src[1] ? encDecVal === 'rotF' ? (pos === 0 ? f_rotajF(src[1]) : f_rotjaF(src[1]))
                        :
                        [...src[1]].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + num))).join('') : ''
                ) =>
                    ({ usrName, domain, email: usrName + '@' + domain }))[0]
            :
            str.indexOf(' ') !== -1 ?
                (pos === 0 ? f_capitalize(str.trim(), 'words') : str.trim())
                    .replace(/ /, '⌡⌠').split('⌡⌠')
                    .map((word, idx, src,
                        firstName = src[0],
                        otherName = src[1] ? encDecVal === 'rotF' ? (pos === 0 ? f_rotajF(src[1]) : f_rotjaF(src[1]))
                            :
                            [...src[1]].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + num))).join('') : ''
                    ) =>
                        ({
                            firstName, otherName,
                            fullName: f_capitalize(firstName + (otherName ? ' ' : '') + otherName, 'words')
                        }))[0]
                :
                str
        :
        ({
            error: pos === 0 ?
                `ajEnc:err: encDecVal = ${encDecVal} is out of range 0~65000 to encrypt.`
                :
                encDecVal > 42243 ?
                    `ajDec:err: encDecVal = ${encDecVal} is > 42243 to decrypt.` : `ajDec:err: encDecVal = ${encDecVal} is out of range 0~65000 (${cpVal}) to decrypt.`
        });

// trace('f_encDecUsrName(\'   andrew\')')(f_encDecUsrName('   andrew'));
// trace('f_encDecUsrName(\'   andrew\', -1)')(f_encDecUsrName('   andrew', -1));
// trace('f_encDecUsrName(\'   andrew   tan Choon yew\')')(f_encDecUsrName('   andrew   tan Choon yew'));
// trace('f_encDecUsrName(\'   andrewiris67@yahoo.com\')')(f_encDecUsrName('   andrewiris67@yahoo.com'));
// trace('f_encDecUsrName(\'   Andrew VHk EMrrk Uxy\', -1)')(f_encDecUsrName('   Andrew VHk EMrrk Uxy', -1));
// trace('{ usrName: f_encDecUsrName(\'   andrewiris67@uHMrr.nrj\', -1).usrName, domain: f_encDecUsrName(\'   andrewiris67@uHMrr.nrj\', -1).domain}')({ usrName: f_encDecUsrName('   andrewiris67@uHMrr.nrj', -1).usrName, domain: f_encDecUsrName('   andrewiris67@uHMrr.nrj', -1).domain });
// trace('f_encDecUsrName(\'   Andrew atLtIvskx Vwtjq\' || \'\', -1).fullName')(f_encDecUsrName('   Andrew atLtIvskx Vwtjq' || '', -1).fullName);

// trace('f_encDecUsrName(\'   this is just a sentence, not a name.\', 0, 40967')(f_encDecUsrName('   this is just a sentence, not a name.', 0, 40967));
// trace('f_encDecUsrName(\'   this is just a sentence, not a name.\', 0, 42243')(f_encDecUsrName('   this is just a sentence, not a name.', 0, 42243));
// trace('f_encDecUsrName(\'   andrew tan choo yew\', 0, 40947)')(f_encDecUsrName('   andrew tan choo yew', 0, 40967));
// trace('f_encDecUsrName(\'   ajmindsoffire@gmail.com\', 0, 42243)')(f_encDecUsrName('   ajmindsoffire@gmail.com', 0, 42243));
// trace('f_encDecUsrName("     ihis ꕌꕶꔣꕍꕸꕶꕷꔣꕄꔣꕖꕨꕱꕷꕨꕱꕦꕨꔯꔣꕑꕲꕷꔣꕄꔣꕑꕤꕰꕨꔱ", -1, 42243)')(f_encDecUsrName("     ihis ꕌꕶꔣꕍꕸꕶꕷꔣꕄꔣꕖꕨꕱꕷꕨꕱꕦꕨꔯꔣꕑꕲꕷꔣꕄꔣꕑꕤꕰꕨꔱ", -1, 42243));
// trace('f_encDecUsrName("     ihis ꕬꕶꔣꕭꕸꕶꕷꔣꕤꔣꕶꕨꕱꕷꕨꕱꕦꕨꔯꔣꕱꕲꕷꔣꕤꔣꕱꕤꕰꕨꔱ", -1, 42243)')(f_encDecUsrName("     ihis ꕬꕶꔣꕭꕸꕶꕷꔣꕤꔣꕶꕨꕱꕷꕨꕱꕦꕨꔯꔣꕱꕲꕷꔣꕤꔣꕱꕤꕰꕨꔱ", -1, 42243));

// trace('f_encDecUsrName("Andrew ꕗꕤꕱꔣꕆꕫꕲꕲꔣꕜꕨꕺ", -1, 42243)')(f_encDecUsrName("Andrew ꕗꕤꕱꔣꕆꕫꕲꕲꔣꕜꕨꕺ", -1, 42243));
// trace('f_encDecUsrName("ajmindsoffire@ꕪꕰꕤꕬꕯꔱꕦꕲꕰ", -1, 42243)')(f_encDecUsrName("ajmindsoffire@ꕪꕰꕤꕬꕯꔱꕦꕲꕰ", -1, 42243));
// trace('f_encDecUsrName(\'   andrew tan choo yew\', 0, 6000)')(f_encDecUsrName('   andrew tan choo yew', 0, 6000));
// trace('f_encDecUsrName("Andrew ោ៑៞ថឳ៘៟៟ថ៉៕៧", -1, 6000)')(f_encDecUsrName("Andrew ោ៑៞ថឳ៘៟៟ថ៉៕៧", -1, 6000));
// trace('f_encDecUsrName(\'   ajmindsoffire@gmail.com\', 0, 15000)')(f_encDecUsrName('   ajmindsoffire@gmail.com', 0, 15000));
// trace('f_encDecUsrName("ajmindsoffire@㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 15000)')(f_encDecUsrName("ajmindsoffire@㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 15000));
// trace('f_encDecUsrName("ajmindsoffire@㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17000)')(f_encDecUsrName("ajmindsoffire@㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17000));
// trace('f_encDecUsrName("ajmindsoffire@㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17)')(f_encDecUsrName("ajmindsoffire@㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17));

// trace('f_encDecUsrName(\'   andrew    j.    tan   choon yew\', 0, 40967)')(f_encDecUsrName('   andrew    j.    tan   choon yew', 0, 40967));
// trace('f_encDecUsrName(\'   Andrew ꁑꀵꀧꁛꁨꁵꀧꁊꁯꁶꁶꁵꀧꁠꁬꁾ\', 6, 40967)')(f_encDecUsrName('   Andrew ꁑꀵꀧꁛꁨꁵꀧꁊꁯꁶꁶꁵꀧꁠꁬꁾ', 6, 40967));

/** ***************************************************************************************************
 * AJ: Reusable factoryFn format that retns obj with name oName.
 * @param {string} name name.
 * @param {string} IC IC.
 * @param {string} bDate birthDate in 'Y-M-D'. 
 * @param {...any} restParams re-reference as args below for internal manipulation and rest can be mapped out with array destructg to protect values.
 * Hoisting does not work for funcExpns, even with 'function' keyw and funcName.  So good to use 'const' on the var-ref, fFty_OName.
 */
const tfo_objFty = (name, IC, bDate, ...restParams) => {

    const nmOfFn = 'to_objFty';    // For errorDisplay trace-id purpose.
    let [...args] = [name, IC, bDate, restParams];  // Changing args will change params by reference.
    args[1] = args[1]
        .trim()
        .split('')
        .map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + 40967)))
        .join('');
    // Var hoisting done per norm here, with keyw 'var' only; may cause outer-scope/globVars to be 'overwritten' as 'undef' in subsequent logic processg.
    // Hence good to declare vars here, or at least in their proper-dependencies order for fns inside here.
    let visitCntr = 0/* , accessCnt = */, argCntr = 0;

    // 'args' just another name for the 'params' var-ref, but map returns a copy so that 'name' can be re-set using setter.
    [name, IC, bDate] = args.map((i, idx) => idx == 2 ? f_strOrArrReverse(i, '-', '|') : i);

    // Object.freeze does not affect getrs/setrs.  'use strict' not thoroughly tested for this freeze behaviour on setrs for .hasOwnProperty properties.
    return Object.freeze({
        name, IC, bDate,
        profile: () => ({ restParams, args }),
        get name() { visitCntr += 1; return name },
        set name(nm) { visitCntr += 1; name = nm },
        accessCnt: () => visitCntr += 1,
        next: () => ({ done: args[argCntr] ? false : true, _arg: args[argCntr++] })
    });
};
// ***************************************************************************************************

// const greekAlphabet = [{ desc: 'small alpha', unicodeHex: '03B1', chr: 'α' }, { desc: 'small beta', unicodeHex: '03B2', chr: 'β' }, { desc: 'small gamma', unicodeHex: '03B3', chr: 'γ' }];

// ***************************************************************************************************

const f_genIssueToken = (encID, hshPW, perms, defMin = 15, hshPIN = 'AJ6707') => {
    let iat = Date.now() / 1000;
    let jwtPayload = {
        sub: encID + '##' + hshPW,
        iat: iat,
        exp: iat + 60 * defMin + 60 * Math.floor(Math.random() * 15),
        acl: perms,
        rnd: sha256(Math.floor(Math.random() * 6000000).toString())
    }
    console.log('new jwtPayload: ', jwtPayload);

    let secret = '';
    secret = encID ? f_rotajG(encID) : secret;
    secret = hshPW ? secret + '==' + sha256(hshPW) : secret + '==' + sha256('null');
    console.log('secret: ', secret);

    try {
        var token = jwt.encode(jwtPayload, secret);
        if (hshPIN != 'AJ6707') {
            let jwtPayload = {
                sub: token,
                pra: hshPIN
            }
            secret = hshPIN != 'AJ6707' ? secret + '==' + sha256(hshPIN) : secret + '==' + sha256('AJ6707');
            console.log('secretsecret: ', secret);
            token = jwt.encode(jwtPayload, secret);

        }
        console.log('newly issued token: ', token);
        return token;
    } catch (error) {
        console.error('return this error with: res.status(401).json(\'tokenization failed, pls login again\')');
    }
}
console.log({ token: f_genIssueToken('testEncEmail', 'testHshPW', 'rw_', 260000) });

// ***************************************************************************************************

const f_genLinkTokenWTimeExpry = (digCnt = 23, nameOfLinkToken = 'vEmailLinkToken', hrs2ExpireFmIssuance = 6, chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', ) => {
    let token = '';
    for (let i = digCnt; i > 0; --i)
        token += chars[Math.round(Math.random() * (chars.length - 1))];
    return { [nameOfLinkToken]: token, expires: Date.now() / 1000 + hrs2ExpireFmIssuance * 3600 };
}
// trace('f_genLinkTokenWTimeExpry()')(f_genLinkTokenWTimeExpry());
// console.log({ linkToken: f_genLinkTokenWTimeExpry() });
// console.log({ linkToken: f_genLinkTokenWTimeExpry(66) });
// console.log({ linkToken: f_genLinkTokenWTimeExpry(66, 'verifyBackLinkToken', 2, '0123456789') });

// ***************************************************************************************************

const f_plugin = (req, res, usrKYC, tmpReg, oldHshPW,
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ajphonehome@gmail.com',
            pass: 'NaiShanajtest612345'
        }
    }),
    mailOptions = {
        from: 'ajphonehome@gmail.com',
        to: null,
        subject: 'Please confirm account',
        html: null
    },
    SERVERNPORT = 'https://ajafsnode.serveo.net', vURL,
    tmpRegstryFile, authSIMTokenExpry = 180 * 24 * 60
) => {
    console.log({ srvcStatus: 'f_plugin' });
    let nexToken, authSIMToken, foundInKYC = false;

    for (let [KYCIndex, kyc] of usrKYC.entries()) {

        if (req.body.encEmailID === kyc.encEmailID) {
            foundInKYC = true; console.log({ srvcStatus: 'f_plugin', foundInKYC, KYCIndex });

            if (req.body.hshPW === kyc.hshPW) {
                try {
                    nexToken = f_genIssueToken(req.body.encEmailID, req.body.hshPW, 'rw_');
                    authSIMToken = f_genIssueToken(req.body.encEmailID, req.body.hshPW, 'rw_', authSIMTokenExpry);
                } catch (error) {
                    res.status(400).json({ status: '..oops something broke, please try again.' });
                }
                res.status(200).json({
                    nexToken, authSIMToken, usrKYC: kyc,
                    status: '..welcome, you are now logged in.'
                });
            } else if (kyc.hshPW && !req.body.rstPW) {
                res.status(200).json({ status: '..please log in with the right password.' });
            } else if (kyc.hshPW && req.body.rstPW) {

                for (let [TempIndex, scc] of tmpReg.entries()) {
                    if (req.body.encEmailID === scc.encEmailID && scc.emailVerified === true && !scc.isDeleted) {
                        console.log({ srvcStatus: 'f_plugin', TempIndex, scc });
                        scc.isDeleted = true;
                        oldHshPW = scc.hshPW;

                        let rstUsr = {};
                        rstUsr.encEmailID = req.body.encEmailID;
                        rstUsr.hshPW = req.body.rstPW ? req.body.rstPW : null;
                        rstUsr.emailVerified = false;
                        rstUsr.linkToken = f_genLinkTokenWTimeExpry();
                        rstUsr.emailConfirmSends = 0;
                        rstUsr.emailConfirmTries = 0;
                        vURL = SERVERNPORT + `/api/verilink/?iD=${rstUsr.encEmailID}&vE=${rstUsr.linkToken.vEmailLinkToken}&eX=${rstUsr.linkToken.expires}&rsT=true`;
                        tmpReg.push(rstUsr);

                    } else if (req.body.encEmailID === scc.encEmailID && scc.emailVerified === false && !scc.isDeleted) {
                        scc.emailConfirmSends++;
                    }
                }
                console.log({ oldHshPW, 'req.body.rstPW': req.body.rstPW, vURL });

                mailOptions.to = f_rotjaF(req.body.encEmailID);
                mailOptions.html = `<h2>Please click on the following link to confirm your <strong>Password Reset</strong>:</h2><p>${vURL}</p>
                <img id="image" src="${SERVERNPORT}/images/Rachela_Asciified.png">`;
                console.log({ srvcStatus: 'f_plugin', mailOptionsTo: mailOptions.to, vURL });

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) { console.log(error); }
                    else {
                        console.log('Email sent: ' + info.response);
                        fs.writeFile(`${tmpRegstryFile}`, JSON.stringify(tmpReg), 'utf8', (err) => {
                            if (err) {
                                console.log("::eror:: writing to temp newUsr register jsonDB.");
                                return res.status(500).json({
                                    status: '..it appears we have newUsr service write fault, please try again later.'
                                });
                            }
                            console.log("::good:: wrote to temp newUsr register jsonDB.");
                        });
                    }
                });
                res.status(200).json({ status: '..please verify your email to effect new password.' });
            }
        }
    }
    if (!foundInKYC) {

        let foundInTmp = false;

        for (let [TempIndex, scc] of tmpReg.entries()) {
            if (req.body.encEmailID === scc.encEmailID) {
                foundInTmp = true;
                scc.hshPW = req.body.hshPW ? req.body.hshPW : null;
                scc.linkToken = f_genLinkTokenWTimeExpry();
                scc.emailConfirmSends++;
                vURL = SERVERNPORT + `/api/verilink/?iD=${scc.encEmailID}&vE=${scc.linkToken.vEmailLinkToken}&eX=${scc.linkToken.expires}`;
            }
        };

        if (!foundInTmp) {
            let newUsr = {};

            newUsr.encEmailID = req.body.encEmailID;
            newUsr.hshPW = req.body.hshPW ? req.body.hshPW : null;
            newUsr.emailVerified = false;
            newUsr.linkToken = f_genLinkTokenWTimeExpry();
            newUsr.emailConfirmSends = 1;
            newUsr.emailConfirmTries = 0;
            vURL = SERVERNPORT + `/api/verilink/?iD=${newUsr.encEmailID}&vE=${newUsr.linkToken.vEmailLinkToken}&eX=${newUsr.linkToken.expires}`;
            tmpReg.push(newUsr);
        }

        mailOptions.to = f_rotjaF(req.body.encEmailID);
        mailOptions.html = `<h2>Please click on the following link to confirm your <strong>Registration</strong>:</h2><p>${vURL}</p>
        <img id="image" src="${SERVERNPORT}/images/Rachela_Asciified.png">`;
        console.log({ srvcStatus: 'f_plugin', foundInTmp, mailOptionsTo: mailOptions.to, vURL });

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) { console.log(error); }
            else {
                console.log('Email sent: ' + info.response);
                fs.writeFile(`${tmpRegstryFile}`, JSON.stringify(tmpReg), 'utf8', (err) => {
                    if (err) {
                        console.log("::eror:: writing to temp newUsr register jsonDB.");
                        return res.status(500).json({
                            status: '..it appears we have newUsr service write fault, please try again later.'
                        });
                    }
                    console.log("::good:: wrote to temp newUsr register jsonDB.");
                    res.status(200).json({
                        status: '..thank you for signing up - please check your email to verify within 6 hours.'
                    });
                });
            }
        });
    }
    let retn = []; retn.push(oldHshPW); retn.push(vURL);
    console.log({ srvcStatus: 'f_plugin', retn });
    return retn;
}

const f_verilink = (req, res, usrKYC, tmpReg, oldHshPW,
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ajphonehome@gmail.com',
            pass: 'NaiShanajtest612345'
        }
    }),
    mailOptions = {
        from: 'ajphonehome@gmail.com',
        to: null,
        subject: 'Please confirm account',
        html: null
    },
    SERVERNPORT = 'https://ajafsnode.serveo.net', vURL,
    tmpRegstryFile, mastrKYCFile,
    indivOrOrgNm,
    usrAstItem = {
        "id": 0,
        "offerType": "",
        "proptyType": "",
        "district": "",
        "numBedRms": "",
        "price": "",
        "landSize": "",
        "BUA": "",
        "stName": "",
        "listPhotoIcon": "",
        "ownerName": "ADD NEW",
        "ownerMobile": "",
        "ownerEmail": "",
        "propyFullAddr": "",
        "postCode": "",
        "is_deleted": false
    }
) => {
    console.log({ srvcStatus: 'f_verilink' });

    let chkNowForExpires = Date.now() / 1000;
    for (let [TempIndex, scc] of tmpReg.entries()) {

        if (req.query.iD == scc.encEmailID) {
            console.log({ srvcStatus: 'f_verilink', encEmailID_matched: true, TempIndex });
            if (req.query.vE == scc.linkToken.vEmailLinkToken && req.query.eX == scc.linkToken.expires && !scc.emailVerified && scc.isDeleted != true) {
                console.log({ chkNowForExpires, linkTokenExpires: scc.linkToken.expires });

                if (chkNowForExpires < scc.linkToken.expires) {
                    console.log({ srvcStatus: 'f_verilink', linkTokenExpired: !(chkNowForExpires < scc.linkToken.expires) });

                    let eVerifiedUsr = {
                        "encEmailID": scc.encEmailID,
                        "hshPW": scc.hshPW,
                        "subDate": null,
                        "clntCreatDate": null,
                        "clntValKYCDate": null,
                        "usrType": null,
                        "encLegalNameID": null,
                        "encLegalIDCred": null,
                        "photo": {
                            "photoIDFrontURL": null,
                            "photoIDBackURL": null,
                            "photoIDsURLsDated": null,
                            "recentFaceVerifiedIDURL": null,
                            "recentFaceVerifiedIDURLDated": null
                        },
                        "gender": null,
                        "encDOB": null,
                        "nationality": null,
                        "address": {
                            "postCode": null,
                            "encPostStreet": null,
                            "postBlock": null,
                            "encPostUnit": null
                        },
                        "encMobileNumID": null,
                        "bank": {
                            "encBankName": null,
                            "bankScanStatemtURL": null,
                            "bankScanStatemtURLDated": null,
                            "encBankScanStatemtBal": null,
                            "encBankAcct": null
                        },
                        "textAnnotNotaryOthers": null,
                        "clntNotes": null,
                        "isDeleted": null,
                        "usrCode": `${f_rotjaF(scc.encEmailID)}@${indivOrOrgNm}`
                    };
                    console.log({ srvcStatus: 'f_verilink', 'req.query.rsT': req.query.rsT });

                    if (req.query.rsT != 'true') {
                        eVerifiedUsr.subDate = new Date();      // scc.hshPW == null ? eVerifiedUsr.subDate = new Date() : eVerifiedUsr.clntCreatDate = new Date();
                        usrKYC.push(eVerifiedUsr);
                    } else if (req.query.rsT == 'true') {
                        for (let [KYCIndex, kyc] of usrKYC.entries()) {
                            let foundInKYC = false;
                            if (req.query.iD == kyc.encEmailID) {
                                foundInKYC = true; console.log({ srvcStatus: 'f_verilink', foundInKYC, KYCIndex });
                                kyc.hshPW = scc.hshPW
                            }
                        }
                    }

                    fs.writeFile(`${mastrKYCFile}`, JSON.stringify(usrKYC), 'utf8', (err) => {
                        if (err) {
                            console.log("::eror:: writing to usrKYC masterIndexHeadTable jsonDB."); // console.log(err); console.log(data);
                            return res.status(500).json({
                                status: '..it appears we have eVerifiedUsr service write fault, please try again later.'
                            });
                        }
                        console.log("::good:: wrote to usrKYC masterIndexHeadTable jsonDB.");

                        scc.emailVerified = true;
                        scc.emailConfirmTries++;
                        fs.writeFile(`${tmpRegstryFile}`, JSON.stringify(tmpReg), 'utf8', (err) => {
                            if (err) {
                                console.log("::eror:: writing to temp newUsr register jsonDB.");
                                aj.trace('admin to fix: .emailVeried = true and .emailConfirmTries++, for:')(scc);
                                return res.status(500).json({
                                    status: '..it appears we have eVerifiedUsr service write fault, please try again later.'
                                });
                            }
                            console.log("::good:: wrote to temp newUsr register jsonDB.");
                        });

                        if (req.query.rsT != 'true') {
                            let usrAstHead = [{
                                usr: {
                                    "encEmailID": scc.encEmailID,
                                    "hshPW": scc.hshPW,
                                    "clnSubDate": eVerifiedUsr.subDate,                         // "clntCreatDate": eVerifiedUsr.clntCreatDate,
                                    "usrCode": `${f_rotjaF(scc.encEmailID)}@${indivOrOrgNm}`,   // Potentially added code for agent-cux-usr with their sub-usrs.
                                    "legalNameID": null,
                                    "mobileNumID": null
                                }
                            }];
                            usrAstHead.push(usrAstItem);
                            eVerifiedUsr.astFK = sha256(f_rotjaG(f_rotajG(scc.encEmailID) + '==' + sha256(scc.hshPW)));
                            fs.writeFile(`./${eVerifiedUsr.astFK}_agentFile.json`, JSON.stringify(usrAstHead), 'utf8', (err) => {
                                if (err) {
                                    console.log("::eror:: writing to new distributed usr-cms jsonDB file.");
                                    return res.status(500).json({
                                        status: '..it appears we have a distributed-cms service write fault, please try again later.'
                                    });
                                }
                                console.log("::good:: wrote to new distributed usr-cms jsonDB file.");
                            });

                        } else if (req.query.rsT == 'true') {       // Copy contents of old file into new with reset of hshPW.
                            console.log({ srvcStatus: 'f_verilink', oldHshPW });
                            eVerifiedUsr.astFK = sha256(f_rotjaG(f_rotajG(scc.encEmailID) + '==' + sha256(oldHshPW)));
                            let rstUsr = JSON.parse(fs.readFileSync(`./${eVerifiedUsr.astFK}_agentFile.json`, 'utf8'));
                            rstUsr[0].usr.hshPW = scc.hshPW;               // change hshPW in the new usr file.
                            eVerifiedUsr.astFK = sha256(f_rotjaG(f_rotajG(scc.encEmailID) + '==' + sha256(scc.hshPW)));
                            fs.writeFile(`./${eVerifiedUsr.astFK}_agentFile.json`, JSON.stringify(rstUsr), 'utf8', (err) => {
                                if (err) {
                                    console.log("::eror:: writing to new, replaced distributed usr-cms jsonDB file.");
                                    return res.status(500).json({
                                        status: '..it appears we have a distributed-cms service write fault, please try again later.'
                                    });
                                }
                                console.log("::good:: wrote to new, replaced distributed usr-cms jsonDB file.");
                            });
                        }

                        res.status(200).json({ status: 'Hi, I\'m Jane:..thank you for signing up / resetting your password - you can now log in.' });
                        // res.status(200).sendFile(__dirname + '/public' + '/images/ascii' + '.html');
                    });
                }
            } else if (req.query.eX < chkNowForExpires && !scc.emailVerified && scc.isDeleted != true && req.query.rsT != 'true') {
                // let chars = JSON.parse(fs.readFileSync('./specGCodes.json', 'utf8'));
                scc.linkToken = f_genLinkTokenWTimeExpry();
                vURL = SERVERNPORT + `/api/verilink/?iD=${scc.encEmailID}&vE=${scc.linkToken.vEmailLinkToken}&eX=${scc.linkToken.expires}`;

                mailOptions.to = f_rotjaF(scc.encEmailID);
                /* mailOptions.text = `Please confirm your account by clicking the following link: ${vURL}`; */
                mailOptions.html = `<h2>Please click on the following link to confirm your <strong>Sign-up</strong>:</h2><p>${vURL}</p>
            <img id="image" src="${SERVERNPORT}/images/Rachela_Asciified.png">`;

                console.log({ srvcStatus: 'f_verilink', mailOptionsTo: mailOptions.to, vURL });// status not sent to client browser, for server info only.
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) { console.log(error); }
                    else {
                        console.log('Email sent: ' + info.response);
                        scc.emailConfirmSends++;
                        scc.emailConfirmTries++;
                        fs.writeFile(`${tmpRegstryFile}`, JSON.stringify(tmpReg), 'utf8', (err) => {
                            if (err) {
                                console.log("::eror:: writing to temp newUsr register jsonDB.");
                                return res.status(500).json({
                                    status: '..it appears we have newUsr service write fault, please try again later.'
                                });
                            }
                            console.log("::good:: wrote to temp newUsr register jsonDB.");
                        });
                    }
                });
                console.log({ rvcStatus: 'f_verilink', status: '..sent fresh email verification link since last try has already expired after 6 hours.' })
                return res.status(202).json({
                    status: '..sent fresh email verification link since last try has already expired after 6 hours.'
                });
            } else if (req.query.eX > chkNowForExpires && !scc.emailVerified && scc.isDeleted != true) {
                scc.emailConfirmTries++;
                fs.writeFile(`${tmpRegstryFile}`, JSON.stringify(tmpReg), 'utf8', (err) => {
                    if (err) {
                        console.log("::eror:: writing to temp newUsr register jsonDB."); // console.log(err); console.log(data);
                        return res.status(500).json({
                            status: '..it appears we have newUsr service write fault, please try again later.'
                        });
                    }
                    console.log("::good:: wrote to temp newUsr register jsonDB.");
                });
                return res.status(202).json({
                    status: '..please verify on the latest email sent out, or click on \'signup\' again to get a latest email verification request.'
                });

            } else if (scc.emailVerified && scc.isDeleted != true) {
                return res.status(201).json({
                    status: '..your email have already been verified.'
                });
            }
        }
    }
    let retn = []; retn.push(oldHshPW); retn.push(vURL);
    console.log({ srvcStatus: 'f_verilink', retn });
    return retn;
}



// ***************************************************************************************************

exports.serve = serve;                          // 
exports.sha256 = sha256;                        // 
exports.jwt = jwt;                              // 
exports.trace = trace;                          // = desctr => objOrFn => console.log(...JSON.str)
exports._range = _range;                        // = (beg = 0, end = !end ? beg : beg = 0, step = 1, ret = []) => arr[0|beg...beg|end]
exports.f_chrBarMeter = f_chrBarMeter;          // = (desc, level, maxLvl = 30, chr = String.fromCodePoint(9613), LED = true) => [...bars]
exports.danceMeter = danceMeter;                // = async (strArr, ms) => process.stdout.write([...barChrs])
exports.tf_getYear = tf_getYear;                // = () => YYYYnum
exports.tf_getYearA = tf_getYearA;                // = () => YYYYnum
exports.f_capitalize = f_capitalize;            // = (str, type = 'none|words|sentences|allcaps') => str
exports.f_strnum2OrdVals = f_strnum2OrdVals;    // = (str, divdr = '') => [ ...OrdVals ]
exports.f_numstrPrepend0 = f_numstrPrepend0;    // 
exports.f_todayOrDate2YMD = f_todayOrDate2YMD;  // = (todayOrDate = new Date(), divdr = '-') => YYYY-MM-DDstr
exports.f_mapResDesign2Space = f_mapResDesign2Space;
exports.f_randActyBlot = f_randActyBlot;        // = (daysFrToday, numOfActy, startOfBizDay = 0900, hoursInBizDay = 12, maxActyHours = 6, divdr = '-') => [...randomActs]
exports.f_chkOrBookRm = f_chkOrBookRm;          // = (space, paxNum = 0, date = null, start = null, duratn = null, cux = null, interval = 30) =>
exports.f_arrSort = f_arrSort;                  // = (arr, ascDes = -1) => [ ...ascDecStrNum ]
exports.f_strOrArrReverse = f_strOrArrReverse;  // = (strOrArr, divdr = '', joinr = divdr) => revStrOrArr
exports.f_rotajF = f_rotajF;                    // = str => encryStr
exports.f_rotjaF = f_rotjaF;                    // = str => decryStr
exports.f_rotajG = f_rotajG;                    // = str => encryStr
exports.f_rotjaG = f_rotjaG;                    // = str => decryStr
exports.f_funLtrs = f_funLtrs;                  // = str => randomFunStr
exports.f_sanitizeStr = f_sanitizeStr;          // = str => saneStr
exports.f_strEncDec = f_strEncDec;              // = (str, pos = 0, num = 40967) => encStr | {error on num ranhe}
exports.f_encDecName = f_encDecName;            // = (str, pos = 0, num = 42243) => {encEmailOrFullNameStr} | {error on num ranhe}
exports.f_encDecUsrName = f_encDecUsrName;      // = (str, pos = 0) => {encEmailOrFullNameStr}
exports.tfo_objFty = tfo_objFty;                // = (name, IC, bDate, ...restParams) => factoried{}wCntrGetrSetr
exports.GreekAlphabet = GreekAlphabet;
exports.GreekAlphabet = GreekAlphabet;
exports.Codes = Codes;
exports.f_genIssueToken = f_genIssueToken;
exports.f_genLinkTokenWTimeExpry = f_genLinkTokenWTimeExpry;
exports.f_plugin = f_plugin;
exports.f_verilink = f_verilink;
exports.version = '0.3.7';

// console.log({ module, exports }{idx:)



const results4D = [
    ['10.03.2019', 1586, 7362, 2477,
        3132, 3386, 3817, 4060, 4321, 7697, 8500, 8537, 9025, 9913,
        644, 1676, 2447, 3174, 5932, 6687, 8282, 8756, 9196, 9665],
    ['09.03.2019', 4902, 9802, 5126,
        2040, 2119, 2262, 3304, 6601, 6907, 7110, 7117, 7930, 8830,
        1301, 1766, 2053, 4039, 4239, 6677, 6728, 6943, 6963, 8867],
    ['06.03.2019', 6489, 6256, 7205,
        651, 1588, 2958, 3367, 7539, 7628, 8305, 8543, 8593, 8981,
        1998, 3125, 3857, 4272, 5365, 7076, 8337, 8637, 8782, 9851],
    ['03.03.2019', 4707, 1867, 404,
        441, 1380, 1475, 2546, 3092, 6343, 7908, 8588, 8849, 9492,
        1326, 1468, 2364, 3670, 3889, 4540, 4582, 6400, 6772, 8253],
    ['02.03.2019', 4743, 2590, 3032,
        1606, 3174, 4238, 4435, 4579, 5462, 6082, 6527, 7572, 8758,
        696, 1089, 2019, 2914, 2914, 2967, 3211, 5992, 6324, 8530],
    ['27.02.2019', 4945, 6031, 5462,
        291, 4249, 5475, 6404, 7421, 8121, 8339, 9385, 9562, 9849,
        81, 1125, 3442, 3820, 6176, 6429, 6923, 7033, 8021, 9563],
    ['24.02.2019', 7202, 5033, 2514,
        649, 1094, 2242, 3080, 4399, 5144, 6354, 6532, 6810, 7244,
        190, 584, 1089, 1223, 2223, 3653, 4120, 6215, 6859, 8343],
    ['23.02.2019', 3440, 5127, 9924,
        261, 5104, 5249, 5844, 5892, 7449, 8648, 8657, 9212, 9733,
        307, 1672, 3407, 3936, 5471, 5983, 6728, 9556, 9884, 9991],
    ['20.02.2019', 5088, 4470, 1844,
        940, 959, 1072, 2538, 3379, 3680, 3921, 5713, 7283, 8193,
        752, 3051, 3516, 5043, 6864, 6902, 7725, 7854, 8344, 9738],
    ['17.02.2019', 3358, 5828, 2256,
        1363, 2974, 4165, 4361, 6320, 6387, 6810, 8042, 8883, 9020,
        1485, 3802, 4257, 5012, 7762, 8106, 8446, 8606, 9229, 9617],
    ['16.02.2019', 2748, 7450, 3247,
        978, 2170, 3941, 4423, 5463, 6857, 7198, 7932, 9357, 9901,
        1784, 2902, 5019, 5595, 5781, 6581, 6674, 8016, 8378, 9770],
    ['13.02.2019', 5829, 7390, 3129,
        3974, 4118, 4271, 6157, 6457, 6563, 6760, 7538, 8233, 8461,
        789, 2709, 2795, 2840, 3830, 4218, 7376, 8140, 9012, 963],
    ['10.02.2019', 6094, 8734, 740,
        1273, 1296, 2929, 3366, 4183, 4662, 4977, 5126, 6059, 8596,
        299, 840, 1662, 2141, 3428, 3479, 4049, 4225, 7324, 8405],
    ['09.02.2019', 5439, 5427, 9997,
        161, 853, 1453, 1936, 4652, 5454, 7038, 7043, 8800, 9726,
        358, 1843, 3197, 3246, 3641, 3661, 4826, 8136, 8225, 8551],
    ['06.02.2019', 2397, 2302, 5772,
        1176, 2753, 3484, 3501, 4960, 5422, 5726, 6357, 9058, 9226,
        3203, 5136, 5155, 6668, 7319, 7662, 9089, 9576, 9765, 9920],
    ['03.02.2019', 1196, 4081, 9175,
        422, 1672, 2127, 2594, 5320, 5406, 6777, 6905, 7715, 8317,
        149, 561, 2103, 2474, 2706, 4382, 4943, 4988, 6496, 7299],
    ['02.02.2019', 9674, 8141, 2652,
        2189, 2707, 4871, 4886, 5102, 5701, 7523, 7900, 8560, 9818,
        471, 2829, 3861, 4931, 6628, 7269, 8713, 8890, 9142, 9730],
    ['30.01.2019', 8144, 136, 6725,
        737, 1122, 1942, 3786, 4060, 4624, 6074, 6701, 6871, 7945,
        1608, 2982, 3634, 4376, 5837, 6596, 7122, 7919, 8114, 9810],
    ['27.01.2019', 949, 1644, 7876,
        1832, 3280, 3342, 3663, 3708, 4159, 4531, 6146, 8630, 9751,
        874, 1037, 1157, 2456, 2899, 3097, 3817, 5205, 7346, 8290],
    ['26.01.2019', 5333, 171, 4087,
        1208, 1320, 2686, 3948, 6600, 7541, 8652, 9164, 9534, 9676,
        78, 148, 170, 1806, 2119, 4115, 5456, 6890, 8194, 9149],
    ['23.01.2019', 7039, 2883, 9268,
        439, 2343, 2806, 4322, 6351, 7079, 7179, 7817, 8972, 9835,
        438, 1647, 1711, 2411, 2918, 3186, 3196, 5380, 8160, 8391],
    ['20.01.2019', 2057, 2916, 2195,
        1439, 1612, 1909, 2469, 4607, 5384, 5515, 6807, 7715, 9979,
        2099, 3099, 3831, 4967, 5216, 7307, 7586, 7952, 8175, 8516],
    ['19.01.2019', 9603, 4936, 9016,
        66, 157, 902, 1547, 2081, 2661, 3245, 3530, 3628, 4736,
        958, 1381, 2321, 2698, 2909, 3300, 4942, 5653, 7448, 8347],
    ['16.01.2019', 1960, 2754, 4368,
        33, 3755, 3922, 4485, 4560, 4975, 6701, 7005, 7869, 9958,
        603, 1032, 2940, 3157, 3377, 6605, 6869, 8147, 8581, 8605],
    ['13.01.2019', 2729, 7339, 7757,
        1453, 2168, 2367, 3424, 3427, 3626, 5251, 5783, 7282, 9033,
        209, 470, 1298, 1909, 2446, 2692, 4872, 6364, 7369, 8952],
    ['12.01.2019', 2872, 3818, 4510,
        726, 1448, 3489, 4401, 5176, 6196, 6590, 7609, 8307, 9234,
        986, 1000, 3452, 3720, 4467, 5817, 6774, 6775, 8410, 9535],
    ['09.01.2019', 249, 5543, 7404,
        3058, 3373, 3503, 3521, 5421, 5452, 5743, 7565, 7686, 8868,
        1, 698, 961, 1038, 2073, 4001, 4292, 6179, 6818, 9992],
    ['06.01.2019', 458, 7211, 8722,
        1980, 2092, 2661, 2848, 3955, 6004, 6015, 6757, 7327, 9276,
        3245, 3711, 3735, 4734, 5166, 5656, 5673, 6599, 7489, 7512],
    ['05.01.2019', 5845, 5986, 4900,
        733, 1117, 1348, 3883, 3917, 4115, 5506, 6227, 7592, 9705,
        1102, 1368, 3519, 3746, 3749, 4516, 4669, 6004, 6192, 6796],
    ['02.01.2019', 7864, 7273, 2773,
        561, 1200, 1450, 1944, 3599, 3697, 4150, 4511, 4868, 5107,
        2228, 2370, 2795, 3490, 4176, 5580, 6475, 7092, 8851, 9078],
    ['30.12.2018', 5891, 8075, 6716,
        855, 1852, 3755, 4811, 5709, 7067, 7091, 7612, 9080, 9565,
        77, 162, 5192, 5213, 5538, 5630, 6440, 6969, 9287, 9329],
    ['29.12.2018', 6848, 3551, 2020,
        82, 1073, 4658, 6782, 7023, 7253, 7394, 7478, 8107, 8424,
        2028, 3101, 3706, 3942, 6006, 6704, 8026, 8271, 8691, 8907],
    ['26.12.2018', 5947, 87, 5259,
        84, 619, 857, 1308, 1495, 1751, 2886, 4640, 6615, 9879,
        247, 2863, 4051, 4935, 5031, 5129, 6514, 8310, 9236, 9744],
    ['23.12.2018', 1362, 5413, 4556,
        1196, 1238, 2284, 3563, 7420, 7561, 8051, 8709, 9267, 9427,
        1145, 1501, 1588, 1729, 2755, 3272, 5024, 6419, 6603, 8693],
    ['22.12.2018', 6677, 838, 2487,
        829, 1451, 1475, 1790, 2144, 2504, 3580, 5467, 7408, 8686,
        231, 737, 1670, 2133, 5629, 7871, 8908, 8916, 9032, 9609],
    ['19.12.2018', 3511, 1891, 8401,
        724, 1603, 1703, 2038, 4425, 5552, 6198, 6392, 8636, 9880,
        195, 303, 1153, 3491, 4678, 6642, 6695, 7135, 8138, 9823],
    ['16.12.2018', 8704, 9979, 369,
        386, 416, 480, 3089, 4476, 6006, 6890, 8618, 9005, 9622,
        944, 1445, 2706, 2868, 3537, 6772, 7029, 8175, 8263, 9229],
    ['15.12.2018', 9255, 4412, 7008,
        1070, 1256, 2101, 2801, 3128, 6649, 8136, 9103, 9829, 9841,
        1310, 2486, 4118, 5037, 6528, 6830, 7433, 7511, 8373, 9765],
    ['12.12.2018', 4910, 2529, 6347,
        1970, 3032, 3752, 4651, 4675, 4885, 7295, 8542, 9570, 9817,
        1183, 1740, 1912, 2011, 2696, 4262, 7109, 9125, 9131, 9340],
    ['09.12.2018', 8163, 5334, 9798,
        114, 152, 1708, 2989, 3065, 3411, 4123, 7717, 8888, 9644,
        77, 158, 3396, 4912, 6428, 6941, 7179, 8781, 9926, 9930],
    ['08.12.2018', 6909, 6206, 3291,
        214, 300, 2029, 2772, 4286, 4936, 4938, 6981, 8510, 9435,
        957, 2535, 3166, 4765, 5780, 6794, 7000, 7442, 7520, 9979],
    ['05.12.2018', 9319, 5166, 4734,
        2344, 2605, 4639, 5658, 7306, 7333, 7664, 8372, 8499, 9649,
        977, 1052, 1319, 1936, 3154, 4195, 4910, 6299, 6619, 8836],
    ['02.12.2018', 8904, 1332, 245,
        1794, 2153, 3869, 4013, 5751, 6201, 6257, 7331, 8879, 9948,
        704, 1055, 3647, 3961, 6197, 7090, 7712, 8051, 9283, 9381],
    ['01.12.2018', 1378, 3364, 8652,
        287, 1868, 4150, 4512, 6914, 7330, 8103, 8142, 8322, 9214,
        1174, 3496, 4500, 5384, 5390, 5512, 5555, 6292, 7196, 7400],
    ['28.11.2018', 5865, 190, 1528,
        512, 1693, 1861, 3274, 4761, 5592, 6022, 9101, 9366, 9971,
        1650, 2523, 2853, 3424, 4257, 4469, 5410, 6759, 6763, 9178],
    ['25.11.2018', 2564, 4390, 4991,
        234, 6041, 6073, 6367, 6823, 7004, 8672, 9092, 9412, 9735,
        293, 1680, 2155, 2376, 3568, 3642, 4362, 5149, 6363, 6626],
    ['24.11.2018', 4542, 3239, 1884,
        200, 1256, 1552, 1601, 2986, 5012, 5711, 5999, 6250, 8917,
        114, 1895, 6132, 6833, 7020, 7511, 8052, 8634, 9642, 9946],
    ['21.11.2018', 6817, 8725, 2569,
        554, 598, 2639, 2910, 3355, 4089, 5767, 8104, 8967, 9231,
        590, 2333, 2653, 4304, 5716, 5786, 7248, 8930, 9628, 9890],
    ['18.11.2018', 1721, 4991, 5975,
        1089, 1971, 2003, 2517, 2870, 2885, 3414, 6241, 8000, 8457,
        1229, 1365, 3608, 4941, 5450, 5674, 5979, 7187, 8442, 9176],
    ['17.11.2018', 9870, 4503, 4103,
        123, 629, 1619, 4252, 4459, 5821, 9102, 9111, 9884, 9974,
        644, 2527, 2635, 2721, 3077, 4897, 6268, 6951, 8635, 9749],
    ['14.11.2018', 1899, 3298, 67,
        527, 1217, 1467, 1744, 3357, 4542, 4828, 5637, 7572, 7594,
        715, 3167, 3236, 3592, 3613, 4794, 5535, 8255, 9260, 9269],
    ['11.11.2018', 3009, 7167, 9188,
        734, 1671, 2421, 2910, 4297, 6088, 6298, 6840, 8757, 9693,
        254, 3245, 5206, 5588, 5743, 7034, 7133, 7918, 9579, 9924],
    ['10.11.2018', 2296, 63, 5295,
        1883, 1999, 2180, 2202, 4053, 5092, 5958, 6869, 8993, 9949,
        95, 1057, 2149, 3224, 3539, 5704, 6361, 7448, 7955, 9180],
    ['07.11.2018', 4891, 7269, 9237,
        1372, 1989, 2291, 5698, 6399, 7468, 7679, 7803, 8716, 9040,
        1761, 3526, 3593, 3772, 6067, 6166, 6426, 6758, 7459, 7708],
    ['04.11.2018', 6051, 9823, 6174,
        1582, 1724, 2194, 2582, 3252, 3809, 4382, 5947, 7146, 7966,
        238, 331, 995, 3018, 3908, 5691, 5720, 6554, 8065, 9522],
    ['04.11.2018', 3025, 589, 7038,
        2821, 3070, 3523, 4989, 6682, 7513, 8311, 8336, 9166, 9807,
        518, 1408, 3439, 5090, 5711, 5807, 6432, 6569, 8145, 9196],
    ['31.10.2018', 728, 3815, 523,
        181, 815, 1906, 2544, 3476, 4362, 5533, 6107, 8121, 9375,
        1118, 4021, 4106, 5221, 5949, 6071, 6452, 6475, 7057, 8351],
    ['28.10.2018', 3853, 8498, 6871,
        2567, 2980, 3967, 5323, 6377, 6932, 8282, 8534, 9912, 9919,
        476, 830, 2056, 2058, 4152, 4187, 5392, 6584, 8485, 9957],
    ['27.10.2018', 7222, 3543, 9514,
        184, 513, 3806, 4144, 4973, 5091, 7367, 7435, 7525, 8415,
        401, 1272, 2238, 3451, 3964, 4317, 4442, 4799, 9258, 9419],
    ['24.10.2018', 2552, 1448, 3488,
        448, 2615, 2948, 4334, 4908, 4988, 6067, 6300, 7302, 7326,
        623, 1291, 2420, 2769, 4330, 4425, 7446, 8103, 8579, 9660],
    ['21.10.2018', 4949, 56, 794,
        1365, 5226, 5305, 6401, 7016, 7271, 7359, 7614, 9106, 9270,
        107, 647, 692, 4974, 5234, 7390, 7870, 9136, 9305, 9381],
    ['20.10.2018', 491, 3883, 7361,
        115, 2362, 3400, 4202, 4496, 4988, 5269, 5419, 8912, 9895,
        207, 1202, 2726, 3495, 3739, 5858, 6962, 7824, 8432, 9993],
    ['17.10.2018', 7600, 7479, 9897,
        4, 102, 959, 1084, 1786, 1825, 4392, 4551, 5052, 5875,
        51, 1736, 2385, 2662, 2743, 3612, 5831, 6309, 7518, 8178],
    ['14.10.2018', 5536, 4198, 5703,
        777, 1029, 2447, 2615, 2841, 6437, 6803, 7294, 7947, 9965,
        204, 1492, 1892, 2483, 2863, 3375, 4771, 4821, 6857, 8301],
    ['13.10.2018', 1433, 1722, 9909,
        342, 379, 1090, 1797, 4802, 5126, 5339, 5355, 5599, 9727,
        1323, 2549, 3551, 5077, 5350, 5491, 5888, 7862, 8438, 9568],
    ['10.10.2018', 8092, 6727, 7683,
        1305, 2098, 3559, 5351, 5836, 7913, 8046, 8359, 9239, 9313,
        175, 1437, 2167, 2677, 2792, 2857, 6359, 6596, 7248, 8301],
    ['07.10.2018', 6616, 5569, 5330,
        3006, 3291, 3741, 4601, 5125, 5488, 5552, 5713, 7469, 7636,
        336, 1647, 2002, 2751, 6322, 7337, 7765, 8969, 9250, 9881],
    ['06.10.2018', 1996, 8449, 7430,
        37, 1403, 2805, 3488, 4792, 6576, 6968, 8125, 8322, 9242,
        280, 1632, 1732, 2065, 2862, 3433, 3762, 4242, 4936, 9945],
    ['03.10.2018', 2824, 3448, 7174,
        10, 111, 583, 2899, 4144, 5113, 6412, 6524, 9112, 9395,
        1516, 2804, 2878, 4401, 4811, 4856, 4974, 6918, 7525, 8083]

];


// const f_numstrPrepend0 = (num, digit = 4, numArr = f_strnum2OrdVals(String(num))) => {
//     for (let i = 0; digit - numArr.length > 0; numArr.unshift(0));
//     return numArr.join('');
// }
// const f_numstrPrepend0 = (num, digit = 4, numStr = f_strnum2OrdVals(String(num))) => {
//     for (let i = 0; digit - numStr.length > 0; numStr.unshift(0));
//     return numStr.join('');
// }
// trace('')(f_numstrPrepend0('186', 7));
// const f_numstrPrepend0 = (num, digit = 4, numStr = f_strnum2OrdVals(String(num))) => {
//     for (let i = 0; digit - numStr.length > 0; numStr.unshift(0));
//     return numStr.join('');
// }
// const f_numstrPrepend0 = (num, digit = 4, numStr = f_strnum2OrdVals(String(num))) => {
//     for (let i = 0; digit - numStr.length > 0; numStr.unshift(0));
//     return numStr.join('');
// }
// const f_numstrPrepend0 = (num, digit = 4, numStr = f_strnum2OrdVals(String(num))) => {
//     for (let i = 0; digit - numStr.length > 0; numStr.unshift(0));
//     return numStr.join('');
// }
// // trace('')(f_numstrPrepend0('1586'));// trace('')(f_numstrPrepend0(1586));// trace('')(f_numstrPrepend0(158622));// trace('')(f_numstrPrepend0(586));// trace('')(f_numstrPrepend0(89));
// // trace('')(f_numstrPrepend0(9));

// remove 'use strict' here.

const entangle4D = results4D => {
    let entangledArr = [], drawn, abTot = [0, false, 0, false, 0, false], freq = globFreq = [], nullCnt = lessThan100Cnt = 0, twoDigitSeqArr = [], threeDigitSeqArr = [], twoDigitSeqArrTop3 = [], threeDigitSeqArrTop3 = [];
    for (let dig of _range()) globFreq.push([dig, ...[0, 0, 0, 0]]);
    for (let dig of _range(100)) twoDigitSeqArr.push([dig, 0]);
    for (let dig of _range(1000)) threeDigitSeqArr.push([dig, 0]);
    for (let dig of _range(100)) twoDigitSeqArrTop3.push([dig, 0]);
    for (let dig of _range(1000)) threeDigitSeqArrTop3.push([dig, 0]);
    for (let draw of results4D) {
        drawn = [], freq = [];
        for (let dig of _range()) freq.push([dig, ...abTot]);
        for (let [prizeType, nums] of draw.entries()) {
            let prependedNumStr = f_numstrPrepend0(nums, 4), prependedNumStrArr = Array.from(prependedNumStr);

            if (typeof nums === 'number') {
                twoDigitSeqArr[Number(prependedNumStr[0] + prependedNumStr[1])][1] += 1;
                twoDigitSeqArr[Number(prependedNumStr[1] + prependedNumStr[2])][1] += 1;
                twoDigitSeqArr[Number(prependedNumStr[2] + prependedNumStr[3])][1] += 1;
            }
            if (typeof nums === 'number') {
                threeDigitSeqArr[Number(prependedNumStr[0] + prependedNumStr[1] + prependedNumStr[2])][1] += 1;
                threeDigitSeqArr[Number(prependedNumStr[1] + prependedNumStr[2] + prependedNumStr[3])][1] += 1;
            }

            if (nums) {
                drawn.push(typeof nums === 'number' ? prependedNumStr : nums); if (nums < 100) lessThan100Cnt++;
            } else { nullCnt++ , console.log({ nullCnt }, `in draw: ${draw[0]}, entry idx: ${prizeType}.`) };
            if (1 <= prizeType && prizeType <= 3) {
                for (let dig of freq) {
                    for (let i = 0; i < prependedNumStrArr.length; i++)
                        [dig[1], dig[2]] = +prependedNumStrArr[i] === dig[0] ? [dig[1] + 1, dig[1] + 1 >= 12 / freq.length ? true : false] : [dig[1], dig[2]];
                };
                if (typeof nums === 'number') {
                    twoDigitSeqArrTop3[Number(prependedNumStr[0] + prependedNumStr[1])][1] += 1;
                    twoDigitSeqArrTop3[Number(prependedNumStr[1] + prependedNumStr[2])][1] += 1;
                    twoDigitSeqArrTop3[Number(prependedNumStr[2] + prependedNumStr[3])][1] += 1;
                }
                if (typeof nums === 'number') {
                    threeDigitSeqArrTop3[Number(prependedNumStr[0] + prependedNumStr[1] + prependedNumStr[2])][1] += 1;
                    threeDigitSeqArrTop3[Number(prependedNumStr[1] + prependedNumStr[2] + prependedNumStr[3])][1] += 1;
                }
            }
            if (4 <= prizeType && prizeType <= 23 + nullCnt) {
                for (let dig of freq) {
                    for (let i = 0; i < prependedNumStrArr.length; i++)
                        [dig[3], dig[4]] = +prependedNumStrArr[i] === dig[0] ? [dig[3] + 1, dig[3] + 1 >= 80 / freq.length ? true : false] : [dig[3], dig[4]];
                }
            }
            freq.sumTop3 = freq.sumRestPrizes = 0;
            for (let dig of freq) [dig[5], dig[6], freq.sumTop3, freq.sumRestPrizes] = [dig[1] + dig[3], dig[2] === true && dig[4] === true ? true : false, freq.sumTop3 + dig[1], freq.sumRestPrizes + dig[3]];
        }
        if (freq.sumTop3 !== 12) console.log({ sumTop3Error: `in draw: ${draw[0]}, ${freq.sumTop3}.` });
        if (freq.sumRestPrizes !== 80) console.log({ sumRestPrizesError: `in draw: ${draw[0]}, ${freq.sumRestPrizes}.` });

        let digitsOutsandingInTop3AndRestPrizes = freq.filter(dig => dig[6]).sort((a, b) => a[5] === b[5] ? (a[1] > b[1] ? -1 : 1) : a[5] > b[5] ? -1 : 1);
        let digitsOutsandingInTop3 = freq.filter(dig => dig[2]).sort((a, b) => a[1] === b[1] ? (a[5] > b[5] ? -1 : 1) : a[1] > b[1] ? -1 : 1);
        let fourHighestFreqDigits = freq.sort((a, b) => a[5] === b[5] ? (a[1] > b[1] ? -1 : 1) : a[5] > b[5] ? -1 : 1).filter((dig, idx) => idx < 4);
        let bestDigitsInThisDraw = [].concat(digitsOutsandingInTop3AndRestPrizes.map(dig => dig[0]), '|', digitsOutsandingInTop3.map(dig => dig[0]), '|', fourHighestFreqDigits.map(dig => dig[0])).join('');
        console.log({
            draw: draw[0], /* sumTop3: freq.sumTop3, sumRestPrizes: freq.sumRestPrizes, */
            // digitsOutsandingInTop3AndRestPrizes, digitsOutsandingInTop3, fourHighestFreqDigits,
            bestDigitsInThisDraw
        }); /* console.log('\n'); */
        freq.sort((a, b) => a[0] < b[0] ? -1 : 1); /* console.log({ digitsOutsandingInTop3AndRestPrizes, freq }); */
        entangledArr.push(drawn, ...freq);
        for (dig of globFreq) [dig[1], dig[2], dig[3], dig[4]] =
            [
                digitsOutsandingInTop3AndRestPrizes.map(dig => dig[0]).includes(dig[0]) ? dig[1] + 1 : dig[1],
                digitsOutsandingInTop3.map(dig => dig[0]).includes(dig[0]) ? dig[2] + 1 : dig[2],
                fourHighestFreqDigits.map(dig => dig[0]).includes(dig[0]) ? dig[3] + 1 : dig[3],
                digitsOutsandingInTop3AndRestPrizes.map(dig => dig[0]).includes(dig[0]) ||
                    digitsOutsandingInTop3.map(dig => dig[0]).includes(dig[0]) ||
                    fourHighestFreqDigits.map(dig => dig[0]).includes(dig[0]) ? dig[4] + 1 : dig[4]/* ,
                (dig[4] / results4D.length * 100).toFixed(2) + ' %' */
                // freq[idx][2] === true || freq[idx][4] === true || freq[idx][6] === true ? dig[4] + 1 : dig[4], (dig[4] / results4D.length).toFixed(2)
            ];
    }
    for (let dig of globFreq) [dig[5], dig[4]] = [(dig[4] / results4D.length * 100).toFixed(2) + ' %', `${dig[4]}/${results4D.length}`];
    console.log({
        totNumOfDraws: results4D.length, globFreq: globFreq.map(dig => `${dig[0]} -- ${dig[1]}|${dig[2]}|${dig[3]} : ${dig[4]} (${dig[5]})`), total4Dnumbers: results4D.length * 23, lessThan100Cnt, highestFreq2DgitSeqIn4DNumbers: twoDigitSeqArr.sort((a, b) => a[1] > b[1] ? -1 : 1).filter((seq, idx) => idx < 30), highestFreq3DgitSeqIn4DNumbers: threeDigitSeqArr.sort((a, b) => a[1] > b[1] ? -1 : 1).filter((seq, idx) => idx < 50),
        highestFreq2DgitSeqIn4DNumbersTop3: twoDigitSeqArrTop3.sort((a, b) => a[1] > b[1] ? -1 : 1).filter((seq, idx) => idx < 30), highestFreq3DgitSeqIn4DNumbersTop3: threeDigitSeqArrTop3.sort((a, b) => a[1] > b[1] ? -1 : 1).filter((seq, idx) => idx < 30)
    });
    let numOf2DSeq = 0;
    for (let seq2D of twoDigitSeqArr) numOf2DSeq += seq2D[1]; console.log({ numOf2DSeq, dividedBy3: numOf2DSeq / 3 });
    return entangledArr;
}
// entangle4D(results4D);
// trace('entangle4D(results4D)')(entangle4D(results4D));

