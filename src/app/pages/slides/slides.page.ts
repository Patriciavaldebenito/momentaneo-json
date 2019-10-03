import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '../../../assets/img/carouselVerde.png',
      titulo: 'imagen 2', desc: 'algo por aca'
    },
    {
      img: '../../../assets/img/carouselCOmida.png',
      titulo: 'imagen 1',
      desc: 'algo por aqui'
    }
  
  ]
  constructor() { }

  ngOnInit() {
  }

}
