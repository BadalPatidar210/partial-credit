const crypto = require('crypto');

const digits = '0123456789';
const lowerCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseAlphabets = lowerCaseAlphabets.toUpperCase();
const specialChars = '#&@';

const PasscodeGenerator = {
    /**
     * 
     * @param {*} length 
     * @param {*} options 
     * @returns 
     */
    generate(length, options) {
        const passcodeLength = length || 10;
        const generateOptions = options || {};

        generateOptions.digits = Object.prototype.hasOwnProperty.call(options, 'digits') ? options.digits : true;
        generateOptions.upperCaseAlphabets = Object.prototype.hasOwnProperty.call(options, 'upperCaseAlphabets') ? options.upperCaseAlphabets : true;
        generateOptions.specialChars = Object.prototype.hasOwnProperty.call(options, 'specialChars') ? options.specialChars : true;

        const allowedDigits = (generateOptions.digits || '') && digits;
        const allowedUpperCaseAlphabets = (generateOptions.upperCaseAlphabets || '') && upperCaseAlphabets;
        const allowedSpecialChars = (generateOptions.specialChars || '') && specialChars;
        const allowsChars = `${allowedUpperCaseAlphabets}${allowedSpecialChars}${allowedDigits}`;

        let passcode = '';

        while (passcode.length < passcodeLength) {
            const charIndex = crypto.randomInt(0, allowsChars.length);
            passcode += allowsChars[charIndex];
        }

        return passcode;
    },
    /**
     *
     * @returns numeric digits of length 11
     */
    generateCustomerId() {
        return this.generate(9, {
            upperCaseAlphabets: true,
            specialChars: true,
        });
    },
};

module.exports = {
    PasscodeGenerator,
};
