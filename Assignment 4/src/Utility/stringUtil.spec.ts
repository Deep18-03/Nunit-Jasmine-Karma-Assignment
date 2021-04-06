import { StringUtil } from "./stringUtil"
import { MockStringUtils } from './MockStringUtils';

describe('Testing  :String ',() =>{
    let stringUtil:StringUtil;
    let mockStringUtils:StringUtil;


    beforeEach(() =>{
        stringUtil = new StringUtil();
        mockStringUtils =new MockStringUtils();
    });

    // afterEach(() => {
    //     stringUtil=null;
    // })

    it('is this string is in lower case',()=>{

        // Arrange
        let inputString="DEEP";

        // Act
        let result=stringUtil.lowerCase(inputString);

        // Assert
        expect(result).toEqual("deep");
    });
    
    // it('is this string contains only letter',()=>{

    //     //Arrange
    //     let inputString="deep*";

    //     //Act
    //     let result=stringUtil.removeNonWord(inputString);

    //     //Assert
    //     expect(result).toEqual("deep")
    // })

    it('is this string is in upper case',()=>{

        // Arrange
        let inputString="abc";

        // Act
        let result=stringUtil.upperCase(inputString);

        // Assert
        expect(result).toEqual("ABC");
    });
    
    
    it('is this string converted to camelCase to lowercase',()=>{

        // Arrange
        let inputString="DeepShah";

        // Act
        let result=stringUtil.unCamelCase(inputString);

        // Assert
        expect(result).toEqual("deep shah");
    });

    it('is this string is in capitalCase',()=>{
        //Arrange
        let inputString="deep";

        // Act
        let result=mockStringUtils.capitalCase(inputString);

        // Assert
        expect(result).toEqual("Deep");
    })

    it('remove last character of my string',()=>{

        // Arrange
        let inputString="deep";

        // Act
        let result=mockStringUtils.removeLastCharacter(inputString);

        // Assert
        expect(result).toEqual("dee");
    });
    
})