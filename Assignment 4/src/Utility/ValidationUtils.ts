export class ValidationUtils{
    isEmailValid(email): boolean {
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExpression.test(String(email).toLowerCase());
    }
    isPasswordValid(password):boolean{
        const   regularExpression=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regularExpression.test(String(password));
    }
    isPhoneValid(phone): boolean {
        const regularExpression = /[0-9\+\-\ ]/;
        return regularExpression.test(String(phone).toLowerCase());
    }
   
    isPinCodeValid(pincode):boolean{
        const regularExpression=/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
        return regularExpression.test(String(pincode));
    }

 
  
}