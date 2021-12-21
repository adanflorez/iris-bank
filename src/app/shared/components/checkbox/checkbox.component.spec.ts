import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('register on touched', () => {
    const fn = () => {}
    component.registerOnTouched(fn);
    expect(component.onTouch).toEqual(fn);
  });

  it('register on change', () => {
    const fn = () => {}
    component.registerOnChange(fn);
    expect(component.onChange).toEqual(fn);
  });

  it('this.checked must be equal to value', () => {
    component.writeValue(true);
    expect(component.checked).toBeTrue;
  });

  it('this.checked equal to new value', () => {
    component.onCheckboxChange(true)
    expect(component.checked).toBeTrue;
  })
});
