import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostComponent } from './host.component';

describe('HostComponentComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let element: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element=fixture.nativeElement.querySelector('p');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("paragraph should contain default message", () => {
    expect(element.innerText).toContain("not specified");
  });

  it("paragraph should contain phone number", () => {
    component.contact = "013150956";

    fixture.detectChanges();

    expect(element.innerText).toContain("0131509560610221");
  });


});
