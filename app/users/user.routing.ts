import {Router, RouterModule} from '@angular/router';
import {PreventUnsavedChangesGuard} from './../prevent-unsaved-changes-guard.service';


import {UsersComponent} from './users.component';
import {NewUserFormComponent} from './newuser/newuserform.component';

export const usersRouting = RouterModule.forChild([
    {path: 'users/newuser', component: NewUserFormComponent, canDeactivate: [PreventUnsavedChangesGuard]},
    {path: 'users/edituser/:id', component: NewUserFormComponent},
    {path: 'users/deleteuser/:id', component: UsersComponent},
])