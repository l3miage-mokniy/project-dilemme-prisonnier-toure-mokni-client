import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { VariableGlobalesService } from '../variableGlobales.service';

@Component({
  selector: 'app-create-rencontre',
  templateUrl: './create-rencontre.component.html',
  styleUrls: ['./create-rencontre.component.scss']
})
export class CreateRencontreComponent implements OnInit {

  @Input() id_joueur = ''; // decorate the property with @Input()
  public gameCreated : boolean = false;
  nb_tours: Number = 5;
  @Output() id_game = new EventEmitter<number>();

  constructor(private varGlob: VariableGlobalesService) { }

  ngOnInit(): void {
  }

  async createRencontre() {
    console.log("nb-tours : "+this.nb_tours+" id-joueur : "+this.id_joueur)
    if(this.nb_tours > 0) {
      const response = await fetch(this.varGlob.urlServer+'/new-party/'+this.nb_tours+'&'+this.id_joueur);
      this.newGame(await response.text())
      this.gameCreated = true;
    }
  }

  newGame(id: string) {
    this.id_game.emit(Number(id));
  }

}
