import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulesListComponent } from './capsules-list.component';

describe('CapsulesListComponent', () => {
  let component: CapsulesListComponent;
  let fixture: ComponentFixture<CapsulesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsulesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
