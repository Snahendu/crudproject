import { NgModule, ModuleWithProviders , Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination

import { AppComponent }   from './app.component';

import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {NotFoundComponent} from './notfoundcomponent/notfound.component';
import {NavbarComponent} from './navbar/navbar.component';

import {UsersService} from './users/users.service';
import {PostsService} from './posts/post.service';

import {NewUserFormComponent} from './users/newuser/newuserform.component';

import {SpinnerComponent} from './ui-component/spinner/spinner.component';





import {routing} from './app.routing';
import {usersRouting} from './users/user.routing';

import {PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';


@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule, HttpModule, JsonpModule, usersRouting,  routing, Ng2PaginationModule ],
  declarations: [ AppComponent, HomeComponent, UsersComponent, PostsComponent, NotFoundComponent, NavbarComponent, NewUserFormComponent, SpinnerComponent ],
  providers: [UsersService, PostsService, PreventUnsavedChangesGuard, NewUserFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }