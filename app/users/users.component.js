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
var users_service_1 = require("./users.service");
var router_1 = require("@angular/router");
var UsersComponent = (function () {
    function UsersComponent(_userService, _router, _activatedRoute) {
        this._userService = _userService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.isLoading = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (users) {
            _this.isLoading = false;
            _this.users = users;
        });
    };
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.id = id;
        if (!this.id)
            return;
        if (confirm("You have unsaved chnages. Are you sure you want to navigate away?")) {
            this._userService.deleteUsers(this.id)
                .subscribe(function (x) {
                _this._router.navigate(['users']);
            });
        }
        else {
            this._router.navigate(['users']);
        }
    };
    UsersComponent.prototype.openNewUserForm = function () {
        this._router.navigate(['users/newuser']);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'users',
        templateUrl: './app/users/users.component.html',
        styles: ["\n        table{\n            font-size: 1em;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService, router_1.Router, router_1.ActivatedRoute])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map