import { FormControl, FormGroup } from '@angular/forms';

export class EmailValidators{
    
    static emailFormatInvalid(control:FormControl){

        var EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //if(control.value.length > 0){
            if (!EMAIL_REGEXP.test(control.value))  {
                return {emailFormatInvalid: true};
            }
            else{
                return null;
            }
        //}
    }
}