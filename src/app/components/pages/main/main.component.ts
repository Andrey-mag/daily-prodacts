import {OwlOptions} from "ngx-owl-carousel-o";
import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    margin: 24,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  customOptionsReviews: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin: 24,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
    },
    nav: false
  }

  playlist = [
    {
      id: 1,
      image: 'playlist2.png',
      title: 'Self–confidence',
    },
    {
      id: 2,
      image: 'playlist3.png',
      title: 'Perplexed Mind',
    },
    {
      id: 3,
      image: 'playlist4.png',
      title: 'Women’s Rights',
    },
  ]

  supportedItems = [
    {
      id: 1,
      image: 'supported1.png',
    },
    {
      id: 2,
      image: 'supported2.png',
    },
    {
      id: 3,
      image: 'supported3.png',
    },
  ]

  infoItems = [
    {
      id: 1,
      image: 'illustration1.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ',
    },
    {
      id: 2,
      image: 'illustration2.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ',
    }
  ]
}

