"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PreventUnsavedChangesGuard = (function () {
    function PreventUnsavedChangesGuard() {
    }
    PreventUnsavedChangesGuard.prototype.canDeactivate = function (component) {
        if (component.newuserform.dirty)
            return confirm("You have unsaved chnages. Are you sure you want to navigate away?");
        return true;
    };
    return PreventUnsavedChangesGuard;
}());
exports.PreventUnsavedChangesGuard = PreventUnsavedChangesGuard;
//# sourceMappingURL=prevent-unsaved-changes-guard.service.js.map