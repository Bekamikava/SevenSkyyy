import { Component } from '@angular/core';

@Component({
  selector: 'app-floor1',
  standalone: false,
  templateUrl: './floor1.component.html',
  styleUrl: './floor1.component.css'
})
export class Floor1Component {

 isModalOpen = false;
  selectedCard: any = null;
  imageScale = 1;

  // ← ᲐᲮᲐᲚᲘ: Touch zoom-ისთვის
  private lastTouchDistance = 0;

  cardsData = [
    {
      image: '/assets/Screenshot 2025-10-21 at 11.50.30 AM-page-002.jpg',
      title: 'საერთო ფართი 36.1 მ²',
      shortDescription:
        'ერთსაძინებლიანი ბინა ბალკონის გარეშე. შედგება საშუალო ზომის საძინებლისგან, დიდი სასტუმრო-სამზარეულოსგან და სველი წერტილისგან.',
     fullDescription: `მთლიანი ფართი: 36.1მ²;
საძინებელი: 10.0მ² - საშუალო ზომის საძინებელი ოთახი,  გარდერობითა და კომფორტული ზონით.
ცენტრალური სივრცე: 22.5მ² - დიდი სასტუმრო/სამზარეულო ზონა ღია გეგმით.

სველი წერტილი: 3.6მ² - კომფორტული აბაზანა ყველა საჭირო ელემენტით.


უპირატესობები:
საშუალო ზომის საძინებელი ოთახი

ფართო აბაზანა
ღია გეგმის დიზაინი
ოპტიმალური განლაგება`

    },
    {
      image: '/assets/Screenshot 2025-10-21 at 11.50.30 AM-page-003.jpg',
      title: 'საერთო ფართი 38.8 მ²',
       shortDescription:
        'ერთსაძინებლიანი ბინა ბალკონის გარეშე. შედგება საშუალო ზომის საძინებლისგან, დიდი სასტუმრო-სამზარეულოსგან და სველი წერტილისგან.',
     fullDescription: `მთლიანი ფართი: 38.8მ²;
საძინებელი: 12.8მ² - საშუალო ზომის საძინებელი ოთახი,  გარდერობითა და კომფორტული ზონით.
ცენტრალური სივრცე: 22.6მ² - დიდი სასტუმრო/სამზარეულო ზონა ღია გეგმით.

სველი წერტილი: 3.4მ² - კომფორტული აბაზანა ყველა საჭირო ელემენტით.


უპირატესობები:
საშუალო ზომის საძინებელი ოთახი

ფართო აბაზანა
ღია გეგმის დიზაინი
ოპტიმალური განლაგება`

    },
    {
      image: '/assets/Screenshot 2025-10-21 at 11.50.30 AM-page-004.jpg',
      title: 'საერთო ფართი 37 მ²',
      shortDescription:
        'ერთსაძინებლიანი ბინა ბალკონის გარეშე. შედგება საშუალო ზომის საძინებლისგან, დიდი სასტუმრო-სამზარეულოსგან და სველი წერტილისგან.',
     fullDescription: `მთლიანი ფართი: 36.1მ²;
საძინებელი: 13.1მ² - საშუალო ზომის საძინებელი ოთახი,  გარდერობითა და კომფორტული ზონით.
ცენტრალური სივრცე: 20.5მ² - დიდი სასტუმრო/სამზარეულო ზონა ღია გეგმით.

სველი წერტილი: 3.4მ² - კომფორტული აბაზანა ყველა საჭირო ელემენტით.


უპირატესობები:
საშუალო ზომის საძინებელი ოთახი

ფართო აბაზანა
ღია გეგმის დიზაინი
ოპტიმალური განლაგება`

    },
    {
      image: '/assets/Screenshot 2025-10-21 at 11.50.30 AM-page-005.jpg',
      title: 'საერთო ფართი 70.2 მ²',
      shortDescription:
        'ორსაძინებლიანი ბინა ბალკონით.შედგება 2 საშუალო ზომის საძინებლისგან, დიდი სასტუმრო-სამზარეულოსგან და სველი წერტილისგან.',
     fullDescription: `მთლიანი ფართი: 36.1მ²;
საძინებელი 1 : 11.2მ² - საშუალო ზომის საძინებელი ოთახი,  გარდერობითა და კომფორტული ზონით.
საძინებელი 2 : 11.5მ² - საშუალო ზომის საძინებელი ოთახი,  გარდერობითა და კომფორტული ზონით.

ცენტრალური სივრცე: 34.9მ² - დიდი სასტუმრო/სამზარეულო ზონა ღია გეგმით.

სველი წერტილი: მ² - კომფორტული აბაზანა ყველა საჭირო ელემენტით.


უპირატესობები:
დიდი ზომის 2 საძინებელი ოთახი,

ფართო აბაზანა
ღია გეგმის დიზაინი
ოპტიმალური განლაგება`

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

  // ← ᲐᲮᲐᲚᲘ: Mobile: Touch start (pinch დაწყება)
  onTouchStart(event: TouchEvent): void {
    if (event.touches.length === 2) {
      event.preventDefault();
      this.lastTouchDistance = this.getTouchDistance(event);
    }
  }

  // ← ᲐᲮᲐᲚᲘ: Mobile: Touch move (pinch zoom)
  onTouchMove(event: TouchEvent): void {
    if (event.touches.length === 2) {
      event.preventDefault();

      const currentDistance = this.getTouchDistance(event);
      const delta = (currentDistance - this.lastTouchDistance) * 0.01;

      this.imageScale = Math.min(Math.max(0.5, this.imageScale + delta), 4);
      this.lastTouchDistance = currentDistance;
    }
  }

  // ← ᲐᲮᲐᲚᲘ: Touch distance გამოთვლა (2 თითს შორის)
  private getTouchDistance(event: TouchEvent): number {
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];

    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;

    return Math.sqrt(dx * dx + dy * dy);
  }

  // ← ᲐᲮᲐᲚᲘ: Double tap zoom (ალტერნატივა)
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
