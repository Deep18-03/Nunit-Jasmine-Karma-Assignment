export class MockStringUtils {

    
    // returns lower case
    public lowerCase(str) {
        return str.toLowerCase();
       
    }

    // returns uppercase case
    public upperCase(str) {
        return str.toUpperCase();
    }
  
    //  Add space between camelCase text.   
    public unCamelCase(str) {
        str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
        str = str.toLowerCase(); //add space between camelCase text
        return str;
      }
    // returns capitalCase case
    public capitalCase(str) {
        return this.lowerCase(str).replace(/^\w|\s\w/g, this.upperCase);
    }

    // returns removed last character string
    public  removeLastCharacter(str) {
        return str.slice(0, -1) ;
    }
}
