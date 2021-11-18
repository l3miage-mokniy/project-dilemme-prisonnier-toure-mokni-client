import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { VariableGlobalesService } from '../variableGlobales.service';

@Component({
  selector: 'app-join-rencontre',
  templateUrl: './join-rencontre.component.html',
  styleUrls: ['./join-rencontre.component.scss']
})
export class JoinRencontreComponent implements OnInit {

  @Input() id_joueur = '';
  lesRencontresTab: string[] = [];
  @Output() id_game = new EventEmitter<number>();
  public lesRencontresDispo_Obs: Subject< string[] > = new Subject< string[] >();

  constructor(private varGlob: VariableGlobalesService) {
    this.getRencontreOpen();
  }

  ngOnInit(): void {
  }

  async getRencontreOpen() {
      const response = await fetch(this.varGlob.urlServer+'/party-open');
      let lesRencontres = await response.text();
      if(lesRencontres != "") {
        this.lesRencontresDispo_Obs.next(lesRencontres.split("#"));
      } else {
        this.lesRencontresDispo_Obs.next([]);
      }
  }

  getIdRencontre(uneRencontre :string) {
    let tab :string[] = uneRencontre.split(":");
    tab = tab[1].split("elle")
    return tab[0];
  }

  async joinThisGame(id_rencontre:string) {
    const response = await fetch(this.varGlob.urlServer+'/join-party/'+Number(id_rencontre)+'&'+this.id_joueur);
    let res: boolean = JSON.parse(await response.text());
    if(res){
      this.id_game.emit(Number(id_rencontre));
    }
  }
}
