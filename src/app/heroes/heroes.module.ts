import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        // Components in this module
        HeroComponent,
        ListComponent
    ],
    exports: [
        // What is going to be public in the app
        ListComponent
    ],
    imports: [
        // Modules only
        CommonModule // This module is necessary when using *ngFor, *ngIF, etc
    ]
})
export class HeroesModule {}