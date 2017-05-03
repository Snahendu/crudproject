// <reference path="../typings/tsd.d.ts" />

import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx'; // imports all the the operators from Rx
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import * as _ from 'underscore';

import {PostsService} from './post.service';

@Component({
    selector: '.posts',
    templateUrl:'app/posts/post.component.html'
})

export class PostsComponent implements OnInit {

    searchform :FormGroup;
    postLoading;
    commentsLoading = true;
    isVisible = false;
    posts = [];
    currentPostId;
    currentPost = {};
    comments;
    users;
    pageSize = 10;
    pagedPost;
    numberOfPages = [];




    constructor(private fb: FormBuilder, private _postsService: PostsService){
        this.searchform = fb.group({
            searchtext:['0']
        })

        var searchControl = this.searchform.controls['searchtext'];
    }

    ngOnInit(){
        this.getPostForUser();
        this.showUsers();            
    }

    private showUsers(){
         this._postsService.getUsers()
            .subscribe(users => {               
                this.users = users;
            });
    }

    showPostDetail(id){
        this.currentPostId = id - 1;
        
        if(id){
            this.isVisible = true; 
            this.currentPost = this.posts[this.currentPostId];

            this._postsService.getComments(id)
                .subscribe(comments => {
                    this.commentsLoading = false;                
                    this.comments = comments;
                });    
        }
    }
    getPostForUser(userId?){  
        this.postLoading = true;      
        this._postsService.getPostForUser(userId)
            .subscribe(userposts => {
                this.postLoading = false;
                this.posts = userposts;
                //this.pagedPost = this.getPostInPage(10);
                this.pagedPost = _.take(this.posts, this.pageSize);
                this.numberOfPages = new Array(this.posts.length / this.pageSize);
            });
        
    }

    onPageChanged($event){        
        var startingIndex = ($event.currpage - 1) * this.pageSize;
        this.pagedPost = _.take(_.rest(this.posts, startingIndex), this.pageSize);
    }

    getPostInPage(page){
        var results = [];
        var startingIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

        for(var i=startingIndex; i<endIndex; i++){
            results.push(this.posts[i]);
        }
        return results;    

        
    }

    
}