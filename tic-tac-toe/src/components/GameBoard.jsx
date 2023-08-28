import React, { useState } from 'react'
import '../assets/App.css'
import { useEffect } from 'react';
import { Dialog,DialogTitle,DialogActions } from '@mui/material';
import Button from '@mui/material/Button';



function GameBoard({items, useItems, turnCount, useCount,x,o,setX,setO,open,setOpen,player1,
setPlayer1,tie,setTie,computer,setComputer}){

    const handleToClose = () => {
        setOpen(false);
        const newBoard = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
           ];
        useItems(newBoard);
        const resetArr = [0,0,0,0,0,0,0,0];
        setX(resetArr);
        setO(resetArr);
        setPlayer1(false);
        setTie(false);
        useCount(0);
           
    };

    function handleComputer(row,col,currentCount){
            
                let newItems = [...items];
               if(items[row][col] === null){
                newItems[row][col] = "O";
               useItems(newItems);
               let newCount = currentCount + 1;
              useCount(newCount);
              validation(row,col, newCount);
            
        }
    }

    //useEffect hook to check if any player has won the game after every move
   useEffect(() => {
        for(let i=0; i<8; i++){
            if(x[i] === 3){               
                setOpen(true);
                setPlayer1(true); 
                break;
            }
            if(o[i] === 3){
                setOpen(true);
                break;
            }
        }

        if(turnCount === 9)
            {
                for(let i=0; i<8; i++){
                    if(x[i] === 3){               
                        setOpen(true);
                        setPlayer1(true); 
                        return;
                    }
                }
               setPlayer1(false);
               setTie(true);
               setOpen(true);  
            }

    }, [x, o, turnCount]);

   //Validation function to update X and O array depending on the player move
   //If any item in X and O array becomes 3, Then the game ends. If number of moves become 9, game is tie
   function validation(row, col, currentCount) {
    if (items[row][col] === "X") {
        setX(prevX => {
            const newX = [...prevX];
            newX[row] = newX[row] + 1;
            newX[col + 3] = newX[col + 3] + 1;
            if (row === col) {
                newX[6] = newX[6] + 1;
            }
            if (2 - col === row) {
                newX[7] = newX[7] + 1;
            }
            return newX;
        });
    } else if (items[row][col] === "O") {
        setO(prevO => {
            const newO = [...prevO];
            newO[row] = newO[row] + 1;
            newO[col + 3] = newO[col + 3] + 1;
            if (row === col) {
                newO[6] = newO[6] + 1;
            }
            if (2 - col === row) {
                newO[7] = newO[7] + 1;
            }
            return newO;
        });
    }

}


    

    //Function to handle the click of every grid item
    function handleClick(row, col){

       let newItems = [...items];
       if(items[row][col] === null){
        if (computer) {
            newItems[row][col] = "X";
        } else {
            newItems[row][col] = turnCount % 2 === 0 ? "X" : "O";
        }
        useItems(newItems);
        let currentCount = turnCount + 1;
        validation(row,col, turnCount);
       useCount(currentCount);
       if(computer){
        let emptyCells = [];
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < items[i].length; j++) {
                if (items[i][j] === null) {
                    emptyCells.push([i, j]);
                }
            }
        }
        if (emptyCells.length > 0) {
            let randomIndex = Math.floor(Math.random() * emptyCells.length);
            let [row, col] = emptyCells[randomIndex];
            handleComputer(row, col,currentCount);
            }
       }
    }
    }


    
    //Main class returning the grid
    return (
        <div>
            {open && tie && !player1 &&(
                <Dialog open={open} onClose={handleToClose}>
                    <DialogTitle>{"Game Over - It's a tie!"}</DialogTitle>
                    <DialogActions>
                        <Button className="button" onClick={handleToClose}
                            variant="contained">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
        )}
        <div>
            {open && !tie && player1 && (
                <Dialog open={open} onClose={handleToClose}>
                    <DialogTitle>{"Game Over - Player 1 Wins!"}</DialogTitle>
                    <DialogActions>
                        <Button className="button" onClick={handleToClose}
                            variant="contained">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
        )}
        <div>
            {open && !tie && !player1 &&(
                <Dialog open={open} onClose={handleToClose}>
                    <DialogTitle>{"Game Over - Player 2 Wins!"}</DialogTitle>
                    <DialogActions>
                        <Button className="button" onClick={handleToClose}
                            variant="contained">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
        )}
            <div className="grid-wrapper">
                <div className='grid-gameboard-container'>
                    {
                        items.map((subArray,row) => {
                            return subArray.map((item,col) => {
                            return(
                                <div
                                key = {row+col}
                                id = {row+col}
                                className='grid-item'
                                onClick={() => handleClick(row,col)}
                                >{item}</div>
                            )
                            })
                        })
                    }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
    

                }

export default GameBoard;