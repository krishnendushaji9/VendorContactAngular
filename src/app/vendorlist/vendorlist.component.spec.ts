import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorListComponent } from './vendorlist.component';

describe('VendorlistComponent', () => {
  let component: VendorListComponent;
  let fixture: ComponentFixture<VendorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
