import {
  Component,
  EventEmitter,
  forwardRef,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  // Outputs
  @Output() changeValue = new EventEmitter<boolean>();

  checked: boolean = false;
  onChange = (_: any) => {};
  onTouch = () => {};

  /**
   * Triggered when checkbox state changes
   *
   * @param {boolean} e
   */
   onCheckboxChange(e: boolean) {
    this.checked = e;
    this.onChange(e);
    this.changeValue.emit(e);
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
   writeValue(checked: boolean) {
    this.checked = checked;
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
