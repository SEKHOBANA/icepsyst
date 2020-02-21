import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicaionComponent } from './applicaion.component';

describe('ApplicaionComponent', () => {
  let component: ApplicaionComponent;
  let fixture: ComponentFixture<ApplicaionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicaionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
