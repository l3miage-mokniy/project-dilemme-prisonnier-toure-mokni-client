import { Component, OnInit } from '@angular/core';
import { VariableGlobalesService } from '../variableGlobales.service';

@Component({
  selector: 'app-gest-profil',
  templateUrl: './gest-profil.component.html',
  styleUrls: ['./gest-profil.component.scss']
})
export class GestProfilComponent implements OnInit {

  public profilCreated : boolean = false;
  name: string = '';
  id_joueur: string = '';

  constructor(private varGlob: VariableGlobalesService) {
  }

  ngOnInit(): void {
  }

  async createProfil() {
    if(this.name.length > 0) {
      const response = await fetch(this.varGlob.urlServer+'/new_player/'+this.name);
      this.id_joueur = await response.text();
      this.profilCreated = true;
    }
  }

  isEnregistre(){
    return this.profilCreated;
  }

}
