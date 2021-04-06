import { Component, OnInit } from '@angular/core';
import { StringSwiftService } from './string-swift.service';

@Component({
  selector: 'app-string-swift',
  templateUrl: './string-swift.component.html',
  styleUrls: ['./string-swift.component.css']
})
export class StringSwiftComponent implements OnInit {

  constructor(private stringSwift:StringSwiftService) { }

  ngOnInit(): void {
  }

   LowerCase(inputString)
   {
      return this.stringSwift.lowerCase(inputString);
   }

   UpperCase(inputString)
   {
     return this.stringSwift.upperCase(inputString);
   }
   UnCamelCase(inputString)
   {
     return this.stringSwift.unCamelCase(inputString);
   }

   CapitalCase(inputString)
   {
    return this.stringSwift.capitalCase(inputString);
   }

   RemoveLast(inputString)
   {
    return this.stringSwift.removeLastCharacter(inputString);
   }
}
