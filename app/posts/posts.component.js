"use strict";
// <reference path="../typings/tsd.d.ts" />
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
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/map");
var _ = require("underscore");
var post_service_1 = require("./post.service");
var PostsComponent = (function () {
    function PostsComponent(fb, _postsService) {
        this.fb = fb;
        this._postsService = _postsService;
        this.commentsLoading = true;
        this.isVisible = false;
        this.posts = [];
        this.currentPost = {};
        this.pageSize = 10;
        this.numberOfPages = [];
        this.searchform = fb.group({
            searchtext: ['0']
        });
        var searchControl = this.searchform.controls['searchtext'];
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.getPostForUser();
        this.showUsers();
    };
    PostsComponent.prototype.showUsers = function () {
        var _this = this;
        this._postsService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    PostsComponent.prototype.showPostDetail = function (id) {
        var _this = this;
        this.currentPostId = id - 1;
        if (id) {
            this.isVisible = true;
            this.currentPost = this.posts[this.currentPostId];
            this._postsService.getComments(id)
                .subscribe(function (comments) {
                _this.commentsLoading = false;
                _this.comments = comments;
            });
        }
    };
    PostsComponent.prototype.getPostForUser = function (userId) {
        var _this = this;
        this.postLoading = true;
        this._postsService.getPostForUser(userId)
            .subscribe(function (userposts) {
            _this.postLoading = false;
            _this.posts = userposts;
            //this.pagedPost = this.getPostInPage(10);
            _this.pagedPost = _.take(_this.posts, _this.pageSize);
            _this.numberOfPages = new Array(_this.posts.length / _this.pageSize);
        });
    };
    PostsComponent.prototype.onPageChanged = function ($event) {
        var startingIndex = ($event.currpage - 1) * this.pageSize;
        this.pagedPost = _.take(_.rest(this.posts, startingIndex), this.pageSize);
    };
    PostsComponent.prototype.getPostInPage = function (page) {
        var results = [];
        var startingIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);
        for (var i = startingIndex; i < endIndex; i++) {
            results.push(this.posts[i]);
        }
        return results;
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        selector: '.posts',
        templateUrl: 'app/posts/post.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, post_service_1.PostsService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map