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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UsersService = (function () {
    function UsersService(_http) {
        this._http = _http;
        this._url = "https://jsonplaceholder.typicode.com/users";
        this.isAdded = false;
        this.isUpdated = false;
        this.isDeleted = false;
    }
    UsersService.prototype.getUsers = function () {
        return this._http.get(this._url)
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getUserData = function (id) {
        return this._http.get(this._url + "/" + id + "/")
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.addUsers = function (userdata) {
        var _this = this;
        return this._http.post(this._url, JSON.stringify(userdata))
            .map(function (res) {
            if (res.status == 201) {
                _this.isAdded = true;
            }
            res.json();
        });
    };
    UsersService.prototype.updateUsers = function (userdata, id) {
        var _this = this;
        return this._http.put(this._url + "/" + id + "/", JSON.stringify(userdata))
            .map(function (res) {
            if (res.status == 200) {
                return _this.isUpdated = true;
            }
            res.json();
        });
    };
    UsersService.prototype.deleteUsers = function (id) {
        var _this = this;
        return this._http.delete(this._url + "/" + id + "/", id)
            .map(function (res) {
            if (res.status == 200) {
                console.log("deleted");
                return _this.isDeleted = true;
            }
        });
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map