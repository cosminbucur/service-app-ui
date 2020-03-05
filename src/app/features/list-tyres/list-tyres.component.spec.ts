import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTyresComponent } from './list-tyres.component';

describe('ListTyresComponent', () => {
  let component: ListTyresComponent;
  let fixture: ComponentFixture<ListTyresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTyresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTyresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
