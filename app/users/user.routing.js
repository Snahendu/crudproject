"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var prevent_unsaved_changes_guard_service_1 = require("./../prevent-unsaved-changes-guard.service");
var users_component_1 = require("./users.component");
var newuserform_component_1 = require("./newuser/newuserform.component");
exports.usersRouting = router_1.RouterModule.forChild([
    { path: 'users/newuser', component: newuserform_component_1.NewUserFormComponent, canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard] },
    { path: 'users/edituser/:id', component: newuserform_component_1.NewUserFormComponent },
    { path: 'users/deleteuser/:id', component: users_component_1.UsersComponent },
]);
//# sourceMappingURL=user.routing.js.map