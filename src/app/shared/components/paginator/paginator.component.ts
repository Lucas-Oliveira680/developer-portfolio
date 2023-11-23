import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  @Input() pages: number = 1
  @Input() currentPage: number = 1
  @Output() pageChanged = new EventEmitter<number>()

  get pageNumbers(): number[] {
    return Array.from({ length: this.pages }, (_, i) => i + 1)
  }

  onPageClick(page: number): void {
    this.currentPage = page
    this.pageChanged.emit(page)
  }

  isActive(page: number): boolean {
    return this.currentPage === page
  }
}
