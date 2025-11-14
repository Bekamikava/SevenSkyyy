import { Component } from '@angular/core';

@Component({
  selector: 'app-floor2',
  standalone: false,
  templateUrl: './floor2.component.html',
  styleUrl: './floor2.component.css',
})
export class Floor2Component {
  isModalOpen = false;
  selectedCard: any = null;
  imageScale = 1;

  // Pan (drag) ფუნქციისთვის
  imageTranslateX = 0;
  imageTranslateY = 0;
  private isDragging = false;
  private dragStartX = 0;
  private dragStartY = 0;

  // Touch zoom-ისთვის
  private lastTouchDistance = 0;
  
  // Touch pan (drag) ისთვის
  private touchDragStartX = 0;
  private touchDragStartY = 0;
  private isTouchDragging = false;

  cardsData = [
    {
      image: '/assets/Screenshot 2025-10-21 at 11.50.30 AM-page-012.jpg',
      title: 'საერთო ფართი 47.8 მ²',
      shortDescription: 'ერთსაძინებლიანი ბინა აივნით.\nშედგება სტუდიოს, ერთი საძინებლის, სველი წერტილისა და აივნისგან.',

      fullDescription: `სტუდიო: 26.9 მ²
საძინებელი: 11.8 მ²
სველი წერტილი: 3.6 მ²
აივანი: 5.5 მ²`

    },
    {
      image: '/assets/Screenshot 2025-10-21 at 11.50.30 AM-page-013.jpg',
      title: 'საერთო ფართი 56.9 მ²',
      shortDescription: 'ორსაძინებლიანი ბინა აივნებით.\nშედგება სტუდიოს, ორი საძინებლის, სველი წერტილისა და ორი აივნისგან.',

       fullDescription: `სტუდიო: 20.1 მ²
საძინებელი 1: 8.9 მ²
საძინებელი 2: 9.5 მ²
სველი წერტილი: 4.2 მ²
აივანი 1: 7.7 მ²
აივანი 2: 6.5 მ²`

    },
    {
      image: '/assets/Screenshot 2025-10-21 at 11.50.30 AM-page-014.jpg',
      title: 'საერთო ფართი 50.7 მ²',
      shortDescription: 'ერთსაძინებლიანი ბინა აივნით.\nშედგება სტუდიოს, ერთი საძინებლის, სველი წერტილისა და აივნისგან.',

      fullDescription: `სტუდიო: 25.1 მ²
საძინებელი: 11.1 მ²
სველი წერტილი: 5.9 მ²
აივანი: 8.2 მ²`

    },
    {
      image: '/assets/Screenshot 2025-10-21 at 11.50.30 AM-page-015.jpg',
      title: 'საერთო ფართი 82.7 მ²',
      shortDescription: 'ორსაძინებლიანი ბინა აივნებით.\nშედგება სტუდიოს, ორი საძინებლის, სველი წერტილისა და ორი აივნისგან.',

     fullDescription: `სტუდიო: 34.9 მ²
საძინებელი 1: 14.0 მ²
საძინებელი 2: 13.6 მ²
სველი წერტილი: 4.9 მ²
აივანი 1: 7.6 მ²
აივანი 2: 7.7 მ²`


    },
      
  ];

  openModal(card: any): void {
    this.selectedCard = card;
    this.isModalOpen = true;
    this.imageScale = 1;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.imageScale = 1;
    this.imageTranslateX = 0;
    this.imageTranslateY = 0;
    this.isDragging = false;
    this.isTouchDragging = false;
  }

  // Desktop: Mouse wheel zoom
  onImageWheel(event: WheelEvent): void {
    event.preventDefault();

    const img = event.target as HTMLElement;

    // მაუსის პოზიცია ელემენტის შიგნით
    const rect = img.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width) * 100;
    const offsetY = ((event.clientY - rect.top) / rect.height) * 100;

    // დინამიურად ვცვლით transform-origin-ს
    img.style.transformOrigin = `${offsetX}% ${offsetY}%`;

    // ზუმის სიჩქარე
    const delta = event.deltaY * -0.001;
    this.imageScale = Math.min(Math.max(0.5, this.imageScale + delta), 4);
  }

  // Mouse drag to pan
  onMouseDown(event: MouseEvent): void {
    if (this.imageScale > 1) {
      this.isDragging = true;
      this.dragStartX = event.clientX - this.imageTranslateX;
      this.dragStartY = event.clientY - this.imageTranslateY;
      event.preventDefault();
    }
  }

  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      this.imageTranslateX = event.clientX - this.dragStartX;
      this.imageTranslateY = event.clientY - this.dragStartY;
      event.preventDefault();
    }
  }

  onMouseUp(): void {
    this.isDragging = false;
  }

  // Mobile: Touch start (pinch დაწყება + drag დაწყება)
  onTouchStart(event: TouchEvent): void {
    if (event.touches.length === 2) {
      // Pinch zoom
      event.preventDefault();
      this.lastTouchDistance = this.getTouchDistance(event);
      this.isTouchDragging = false;
    } else if (event.touches.length === 1 && this.imageScale > 1) {
      // Single touch drag (როცა zoom-ია)
      this.isTouchDragging = true;
      this.touchDragStartX = event.touches[0].clientX - this.imageTranslateX;
      this.touchDragStartY = event.touches[0].clientY - this.imageTranslateY;
    }
  }

  // Mobile: Touch move (pinch zoom + drag)
  onTouchMove(event: TouchEvent): void {
    if (event.touches.length === 2) {
      // Pinch zoom
      event.preventDefault();

      const currentDistance = this.getTouchDistance(event);
      const delta = (currentDistance - this.lastTouchDistance) * 0.01;

      this.imageScale = Math.min(Math.max(0.5, this.imageScale + delta), 4);
      this.lastTouchDistance = currentDistance;
    } else if (event.touches.length === 1 && this.isTouchDragging && this.imageScale > 1) {
      // Single touch drag
      event.preventDefault();
      this.imageTranslateX = event.touches[0].clientX - this.touchDragStartX;
      this.imageTranslateY = event.touches[0].clientY - this.touchDragStartY;
    }
  }

  // Touch end
  onTouchEnd(event: TouchEvent): void {
    if (event.touches.length < 2) {
      this.isTouchDragging = false;
    }
    
    // Double tap zoom
    this.onImageTap(event);
  }

  // Touch distance გამოთვლა (2 თითს შორის)
  private getTouchDistance(event: TouchEvent): number {
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];

    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;

    return Math.sqrt(dx * dx + dy * dy);
  }

  // Double tap zoom (ალტერნატივა)
  private lastTapTime = 0;
  onImageTap(event: TouchEvent): void {
    const currentTime = new Date().getTime();
    const tapInterval = currentTime - this.lastTapTime;

    if (tapInterval < 300 && tapInterval > 0) {
      // Double tap detected
      event.preventDefault();
      this.imageScale = this.imageScale === 1 ? 2 : 1;
    }

    this.lastTapTime = currentTime;
  }
}