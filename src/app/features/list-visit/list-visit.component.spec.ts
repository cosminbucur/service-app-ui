import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVisitComponent } from './list-visit.component';

describe('ListVisitComponent', () => {
  let component: ListVisitComponent;
  let fixture: ComponentFixture<ListVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
