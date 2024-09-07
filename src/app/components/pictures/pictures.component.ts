import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.css'
})
export class PicturesComponent {
  @ViewChild('resizableElement', { static:true}) resizableElement!: ElementRef;

  private isResizing = false

  onResizeMouseDown(event: MouseEvent): void {
    this.isResizing = true;
    event.preventDefault();
  }

  // evento mouse move para redimensionar card
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent):void {
    if (!this.isResizing) return;

    const element = this.resizableElement.nativeElement;

    console.log(element)

    const rect = element.getBoundingClientRect();

    const newWidth = event.clientX - rect.left;
    const newHeight = event.clientY - rect.top;
    
    const minValue = 200


    element.style.width = `${Math.max(newWidth, minValue)}px`
    element.style.height = `${Math.max(newHeight, minValue)}px` 
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isResizing = false;
  }
}
