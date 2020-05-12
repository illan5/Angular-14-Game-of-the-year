import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];
  constructor( private gameService: GameService ) { }

  ngOnInit(): void {
    this.gameService.getNominados()
        .subscribe( juegos => {
          console.log(juegos);
          this.juegos = juegos;
        });
  }

  votarJuego ( juego: Game ) {
    //console.log(juego);
    this.gameService.votarJuego( juego.id )
        .subscribe( resp => {
          console.log(resp);
        });
  }

}
