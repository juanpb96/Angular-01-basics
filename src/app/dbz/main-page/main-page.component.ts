import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // --One way to do it--
  // get characters(): Character[] {
  //   return this.dbzService.characters;
  // }

  new: Character = {
    name: '',
    power: 0
  }

  // Refactoring
  // addNew( character: Character ) {
  //   this.characters.push(character);
  // }

  /*changeName( event: any ) {
    console.log(event.target.value);
  }*/

  // Dependency Injection
  //constructor( private dbzService: DbzService ) { }

}
