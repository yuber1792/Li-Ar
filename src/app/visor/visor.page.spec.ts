import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorPage } from './visor.page';

describe('VisorPage', () => {
  let component: VisorPage;
  let fixture: ComponentFixture<VisorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
