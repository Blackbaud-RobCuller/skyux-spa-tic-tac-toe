import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameDataService } from '../gamedata.service.ts';
import { TicTacToeGame } from '../tictactoegame.ts';

@Component({
    selector: 'tic-tac-toe-game-lobby',
    templateUrl: './tictactoegamelobby.component.html',
    styleUrls: ['./tictactoegamelobby.component.scss']
})

export class TicTacToeGameLobbyComponent implements OnInit, OnDestroy {

    games: TicTacToeGame[] = [];
    selectedGame: TicTacToeGame;
    title: string;

    constructor(private service: GameDataService) {
    }

    saveGames() {
        this.service.saveAll();
    }

    ngOnInit() {
        this.games = this.service.getAllGames();
    }

    ngOnDestroy() {
        this.service.saveAll();
    }

    selectGame(game: TicTacToeGame) {
        this.selectedGame = game;
    }

    createGame(title: string) {
        let game = this.service.createGame(title);
        this.selectedGame = game;
        this.title = '';
    }

    removeGame(game: TicTacToeGame) {
        this.service.removeGame(game);
        if (game === this.selectedGame) {
            this.selectedGame = null;
        }
    }
}