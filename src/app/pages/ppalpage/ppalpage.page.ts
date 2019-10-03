import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ppalpage',
  templateUrl: './ppalpage.page.html',
  styleUrls: ['./ppalpage.page.scss'],
})
export class PpalpagePage implements OnInit {

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
  
  ];


  categorias = ['Sort', 'Price Range', 'Max Delivery Fee', 'Dietary' ];
  color= 'primary'
  constructor() { }

  ngOnInit() {
 
  }



}
