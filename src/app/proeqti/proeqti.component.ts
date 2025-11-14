import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-proeqti',
  standalone: false,
  templateUrl: './proeqti.component.html',
  styleUrl: './proeqti.component.css',
})
export class ProeqtiComponent implements OnInit, OnDestroy {
  images = [
    '/assets/project1.jpg',
    '/assets/projetct2.jpg',
    '/assets/project3.jpg',
    '/assets/MainPhoto.jpg',
  ];

  currentIndex = 0;
  autoPlayInterval: any;
  touchStartX = 0;
  touchEndX = 0;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 3000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  onMouseEnter() {
    this.stopAutoPlay();
  }

  onMouseLeave() {
    this.startAutoPlay();
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
    this.stopAutoPlay();
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
    this.startAutoPlay();
  }

  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        this.next();
      } else {
        // Swipe right - previous slide
        this.prev();
      }
    }
  }
}