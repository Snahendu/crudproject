import {Component} from '@angular/core';
import { Http} from '@angular/http';
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Rx'; // imports all the the operators from Rx
import {Post} from './post';


@Component({
    
})

@Injectable()
export class PostsService{

    private _postUrl = "http://jsonplaceholder.typicode.com/posts";
    private _userUrl = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http:Http){

    }

    getPostForUser(userId?): Observable<Post[]>{
        if(!userId || userId == 0){
            return this._http.get(this._postUrl)
                .map(res => res.json());
        }
        else{
            return this._http.get(this._postUrl + "?userId=" + userId)
                .map(res => res.json());
        }
        
    }

    getComments(id){
        return this._http.get(this._postUrl + "/" + id + "/comments")
            .map(res => res.json());
    }
    getUsers(): Observable<Post[]>{
        return this._http.get(this._userUrl)
            .map(res => res.json());
    }
    
}