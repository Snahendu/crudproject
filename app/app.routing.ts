import {Router, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {NotFoundComponent} from './notfoundcomponent/notfound.component';


export const routing = RouterModule.forRoot([
    {path: 'home', component: HomeComponent, pathMatch:'full'},
    {path: 'users', component: UsersComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'NotFound', component: NotFoundComponent},
    {path: '**', redirectTo: 'home'},
])