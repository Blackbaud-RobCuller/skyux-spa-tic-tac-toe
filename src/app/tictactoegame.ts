export class TicTacToeGame {
    private player1Turn = true;
    gameOver: boolean = false;
    cat: boolean = false;
    winningPlayer = 'O';
    title: string;

    board: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1];

    constructor(titleOrState: any) {
        if (typeof titleOrState === 'string') {
            this.title = titleOrState;
        } else {
            this.board = titleOrState.board;
            this.player1Turn = titleOrState.player1Turn;
            this.cat = titleOrState.cat;
            this.winningPlayer = titleOrState.winningPlayer;
            this.title = titleOrState.title;
            this.gameOver = titleOrState.gameOver;
        }
    }

    moveAt(index: number) {
        if (this.board[index] === 1) {
            this.board[index] = 2;

            this.checkBoardState();
            this.player1Turn = false;
        }
    }

    aiMove(): void {
        if (!this.gameOver) {
            let nextMove = this.getNextOpenSquare();
            this.board[nextMove] = 6;

            this.checkBoardState();
            this.player1Turn = true;
        }
    }

    getNextOpenSquare(): number {
        let i = 0;

        for (i = 0; i < 9; i++) {
            if (this.board[i] === 1) {
                return i;
            }
        }

        return -1;
    }

    checkBoardState(): void {
        let [a, b, c, d, e, f, g, h, i] = this.board;
        let winner = false;

        winner = ((a + b + c) % 6 === 0) ||
            ((d + e + f) % 6 === 0) ||
            ((g + h + i) % 6 === 0) ||
            (a + d + g) % 6 === 0 ||
            (b + e + h) % 6 === 0 ||
            (c + f + i) % 6 === 0 ||
            (a + e + i) % 6 === 0 ||
            (c + e + g) % 6 === 0;

        if (winner) {
            if (this.player1Turn) {
                this.winningPlayer = 'X';
            }

            this.gameOver = true;
            return;
        }

        let square = this.getNextOpenSquare();
        if (square === -1) {
            this.cat = true;
        }
    }
}