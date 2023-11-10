import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
@Input() color: 'primary' | 'accent-1' | 'accent-2' | 'dark' | 'light' = 'primary'
@Output() Click: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  emitClick() {
    this.Click.emit();
  }
}
