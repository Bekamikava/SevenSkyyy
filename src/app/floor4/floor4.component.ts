import { Component } from '@angular/core';

@Component({
  selector: 'app-floor4',
  standalone: false,
  templateUrl: './floor4.component.html',
  styleUrl: './floor4.component.css'
})
export class Floor4Component {
isModalOpen = false;
  selectedCard: any = null;
  imageScale = 1;

  // ← ᲐᲮᲐᲚᲘ: Touch zoom-ისთვის
  private lastTouchDistance = 0;

  cardsData = [
    {
      image: '/assets/Screenshot 2025-10-21 at 11.50.30 AM-page-012.jpg',
      title: 'საერთო ფართი 47.8 მ²',
      shortDescription:
        'ერთსაძინებლიანი ბინა ბალკონით. შედგება დიდი საძინებლისგან, დიდი სასტუმრო-სამზარეულოსგან, აივნისა და სველი წერტილისგან.',
      fullDescription: `მთლიანი ფართი: 47.8მ²
საძინებელი 1: 11.8მ² - ძალიან ფართო მთავარი საძინებელი, საკმარისი ოთახი დიდი საწოლისა და კარადების მოსათავსებლად
ცენტრალური სივრცე: 26.9მ² - დიდი სასტუმრო/სამზარეულო ზონა ღია გეგმით.

ბალკონი: 5.5მ² - საკმაოდ დიდი ბალკონი, შესაძლებელია მოწყობა დასასვენებელ ზონად
სველი წერტილი: 3.6მ² - კომპაქტური აბაზანა ტუალეტით
უპირატესობები:
დიდი მთავარი საძინებელი
ფართო ბალკონი
გახსნილი გეგმა სასტუმრო-სამზარეულო ზონაში
ბუნებრივი განათება`

    },
    {
      image: '/assets/Screenshot 2025-10-21 at 11.50.30 AM-page-013.jpg',
      title: 'საერთო ფართი 56.9 მ²',
      shortDescription:
        'ფუნქციური ორსაძინებლიანი ბინა მე-5 სართულზე. გამორჩეული დამატებითი ოთახით და დიდი ცენტრალური სივრცით.',
       fullDescription: `პირველი საძინებელი: 8.9მ² - კომფორტული საძინებელი
მეორე საძინებელი: 9.5მ² , თითქმის იგივე ზომის
ცენტრალური სივრცე: 20.1მ² - დიდი სასტუმრო/სამზარეულო ზონა ღია გეგმით.
პირველი აივანი:7.7მ²,
მეორე აივანი: 6.5მ² - ფართო შესასვლელი სივრცე
სველი წერტილი: 4.2მ² - ფართო აბაზანა;

უპირატესობები:
დიდი ცენტრალური სივრცე
ორი თითქმის იდენტური საძინებელი
ფართო აბაზანა`

    },
    {
      image: '/assets/Screenshot 2025-10-21 at 11.50.30 AM-page-014.jpg',
      title: 'საერთო ფართი 50.7 მ²',
      shortDescription:
        '50.7მ² ფართობის ერთსაძინებლიანი ბინა ბალკონით. იდეალურია წყვილისთვის ან მცირე ოჯახისთვის. ღია გეგმა დიდი სივრცით.',
      fullDescription: `მთლიანი ფართი: 50.7მ²
საძინებელი: 11.1მ² - ძალიან დიდი საძინებელი ოთახი, დიდი გარდერობითა და კომფორტული ზონით
ცენტრალური სივრცე: 25.1მ² - დიდი სასტუმრო/სამზარეულო ზონა ღია გეგმით.
ბალკონი: 8.2მ² - დიდი ბალკონი, შესაძლებელია მოწყობა როგორც დასასვენებელი ზონა
სველი წერტილი: 5.9მ² - კომფორტული აბაზანა ყველა საჭირო ელემენტით

უპირატესობები:
ძალიან დიდი საძინებელი ოთახი
ფართო ბალკონი მშვენიერი ხედებით
დიდი აბაზანა
ღია გეგმის დიზაინი
ოპტიმალური განლაგება`

    },
    {
      image: '/assets/Screenshot 2025-10-21 at 11.50.30 AM-page-015.jpg',
      title: 'საერთო ფართი 82.7 მ²',
      shortDescription:
        '82.7მ² ფართობის სამმოთახიანი ბინა დიდი ბალკონებით. ყველაზე დიდი და ფუნქციური განლაგება კორპუსში.',
     fullDescription: `მთლიანი ფართი: 82.7მ²
ცენტრალური სივრცე: 34.9მ² - ძალიან დიდი სასტუმრო-სამზარეულო ზონა ღია გეგმით.
საძინებელი 1: 14.0მ² - დიდი საძინებელი.
საძინებელი 2: 13.6მ² - თითქმის იდენტური ზომის მეორე საძინებელი.
ბალკონი 1: 7.6მ² - დიდი ბალკონი.
ბალკონი 2: 7.7მ² - მეორე დიდი ბალკონი.
სველი წერტილი: 4.9მ² - ფართო აბაზანა.

უპირატესობები:
უდიდესი ფართი კოლექციაში
ორი დიდი ბალკონი
ორი თანაბარი საძინებელი
ძალიან დიდი სასტუმრო-სამზარეულო ზონა
იდეალურია დიდი ოჯახისთვის
შესაძლებელია მესამე საძინებლის მოწყობა
ფუნქციური განლაგება`


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
