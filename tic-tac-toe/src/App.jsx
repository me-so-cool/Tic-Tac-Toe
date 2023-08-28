import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import GameBoard from './components/GameBoard';


function App(){

//Initial Gameboard with all values as null
const Board = [
 [null, null, null],
 [null, null, null],
 [null, null, null]
];

//X and O arrays to see if the given grid is occupied.
 //First 3 items are for 3 rows, next 3 items are for 3 cols, last two items are for diagnols
const [x, setX] = useState([0,0,0,0,0,0,0,0]);
const [o, setO] = useState([0,0,0,0,0,0,0,0]);

//States for open dialog box, player 1 win and tie check
const [open, setOpen] = React.useState(false);
const [player1, setPlayer1] = useState(false);
const [tie, setTie] = useState(false);

//Use states for updating the number of moves and the game board
const [items, useItems] = useState(Board);
const [turnCount, useCount] = useState(0);
const [computer, setComputer] = useState(true);

//Main app function
    return (
        <>
        <Header items = {items} useItems = {useItems} turnCount = {turnCount} useCount = {useCount} x = {x} o = {o} setX = {setX} setO = {setO}
        open = {open} setOpen = {setOpen} player1 = {player1} setPlayer1 = {setPlayer1} tie = {tie} setTie = {setTie} computer = {computer} setComputer = {setComputer}/>
        <GameBoard items = {items} useItems = {useItems} turnCount = {turnCount} useCount = {useCount} x = {x} o = {o} setX = {setX} setO = {setO}
        open = {open} setOpen = {setOpen} player1 = {player1} setPlayer1 = {setPlayer1} tie = {tie} setTie = {setTie} computer = {computer} setComputer = {setComputer} /> 
        <Footer/>
        </>
    )
}

export default App;
