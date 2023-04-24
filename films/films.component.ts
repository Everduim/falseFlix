import { Component, Input, } from '@angular/core';
import { MediaInterface, } from '../interface/media';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  console=console
  @Input ()public  peliculas!: MediaInterface
  // @Input ()public  peliculasTop!:MediaInterface1
//  @Input ()public  peliculasTop!: MediaInterface1

}
// export class 