"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var emailValidators_1 = require("./emailValidators");
var router_1 = require("@angular/router");
var users_service_1 = require("./../users.service");
var NewUserFormComponent = (function () {
    function NewUserFormComponent(fb, _router, _userService, _activatedRoute) {
        var _this = this;
        this._router = _router;
        this._userService = _userService;
        this._activatedRoute = _activatedRoute;
        this.isLoading = true;
        this.users = {};
        this.address = {};
        this.title = "Add";
        this.buttonText = "Save";
        this.newuserform = fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, emailValidators_1.EmailValidators.emailFormatInvalid])],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
        this._activatedRoute.params.subscribe(function (params) {
            _this.id = +params["id"];
        });
        this.title = this.id ? "Edit" : "Add";
        this.buttonText = this.id ? "Update" : "Create";
        if (!this.id)
            return;
        this._userService.getUserData(this.id)
            .subscribe(function (users) {
            _this.isLoading = false;
            _this.users = users;
            _this.address = users.address;
        }, function (response) {
            if (response.status == 404) {
                _this._router.navigate(['NotFound']);
            }
        });
    }
    NewUserFormComponent.prototype.saveUserData = function () {
        var _this = this;
        if (this.id) {
            this._userService.updateUsers(this.newuserform.value, this.id)
                .subscribe(function (x) {
                _this.newuserform.markAsPristine({ onlySelf: true });
                _this._router.navigate(['/users/']);
            });
        }
        else {
            // console.log(this.newuserform.value);
            this._userService.addUsers(this.newuserform.value)
                .subscribe(function (x) {
                _this.newuserform.markAsPristine({ onlySelf: true });
                _this._router.navigate(['/users/']);
            });
        }
    };
    return NewUserFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NewUserFormComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NewUserFormComponent.prototype, "buttonText", void 0);
NewUserFormComponent = __decorate([
    core_1.Component({
        selector: 'newuserform',
        templateUrl: './app/users/newuser/newuserform.component.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, users_service_1.UsersService, router_1.ActivatedRoute])
], NewUserFormComponent);
exports.NewUserFormComponent = NewUserFormComponent;
//# sourceMappingURL=newuserform.component.js.map