import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service'
import {Router, ActivatedRoute} from '@angular/router';
import {NewUserFormComponent} from './newuser/newuserform.component';

@Component({
    selector: 'users',
    templateUrl:'./app/users/users.component.html',
    styles: [`
        table{
            font-size: 1em;
        }
    `]
})

export class UsersComponent implements OnInit {

    isLoading = true;
    users;
    id;
    routerLink;

    constructor(private _userService: UsersService, private _router: Router, private _activatedRoute: ActivatedRoute){
        
    }

    ngOnInit(){
        this._userService.getUsers()
            .subscribe(users => {
                this.isLoading = false;
                this.users = users;
            });
            
    }

    deleteUser(id){
        this.id = id;

        if(!this.id)
            return;

        if(confirm("You have unsaved chnages. Are you sure you want to navigate away?")){
                this._userService.deleteUsers(this.id)
                .subscribe(x=>{
                    this._router.navigate(['users']);
                });
            }
            else{
                this._router.navigate(['users']);
            }
    }

    openNewUserForm(){
        this._router.navigate(['users/newuser']);
    }
    
    
}