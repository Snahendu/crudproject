"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var ng2_pagination_1 = require("ng2-pagination"); //importing ng2-pagination
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var users_component_1 = require("./users/users.component");
var posts_component_1 = require("./posts/posts.component");
var notfound_component_1 = require("./notfoundcomponent/notfound.component");
var navbar_component_1 = require("./navbar/navbar.component");
var users_service_1 = require("./users/users.service");
var post_service_1 = require("./posts/post.service");
var newuserform_component_1 = require("./users/newuser/newuserform.component");
var spinner_component_1 = require("./ui-component/spinner/spinner.component");
var app_routing_1 = require("./app.routing");
var user_routing_1 = require("./users/user.routing");
var prevent_unsaved_changes_guard_service_1 = require("./prevent-unsaved-changes-guard.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, ng_bootstrap_1.NgbModule.forRoot(), forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, http_1.JsonpModule, user_routing_1.usersRouting, app_routing_1.routing, ng2_pagination_1.Ng2PaginationModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, users_component_1.UsersComponent, posts_component_1.PostsComponent, notfound_component_1.NotFoundComponent, navbar_component_1.NavbarComponent, newuserform_component_1.NewUserFormComponent, spinner_component_1.SpinnerComponent],
        providers: [users_service_1.UsersService, post_service_1.PostsService, prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard, newuserform_component_1.NewUserFormComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map