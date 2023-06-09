import styles from '@/components/Comp3/Jing.module.scss'
import { useState } from 'react'

function Square({ value, onSquareClick }) {
    return (
        <button className='square' onClick={onSquareClick}>
            {value}
        </button>
    )
}

function Board({ xIsNext, squares, onPlay }) {
    function handleClcik(i) {
        console.log(i)
        console.log(squares)
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O'
        }
        onPlay(nextSquares)
    }
    const winner = calculateWinner(squares)
    console.log(winner)
    let status;
    if (winner) {
        status = 'Winner:' + winner;
    } else {
        status = 'Next player:' + (xIsNext ? 'X' : 'O')
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={() => handleClcik(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClcik(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClcik(2)} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} onSquareClick={() => handleClcik(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClcik(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClcik(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={() => handleClcik(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClcik(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClcik(8)} />
            </div>
        </>
    )
}

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove]
    function handlePaly(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1),nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }
    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove)
    }
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move#' + move;
        } else {
            description = 'Go to ganme start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })
    return (
        <div className={styles.Jing2}>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePaly} />
            </div>
            <div className='game-info'>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    console.log(squares)
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game