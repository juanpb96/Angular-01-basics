// Child component
import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  
  /* With the Input decorator */
  // Input decorator that receives values from a parent component
  //@Input() characters: Character[] = [];

  // In case of want to change the property name from outside use:
  // @Input('data') myVar: any[] = [];

  get characters() {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService) {}

}
