import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesHomeComponent } from './launches-home.component';

describe('LaunchesHomeComponent', () => {
  let component: LaunchesHomeComponent;
  let fixture: ComponentFixture<LaunchesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
