import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HustlerComponent } from './hustler.component';

describe('HustlerComponent', () => {
  let component: HustlerComponent;
  let fixture: ComponentFixture<HustlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HustlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HustlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
