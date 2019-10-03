import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoPage } from './encabezado.page';

describe('EncabezadoPage', () => {
  let component: EncabezadoPage;
  let fixture: ComponentFixture<EncabezadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
