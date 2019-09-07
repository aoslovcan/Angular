import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetionTwoComponent } from './setion-two.component';

describe('SetionTwoComponent', () => {
  let component: SetionTwoComponent;
  let fixture: ComponentFixture<SetionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
