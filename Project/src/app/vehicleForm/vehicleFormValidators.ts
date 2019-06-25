import { AbstractControl, ValidationErrors } from '@angular/forms';


export class vehicleFormValidators{
    
    static NoofSeatsValidator(control:AbstractControl) : ValidationErrors |null{
        if(!(/^[0-9]{1,2}[:.,-]?$/.test(control.value))){
            return {NoofSeatsInvalid:true};
        }
        return null;
    }

    static FuelTypeValidator(control:AbstractControl) : ValidationErrors |null{
        if(!(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(control.value))){
            return {FuelTypeInvalid:true};
        }
        return null;
    }

    static ManufactureYearValidator(control:AbstractControl) : ValidationErrors |null{
        if(!(/^[0-9]{4}[:.,-]?$/.test(control.value))){
            return {ManufactureYearInvalid:true};
        }
        return null;
    }

    static InstituteYearValidator(control:AbstractControl) : ValidationErrors |null{
        if(!(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(control.value))){
            return {InstituteInvalid:true};
        }
        return null;
    }

    // static PhoneNumberValidator(control:AbstractControl) : ValidationErrors |null{
    //     if(!(/^7|0|(?:\+94)[0-9]{9,10}$/.test(control.value))){
    //         return {PhoneNumberInvalid:true};
    //     }
    //     return null;
    // }

    
    // static NameValidator(control:AbstractControl) : ValidationErrors |null{
    //     if(!(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(control.value))){
    //         return {NameInvalid:true};
    //     }
    //     return null;
    // }
    // static vehicleNoValidator(control:AbstractControl) : ValidationErrors |null{
    //     if(!((/^([A-Za-z]{2})([-]{1})([A-Za-z]{2})([-]{1})(\d{4})$/.test(control.value))||( /^([A-Za-z]{2})([-]{1})([A-Za-z]{3})([-]{1})(\d{4})$/.test(control.value)))){
    //         return {vehicleNoInvalid:true};
    //     }
    //     return null;
    // }
}