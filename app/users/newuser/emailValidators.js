"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailValidators = (function () {
    function EmailValidators() {
    }
    EmailValidators.emailFormatInvalid = function (control) {
        var EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //if(control.value.length > 0){
        if (!EMAIL_REGEXP.test(control.value)) {
            return { emailFormatInvalid: true };
        }
        else {
            return null;
        }
        //}
    };
    return EmailValidators;
}());
exports.EmailValidators = EmailValidators;
//# sourceMappingURL=emailValidators.js.map