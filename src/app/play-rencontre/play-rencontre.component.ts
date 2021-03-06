import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { VariableGlobalesService } from '../variableGlobales.service';

@Component({
  selector: 'app-play-rencontre',
  templateUrl: './play-rencontre.component.html',
  styleUrls: ['./play-rencontre.component.scss']
})
export class PlayRencontreComponent implements OnInit {

  @Input() id_joueur_game : string[] = [];
  @Output() id_game = new EventEmitter<number>();
  id_strategy : number = 0;
  nombreTour : string = "1";
  firstTurn : boolean = true;
  score : string = "";
  haveChoose : boolean = false;
  public gameStart: Subject< boolean > = new Subject< boolean >();
  public gameFinish: Subject< boolean > = new Subject< boolean >();

  constructor(private varGlob: VariableGlobalesService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.startGame();
  }

  async leaveGame() {
    const response = await fetch(this.varGlob.urlServer+'/leave-my-game/'+this.id_joueur_game[0]+'&'+this.id_strategy+'&'+this.id_joueur_game[1]);
    this.id_game.emit(-999);
  }

  goBackMenu() {
    this.id_game.emit(-999);
  }

  async startGame() {
    const response = await fetch(this.varGlob.urlServer+'/have-join/'+this.id_joueur_game[1]);
    let res: boolean = JSON.parse(await response.text());
    this.gameStart.next(res)
  }

  async trahir() {
    this.haveChoose = true;
    const response = await fetch(this.varGlob.urlServer+'/play/'+this.id_joueur_game[0]+'&'+this.id_joueur_game[1]+'&0');
    let returnVal = await response.text();
    this.score = returnVal.split('#')[0];
    this.nombreTour = returnVal.split('#')[1];
    this.haveChoose = false;
    if(this.firstTurn) {
      this.firstTurn=false;
    }
    this.checkGameFinished();
  }

  async cooperer() {
    this.haveChoose = true;
    const response = await fetch(this.varGlob.urlServer+'/play/'+this.id_joueur_game[0]+'&'+this.id_joueur_game[1]+'&1');
    let returnVal = await response.text();
    this.score = returnVal.split('#')[0];
    this.nombreTour = returnVal.split('#')[1];
    this.haveChoose = false;
    if(this.firstTurn) {
      this.firstTurn=false;
    }
    this.checkGameFinished();
  }

  async checkGameFinished() {
    const response = await fetch(this.varGlob.urlServer+'/game-finished/'+this.id_joueur_game[1]);
    let res: boolean = JSON.parse(await response.text());
    if(res) {
      this.gameFinish.next(res)
    }
  }

}
