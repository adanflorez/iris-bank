import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type InputType = 'text' | 'password' | 'number' | undefined;
type Size = 'sm' | 'lg' | undefined;

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputButtonComponent),
      multi: true,
    },
  ],
})
export class InputButtonComponent implements ControlValueAccessor {
  // Inputs
  @Input() type: InputType = 'text';
  @Input() placeholder: string = '';
  @Input() size: Size;
  @Input() buttonText: string = 'button';
  @Input() disabled: boolean = false;
  // Outputs
  @Output() changeValue = new EventEmitter<string>();

  value: string = '';

  onChange = (_: any) => {};
  onTouch = () => {};

  /**
   * Returns class for control size
   *
   * @returns {string} form-control-{size}
   */
  get classes(): string {
    return this.size ? `form-control-${this.size}` : '';
  }

  /**
   * Emit current input value
   *
   * @param {string} value
   */
  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  /**
   * Emit current input value when button is clicked
   */
  buttonClick() {
    this.changeValue.emit(this.value);
  }

  /**
   *
   * Writes a new value to the element.
   *
   * This method is called by the forms API to write to the view when programmatic changes from model to view are requested.
   *
   * @param value
   *
   */
  writeValue(value: any): void {
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }
  }

  /**
   * @description
   * Registers a callback function that is called when the control's value changes in the UI.
   *
   * This method is called by the forms API on initialization to update the form model when values propagate from the view to the model.
   *
   * When implementing the registerOnChange method in your own value accessor, save the given function so your class calls it at the appropriate time
   *
   * @param {any} fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * @description
   * Registers a callback function that is called by the forms API on initialization to update the form model on blur.
   *
   * When implementing registerOnTouched in your own value accessor, save the given function so your class calls it when the control should be considered blurred or "touched".
   *
   * @param {any} fn
   */
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
