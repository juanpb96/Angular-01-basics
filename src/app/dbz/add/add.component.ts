import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Input() new: Character = {
            name: '',
            power: 0
          }

  // Define de output decorator with the specific type of the value that will be send 
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor( private dbzService: DbzService ) {}

  add() {
    if (this.new.name.trim().length === 0) { return; }

    // Send or emit a value to the parent component
    // this.onNewCharacter.emit( this.new );

    this.dbzService.addCharacter( this.new );

    this.new = {
      name: '',
      power: 0
    }
  }

}
