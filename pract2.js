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
    for (var arr = [], beg = beg === end ? 0 : beg; (end - beg) * step > 0; arr.push(beg), beg += step);
    return arr;
};

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

const tf_getYear = (date = Date.now(), sec = 1000, min = 60 * sec, hr = 60 * min, d = 24 * hr, daysLeft = date / d) => {
    for (var yr = 1970, leap = false; Math.round(daysLeft) >= 365; daysLeft -= yr % 4 === 0 ? 366 : 365, yr++ , leap = yr % 4 === 0 ? true : false, daysLeft = daysLeft < 0 ? 0 : daysLeft);
    return { date, daysPastInThisYr: daysLeft, yr, leap };
};


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
            f_capitalize(str.trim().split('.').filter(sentence => sentence).map(sentence => sentence.trim()).map((sentence, idx, arr) => sentence[0].toUpperCase() + sentence.substring(1) + (idx === arr.length - 1 ? arr[idx].slice(-1).match(/[?!,]/) === null ? '.' : '' : '')).join('.  '))
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

const f_strnum2OrdVals = (strnum, divdr = '') => strnum.trim().split(divdr).filter(token => token).map(chTkn => +chTkn ? +chTkn : chTkn === '0' ? 0 : chTkn);

// trace('')(f_strnum2OrdVals('This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.'));
// trace('f_strnum2OrdVals_2387959823')(f_strnum2OrdVals('2387959823'));
// trace('f_strnum2OrdVals_2387959823.join(\'\'')(f_strnum2OrdVals('2387959823').join(''));    // joining numbers make a string again - not our purpose.
// trace('f_strnum2OrdVals_2018-4-23')(f_strnum2OrdVals('2018-4-23', '-'));
// trace('f_strnum2OrdVals_2018-4-23')(f_strnum2OrdVals('2018-Apr-23', '-'));
// trace('f_strnum2OrdVals_2018-4-23')(f_strnum2OrdVals('2018@gmail.com', '@'));
// trace('f_strnum2OrdVals(\'hi thERE, my namE iS andrew tAN     chOon yew.\')')(f_strnum2OrdVals('hi thERE, my namE iS andrew tAN     chOon yew.', ' '));
// trace('f_strnum2OrdVals(\'hi thERE, my namE iS andrew tAN chOon yew. how do you do?   77   436347.2\', \' \')')(f_strnum2OrdVals('hi thERE, my namE iS andrew tAN chOon yew. how do you do?   77   436347.2', ' '));
// trace('f_strnum2OrdVals(\'ℱїαт ϟεℯкḯηℊ Ṳᾔⅾεґṧ⊥αη∂їηℊ\')')(f_strnum2OrdVals('ℱїαт ϟεℯкḯηℊ Ṳᾔⅾεґṧ⊥αη∂їηℊ').map(ch => ch + ' , ' + ch.codePointAt(0)));

const f_todayOrDate2YMD = (todayOrDate = new Date(), joinr = '-') => todayOrDate.getFullYear() + joinr + (todayOrDate.getMonth() + 1) + joinr + todayOrDate.getDate();

// trace('f_strnum2OrdVals_newDate_2018_10_18')(f_strnum2OrdVals(f_todayOrDate2YMD(date = new Date(2018, 10, 18), '.'), divdr = '.').join('|'));
// trace('newDate_2018_10_18 - notice timezone makes date diff from .getDate() method')(date); console.log({ date: date.getDate() });
// trace('f_strnum2OrdVals_newDate_')(f_strnum2OrdVals(f_todayOrDate2YMD(new Date(2032, 3, 23), '##'), '##'));
// trace('f_todayOrDate2YMD(new Date(1958682369150)), \'-\')')(f_strnum2OrdVals(f_todayOrDate2YMD(new Date(1958682369150)), '-'));

// trace('f_todayOrDate2YMD()')(f_todayOrDate2YMD());
// trace('f_strnum2OrdVals(f_todayOrDate2YMD(1948622369150, \'#\'), \'#\')')(f_strnum2OrdVals(f_todayOrDate2YMD(new Date(2019, 0, 1), '#'), '#'));

const f_arrSort = (arr, ascDsc = -1, numFirst = true) => {
    let numStr = [[], []];
    if (ascDsc === -1 || ascDsc === 1) {
        arr.map(ele => typeof ele === 'number' ? numStr[0].push(ele) : numStr[1].push(ele));
        numStr[0].sort((a, b) => ascDsc === -1 ? a - b : b - a);
        numStr[1].sort((a, b, x = a.length === 1 ? a : a.toLowerCase(), y = b.length === 1 ? b : b.toLowerCase()) =>
            x === y ?
                0
                :
                ascDsc === -1 ?
                    x < y ? -1 : 1
                    :
                    x > y ? -1 : 1);
        if (numFirst) {
            numStr[1].forEach(num => numStr[0].push(num)); return numStr[0];
        };
        if (!numFirst) {
            numStr[0].forEach(str => numStr[1].push(str)); return numStr[1];
        };
    } else return arr.sort((a, b) => 0.5 - Math.random());
};

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

const f_strOrArrReverse = (strOrArr, divdr = '', joinr = divdr) =>
    typeof strOrArr === 'string' ?
        strOrArr.trim().split(divdr).map((chr, idx, str) => chr = str[str.length - 1 - idx]).join(joinr)
        :
        typeof strOrArr === 'object' ?
            strOrArr.map((ele, idx, arr) => ele = arr[arr.length - 1 - idx]) : 'not string nor array.';

// trace('reverse this string: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=`~!@#$%^&*()_+[]\\{}|;:\",.<>?\/\'\n')(f_strOrArrReverse('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=`~!@#$%^&*()_+[]\\{}|;:\",.<>?\/\''));
// trace('today\'s date')(f_todayOrDate2YMD());
// trace('reverse today\'s date, or f_strOrArrReverse(f_todayOrDate2YMD(), \'-\', \'.\')')(f_strOrArrReverse(f_todayOrDate2YMD(), '-', '.'));
// trace('f_strOrArrReverse([\'aj\', 123, true], \'zabo\', \'|\')')(f_strOrArrReverse(['aj', 123, true], 'zabo', '|'));
// trace('f_strOrArrReverse(235236.326326)')(f_strOrArrReverse(235236.326326));
// trace('f_strOrArrReverse(\'235236.326326\')')(f_strOrArrReverse('235236.326326'));
// trace('f_strOrArrReverse(f_arrSort([\'20\', 40, \'bz\', 100, \'10\', 1, 5, 25, 10, \'Zinger\', \'oppa\', \'apple\', \'Banana\', \'balm\']))')(f_strOrArrReverse(f_arrSort(['20', 40, 'bz', 100, '10', 1, 5, 25, 10, 'Zinger', 'oppa', 'apple', 'Banana', 'balm'])));
// trace('f_arrSort(f_strnum2OrdVals(\'This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.\'), 1).map(ch => typeof ch === \'number\' ? ch : `${ch} , ${ch.charCodeAt(0)}`)')(f_arrSort(f_strnum2OrdVals('This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.'), 1).map(ch => typeof ch === 'number' ? ch : `${ch} , ${ch.charCodeAt(0)}`));
// trace('f_strOrArrReverse(f_arrSort(f_strnum2OrdVals(\'This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.\'), 1).map(ch => typeof ch === \'number\' ? ch : `${ch} , ${ch.charCodeAt(0)}`))')(f_strOrArrReverse(f_arrSort(f_strnum2OrdVals('This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.'), 1).map(ch => typeof ch === 'number' ? ch : `${ch} , ${ch.charCodeAt(0)}`)));

const f_rotajF = str => str.replace(/[0-9A-Za-z]/g, ch => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'.charAt('MNBVCXZasdfghjklPOIUYTREWQASDFGHJKLmnbvcxzpoiuytrewq6172839405'.indexOf(ch)));
const f_rotjaF = str => str.replace(/[0-9A-Za-z]/g, ch => 'MNBVCXZasdfghjklPOIUYTREWQASDFGHJKLmnbvcxzpoiuytrewq6172839405'.charAt('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'.indexOf(ch)));

// trace('f_rotajF\'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890\')')(f_rotajF('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'));
// trace('f_rotajF(\'mindsoffire@gmail.com\')')(f_rotajF('mindsoffire@gmail.com'));
// trace('f_rotjaF(f_rotajF(\'mindsoffire@gmail.com\'))')(f_rotjaF(f_rotajF('mindsoffire@gmail.com')));

const f_funLtrs = str => str.replace(/[0-9A-Za-z .,\'-]/g, ch =>
    (ch !== ' ' && ch !== '.' && ch !== ',' && ch !== '\'' && ch !== '-') ?
        'ÅɅѦᗾ฿ßℭᑖȻᕲÐᗬȄ≡Σ℉ℱƑǤḠᘜĦнḪƗɪЇɈJᒍḰƘḲℒḺŁMᙢмȠŊИỖѺϴƤṔǷɊℚƢƦᖇɌȘϟᔜтƬƮŲʊÜⅤVᕓʬШ₩卐ẌẌƔᗂ¥ℤẐȤααãɓ♭ɓ¢ḉᘹɖ∂ⅾεℯɇſẛƒℊ❡ʛƕɧ♄ḯїỉʝנɉƙḱкℓłlɱღɱηᾔŋøǿσ℘ρƥƍƣɋΓґɾṡṧṧᖶŧƫüµᘢ√ʋṽɯωẘ✕ϰẋɏ⑂ƴẕʐȝ111222333444555666777888999000'.charAt('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'.indexOf(ch) * 3 + Math.round(Math.random() * 2))
        :
        ch === ' ' ?
            ' '.repeat(3)
            :
            ch === '.' ?
                ' ⦁ '
                :
                ch === ',' ?
                    ','
                    :
                    ch === '\'' ?
                        ' ʺ '
                        :
                        ch === '-' ? '-' : ch);

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

const f_strEncDec = (str, pos = 0, encDecVal = 40967,
    num = pos === 0 ? encDecVal : -encDecVal,
    cpVal = num + str.slice(-1).charCodeAt(0)) =>
    (0 <= cpVal && cpVal <= 65000 & num >= -42243) ?
        str.trim().split('').map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + num))).join('')
        :
        ({
            error: pos === 0 ? `ajEnc:err: encDecVal = ${encDecVal} is out of range 0~65000 to encrypt.`
                :
                encDecVal > 42243 ? `ajDec:err: encDecVal = ${encDecVal} is > 42243 to decrypt.` : `ajDec:err: encDecVal = ${encDecVal} is out of range 0~65000 (${cpVal}) to decrypt.`
        });

// console.log(f_strEncDec('Tan Choon Yew')); console.log(f_strEncDec('testString0123456789', 1, 13));
// console.log(f_strEncDec('apptreme.sg', 0, 42243)); console.log(f_strEncDec('ꕤꕳꕳꕷꕵꕨꕰꕨꔱꕶꕪ', 1, 42243)); console.log(f_strEncDec('ꕤꕳꕳꕷꕵꕨꕰꕨꔱꕶꕪ', 1, 42244));
// console.log(f_strEncDec('apptreme.sg', 0, 72243)); console.log(f_strEncDec('apptreme.sg', 1, 42243));
// let idStr = f_strEncDec(JSON.stringify({ legalFullNameID: 'anonymous\' Full Legal Name', emailID: 'alias@someEmail.domain', IDNum: 'SABCDEFGZ', race: 'Chinese', DOB: 'dd-mmm-yyyy', gender: 'Y', bloodGp: 'X\+', COB: 'State, Country', nationality: 'Singapore', postCode: '6-digit', postSt: 'Example St.', postBlk: 'XXXB', postUnit: '#YY-ZZ', dateOfAddr: '25-aug-2000', dateOfIssue: '28-feb-1994' }), 0);
// console.log({ idStr })
// console.log(/* JSON.parse */(f_strEncDec(idStr, 1, 40967)), '\n', f_strEncDec(idStr, 1, 40971));

const f_encDecUsrName = (str, pos = 0, encDecVal = 'rotF',
    num = typeof encDecVal === 'number' ? pos === 0 ? encDecVal : -encDecVal : 0,
    cpVal = num + str.slice(-1).charCodeAt(0)) =>
    (0 <= cpVal && cpVal <= 65000 && num >= -42243) ?
        str.indexOf('@') !== -1 ?
            str.trim().replace('@', '⌡⌠').split('⌡⌠')
                .map((word, idx, src,
                    usrName = src[0],
                    domain = src[1] ?
                        encDecVal === 'rotF' ?
                            pos === 0 ? f_rotajF(src[1]) : f_rotjaF(src[1])
                            :
                            [...src[1]].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + num))).join('')
                        : ''
                ) => ({ usrName, domain, email: usrName + '@' + domain }))[0]
            :
            str.indexOf(' ') !== -1 ?
                (pos === 0 ? f_capitalize(str.trim(), 'words') : str.trim())
                    .replace(' ', '⌡⌠').split('⌡⌠')
                    .map((word, idx, src,
                        firstName = src[0],
                        otherName = src[1] ?
                            encDecVal === 'rotF' ?
                                pos === 0 ? f_rotajF(src[1]) : f_rotjaF(src[1])
                                :
                                [...src[1]].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + num))).join('')
                            : ''
                    ) => ({ firstName, otherName, fullName: f_capitalize(firstName + (otherName ? ' ' : '') + otherName, 'words') }))[0]
                : str
        :
        ({
            error: pos === 0 ? `ajEnc:err: encDecVal = ${encDecVal} is out of range 0~65000 to encrypt.`
                :
                encDecVal > 42243 ?
                    `ajDec:err: encDecVal = ${encDecVal} is > 42243 to decrypt.` : `ajDec:err: encDecVal = ${encDecVal} is out of range 0~65000 to decrypt.`
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

trace('f_encDecUsrName("Andrew ꕗꕤꕱꔣꕆꕫꕲꕲꔣꕜꕨꕺ", -1, 42243)')(f_encDecUsrName("Andrew ꕗꕤꕱꔣꕆꕫꕲꕲꔣꕜꕨꕺ", -1, 42243));
trace('f_encDecUsrName("ajmindsoffire@ꕪꕰꕤꕬꕯꔱꕦꕲꕰ", -1, 42243)')(f_encDecUsrName("ajmindsoffire@ꕪꕰꕤꕬꕯꔱꕦꕲꕰ", -1, 42243));
trace('f_encDecUsrName(\'   andrew tan choo yew\', 0, 6000)')(f_encDecUsrName('   andrew tan choo yew', 0, 6000));
trace('f_encDecUsrName("Andrew ោ៑៞ថឳ៘៟៟ថ៉៕៧", -1, 6000)')(f_encDecUsrName("Andrew ោ៑៞ថឳ៘៟៟ថ៉៕៧", -1, 6000));
trace('f_encDecUsrName(\'   ajmindsoffire@gmail.com\', 0, 15000)')(f_encDecUsrName('   ajmindsoffire@gmail.com', 0, 15000));
trace('f_encDecUsrName("ajmindsoffire@㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 15000)')(f_encDecUsrName("ajmindsoffire@㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 15000));
trace('f_encDecUsrName("ajmindsoffire@㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17000)')(f_encDecUsrName("ajmindsoffire@㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17000));
trace('f_encDecUsrName("ajmindsoffire@㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17)')(f_encDecUsrName("ajmindsoffire@㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17));
