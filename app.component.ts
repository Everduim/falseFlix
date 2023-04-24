import { MediaInterface, } from './interface/media';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix';
  public comedia: MediaInterface = {
    title: 'Comedia',
    peliculas: [
      {
        title:' ',
        src: '../assets/Comedia/casi300.webp',
      },
      {
        title:' ',
        src: '../assets/Comedia/cazafantasmas.webp',
      },
      {
        title:' ',
        src: '../assets/Comedia/dictador.webp',
      },
      {
        title:' ',
        src: '../assets/Comedia/erasehollywood.webp',
      },
      {
        title:' ',
        src: '../assets/Comedia/family guy.webp',
      },
      {
        title:' ',
        src: '../assets/Comedia/juerga.webp',
      },
      {
        title:' ',
        src: '../assets/Comedia/laterminal.webp',
      },
      {
        title:' ',
        src: '../assets/Comedia/padresella.webp',
      },
      {
        title:' ',
        src: '../assets/Comedia/regresofuturo.webp',
      },
      {
        title:' ',
        src: '../assets/Comedia/rickandmorty.webp',
      },
      {
        title:' ',
        src: '../assets/Comedia/scarymovie3.webp',
      },
      {
        title:' ',
        src: '../assets/Comedia/ted2.webp',
      },

    ]
  };
  public accion: MediaInterface = {
    title: "Accion",
    peliculas: [{
      title:' ',
      src: "../assets/Accion/ejercitomuertos.jpg",
    },
    {
      title:' ',
      src: "../assets/Accion/equalizer2.webp",
    },
    {
      title:' ',
      src: "../assets/Accion/elprotector.webp",
    },
    {
      title:' ',
      src: "../assets/Accion/heat.webp",
    },
    {
      title:' ',
      src: "../src/assets/Accion/jackreacher.webp",
    },
    {
      title:' ',
      src: "../assets/Accion/killbill2.webp",
    },
    {
      title:' ',
      src: "../assets/Accion/johnwick2.webp",
    },
    {
      title:' ',
      src: "../assets/Accion/misionimposiblenacion.webp",
    },
    {
      title:' ',
      src: "../assets/Accion/renacido.webp",
    },
    {
      title:' ',
      src: "../assets/Accion/terminator2.webp",
    },
    {
      title:' ',
      src: "../assets/Accion/worldwarz.webp",
    }]
  };
  public anime: MediaInterface = {
    title: "Anime",
    peliculas: [{
      title:' ',
      src: "../assets/Anime/ajin.jpg",
    },
    {
      title:' ',
      src: "../assets/Anime/castilloambulante.webp",
    },
    {
      title:' ',
      src: "../assets/Anime/chihiro.webp",
    },
    {
      title:' ',
      src: "../assets/Anime/evangelion.webp",
    },
    {
      title:' ',
      src: "../assets/Anime/gitsarise.webp",
    },
    {
      title:' ',
      src: "../assets/Anime/gundam.webp",
    },
    { 
      title:' ',
      src: "../assets/Anime/laputa.webp",
    },
    {
      title:' ',
      src: "../assets/Anime/mononoke.webp",
    },
    {
      title:' ',
      src: "../assets/Anime/ninokuni.jpg",
    },
    {
      title:' ',
      src: "../assets/Anime/perfectblue.webp",
    },
    {
      title:' ',
      src: "../assets/Anime/porcorosso.webp",
    }]
  };
  public drama: MediaInterface = {
    title: "Drama",
    peliculas: [{
      title:' ',
      src: "../assets/Drama/1917.webp",
    },
    {
      title:' ',
      src: "../assets/Drama/arrival.webp",
    },
    {
      title:' ',
      src: "../assets/Drama/clublucha.webp",
    },
    {
      title:' ',
      src: "../assets/Drama/corazones.webp",
    },
    {
      title:' ',
      src: "../assets/Drama/culpable.jpg",
    },
    {
      title:' ',
      src: "../assets/Drama/millaverde.webp",
    },
    {
      title:' ',
      src: "../assets/Drama/noespais.webp",
    },
    {
      title:' ',
      src: "../assets/Drama/naufrago.webp",
    },
    {
      title:' ',
      src: "../assets/Drama/salvaralsoldado.webp",
    },
    {
      title:' ',
      src: "../assets/Drama/scarface.webp",
    },
    {
      title:' ',
      src: "../assets/Drama/schindler.webp",
    }]
  };
  public terror: MediaInterface = {
    title: "terror",
    peliculas: [{
      title:' ',
      src: "../assets/Terror/apostol.jpg",
    },
    {
      title:' ',
      src: "../assets/Terror/calleterror.jpg",
    },
    {
      title:' ',
      src: "../assets/Terror/infiernoagua.webp",
    },
    {
      title:' ',
      src: "../assets/Terror/insidious2.webp",
    },
    {
      title:' ',
      src: "../assets/Terror/life.webp",
    },
    {
      title:' ',
      src: "../assets/Terror/multiple.webp",
    },
    {
      title:' ',
      src: "../assets/Terror/multiple.webp",
    },
    {
      title:' ',
      src: "../assets/Terror/reflejos.webp",
    }]
  };
  public cienciaFiccion: MediaInterface = {
    title: "Ciencia Ficcion",
    peliculas: [{
      title:' ',
      src: "../assets/Sci-fi/6dia.webp",
    },
    {
      title:' ',
      src: "../assets/Sci-fi/12monos.webp",
    },
    {
      title:' ',
      src: "../assets/Sci-fi/afterearth.webp",
    },
    {
      title:' ',
      src: "../assets/Sci-fi/colverparadox.jpg",
    },
    {
      title:' ',
      src: "../assets/Sci-fi/core.webp",
    },
    {
      title:' ',
      src: "../assets/Sci-fi/deepimpact.webp",
    },
    {
      title:' ',
      src: "../assets/Sci-fi/doom.webp",
    },
    {
      title:' ',
      src: "../assets/Sci-fi/gits.webp",
    },
    {
      title:' ',
      src: "../assets/Sci-fi/jumper.webp",
    },
    {
      title:' ',
      src: "../assets/Sci-fi/passengers.webp",
    },
    {
      title:' ',
      src: "../assets/Sci-fi/transformers.webp",
    },
    {
      title:' ',
      src: "../assets/Sci-fi/watchmen.webp",
    },
    {
      title:' ',
      src: "../assets/Sci-fi/startrek.webp",
    }]
  };
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
    }]
  };
}
