import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
  standalone: true
})
export class TypewriterDirective implements AfterViewInit, OnChanges {
  @Input() typingSpeed: number = 150;
  @Input() textContent: string = ''; // New input for text content
  private cursorPosition: number = 0;
  private tagContent: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.initializeTyping();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['textContent']) {
      this.initializeTyping();
    }
  }

  private initializeTyping() {
    this.el.nativeElement.innerHTML = '';
    this.cursorPosition = 0;
    this.typeContent();
  }

  private typeContent() {
    if (this.cursorPosition >= this.textContent.length) {
      return; // End of content
    }

    if (this.textContent[this.cursorPosition] === '<') {
      this.processTag();
    } else {
      this.processText();
    }

    this.cursorPosition++;
    setTimeout(() => this.typeContent(), this.typingSpeed);
  }

  private processTag() {
    const tagEnd = this.textContent.indexOf('>', this.cursorPosition);
    if (tagEnd >= 0) {
      // Add the entire tag at once
      this.tagContent = this.textContent.substring(this.cursorPosition, tagEnd + 1);
      this.cursorPosition = tagEnd;
      this.el.nativeElement.innerHTML += this.tagContent;
    }
  }

  private processText() {
    this.el.nativeElement.innerHTML = this.textContent.substring(0, this.cursorPosition + 1);
    this.el.nativeElement.innerHTML += '<span class="typewriter-caret">|</span>';
  }
}
