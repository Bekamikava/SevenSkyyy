import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToFooter(): void {
    this.viewportScroller.scrollToAnchor('footer');
  }
scrollOrHighlightRightSide() {
    const element = document.querySelector('.right-side') as HTMLElement;
    if (!element) return;

    if (window.innerWidth <= 768) {
      // Mobile → smooth scroll
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Desktop → ჰაილაითი background–ის მეშვეობით
      element.classList.add('highlight');

      // 1.5 წამში ავტომატურად აშორებს ჰაილაითს
      setTimeout(() => {
        element.classList.remove('highlight');
      }, 3500);
    }
  }
}
