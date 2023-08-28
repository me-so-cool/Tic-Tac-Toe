import React, { useEffect, useState } from 'react'
import CSS from '../assets/App.css'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';




function Header({items, useItems, turnCount, useCount,x,o,setX,setO,open,setOpen,player1,
    setPlayer1,tie,setTie,computer,setComputer}) {
          
    function handleClick(){
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
    }

    const theme = createTheme({
        palette: {
            primary: {
              main: '#E55D5D',
              // light: will be calculated from palette.primary.main,
              // dark: will be calculated from palette.primary.main,
              // contrastText: will be calculated to contrast with palette.primary.main
            },
        },
      });
    
    useEffect(() => {
        console.log("Computer switch is: " + computer);
    },[computer]);

    function handleSwitchChange(event){
      setComputer(event.target.checked);
    }


    return (

        <>
            <div className='flex-container'>
                <h1 className='main-header'>Welcome to Tic-Tac-Toe</h1>
            </div>
            <div className='flex-container-header'>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" size="small" onClick={handleClick}>New Game
                </Button> 
                </ThemeProvider>
                <div className='switch-container'>
                    <h3 className='header-h3'>Play with Computer</h3>
                    <div className="switch-button"><Switch  defaultChecked onChange={handleSwitchChange}/></div>
                </div>
                <h3 className="header-h3">{turnCount%2===0 ? "Player 1 Turn" : "Player 2 Turn"}</h3>   
                </div>   
            
        </>

    )
}

export default Header;
