import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    name: string = 'IronMan';
    age : number = 45;

    get nameCapitalized(): string {
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${this.name} - ${ this.age }`;
    }

    // One way data binding
    changeName(): void {
        this.name = 'Spiderman';
    }

    changeAge(): void {
        this.age = 30;
    }
}