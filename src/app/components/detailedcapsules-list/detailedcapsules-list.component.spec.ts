import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedcapsulesListComponent } from './detailedcapsules-list.component';

describe('DetailedcapsulesListComponent', () => {
  let component: DetailedcapsulesListComponent;
  let fixture: ComponentFixture<DetailedcapsulesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedcapsulesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedcapsulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
