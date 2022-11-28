import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoGridComponent } from './compo-grid.component';

describe('CompoGridComponent', () => {
  let component: CompoGridComponent;
  let fixture: ComponentFixture<CompoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
