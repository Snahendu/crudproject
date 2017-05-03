"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var users_component_1 = require("./users/users.component");
var posts_component_1 = require("./posts/posts.component");
var notfound_component_1 = require("./notfoundcomponent/notfound.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: 'home', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: 'NotFound', component: notfound_component_1.NotFoundComponent },
    { path: '**', redirectTo: 'home' },
]);
//# sourceMappingURL=app.routing.js.map