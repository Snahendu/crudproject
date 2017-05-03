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
var core_2 = require("@angular/core");
var PostsService = (function () {
    function PostsService(_http) {
        this._http = _http;
        this._postUrl = "http://jsonplaceholder.typicode.com/posts";
        this._userUrl = "http://jsonplaceholder.typicode.com/users";
    }
    PostsService.prototype.getPostForUser = function (userId) {
        if (!userId || userId == 0) {
            return this._http.get(this._postUrl)
                .map(function (res) { return res.json(); });
        }
        else {
            return this._http.get(this._postUrl + "?userId=" + userId)
                .map(function (res) { return res.json(); });
        }
    };
    PostsService.prototype.getComments = function (id) {
        return this._http.get(this._postUrl + "/" + id + "/comments")
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getUsers = function () {
        return this._http.get(this._userUrl)
            .map(function (res) { return res.json(); });
    };
    return PostsService;
}());
PostsService = __decorate([
    core_1.Component({}),
    core_2.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=post.service.js.map