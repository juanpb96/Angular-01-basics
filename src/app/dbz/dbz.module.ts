// First put angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Second third party imports
// Third put our own imports
import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { AddComponent } from './add/add.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Avoid using e.preventDefault
  ],
  providers: [
    // Here is the space to include the services
    // Services could be seen has singleton
    DbzService
  ]
})
export class DbzModule { }
