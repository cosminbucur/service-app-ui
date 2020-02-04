import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragepointComponent } from './storagepoint.component';

describe('StoragepointComponent', () => {
  let component: StoragepointComponent;
  let fixture: ComponentFixture<StoragepointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoragepointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragepointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
