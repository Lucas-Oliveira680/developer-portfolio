import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements AfterViewInit {
  @Input() toast!: { message: string; type: string }
  @ViewChild('toastDiv') toastDiv!: ElementRef

  ngAfterViewInit() {
    setTimeout(() => {
      this.toastDiv.nativeElement.classList.add('show')
    }, 100)
  }
}
