import { Component, EventEmitter, Input, Output } from '@angular/core';
import CustomSelect from 'src/app/core/models/custom-select';

type Size = 'sm' | 'lg' | undefined;

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  // Inputs
  @Input() options: CustomSelect[] = [];
  @Input() size: Size;
  // Output
  @Output() changeValue = new EventEmitter<string>();

  /**
   * Returns class for select size
   *
   * @returns {string} form-select-{size}
   */
  get classes(): string {
    return this.size ? `form-select-${this.size}` : '';
  }

  /**
   * Emit option selected to parent
   *
   * @param {string} value
   */
  onChange(value: string) {
    this.changeValue.emit(value);
  }
}
