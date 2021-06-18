import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interface';

// This decorator is special for services
@Injectable()
export class DbzService {

    /* Obtain and mantain data must be worked here */
    // A standard to define a name for private props is using '_' as a prefix: '_propName'


    // The only place where I want to mutate the info below must be here
    private _characters: Character[] = [
        { name: 'Goku', power: 15000 },
        { name: 'Vegeta', power: 8500 }
    ];

    get characters(): Character[] {
        /* Objects are send by reference */
        // Using the spread operator generates a new different array
        return [...this._characters];
    }

    // It only instanciate once, like a singleton class
    constructor() {
        console.log('Service is initialized');
    }

    addCharacter( character: Character ) {
        this._characters.push(character);
    }

}