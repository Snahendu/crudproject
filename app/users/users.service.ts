import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    private _url = "https://jsonplaceholder.typicode.com/users";
    userData;
    isAdded = false;
    isUpdated = false;
    isDeleted = false;
    
    constructor(private _http: Http){
    }
    
    getUsers() {
        return this._http.get(this._url)
            .map(res => res.json());
    }
    getUserData(id){
        return this._http.get(this._url + "/" + id + "/")
            .map(res => res.json());
    }
    addUsers(userdata) {
        return this._http.post(this._url,JSON.stringify(userdata))
            .map(res=>{ 
                if(res.status == 201){
                    this.isAdded = true;
                }
                res.json();
            });
    }
    updateUsers(userdata, id) {
        return this._http.put(this._url + "/" + id + "/",JSON.stringify(userdata))
            .map(res=>{
                if(res.status == 200){
                    return this.isUpdated = true;
                }
                res.json();
            });
    }
    deleteUsers(id) {
        return this._http.delete(this._url + "/" + id + "/",id)
            .map(res=>{
                if(res.status == 200){
                    console.log("deleted");
                    return this.isDeleted = true;
                }
            });
    }

    
    
}