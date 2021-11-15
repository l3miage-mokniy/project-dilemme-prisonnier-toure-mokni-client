import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-gest-rencontre',
  templateUrl: './gest-rencontre.component.html',
  styleUrls: ['./gest-rencontre.component.scss']
})
export class GestRencontreComponent implements OnInit {

  @Input() id_joueur = ''; // decorate the property with @Input()
  public boolCreateGame : boolean = false;
  public boolJoinGame : boolean = false;
  public id_game : number = -999;
  public boolNotInGame_Obs: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {
  }

  ngOnInit(): void {
  }

  createGame() {
    this.boolCreateGame = true;
    this.boolJoinGame = false;
  }

  joinGame() {
    this.boolJoinGame = true;
    this.boolCreateGame = false;
  }

  newGame(id_game:number){
    this.id_game = id_game;
    if(this.id_game == -999){
      this.boolNotInGame_Obs.next(true);
      this.boolCreateGame = false;
      this.boolJoinGame = false;
    } else {
      this.boolNotInGame_Obs.next(false);
    }
  }

}
