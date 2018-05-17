import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCoreComponent } from './detail-core.component';

describe('DetailCoreComponent', () => {
  let component: DetailCoreComponent;
  let fixture: ComponentFixture<DetailCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
