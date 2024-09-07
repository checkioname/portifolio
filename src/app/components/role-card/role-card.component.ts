import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-role-card',
  standalone: true,
  imports: [],
  templateUrl: './role-card.component.html',
  styleUrl: './role-card.component.css'
})
export class RoleCardComponent {
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

    const rect = element.getBoundingClientRect();

    const newWidth = event.clientX - rect.left;
    const newHeight = event.clientY - rect.top;
   
    const minValue = 400;
    element.style.width = `${Math.max(newWidth,minValue)}px`
    element.style.height = `${Math.max(newHeight,minValue -100)}px` 
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isResizing = false;
  }

}
