import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpalpagePage } from './ppalpage.page';

describe('PpalpagePage', () => {
  let component: PpalpagePage;
  let fixture: ComponentFixture<PpalpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpalpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpalpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
