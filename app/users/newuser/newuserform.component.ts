import {Component, Input, Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {EmailValidators} from './emailValidators';
import {Router, ActivatedRoute} from '@angular/router';
import {UsersService} from './../users.service'

@Component({
    selector: 'newuserform',
    templateUrl:'./app/users/newuser/newuserform.component.html'
})

@Injectable()
export class NewUserFormComponent { 
    newuserform: FormGroup;
    isLoading = true;
    users: any = {};
    address: any = {};
    id;
    @Input() title: string = "Add";
    @Input() buttonText: string = "Save";


    constructor(fb:FormBuilder, private _router: Router, private _userService: UsersService, private _activatedRoute: ActivatedRoute){
        this.newuserform = fb.group({
            name:['', Validators.required],
            email:['', Validators.compose([Validators.required, EmailValidators.emailFormatInvalid])],
            phone:[],
            address:fb.group({
                street:[],
                suite:[],
                city:[],
                zipcode:[]
            })
        });
        this._activatedRoute.params.subscribe(params => {
            this.id = +params["id"];
        });

        this.title = this.id? "Edit" : "Add";
        this.buttonText = this.id? "Update" : "Create";

        if(!this.id)
            return;
        
        this._userService.getUserData(this.id)
            .subscribe(users => {
                this.isLoading = false;
                this.users = users;
                this.address = users.address;
            },
            response =>{
                if(response.status == 404){
                    this._router.navigate(['NotFound']);
                }
            });

    }

    saveUserData(){
        if(this.id){
            this._userService.updateUsers(this.newuserform.value, this.id)
            .subscribe(x=>{
                this.newuserform.markAsPristine({onlySelf: true});
                this._router.navigate(['/users/']);
            });
        }
        else{
        // console.log(this.newuserform.value);
        this._userService.addUsers(this.newuserform.value)
            .subscribe(x=>{
                this.newuserform.markAsPristine({onlySelf: true});
                this._router.navigate(['/users/']);
            });
        }
        
    }
}