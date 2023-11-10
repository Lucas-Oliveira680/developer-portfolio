import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
  standalone: true
})
export class TypewriterDirective implements OnInit, OnChanges {
  @Input() typingSpeed: number = 150;
  private content: string = '';
  private cursorPosition: number = 0;
  private tagContent: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initializeTyping();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['innerHTML']) {
      this.initializeTyping();
    }
  }

  private initializeTyping() {
    // Delay to wait for Angular to render the innerHTML content
    setTimeout(() => {
      this.content = this.el.nativeElement.innerHTML;
      this.el.nativeElement.innerHTML = '';
      this.cursorPosition = 0;
      this.typeContent();
    });
  }

  private typeContent() {
    if (this.cursorPosition >= this.content.length) {
      return; // End of content
    }

    if (this.content[this.cursorPosition] === '<') {
      this.processTag();
    } else {
      this.processText();
    }

    this.cursorPosition++;
    setTimeout(() => this.typeContent(), this.typingSpeed);
  }

  private processTag() {
    const tagEnd = this.content.indexOf('>', this.cursorPosition);
    if (tagEnd >= 0) {
      // Add the entire tag at once
      this.tagContent = this.content.substring(this.cursorPosition, tagEnd + 1);
      this.cursorPosition = tagEnd;
      this.el.nativeElement.innerHTML += this.tagContent;
    }
  }

  private processText() {
    this.el.nativeElement.innerHTML = this.content.substring(0, this.cursorPosition + 1);
    this.el.nativeElement.innerHTML += '<span class="typewriter-caret">|</span>';
  }
}
