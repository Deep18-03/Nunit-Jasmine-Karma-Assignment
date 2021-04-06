import { ValidationUtils } from "./ValidationUtils";

describe('Utility Testing : Validation ', () => {

    // Using mocking with spy
    let validationUtils : ValidationUtils;
    let spy: any;

    beforeEach(() => {
        validationUtils=new ValidationUtils();
    });
   

    it('is this email  valid',()=>{

        // Arrange
        let inputString="deepmshah113@gmail.com";

        // Act
        spy = spyOn(validationUtils, 'isEmailValid').and.returnValue(true);
        let result=validationUtils.isEmailValid(inputString);

        // Assert
        expect(result).toBeTrue();
    });
    it('is this password is valid',()=>{

        // Arrange
        let inputString="MVSh@h113";

        // Act
        spy = spyOn(validationUtils, 'isPasswordValid').and.returnValue(true);
        let result=validationUtils.isPasswordValid(inputString);

        // Assert
        expect(result).toBeTrue();
    });

    it('is my phone is valid',()=>{
        
        // Arrange
        let inputString="21221615";

        // Act
        spy = spyOn(validationUtils, 'isPhoneValid').and.returnValue(false);
        let result=validationUtils.isPhoneValid(inputString);

        // Assert
        expect(result).toBeFalse();
    });

    it('is this pinCode  valid',()=>{
        
        // Arrange
        let inputString="221615";

        // Act
        spy = spyOn(validationUtils, 'isPinCodeValid').and.returnValue(true);
        let result=validationUtils.isPinCodeValid(inputString);

        // Assert
        expect(result).toBeTrue();
    });
    


    
   
});

