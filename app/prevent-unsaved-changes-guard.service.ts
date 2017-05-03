import {Injectable} from '@angular/core';

import {CanDeactivate} from '@angular/router';
import {NewUserFormComponent} from './users/newuser/newuserform.component';

import {FormGroup} from '@angular/forms';

export interface GeneralFormCompoent{
    newuserform: FormGroup;
    //hasUnsavedChanges(): boolean;
}

export class PreventUnsavedChangesGuard implements CanDeactivate<GeneralFormCompoent>{

    canDeactivate(component: GeneralFormCompoent){
        if(component.newuserform.dirty)
            return confirm("You have unsaved chnages. Are you sure you want to navigate away?");

        return true;

    }
}