import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringSwiftComponent } from './string-swift.component';

class MockStringSwiftService
{
  lowerCase(str) {
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
describe('StringSwiftComponent', () => {
  let component: StringSwiftComponent;
  let service : MockStringSwiftService;
  let spy : any;

  beforeEach(async () => {
    service = new MockStringSwiftService();
    component = new StringSwiftComponent(service);
  });

  
  it('is this string is in Lower case',()=>{
    spy = spyOn(service,'lowerCase').and.returnValue("deep");
    expect(component.LowerCase("Deep")).toEqual("deep");
  })

  it('is this string  Upper case',()=>{
    spy = spyOn(service,'upperCase').and.returnValue("Deep");
    expect(component.UpperCase("deep")).toEqual("Deep");
  })

  it('is this string  Camel case',()=>{
    spy = spyOn(service,'unCamelCase').and.returnValue("deep shah");
    expect(component.UnCamelCase("DeepShah")).toEqual("deep shah");
  })

  it('is this string  Capital case',()=>{
    spy = spyOn(service,'unCamelCase').and.returnValue("Deep");
    expect(component.UnCamelCase("deep")).toEqual("Deep");
  })

  it('is this string  LastChar case',()=>{
    spy = spyOn(service,'removeLastCharacter').and.returnValue("Dee");
    expect(component.RemoveLast("Deep")).toEqual("Dee");
  })
});
