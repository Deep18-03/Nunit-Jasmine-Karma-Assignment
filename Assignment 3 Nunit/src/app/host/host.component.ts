import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-component',
  templateUrl: './host-component.component.html',
  styleUrls: ['./host-component.component.css']
})
export class HostComponent implements OnInit {

  @Input() public contact: string;

  constructor() { }

  ngOnInit() { 
    if(!this.contact) {
      this.contact = 'not provided';
    }
  }

}
