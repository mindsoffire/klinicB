"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import localStorage = require('nativescript-localstorage');
var AuthService = /** @class */ (function () {
    function AuthService() {
        var _this = this;
        this.SERVER = "https://ajafsnode.serveo.net";
        this.status = '';
        this.loggedIn = false;
        this.pwReset = false;
        this.clntKYC = {
            encEmailID: null, hshPW: null,
            subDate: null, clntCreatDate: null, clntValKYCDate: null,
            encLegalNameID: null, encLegalIDCred: null,
            photo: {
                photoIDFrontURL: null, photoIDBackURL: null, photoIDsURLsDated: null, recentFaceVerifiedIDURL: null, recentFaceVerifiedIDURLDated: null
            },
            gender: null, encDOB: null, nationality: null,
            address: {
                postCode: null, encPostStreet: null, postBlock: null, encPostUnit: null
            },
            encMobileNumID: null,
            bank: {
                encBankName: null, bankScanStatemtURL: null, bankScanStatemtURLDated: null, encBankScanStatemtBal: null, encBankAcct: null
            },
            textAnnotNotaryOthers: null, clntNotes: null,
            isDeleted: null
        };
        this.clntKYCDisp = {
            emailID: null, legalNameID: null, legalIDCred: null, DOB: null,
            address: {
                postStreet: null, postUnit: null
            },
            mobileNumID: null,
            bank: {
                bankName: null, bankScanStatemtBal: null, bankAcct: null
            }
        };
        this.auth = function (emailPWRstPWObj) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.SERVER + "/api/plugin", {
                            method: 'post',
                            headers: { "Content-Type": "application/json; charset=utf-8" },
                            body: JSON.stringify(emailPWRstPWObj)
                        })
                            .then(function (result) { return result.json(); }).catch(function (err) { return console.log({ err: err }); })
                            .then(function (result) {
                            var _a;
                            _this.data = result;
                            console.log({ status: _this.status = _this.data.status });
                            // if (this.data.nexToken) localStorage.setItem('nexToken', JSON.stringify(this.data.nexToken));  
                            _this.loggedIn = _this.data.nexToken ? true : false;
                            // localStorage.setItem('loggedIn', JSON.stringify(this.loggedIn));
                            if (_this.data.clntKYC) {
                                _this.clntKYC = _this.data.clntKYC;
                                if (_this.data.clntKYC.encEmailID) {
                                    _a = [_this.f_encDecUsrName(_this.data.clntKYC.encLegalNameID || '', -1).fullName, _this.f_rotjaF(_this.clntKYC.encEmailID)], _this.clntKYCDisp.legalNameID = _a[0], _this.clntKYCDisp.emailID = _a[1];
                                }
                                if (_this.data.clntKYC.encLegalIDCred)
                                    _this.clntKYCDisp.legalIDCred = _this.f_rotjaF(_this.data.clntKYC.encLegalIDCred);
                                if (_this.data.clntKYC.encMobileNumID)
                                    _this.clntKYCDisp.mobileNumID = _this.f_rotjaF(_this.data.clntKYC.encMobileNumID);
                                if (_this.data.clntKYC.address.encPostStreet)
                                    _this.clntKYCDisp.address.postStreet = _this.f_rotjaF(_this.data.clntKYC.address.encPostStreet);
                                if (_this.data.clntKYC.address.encPostUnit)
                                    _this.clntKYCDisp.address.postUnit = _this.f_rotjaF(_this.data.clntKYC.address.encPostUnit);
                                if (_this.data.clntKYC.bank.encBankName)
                                    _this.clntKYCDisp.bank.bankName = _this.f_rotjaF(_this.data.clntKYC.bank.encBankName);
                                if (_this.data.clntKYC.bank.encBankAcct)
                                    _this.clntKYCDisp.bank.bankAcct = _this.f_rotjaF(_this.data.clntKYC.bank.encBankAcct);
                                console.log({ 'clntKYC @ signup or subscribe': _this.clntKYC });
                                // localStorage.setItem('kyc', JSON.stringify(this.clntKYC));
                                // localStorage.setItem('kyc-display', JSON.stringify(this.clntKYCDisp));
                            }
                            if (_this.data.clntAsset) {
                                // localStorage.setItem('assets', JSON.stringify(this.data.clntKYCAssets));
                            }
                            return { clntKYCDisp: _this.clntKYCDisp, nexToken: _this.data.nexToken };
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        // my fns inside ajlearnjs NPM to be importable here later.
        this.f_rotajF = function (str) { return str.replace(/[A-Za-z0-9]/g, function (ch) { return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".charAt("MNBVCXZasdfghjklPOIUYTREWQASDFGHJKLmnbvcxzpoiuytrewq6172839405".indexOf(ch)); }); };
        this.f_rotjaF = function (str) { return str.replace(/[A-Za-z0-9]/g, function (ch) { return "MNBVCXZasdfghjklPOIUYTREWQASDFGHJKLmnbvcxzpoiuytrewq6172839405".charAt("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".indexOf(ch)); }); };
        this.f_rotajG = function (str) { return str.replace(/[A-Za-z0-9]/g, function (ch) { return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".charAt("HJKLmnbvcxzpoiuytrewq6172839405MNBVCXZasdfghjklPOIUYTREWQASDFG".indexOf(ch)); }); };
        this.f_rotjaG = function (str) { return str.replace(/[A-Za-z0-9]/g, function (ch) { return "HJKLmnbvcxzpoiuytrewq6172839405MNBVCXZasdfghjklPOIUYTREWQASDFG".charAt("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".indexOf(ch)); }); };
        this.primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
            101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 183, 193, 197, 199,
            211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293,
            307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397,
            401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499,
            503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599,
            601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691,
            701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797,
            809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887,
            907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
        this.f_capitalize = function (str, type) {
            if (type === void 0) { type = 'none'; }
            return type == 'words' ?
                str.trim().split(' ').filter(function (word) { return word; }).map(function (word) { return word[0].toUpperCase() + word.substring(1); }).join(' ')
                :
                    type == 'sentences' ?
                        _this.f_capitalize(str.trim().split('. ').map(function (sentence) { return sentence.trim(); }).map(function (sentence) { return sentence[0].toUpperCase() + sentence.substring(1); }).join('. '))
                        :
                            type == 'allCaps' ?
                                str.trim().split(' ').filter(function (word) { return word; }).join(' ').toUpperCase() : str.trim().split(' ').filter(function (word) { return word; }).join(' ');
        };
        this.f_encDecUsrName = function (str, pos) {
            if (pos === void 0) { pos = 0; }
            return pos == 0 ?
                str.indexOf('@') != -1 ?
                    str.trim().replace(/@/, '⌡⌠').split('⌡⌠')
                        .map(function (word, idx, src, usrName, domain) {
                        if (usrName === void 0) { usrName = src[0]; }
                        if (domain === void 0) { domain = _this.f_rotajF(src[1]); }
                        return ({ usrName: usrName, domain: domain, encEmail: usrName + '@' + domain });
                    })[0]
                    :
                        str.indexOf(' ') != -1 ?
                            _this.f_capitalize(str.trim(), 'words')
                                .replace(/ /, '⌡⌠').split('⌡⌠')
                                .map(function (word, idx, src, firstName, otherName) {
                                if (firstName === void 0) { firstName = src[0]; }
                                if (otherName === void 0) { otherName = _this.f_rotajF(src[1]); }
                                return ({ firstName: firstName, otherName: otherName, encFullName: firstName + ' ' + otherName });
                            })[0]
                            :
                                str
                :
                    str.indexOf('@') != -1 ?
                        str.trim().split('@')
                            .map(function (word, idx, src, usrName, domain) {
                            if (usrName === void 0) { usrName = src[0]; }
                            if (domain === void 0) { domain = _this.f_rotjaF(src[1]); }
                            return ({ usrName: usrName, domain: domain, encEmail: usrName + '@' + domain });
                        })[0]
                        :
                            str.indexOf(' ') != -1 ?
                                str.trim().replace(/ /, '⌡⌠').split('⌡⌠')
                                    .map(function (word, idx, src, firstName, otherName) {
                                    if (firstName === void 0) { firstName = src[0]; }
                                    if (otherName === void 0) { otherName = _this.f_rotjaF(src[1]); }
                                    return ({ firstName: firstName, otherName: otherName, fullName: firstName + ' ' + otherName });
                                })[0]
                                :
                                    str;
        };
        /* Hash constant words K: */
        this.K256 = new Array(0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2);
        this.sha256_hex_digits = "0123456789abcdef";
    }
    ;
    AuthService.prototype.userNames = function (fullName) {
        var _this = this;
        var name = fullName.split(/[@ ,]+/).map(function (word, idx) { return idx != 0 ? _this.f_rotjaF(word) : word; }).join(' ');
        return name;
    };
    /*
     * A JavaScript implementation of the SHA256 hash function.
     *
     * FILE:	sha256.js
     * VERSION:	0.8
     * AUTHOR:	Christoph Bichlmeier <informatik@zombiearena.de>
     *
     * NOTE: This version is not tested thoroughly!
     *
     * Copyright (c) 2003, Christoph Bichlmeier
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions
     * are met:
     * 1. Redistributions of source code must retain the above copyright
     *    notice, this list of conditions and the following disclaimer.
     * 2. Redistributions in binary form must reproduce the above copyright
     *    notice, this list of conditions and the following disclaimer in the
     *    documentation and/or other materials provided with the distribution.
     * 3. Neither the legalName of the copyright holder nor the names of contributors
     *    may be used to endorse or promote products derived from this software
     *    without specific prior written permission.
     *
     * ======================================================================
     *
     * THIS SOFTWARE IS PROVIDED BY THE AUTHORS ''AS IS'' AND ANY EXPRESS
     * OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHORS OR CONTRIBUTORS BE
     * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
     * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
     * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
     * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
     * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
     * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
     * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */
    /* SHA256 logical functions */
    AuthService.prototype.rotateRight = function (n, x) {
        return ((x >>> n) | (x << (32 - n)));
    };
    AuthService.prototype.choice = function (x, y, z) {
        return ((x & y) ^ (~x & z));
    };
    AuthService.prototype.majority = function (x, y, z) {
        return ((x & y) ^ (x & z) ^ (y & z));
    };
    AuthService.prototype.sha256_Sigma0 = function (x) {
        return (this.rotateRight(2, x) ^ this.rotateRight(13, x) ^ this.rotateRight(22, x));
    };
    AuthService.prototype.sha256_Sigma1 = function (x) {
        return (this.rotateRight(6, x) ^ this.rotateRight(11, x) ^ this.rotateRight(25, x));
    };
    AuthService.prototype.sha256_sigma0 = function (x) {
        return (this.rotateRight(7, x) ^ this.rotateRight(18, x) ^ (x >>> 3));
    };
    AuthService.prototype.sha256_sigma1 = function (x) {
        return (this.rotateRight(17, x) ^ this.rotateRight(19, x) ^ (x >>> 10));
    };
    AuthService.prototype.sha256_expand = function (W, j) {
        return (W[j & 0x0f] += this.sha256_sigma1(W[(j + 14) & 0x0f]) + W[(j + 9) & 0x0f] +
            this.sha256_sigma0(W[(j + 1) & 0x0f]));
    };
    /* Add 32-bit integers with 16-bit operations (bug in some JS-interpreters:
    overflow) */
    AuthService.prototype.safe_add = function (x, y) {
        var lsw = (x & 0xffff) + (y & 0xffff);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xffff);
    };
    /* Initialise the SHA256 computation */
    AuthService.prototype.sha256_init = function () {
        this.ihash = new Array(8);
        this.count = new Array(2);
        this.buffer = new Array(64);
        this.count[0] = this.count[1] = 0;
        this.ihash[0] = 0x6a09e667;
        this.ihash[1] = 0xbb67ae85;
        this.ihash[2] = 0x3c6ef372;
        this.ihash[3] = 0xa54ff53a;
        this.ihash[4] = 0x510e527f;
        this.ihash[5] = 0x9b05688c;
        this.ihash[6] = 0x1f83d9ab;
        this.ihash[7] = 0x5be0cd19;
    };
    /* Transform a 512-bit message block */
    AuthService.prototype.sha256_transform = function () {
        var a, b, c, d, e, f, g, h, T1, T2;
        var W = new Array(16);
        /* Initialize registers with the previous intermediate value */
        a = this.ihash[0];
        b = this.ihash[1];
        c = this.ihash[2];
        d = this.ihash[3];
        e = this.ihash[4];
        f = this.ihash[5];
        g = this.ihash[6];
        h = this.ihash[7];
        /* make 32-bit words */
        for (var i = 0; i < 16; i++)
            W[i] = ((this.buffer[(i << 2) + 3]) | (this.buffer[(i << 2) + 2] << 8) | (this.buffer[(i << 2) + 1]
                << 16) | (this.buffer[i << 2] << 24));
        for (var j = 0; j < 64; j++) {
            T1 = h + this.sha256_Sigma1(e) + this.choice(e, f, g) + this.K256[j];
            if (j < 16)
                T1 += W[j];
            else
                T1 += this.sha256_expand(W, j);
            T2 = this.sha256_Sigma0(a) + this.majority(a, b, c);
            h = g;
            g = f;
            f = e;
            e = this.safe_add(d, T1);
            d = c;
            c = b;
            b = a;
            a = this.safe_add(T1, T2);
        }
        /* Compute the current intermediate hash value */
        this.ihash[0] += a;
        this.ihash[1] += b;
        this.ihash[2] += c;
        this.ihash[3] += d;
        this.ihash[4] += e;
        this.ihash[5] += f;
        this.ihash[6] += g;
        this.ihash[7] += h;
    };
    /* Read the next chunk of data and update the SHA256 computation */
    AuthService.prototype.sha256_update = function (data, inputLen) {
        var i, index, curpos = 0;
        /* Compute number of bytes mod 64 */
        index = ((this.count[0] >> 3) & 0x3f);
        var remainder = (inputLen & 0x3f);
        /* Update number of bits */
        if ((this.count[0] += (inputLen << 3)) < (inputLen << 3))
            this.count[1]++;
        this.count[1] += (inputLen >> 29);
        /* Transform as many times as possible */
        for (i = 0; i + 63 < inputLen; i += 64) {
            for (var j = index; j < 64; j++)
                this.buffer[j] = data.charCodeAt(curpos++);
            this.sha256_transform();
            index = 0;
        }
        /* Buffer remaining input */
        for (j = 0; j < remainder; j++)
            this.buffer[j] = data.charCodeAt(curpos++);
    };
    /* Finish the computation by operations such as padding */
    AuthService.prototype.sha256_final = function () {
        var index = ((this.count[0] >> 3) & 0x3f);
        this.buffer[index++] = 0x80;
        if (index <= 56) {
            for (var i = index; i < 56; i++)
                this.buffer[i] = 0;
        }
        else {
            for (var i = index; i < 64; i++)
                this.buffer[i] = 0;
            this.sha256_transform();
            for (var i = 0; i < 56; i++)
                this.buffer[i] = 0;
        }
        this.buffer[56] = (this.count[1] >>> 24) & 0xff;
        this.buffer[57] = (this.count[1] >>> 16) & 0xff;
        this.buffer[58] = (this.count[1] >>> 8) & 0xff;
        this.buffer[59] = this.count[1] & 0xff;
        this.buffer[60] = (this.count[0] >>> 24) & 0xff;
        this.buffer[61] = (this.count[0] >>> 16) & 0xff;
        this.buffer[62] = (this.count[0] >>> 8) & 0xff;
        this.buffer[63] = this.count[0] & 0xff;
        this.sha256_transform();
    };
    /* Split the internal hash values into an array of bytes */
    AuthService.prototype.sha256_encode_bytes = function () {
        var j = 0;
        var output = new Array(32);
        for (var i = 0; i < 8; i++) {
            output[j++] = ((this.ihash[i] >>> 24) & 0xff);
            output[j++] = ((this.ihash[i] >>> 16) & 0xff);
            output[j++] = ((this.ihash[i] >>> 8) & 0xff);
            output[j++] = (this.ihash[i] & 0xff);
        }
        return output;
    };
    /* Get the internal hash as a hex string */
    AuthService.prototype.sha256_encode_hex = function () {
        var output = new String();
        for (var i = 0; i < 8; i++) {
            for (var j = 28; j >= 0; j -= 4)
                output += this.sha256_hex_digits.charAt((this.ihash[i] >>> j) & 0x0f);
        }
        return output;
    };
    /* Main function: returns a hex string representing the SHA256 value of the
    given data */
    AuthService.prototype.sha256_digest = function (data) {
        this.sha256_init();
        this.sha256_update(data, data.length);
        this.sha256_final();
        return this.sha256_encode_hex();
    };
    /* test if the JS-interpreter is working properly */
    AuthService.prototype.sha256_self_test = function () {
        return this.sha256_digest("message digest") ==
            "f7846f55cf23e14eebeab5b4e1550cad5b509e3348fbc4efa3a1413d393cb650";
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDhEQUE4RDtBQUc5RDtJQUVJO1FBQUEsaUJBQWlCO1FBRVIsV0FBTSxHQUFHLDhCQUE4QixDQUFDO1FBTWpELFdBQU0sR0FBVyxFQUFFLENBQUM7UUFBQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQUMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6RSxZQUFPLEdBQWE7WUFDaEIsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSTtZQUM3QixPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUk7WUFDeEQsY0FBYyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSTtZQUMxQyxLQUFLLEVBQUU7Z0JBQ0gsZUFBZSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsNEJBQTRCLEVBQUUsSUFBSTthQUMxSTtZQUNELE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSTtZQUM3QyxPQUFPLEVBQUU7Z0JBQ0wsUUFBUSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUk7YUFDMUU7WUFDRCxjQUFjLEVBQUUsSUFBSTtZQUNwQixJQUFJLEVBQUU7Z0JBQ0YsV0FBVyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSTthQUM3SDtZQUNELHFCQUFxQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFB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QVEsR0FBRyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQUMsRUFBRSxJQUFLLE9BQUEsZ0VBQWdFLENBQUMsTUFBTSxDQUN6SCxnRUFBZ0UsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFEM0IsQ0FDMkIsQ0FBQyxFQURoRSxDQUNnRSxDQUFDO1FBRW5GLGFBQVEsR0FBRyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQUMsRUFBRSxJQUFLLE9BQUEsZ0VBQWdFLENBQUMsTUFBTSxDQUN6SCxnRUFBZ0UsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFEM0IsQ0FDMkIsQ0FBQyxFQURoRSxDQUNnRSxDQUFDO1FBRW5GLGFBQVEsR0FBRyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQUMsRUFBRSxJQUFLLE9BQUEsZ0VBQWdFLENBQUMsTUFBTSxDQUN6SCxnRUFBZ0UsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFEM0IsQ0FDMkIsQ0FBQyxFQURoRSxDQUNnRSxDQUFDO1FBT25GLFdBQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDcEcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDbEcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUM5RSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQzlFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQ25GLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQ3BFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDOUUs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QUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXRCLCtEQUErRDtRQUMvRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsQix1QkFBdUI7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7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RUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLE1BQU0sSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUM3RTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDtpQkFDYTtJQUNiLG1DQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0RBQW9EO0lBQ3BELHNDQUFnQixHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN2QyxrRUFBa0UsQ0FBQztJQUMzRSxDQUFDO0lBNVpRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBK1p2QjtJQUFELGtCQUFDO0NBQUEsQUEvWkQsSUErWkM7QUEvWlksa0NBQVc7QUFxY3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBpbXBvcnQgbG9jYWxTdG9yYWdlID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZScpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9O1xyXG5cclxuICAgIHJlYWRvbmx5IFNFUlZFUiA9IFwiaHR0cHM6Ly9hamFmc25vZGUuc2VydmVvLm5ldFwiO1xyXG4gICAgLy8gcmVhZG9ubHkgU0VSVkVSID0gXCJodHRwczovLzJiZDM3OTUwLm5ncm9rLmlvXCI7XHJcbiAgICAvLyByZWFkb25seSBTRVJWRVIgPSBcImh0dHA6Ly8xMC4xMC4yMC4xNTA6NjcwN1wiO1xyXG5cclxuICAgIGRhdGE6IGFueTtcclxuXHJcbiAgICBzdGF0dXM6IHN0cmluZyA9ICcnOyBsb2dnZWRJbjogYm9vbGVhbiA9IGZhbHNlOyBwd1Jlc2V0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY2xudEtZQzogSUNsbnRLWUMgPSB7XHJcbiAgICAgICAgZW5jRW1haWxJRDogbnVsbCwgaHNoUFc6IG51bGwsXHJcbiAgICAgICAgc3ViRGF0ZTogbnVsbCwgY2xudENyZWF0RGF0ZTogbnVsbCwgY2xudFZhbEtZQ0RhdGU6IG51bGwsXHJcbiAgICAgICAgZW5jTGVnYWxOYW1lSUQ6IG51bGwsIGVuY0xlZ2FsSURDcmVkOiBudWxsLFxyXG4gICAgICAgIHBob3RvOiB7XHJcbiAgICAgICAgICAgIHBob3RvSURGcm9udFVSTDogbnVsbCwgcGhvdG9JREJhY2tVUkw6IG51bGwsIHBob3RvSURzVVJMc0RhdGVkOiBudWxsLCByZWNlbnRGYWNlVmVyaWZpZWRJRFVSTDogbnVsbCwgcmVjZW50RmFjZVZlcmlmaWVkSURVUkxEYXRlZDogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2VuZGVyOiBudWxsLCBlbmNET0I6IG51bGwsIG5hdGlvbmFsaXR5OiBudWxsLFxyXG4gICAgICAgIGFkZHJlc3M6IHtcclxuICAgICAgICAgICAgcG9zdENvZGU6IG51bGwsIGVuY1Bvc3RTdHJlZXQ6IG51bGwsIHBvc3RCbG9jazogbnVsbCwgZW5jUG9zdFVuaXQ6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuY01vYmlsZU51bUlEOiBudWxsLFxyXG4gICAgICAgIGJhbms6IHtcclxuICAgICAgICAgICAgZW5jQmFua05hbWU6IG51bGwsIGJhbmtTY2FuU3RhdGVtdFVSTDogbnVsbCwgYmFua1NjYW5TdGF0ZW10VVJMRGF0ZWQ6IG51bGwsIGVuY0JhbmtTY2FuU3RhdGVtdEJhbDogbnVsbCwgZW5jQmFua0FjY3Q6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRleHRBbm5vdE5vdGFyeU90aGVyczogbnVsbCwgY2xudE5vdGVzOiBudWxsLFxyXG4gICAgICAgIGlzRGVsZXRlZDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBjbG50S1lDRGlzcDogSUNsbnRLWUNEaXNwID0ge1xyXG4gICAgICAgIGVtYWlsSUQ6IG51bGwsIGxlZ2FsTmFtZUlEOiBudWxsLCBsZWdhbElEQ3JlZDogbnVsbCwgRE9COiBudWxsLFxyXG4gICAgICAgIGFkZHJlc3M6IHtcclxuICAgICAgICAgICAgcG9zdFN0cmVldDogbnVsbCwgcG9zdFVuaXQ6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vYmlsZU51bUlEOiBudWxsLFxyXG4gICAgICAgIGJhbms6IHtcclxuICAgICAgICAgICAgYmFua05hbWU6IG51bGwsIGJhbmtTY2FuU3RhdGVtdEJhbDogbnVsbCwgYmFua0FjY3Q6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNsbnRBc3NldDogYW55O1xyXG5cclxuICAgIGF1dGggPSBhc3luYyAoZW1haWxQV1JzdFBXT2JqOiBvYmplY3QpID0+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2goYCR7dGhpcy5TRVJWRVJ9L2FwaS9wbHVnaW5gLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVtYWlsUFdSc3RQV09iailcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyh7IGVyciB9KSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdDsgY29uc29sZS5sb2coeyBzdGF0dXM6IHRoaXMuc3RhdHVzID0gdGhpcy5kYXRhLnN0YXR1cyB9KTtcclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmRhdGEubmV4VG9rZW4pIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduZXhUb2tlbicsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5uZXhUb2tlbikpOyAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZEluID0gdGhpcy5kYXRhLm5leFRva2VuID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZEluJywgSlNPTi5zdHJpbmdpZnkodGhpcy5sb2dnZWRJbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2xudEtZQykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xudEtZQyA9IHRoaXMuZGF0YS5jbG50S1lDO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNsbnRLWUMuZW5jRW1haWxJRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5jbG50S1lDRGlzcC5sZWdhbE5hbWVJRCwgdGhpcy5jbG50S1lDRGlzcC5lbWFpbElEXSA9IFt0aGlzLmZfZW5jRGVjVXNyTmFtZSh0aGlzLmRhdGEuY2xudEtZQy5lbmNMZWdhbE5hbWVJRCB8fCAnJywgLTEpLmZ1bGxOYW1lLCB0aGlzLmZfcm90amFGKHRoaXMuY2xudEtZQy5lbmNFbWFpbElEKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2xudEtZQy5lbmNMZWdhbElEQ3JlZCkgdGhpcy5jbG50S1lDRGlzcC5sZWdhbElEQ3JlZCA9IHRoaXMuZl9yb3RqYUYodGhpcy5kYXRhLmNsbnRLWUMuZW5jTGVnYWxJRENyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2xudEtZQy5lbmNNb2JpbGVOdW1JRCkgdGhpcy5jbG50S1lDRGlzcC5tb2JpbGVOdW1JRCA9IHRoaXMuZl9yb3RqYUYodGhpcy5kYXRhLmNsbnRLWUMuZW5jTW9iaWxlTnVtSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2xudEtZQy5hZGRyZXNzLmVuY1Bvc3RTdHJlZXQpIHRoaXMuY2xudEtZQ0Rpc3AuYWRkcmVzcy5wb3N0U3RyZWV0ID0gdGhpcy5mX3JvdGphRih0aGlzLmRhdGEuY2xudEtZQy5hZGRyZXNzLmVuY1Bvc3RTdHJlZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2xudEtZQy5hZGRyZXNzLmVuY1Bvc3RVbml0KSB0aGlzLmNsbnRLWUNEaXNwLmFkZHJlc3MucG9zdFVuaXQgPSB0aGlzLmZfcm90amFGKHRoaXMuZGF0YS5jbG50S1lDLmFkZHJlc3MuZW5jUG9zdFVuaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2xudEtZQy5iYW5rLmVuY0JhbmtOYW1lKSB0aGlzLmNsbnRLWUNEaXNwLmJhbmsuYmFua05hbWUgPSB0aGlzLmZfcm90amFGKHRoaXMuZGF0YS5jbG50S1lDLmJhbmsuZW5jQmFua05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2xudEtZQy5iYW5rLmVuY0JhbmtBY2N0KSB0aGlzLmNsbnRLWUNEaXNwLmJhbmsuYmFua0FjY3QgPSB0aGlzLmZfcm90amFGKHRoaXMuZGF0YS5jbG50S1lDLmJhbmsuZW5jQmFua0FjY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgJ2NsbnRLWUMgQCBzaWdudXAgb3Igc3Vic2NyaWJlJzogdGhpcy5jbG50S1lDIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdreWMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNsbnRLWUMpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgna3ljLWRpc3BsYXknLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNsbnRLWUNEaXNwKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jbG50QXNzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXNzZXRzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmNsbnRLWUNBc3NldHMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBjbG50S1lDRGlzcDogdGhpcy5jbG50S1lDRGlzcCwgbmV4VG9rZW46IHRoaXMuZGF0YS5uZXhUb2tlbiB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG15IGZucyBpbnNpZGUgYWpsZWFybmpzIE5QTSB0byBiZSBpbXBvcnRhYmxlIGhlcmUgbGF0ZXIuXHJcbiAgICBmX3JvdGFqRiA9IHN0ciA9PiBzdHIucmVwbGFjZSgvW0EtWmEtejAtOV0vZywgKGNoKSA9PiBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoxMjM0NTY3ODkwXCIuY2hhckF0KFxyXG4gICAgICAgIFwiTU5CVkNYWmFzZGZnaGprbFBPSVVZVFJFV1FBU0RGR0hKS0xtbmJ2Y3h6cG9pdXl0cmV3cTYxNzI4Mzk0MDVcIi5pbmRleE9mKGNoKSkpO1xyXG5cclxuICAgIGZfcm90amFGID0gc3RyID0+IHN0ci5yZXBsYWNlKC9bQS1aYS16MC05XS9nLCAoY2gpID0+IFwiTU5CVkNYWmFzZGZnaGprbFBPSVVZVFJFV1FBU0RGR0hKS0xtbmJ2Y3h6cG9pdXl0cmV3cTYxNzI4Mzk0MDVcIi5jaGFyQXQoXHJcbiAgICAgICAgXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MTIzNDU2Nzg5MFwiLmluZGV4T2YoY2gpKSk7XHJcblxyXG4gICAgZl9yb3RhakcgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1tBLVphLXowLTldL2csIChjaCkgPT4gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MTIzNDU2Nzg5MFwiLmNoYXJBdChcclxuICAgICAgICBcIkhKS0xtbmJ2Y3h6cG9pdXl0cmV3cTYxNzI4Mzk0MDVNTkJWQ1haYXNkZmdoamtsUE9JVVlUUkVXUUFTREZHXCIuaW5kZXhPZihjaCkpKTtcclxuXHJcbiAgICBmX3JvdGphRyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvW0EtWmEtejAtOV0vZywgKGNoKSA9PiBcIkhKS0xtbmJ2Y3h6cG9pdXl0cmV3cTYxNzI4Mzk0MDVNTkJWQ1haYXNkZmdoamtsUE9JVVlUUkVXUUFTREZHXCIuY2hhckF0KFxyXG4gICAgICAgIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejEyMzQ1Njc4OTBcIi5pbmRleE9mKGNoKSkpO1xyXG5cclxuICAgIHVzZXJOYW1lcyhmdWxsTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgbmFtZSA9IGZ1bGxOYW1lLnNwbGl0KC9bQCAsXSsvKS5tYXAoKHdvcmQsIGlkeCkgPT4gaWR4ICE9IDAgPyB0aGlzLmZfcm90amFGKHdvcmQpIDogd29yZCkuam9pbignICcpO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW1lcyA9IFsyLCAzLCA1LCA3LCAxMSwgMTMsIDE3LCAxOSwgMjMsIDI5LCAzMSwgMzcsIDQxLCA0MywgNDcsIDUzLCA1OSwgNjEsIDY3LCA3MSwgNzMsIDc5LCA4MywgODksIDk3LFxyXG4gICAgICAgIDEwMSwgMTAzLCAxMDcsIDEwOSwgMTEzLCAxMjcsIDEzMSwgMTM3LCAxMzksIDE0OSwgMTUxLCAxNTcsIDE2MywgMTY3LCAxNzMsIDE3OSwgMTgzLCAxOTMsIDE5NywgMTk5LFxyXG4gICAgICAgIDIxMSwgMjIzLCAyMjcsIDIyOSwgMjMzLCAyMzksIDI0MSwgMjUxLCAyNTcsIDI2MywgMjY5LCAyNzEsIDI3NywgMjgxLCAyODMsIDI5MyxcclxuICAgICAgICAzMDcsIDMxMSwgMzEzLCAzMTcsIDMzMSwgMzM3LCAzNDcsIDM0OSwgMzUzLCAzNTksIDM2NywgMzczLCAzNzksIDM4MywgMzg5LCAzOTcsXHJcbiAgICAgICAgNDAxLCA0MDksIDQxOSwgNDIxLCA0MzEsIDQzMywgNDM5LCA0NDMsIDQ0OSwgNDU3LCA0NjEsIDQ2MywgNDY3LCA0NzksIDQ4NywgNDkxLCA0OTksXHJcbiAgICAgICAgNTAzLCA1MDksIDUyMSwgNTIzLCA1NDEsIDU0NywgNTU3LCA1NjMsIDU2OSwgNTcxLCA1NzcsIDU4NywgNTkzLCA1OTksXHJcbiAgICAgICAgNjAxLCA2MDcsIDYxMywgNjE3LCA2MTksIDYzMSwgNjQxLCA2NDMsIDY0NywgNjUzLCA2NTksIDY2MSwgNjczLCA2NzcsIDY4MywgNjkxLFxyXG4gICAgICAgIDcwMSwgNzA5LCA3MTksIDcyNywgNzMzLCA3MzksIDc0MywgNzUxLCA3NTcsIDc2MSwgNzY5LCA3NzMsIDc4NywgNzk3LFxyXG4gICAgICAgIDgwOSwgODExLCA4MjEsIDgyMywgODI3LCA4MjksIDgzOSwgODUzLCA4NTcsIDg1OSwgODYzLCA4NzcsIDg4MSwgODgzLCA4ODcsXHJcbiAgICAgICAgOTA3LCA5MTEsIDkxOSwgOTI5LCA5MzcsIDk0MSwgOTQ3LCA5NTMsIDk2NywgOTcxLCA5NzcsIDk4MywgOTkxLCA5OTddXHJcblxyXG4gICAgZl9jYXBpdGFsaXplID0gKHN0ciwgdHlwZSA9ICdub25lJykgPT5cclxuICAgICAgICB0eXBlID09ICd3b3JkcycgP1xyXG4gICAgICAgICAgICBzdHIudHJpbSgpLnNwbGl0KCcgJykuZmlsdGVyKHdvcmQgPT4gd29yZCkubWFwKHdvcmQgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSkpLmpvaW4oJyAnKVxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIHR5cGUgPT0gJ3NlbnRlbmNlcycgP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mX2NhcGl0YWxpemUoc3RyLnRyaW0oKS5zcGxpdCgnLiAnKS5tYXAoc2VudGVuY2UgPT4gc2VudGVuY2UudHJpbSgpKS5tYXAoc2VudGVuY2UgPT4gc2VudGVuY2VbMF0udG9VcHBlckNhc2UoKSArIHNlbnRlbmNlLnN1YnN0cmluZygxKSkuam9pbignLiAnKSlcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHR5cGUgPT0gJ2FsbENhcHMnID9cclxuICAgICAgICAgICAgICAgICAgICBzdHIudHJpbSgpLnNwbGl0KCcgJykuZmlsdGVyKHdvcmQgPT4gd29yZCkuam9pbignICcpLnRvVXBwZXJDYXNlKCkgOiBzdHIudHJpbSgpLnNwbGl0KCcgJykuZmlsdGVyKHdvcmQgPT4gd29yZCkuam9pbignICcpO1xyXG5cclxuICAgIGZfZW5jRGVjVXNyTmFtZSA9IChzdHIsIHBvcyA9IDApID0+IHtcclxuICAgICAgICByZXR1cm4gcG9zID09IDAgP1xyXG5cclxuICAgICAgICAgICAgc3RyLmluZGV4T2YoJ0AnKSAhPSAtMSA/XHJcbiAgICAgICAgICAgICAgICBzdHIudHJpbSgpLnJlcGxhY2UoL0AvLCAn4oyh4oygJykuc3BsaXQoJ+KMoeKMoCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHdvcmQsIGlkeCwgc3JjLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNyTmFtZSA9IHNyY1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpbiA9IHRoaXMuZl9yb3RhakYoc3JjWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeyB1c3JOYW1lLCBkb21haW4sIGVuY0VtYWlsOiB1c3JOYW1lICsgJ0AnICsgZG9tYWluIH0pKVswXVxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgc3RyLmluZGV4T2YoJyAnKSAhPSAtMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mX2NhcGl0YWxpemUoc3RyLnRyaW0oKSwgJ3dvcmRzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyAvLCAn4oyh4oygJykuc3BsaXQoJ+KMoeKMoCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAod29yZCwgaWR4LCBzcmMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lID0gc3JjWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTmFtZSA9IHRoaXMuZl9yb3RhakYoc3JjWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh7IGZpcnN0TmFtZSwgb3RoZXJOYW1lLCBlbmNGdWxsTmFtZTogZmlyc3ROYW1lICsgJyAnICsgb3RoZXJOYW1lIH0pKVswXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBzdHJcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBzdHIuaW5kZXhPZignQCcpICE9IC0xID9cclxuICAgICAgICAgICAgICAgIHN0ci50cmltKCkuc3BsaXQoJ0AnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh3b3JkLCBpZHgsIHNyYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzck5hbWUgPSBzcmNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW4gPSB0aGlzLmZfcm90amFGKHNyY1sxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHsgdXNyTmFtZSwgZG9tYWluLCBlbmNFbWFpbDogdXNyTmFtZSArICdAJyArIGRvbWFpbiB9KSlbMF1cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHN0ci5pbmRleE9mKCcgJykgIT0gLTEgP1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ci50cmltKCkucmVwbGFjZSgvIC8sICfijKHijKAnKS5zcGxpdCgn4oyh4oygJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3b3JkLCBpZHgsIHNyYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWUgPSBzcmNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOYW1lID0gdGhpcy5mX3JvdGphRihzcmNbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHsgZmlyc3ROYW1lLCBvdGhlck5hbWUsIGZ1bGxOYW1lOiBmaXJzdE5hbWUgKyAnICcgKyBvdGhlck5hbWUgfSkpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0clxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFNIQTI1NiBoYXNoIGZ1bmN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEZJTEU6XHRzaGEyNTYuanNcclxuICAgICAqIFZFUlNJT046XHQwLjhcclxuICAgICAqIEFVVEhPUjpcdENocmlzdG9waCBCaWNobG1laWVyIDxpbmZvcm1hdGlrQHpvbWJpZWFyZW5hLmRlPlxyXG4gICAgICpcclxuICAgICAqIE5PVEU6IFRoaXMgdmVyc2lvbiBpcyBub3QgdGVzdGVkIHRob3JvdWdobHkhXHJcbiAgICAgKlxyXG4gICAgICogQ29weXJpZ2h0IChjKSAyMDAzLCBDaHJpc3RvcGggQmljaGxtZWllclxyXG4gICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgICAqXHJcbiAgICAgKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcclxuICAgICAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uc1xyXG4gICAgICogYXJlIG1ldDpcclxuICAgICAqIDEuIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbiAgICAgKiAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAgICAgKiAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxyXG4gICAgICogICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxyXG4gICAgICogICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICAgICAqIDMuIE5laXRoZXIgdGhlIGxlZ2FsTmFtZSBvZiB0aGUgY29weXJpZ2h0IGhvbGRlciBub3IgdGhlIG5hbWVzIG9mIGNvbnRyaWJ1dG9yc1xyXG4gICAgICogICAgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXHJcbiAgICAgKiAgICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICAgICAqXHJcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgKlxyXG4gICAgICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQVVUSE9SUyAnJ0FTIElTJycgQU5EIEFOWSBFWFBSRVNTXHJcbiAgICAgKiBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxyXG4gICAgICogV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXHJcbiAgICAgKiBBUkUgRElTQ0xBSU1FRC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPTlRSSUJVVE9SUyBCRVxyXG4gICAgICogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxyXG4gICAgICogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcclxuICAgICAqIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUlxyXG4gICAgICogQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXHJcbiAgICAgKiBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRVxyXG4gICAgICogT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSxcclxuICAgICAqIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAgICAgKi9cclxuXHJcbiAgICAvKiBTSEEyNTYgbG9naWNhbCBmdW5jdGlvbnMgKi9cclxuICAgIHJvdGF0ZVJpZ2h0KG4sIHgpIHtcclxuICAgICAgICByZXR1cm4gKCh4ID4+PiBuKSB8ICh4IDw8ICgzMiAtIG4pKSk7XHJcbiAgICB9XHJcbiAgICBjaG9pY2UoeCwgeSwgeikge1xyXG4gICAgICAgIHJldHVybiAoKHggJiB5KSBeICh+eCAmIHopKTtcclxuICAgIH1cclxuICAgIG1ham9yaXR5KHgsIHksIHopIHtcclxuICAgICAgICByZXR1cm4gKCh4ICYgeSkgXiAoeCAmIHopIF4gKHkgJiB6KSk7XHJcbiAgICB9XHJcbiAgICBzaGEyNTZfU2lnbWEwKHgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMucm90YXRlUmlnaHQoMiwgeCkgXiB0aGlzLnJvdGF0ZVJpZ2h0KDEzLCB4KSBeIHRoaXMucm90YXRlUmlnaHQoMjIsIHgpKTtcclxuICAgIH1cclxuICAgIHNoYTI1Nl9TaWdtYTEoeCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5yb3RhdGVSaWdodCg2LCB4KSBeIHRoaXMucm90YXRlUmlnaHQoMTEsIHgpIF4gdGhpcy5yb3RhdGVSaWdodCgyNSwgeCkpO1xyXG4gICAgfVxyXG4gICAgc2hhMjU2X3NpZ21hMCh4KSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnJvdGF0ZVJpZ2h0KDcsIHgpIF4gdGhpcy5yb3RhdGVSaWdodCgxOCwgeCkgXiAoeCA+Pj4gMykpO1xyXG4gICAgfVxyXG4gICAgc2hhMjU2X3NpZ21hMSh4KSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnJvdGF0ZVJpZ2h0KDE3LCB4KSBeIHRoaXMucm90YXRlUmlnaHQoMTksIHgpIF4gKHggPj4+IDEwKSk7XHJcbiAgICB9XHJcbiAgICBzaGEyNTZfZXhwYW5kKFcsIGopIHtcclxuICAgICAgICByZXR1cm4gKFdbaiAmIDB4MGZdICs9IHRoaXMuc2hhMjU2X3NpZ21hMShXWyhqICsgMTQpICYgMHgwZl0pICsgV1soaiArIDkpICYgMHgwZl0gK1xyXG4gICAgICAgICAgICB0aGlzLnNoYTI1Nl9zaWdtYTAoV1soaiArIDEpICYgMHgwZl0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBIYXNoIGNvbnN0YW50IHdvcmRzIEs6ICovXHJcbiAgICBLMjU2ID0gbmV3IEFycmF5KFxyXG4gICAgICAgIDB4NDI4YTJmOTgsIDB4NzEzNzQ0OTEsIDB4YjVjMGZiY2YsIDB4ZTliNWRiYTUsXHJcbiAgICAgICAgMHgzOTU2YzI1YiwgMHg1OWYxMTFmMSwgMHg5MjNmODJhNCwgMHhhYjFjNWVkNSxcclxuICAgICAgICAweGQ4MDdhYTk4LCAweDEyODM1YjAxLCAweDI0MzE4NWJlLCAweDU1MGM3ZGMzLFxyXG4gICAgICAgIDB4NzJiZTVkNzQsIDB4ODBkZWIxZmUsIDB4OWJkYzA2YTcsIDB4YzE5YmYxNzQsXHJcbiAgICAgICAgMHhlNDliNjljMSwgMHhlZmJlNDc4NiwgMHgwZmMxOWRjNiwgMHgyNDBjYTFjYyxcclxuICAgICAgICAweDJkZTkyYzZmLCAweDRhNzQ4NGFhLCAweDVjYjBhOWRjLCAweDc2Zjk4OGRhLFxyXG4gICAgICAgIDB4OTgzZTUxNTIsIDB4YTgzMWM2NmQsIDB4YjAwMzI3YzgsIDB4YmY1OTdmYzcsXHJcbiAgICAgICAgMHhjNmUwMGJmMywgMHhkNWE3OTE0NywgMHgwNmNhNjM1MSwgMHgxNDI5Mjk2NyxcclxuICAgICAgICAweDI3YjcwYTg1LCAweDJlMWIyMTM4LCAweDRkMmM2ZGZjLCAweDUzMzgwZDEzLFxyXG4gICAgICAgIDB4NjUwYTczNTQsIDB4NzY2YTBhYmIsIDB4ODFjMmM5MmUsIDB4OTI3MjJjODUsXHJcbiAgICAgICAgMHhhMmJmZThhMSwgMHhhODFhNjY0YiwgMHhjMjRiOGI3MCwgMHhjNzZjNTFhMyxcclxuICAgICAgICAweGQxOTJlODE5LCAweGQ2OTkwNjI0LCAweGY0MGUzNTg1LCAweDEwNmFhMDcwLFxyXG4gICAgICAgIDB4MTlhNGMxMTYsIDB4MWUzNzZjMDgsIDB4Mjc0ODc3NGMsIDB4MzRiMGJjYjUsXHJcbiAgICAgICAgMHgzOTFjMGNiMywgMHg0ZWQ4YWE0YSwgMHg1YjljY2E0ZiwgMHg2ODJlNmZmMyxcclxuICAgICAgICAweDc0OGY4MmVlLCAweDc4YTU2MzZmLCAweDg0Yzg3ODE0LCAweDhjYzcwMjA4LFxyXG4gICAgICAgIDB4OTBiZWZmZmEsIDB4YTQ1MDZjZWIsIDB4YmVmOWEzZjcsIDB4YzY3MTc4ZjJcclxuICAgICk7XHJcblxyXG4gICAgLyogZ2xvYmFsIGFycmF5cyAqL1xyXG4gICAgaWhhc2g7IGNvdW50OyBidWZmZXI7XHJcbiAgICBzaGEyNTZfaGV4X2RpZ2l0cyA9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xyXG5cclxuICAgIC8qIEFkZCAzMi1iaXQgaW50ZWdlcnMgd2l0aCAxNi1iaXQgb3BlcmF0aW9ucyAoYnVnIGluIHNvbWUgSlMtaW50ZXJwcmV0ZXJzOlxyXG4gICAgb3ZlcmZsb3cpICovXHJcbiAgICBzYWZlX2FkZCh4LCB5KSB7XHJcbiAgICAgICAgdmFyIGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcclxuICAgICAgICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XHJcbiAgICAgICAgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4ZmZmZik7XHJcbiAgICB9XHJcblxyXG4gICAgLyogSW5pdGlhbGlzZSB0aGUgU0hBMjU2IGNvbXB1dGF0aW9uICovXHJcbiAgICBzaGEyNTZfaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmloYXNoID0gbmV3IEFycmF5KDgpO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBuZXcgQXJyYXkoMik7XHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgICAgIHRoaXMuY291bnRbMF0gPSB0aGlzLmNvdW50WzFdID0gMDtcclxuICAgICAgICB0aGlzLmloYXNoWzBdID0gMHg2YTA5ZTY2NztcclxuICAgICAgICB0aGlzLmloYXNoWzFdID0gMHhiYjY3YWU4NTtcclxuICAgICAgICB0aGlzLmloYXNoWzJdID0gMHgzYzZlZjM3MjtcclxuICAgICAgICB0aGlzLmloYXNoWzNdID0gMHhhNTRmZjUzYTtcclxuICAgICAgICB0aGlzLmloYXNoWzRdID0gMHg1MTBlNTI3ZjtcclxuICAgICAgICB0aGlzLmloYXNoWzVdID0gMHg5YjA1Njg4YztcclxuICAgICAgICB0aGlzLmloYXNoWzZdID0gMHgxZjgzZDlhYjtcclxuICAgICAgICB0aGlzLmloYXNoWzddID0gMHg1YmUwY2QxOTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBUcmFuc2Zvcm0gYSA1MTItYml0IG1lc3NhZ2UgYmxvY2sgKi9cclxuICAgIHNoYTI1Nl90cmFuc2Zvcm0oKSB7XHJcbiAgICAgICAgdmFyIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgsIFQxLCBUMjtcclxuICAgICAgICB2YXIgVyA9IG5ldyBBcnJheSgxNik7XHJcblxyXG4gICAgICAgIC8qIEluaXRpYWxpemUgcmVnaXN0ZXJzIHdpdGggdGhlIHByZXZpb3VzIGludGVybWVkaWF0ZSB2YWx1ZSAqL1xyXG4gICAgICAgIGEgPSB0aGlzLmloYXNoWzBdO1xyXG4gICAgICAgIGIgPSB0aGlzLmloYXNoWzFdO1xyXG4gICAgICAgIGMgPSB0aGlzLmloYXNoWzJdO1xyXG4gICAgICAgIGQgPSB0aGlzLmloYXNoWzNdO1xyXG4gICAgICAgIGUgPSB0aGlzLmloYXNoWzRdO1xyXG4gICAgICAgIGYgPSB0aGlzLmloYXNoWzVdO1xyXG4gICAgICAgIGcgPSB0aGlzLmloYXNoWzZdO1xyXG4gICAgICAgIGggPSB0aGlzLmloYXNoWzddO1xyXG5cclxuICAgICAgICAvKiBtYWtlIDMyLWJpdCB3b3JkcyAqL1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKylcclxuICAgICAgICAgICAgV1tpXSA9ICgodGhpcy5idWZmZXJbKGkgPDwgMikgKyAzXSkgfCAodGhpcy5idWZmZXJbKGkgPDwgMikgKyAyXSA8PCA4KSB8ICh0aGlzLmJ1ZmZlclsoaSA8PCAyKSArIDFdXHJcbiAgICAgICAgICAgICAgICA8PCAxNikgfCAodGhpcy5idWZmZXJbaSA8PCAyXSA8PCAyNCkpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDY0OyBqKyspIHtcclxuICAgICAgICAgICAgVDEgPSBoICsgdGhpcy5zaGEyNTZfU2lnbWExKGUpICsgdGhpcy5jaG9pY2UoZSwgZiwgZykgKyB0aGlzLksyNTZbal07XHJcbiAgICAgICAgICAgIGlmIChqIDwgMTYpIFQxICs9IFdbal07XHJcbiAgICAgICAgICAgIGVsc2UgVDEgKz0gdGhpcy5zaGEyNTZfZXhwYW5kKFcsIGopO1xyXG4gICAgICAgICAgICBUMiA9IHRoaXMuc2hhMjU2X1NpZ21hMChhKSArIHRoaXMubWFqb3JpdHkoYSwgYiwgYyk7XHJcbiAgICAgICAgICAgIGggPSBnO1xyXG4gICAgICAgICAgICBnID0gZjtcclxuICAgICAgICAgICAgZiA9IGU7XHJcbiAgICAgICAgICAgIGUgPSB0aGlzLnNhZmVfYWRkKGQsIFQxKTtcclxuICAgICAgICAgICAgZCA9IGM7XHJcbiAgICAgICAgICAgIGMgPSBiO1xyXG4gICAgICAgICAgICBiID0gYTtcclxuICAgICAgICAgICAgYSA9IHRoaXMuc2FmZV9hZGQoVDEsIFQyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIENvbXB1dGUgdGhlIGN1cnJlbnQgaW50ZXJtZWRpYXRlIGhhc2ggdmFsdWUgKi9cclxuICAgICAgICB0aGlzLmloYXNoWzBdICs9IGE7XHJcbiAgICAgICAgdGhpcy5paGFzaFsxXSArPSBiO1xyXG4gICAgICAgIHRoaXMuaWhhc2hbMl0gKz0gYztcclxuICAgICAgICB0aGlzLmloYXNoWzNdICs9IGQ7XHJcbiAgICAgICAgdGhpcy5paGFzaFs0XSArPSBlO1xyXG4gICAgICAgIHRoaXMuaWhhc2hbNV0gKz0gZjtcclxuICAgICAgICB0aGlzLmloYXNoWzZdICs9IGc7XHJcbiAgICAgICAgdGhpcy5paGFzaFs3XSArPSBoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlYWQgdGhlIG5leHQgY2h1bmsgb2YgZGF0YSBhbmQgdXBkYXRlIHRoZSBTSEEyNTYgY29tcHV0YXRpb24gKi9cclxuICAgIHNoYTI1Nl91cGRhdGUoZGF0YSwgaW5wdXRMZW4pIHtcclxuICAgICAgICB2YXIgaSwgaW5kZXgsIGN1cnBvcyA9IDA7XHJcbiAgICAgICAgLyogQ29tcHV0ZSBudW1iZXIgb2YgYnl0ZXMgbW9kIDY0ICovXHJcbiAgICAgICAgaW5kZXggPSAoKHRoaXMuY291bnRbMF0gPj4gMykgJiAweDNmKTtcclxuICAgICAgICB2YXIgcmVtYWluZGVyID0gKGlucHV0TGVuICYgMHgzZik7XHJcblxyXG4gICAgICAgIC8qIFVwZGF0ZSBudW1iZXIgb2YgYml0cyAqL1xyXG4gICAgICAgIGlmICgodGhpcy5jb3VudFswXSArPSAoaW5wdXRMZW4gPDwgMykpIDwgKGlucHV0TGVuIDw8IDMpKSB0aGlzLmNvdW50WzFdKys7XHJcbiAgICAgICAgdGhpcy5jb3VudFsxXSArPSAoaW5wdXRMZW4gPj4gMjkpO1xyXG5cclxuICAgICAgICAvKiBUcmFuc2Zvcm0gYXMgbWFueSB0aW1lcyBhcyBwb3NzaWJsZSAqL1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgKyA2MyA8IGlucHV0TGVuOyBpICs9IDY0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSBpbmRleDsgaiA8IDY0OyBqKyspXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlcltqXSA9IGRhdGEuY2hhckNvZGVBdChjdXJwb3MrKyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhMjU2X3RyYW5zZm9ybSgpO1xyXG4gICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBCdWZmZXIgcmVtYWluaW5nIGlucHV0ICovXHJcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHJlbWFpbmRlcjsgaisrKVxyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcltqXSA9IGRhdGEuY2hhckNvZGVBdChjdXJwb3MrKyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRmluaXNoIHRoZSBjb21wdXRhdGlvbiBieSBvcGVyYXRpb25zIHN1Y2ggYXMgcGFkZGluZyAqL1xyXG4gICAgc2hhMjU2X2ZpbmFsKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9ICgodGhpcy5jb3VudFswXSA+PiAzKSAmIDB4M2YpO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyW2luZGV4KytdID0gMHg4MDtcclxuICAgICAgICBpZiAoaW5kZXggPD0gNTYpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4OyBpIDwgNTY7IGkrKylcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyW2ldID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gaW5kZXg7IGkgPCA2NDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXJbaV0gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNoYTI1Nl90cmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1NjsgaSsrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXJbaV0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJ1ZmZlcls1Nl0gPSAodGhpcy5jb3VudFsxXSA+Pj4gMjQpICYgMHhmZjtcclxuICAgICAgICB0aGlzLmJ1ZmZlcls1N10gPSAodGhpcy5jb3VudFsxXSA+Pj4gMTYpICYgMHhmZjtcclxuICAgICAgICB0aGlzLmJ1ZmZlcls1OF0gPSAodGhpcy5jb3VudFsxXSA+Pj4gOCkgJiAweGZmO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyWzU5XSA9IHRoaXMuY291bnRbMV0gJiAweGZmO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyWzYwXSA9ICh0aGlzLmNvdW50WzBdID4+PiAyNCkgJiAweGZmO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyWzYxXSA9ICh0aGlzLmNvdW50WzBdID4+PiAxNikgJiAweGZmO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyWzYyXSA9ICh0aGlzLmNvdW50WzBdID4+PiA4KSAmIDB4ZmY7XHJcbiAgICAgICAgdGhpcy5idWZmZXJbNjNdID0gdGhpcy5jb3VudFswXSAmIDB4ZmY7XHJcbiAgICAgICAgdGhpcy5zaGEyNTZfdHJhbnNmb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogU3BsaXQgdGhlIGludGVybmFsIGhhc2ggdmFsdWVzIGludG8gYW4gYXJyYXkgb2YgYnl0ZXMgKi9cclxuICAgIHNoYTI1Nl9lbmNvZGVfYnl0ZXMoKSB7XHJcbiAgICAgICAgdmFyIGogPSAwO1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgQXJyYXkoMzIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIG91dHB1dFtqKytdID0gKCh0aGlzLmloYXNoW2ldID4+PiAyNCkgJiAweGZmKTtcclxuICAgICAgICAgICAgb3V0cHV0W2orK10gPSAoKHRoaXMuaWhhc2hbaV0gPj4+IDE2KSAmIDB4ZmYpO1xyXG4gICAgICAgICAgICBvdXRwdXRbaisrXSA9ICgodGhpcy5paGFzaFtpXSA+Pj4gOCkgJiAweGZmKTtcclxuICAgICAgICAgICAgb3V0cHV0W2orK10gPSAodGhpcy5paGFzaFtpXSAmIDB4ZmYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEdldCB0aGUgaW50ZXJuYWwgaGFzaCBhcyBhIGhleCBzdHJpbmcgKi9cclxuICAgIHNoYTI1Nl9lbmNvZGVfaGV4KCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgU3RyaW5nKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDI4OyBqID49IDA7IGogLT0gNClcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSB0aGlzLnNoYTI1Nl9oZXhfZGlnaXRzLmNoYXJBdCgodGhpcy5paGFzaFtpXSA+Pj4gaikgJiAweDBmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNYWluIGZ1bmN0aW9uOiByZXR1cm5zIGEgaGV4IHN0cmluZyByZXByZXNlbnRpbmcgdGhlIFNIQTI1NiB2YWx1ZSBvZiB0aGVcclxuICAgIGdpdmVuIGRhdGEgKi9cclxuICAgIHNoYTI1Nl9kaWdlc3QoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2hhMjU2X2luaXQoKTtcclxuICAgICAgICB0aGlzLnNoYTI1Nl91cGRhdGUoZGF0YSwgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuc2hhMjU2X2ZpbmFsKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hhMjU2X2VuY29kZV9oZXgoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiB0ZXN0IGlmIHRoZSBKUy1pbnRlcnByZXRlciBpcyB3b3JraW5nIHByb3Blcmx5ICovXHJcbiAgICBzaGEyNTZfc2VsZl90ZXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNoYTI1Nl9kaWdlc3QoXCJtZXNzYWdlIGRpZ2VzdFwiKSA9PVxyXG4gICAgICAgICAgICBcImY3ODQ2ZjU1Y2YyM2UxNGVlYmVhYjViNGUxNTUwY2FkNWI1MDllMzM0OGZiYzRlZmEzYTE0MTNkMzkzY2I2NTBcIjtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDbG50S1lDIHtcclxuICAgIGVuY0VtYWlsSUQ6IG51bGwgfCBzdHJpbmcsXHJcbiAgICBoc2hQVzogbnVsbCB8IHN0cmluZyxcclxuICAgIHN1YkRhdGU/OiBudWxsIHwgc3RyaW5nLFxyXG4gICAgY2xudENyZWF0RGF0ZTogbnVsbCB8IHN0cmluZyxcclxuICAgIGNsbnRWYWxLWUNEYXRlPzogbnVsbCB8IHN0cmluZyxcclxuICAgIGVuY0xlZ2FsTmFtZUlEOiBudWxsIHwgc3RyaW5nLFxyXG4gICAgZW5jTGVnYWxJRENyZWQ/OiBudWxsIHwgc3RyaW5nXHJcbiAgICBwaG90bz86IHtcclxuICAgICAgICBwaG90b0lERnJvbnRVUkw/OiBudWxsIHwgc3RyaW5nLFxyXG4gICAgICAgIHBob3RvSURCYWNrVVJMPzogbnVsbCB8IHN0cmluZyxcclxuICAgICAgICBwaG90b0lEc1VSTHNEYXRlZD86IG51bGwgfCBzdHJpbmcsXHJcbiAgICAgICAgcmVjZW50RmFjZVZlcmlmaWVkSURVUkw/OiBudWxsIHwgc3RyaW5nLFxyXG4gICAgICAgIHJlY2VudEZhY2VWZXJpZmllZElEVVJMRGF0ZWQ/OiBudWxsIHwgc3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZ2VuZGVyPzogbnVsbCB8IHN0cmluZyxcclxuICAgIGVuY0RPQj86IG51bGwgfCBzdHJpbmcsXHJcbiAgICBuYXRpb25hbGl0eT86IG51bGwgfCBzdHJpbmcsXHJcbiAgICBhZGRyZXNzPzoge1xyXG4gICAgICAgIHBvc3RDb2RlPzogbnVsbCB8IHN0cmluZyxcclxuICAgICAgICBlbmNQb3N0U3RyZWV0PzogbnVsbCB8IHN0cmluZyxcclxuICAgICAgICBwb3N0QmxvY2s/OiBudWxsIHwgc3RyaW5nLFxyXG4gICAgICAgIGVuY1Bvc3RVbml0PzogbnVsbCB8IHN0cmluZ1xyXG4gICAgfSxcclxuICAgIGVuY01vYmlsZU51bUlEPzogbnVsbCB8IHN0cmluZyxcclxuICAgIGJhbms/OiB7XHJcbiAgICAgICAgZW5jQmFua05hbWU/OiBudWxsIHwgc3RyaW5nLFxyXG4gICAgICAgIGJhbmtTY2FuU3RhdGVtdFVSTD86IG51bGwgfCBzdHJpbmcsXHJcbiAgICAgICAgYmFua1NjYW5TdGF0ZW10VVJMRGF0ZWQ/OiBudWxsIHwgc3RyaW5nLFxyXG4gICAgICAgIGVuY0JhbmtTY2FuU3RhdGVtdEJhbD86IG51bGwgfCBzdHJpbmcsXHJcbiAgICAgICAgZW5jQmFua0FjY3Q/OiBudWxsIHwgc3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGV4dEFubm90Tm90YXJ5T3RoZXJzPzogbnVsbCB8IHN0cmluZyxcclxuICAgIGNsbnROb3Rlcz86IG51bGwgfCBzdHJpbmcsXHJcbiAgICBpc0RlbGV0ZWQ/OiBudWxsIHwgc3RyaW5nLFxyXG4gICAgaXNMb2dnZWRJbj86IG51bGwgfCBzdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsbnRLWUNEaXNwIHtcclxuICAgIGVtYWlsSUQ6IG51bGwgfCBzdHJpbmcsXHJcbiAgICBsZWdhbE5hbWVJRDogbnVsbCB8IHN0cmluZyxcclxuICAgIGxlZ2FsSURDcmVkPzogbnVsbCB8IHN0cmluZyxcclxuICAgIERPQjogbnVsbCB8IHN0cmluZ1xyXG4gICAgYWRkcmVzcz86IHtcclxuICAgICAgICBwb3N0U3RyZWV0PzogbnVsbCB8IHN0cmluZyxcclxuICAgICAgICBwb3N0VW5pdD86IG51bGwgfCBzdHJpbmdcclxuICAgIH0sXHJcbiAgICBtb2JpbGVOdW1JRDogbnVsbCB8IHN0cmluZyxcclxuICAgIGJhbms/OiB7XHJcbiAgICAgICAgYmFua05hbWU/OiBudWxsIHwgc3RyaW5nLFxyXG4gICAgICAgIGJhbmtTY2FuU3RhdGVtdEJhbD86IG51bGwgfCBzdHJpbmcsXHJcbiAgICAgICAgYmFua0FjY3Q/OiBudWxsIHwgc3RyaW5nXHJcbiAgICB9LFxyXG59XHJcbiJdfQ==