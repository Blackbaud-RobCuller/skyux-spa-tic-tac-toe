import { Component, Input } from '@angular/core';
import { TicTacToeGame } from '../tictactoegame.ts';

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})

export class TicTacToeComponent {
    @Input()
    game: TicTacToeGame;

    onClick(index: number): void {
        this.game.moveAt(index);
        this.game.aiMove();
    }
}