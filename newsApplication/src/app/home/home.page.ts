import { Component } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton , IonIcon, IonButtons, IonFabButton, IonFab, IonSegment, IonSegmentButton, IonCard, IonImg, IonCardContent, IonCardTitle, IonText} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, IonFabButton, IonFab, IonSegment, IonSegmentButton, IonCard, IonImg , IonCardContent,IonCardTitle,IonText],
})
export class HomePage {
  constructor() {}
  news: any[] =[];

  ngOnInit(): void {
    this.news = [
      {
        imageUrl: 'assets/vr_ar.png',
        title:'Advancements in virtual and Aurmented Reality',
        date: '2024-01-05',
        author:'Michel Jems'
      },
      {
        imageUrl: 'assets/quantum.jpg',
        title:'The book series Quantum Science and Technology is dedicated to one of today',
        date: '2024-01-08',
        author:'Max Planck'
      },
      {
        imageUrl: 'assets/spacex.jpg',
        title:'SpaceX  Recent Achievements in Space Technology',
        date: '2024-01-12',
        author:'Mike husy'
      },
      {
        imageUrl: 'assets/gadgets.jpg',
        title:'Get ready to take on the day with these cool, techy accessories.',
        date: '2023-12-05',
        author:'tim cock'
      },
      {
        imageUrl: 'assets/ai.jpg',
        title:'Limited memory machines. The next type of AI in its evolution is limited memory. ...',
        date: '2024-02-05',
        author:'John McCarthy'
      }
    ]
    
  }
}
