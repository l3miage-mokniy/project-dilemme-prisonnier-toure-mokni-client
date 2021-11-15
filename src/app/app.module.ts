import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GestProfilComponent } from './gest-profil/gest-profil.component';
import { GestRencontreComponent } from './gest-rencontre/gest-rencontre.component';
import { CreateRencontreComponent } from './create-rencontre/create-rencontre.component';
import { PlayRencontreComponent } from './play-rencontre/play-rencontre.component';
import { JoinRencontreComponent } from './join-rencontre/join-rencontre.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GestProfilComponent,
    GestRencontreComponent,
    CreateRencontreComponent,
    PlayRencontreComponent,
    JoinRencontreComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
