/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TheMindComponent } from './the-Mind.component';

describe('TheMindComponent', () => {
  let component: TheMindComponent;
  let fixture: ComponentFixture<TheMindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheMindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
