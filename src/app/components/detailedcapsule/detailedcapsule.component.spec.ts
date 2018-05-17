import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedcapsuleComponent } from './detailedcapsule.component';

describe('DetailedcapsuleComponent', () => {
  let component: DetailedcapsuleComponent;
  let fixture: ComponentFixture<DetailedcapsuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedcapsuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedcapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
