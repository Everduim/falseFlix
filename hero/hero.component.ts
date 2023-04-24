import { Component } from '@angular/core';
import { MediaInterface } from '../interface/media';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public top10: MediaInterface = {
    title:"LAS 10 MAS POPULARES DE HOY",
    peliculas: [{
      title:"1",
      src: "../assets/Top10/1-papel.webp",
    },
    {
      title:"2",
      src: "../assets/Top10/2-reina.webp",
    },
    {
      title:"3",
      src: "../assets/Top10/3-titanes.webp",
    },
    {
      title:"4",
      src: "../assets/Top10/4-lostinspace.webp",
    },
    {
      title:"5",
      src: "../assets/Top10/5-dondecaben.webp",
    },
    {
      title:"6",
      src: "../assets/Top10/6-aquinohay.webp",
    },
    {
      title:"7",
      src: "../assets/Top10/7-blacklist.webp",
    },
    {
      title:"8",
      src: "../assets/Top10/8-ricos.webp",
    },
    {
      title:"9",
      src: "../assets/Top10/9-poder.webp",
    },
    {
      title:"10",
      src: "../assets/Top10/10-gooddoctor.webp",
    }
  ]}
}
