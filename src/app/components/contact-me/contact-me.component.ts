import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  @ViewChild('resizableElement', { static:true}) resizableElement!: ElementRef;
 
  private isResizing = false

  onResizeMouseDown(event: MouseEvent): void {
    this.isResizing = true;
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isResizing) return;

    const element = this.resizableElement.nativeElement;

    const rect = element.getBoundingClientRect();

    const newWidth = event.clientX - rect.left;
    const newHeight = event.clientY - rect.top;

    console.log(newWidth)

    const minValue = 205;

    element.style.width = `${Math.max(newWidth, minValue)}px`
    element.style.height = `${Math.max(newHeight, minValue - 140)}px`
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isResizing = false;
  }
}
