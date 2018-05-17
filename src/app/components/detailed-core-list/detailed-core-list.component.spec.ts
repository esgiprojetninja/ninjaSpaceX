import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCoreListComponent } from './detailed-core-list.component';

describe('DetailedCoreListComponent', () => {
  let component: DetailedCoreListComponent;
  let fixture: ComponentFixture<DetailedCoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedCoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
