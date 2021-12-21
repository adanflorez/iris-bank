import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonComponent } from './input-button.component';

describe('InputButtonComponent', () => {
  let component: InputButtonComponent;
  let fixture: ComponentFixture<InputButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when change', () => {
    component.onInput('programming');
    expect(component.value).toEqual('programming');
  });

  it('should emit when button is clicked', () => {
    spyOn(component.changeValue, 'emit');
    component.buttonClick();
    expect(component.changeValue.emit).toHaveBeenCalledWith('');
  });

  it('This.value must be equal to value', () => {
    component.writeValue('hello');
    expect(component.value).toEqual('hello');
  });

  it('value is null then empty', () => {
    component.writeValue(null);
    expect(component.value).toEqual('');
  });

  it('register on touched', () => {
    const fn = () => {};
    component.registerOnTouched(fn);
    expect(component.onTouch).toEqual(fn);
  });

  it('register on change', () => {
    const fn = () => {};
    component.registerOnChange(fn);
    expect(component.onChange).toEqual(fn);
  });
});
