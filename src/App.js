import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Box } from '@mui/material'
import { Grid } from '@mui/material'

function App() {
  const bNumbers = Array.from({length: 15}, (_, i) => i + 1)
  const iNumbers = Array.from({length: 15}, (_, i) => 16 + i)
  const nNumbers = Array.from({length: 15}, (_, i) => 31 + i)
  const gNumbers = Array.from({length: 15}, (_, i) => 46 + i)
  const oNumbers = Array.from({length: 15}, (_, i) => 61 + i)
  const [availableNumbers, setAvailableNumbers] = useState([])
  const [selectedNumber, setSelectedNumber] = useState()
  const [isPlaying, setIsPlaying] = useState(false)
  const [gamePlayed, setGamePlayed] = useState("")
  const [usedNumbers, setUsedNumbers] = useState([])

  const handleIsPlaying = (value) => {
    setIsPlaying(true)
    if(value === 'all') {
      setAvailableNumbers([...bNumbers, ...iNumbers, ...nNumbers, ...gNumbers, ...oNumbers])
      setGamePlayed("all")
      setUsedNumbers([])
      setSelectedNumber()
    } else {
      setAvailableNumbers([...gNumbers, ...oNumbers])
      setGamePlayed("some")
      setUsedNumbers([])
      setSelectedNumber()
    }
  }

  const handleGameOver = () => {
    setAvailableNumbers([])
    setUsedNumbers([])
    setSelectedNumber()
    setGamePlayed("")
    setIsPlaying(false)
  }

  const handleSelectANumber = () => {
    const numberIndex = Math.floor(Math.random() * availableNumbers.length)
    const randomNumber = availableNumbers[numberIndex]

    setSelectedNumber(randomNumber)
    setUsedNumbers([...usedNumbers, randomNumber])
    setAvailableNumbers(prevNumbers => prevNumbers.filter(number => number !== randomNumber))
  }

  console.log(selectedNumber)
  console.log(usedNumbers)
  console.log(availableNumbers)

  return (
    <div className="App">
      <Typography variant='h3' textAlign='center'>
        Loy Elementary Bingo Web Application
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} sx={{ marginBottom: '15px', marginTop: '14px'}}>
        <Button color='secondary' variant='contained' value='all' onClick={(event) => handleIsPlaying(event.target.value)}>Regular Bingo</Button>
        <Button color='secondary' variant='contained' value='all' onClick={(event) => handleIsPlaying(event.target.value)}>Cover All</Button>
        <Button color='secondary' variant='contained' value='all' onClick={(event) => handleIsPlaying(event.target.value)}>Madame X</Button>
        <Button color='secondary' variant='contained' value='some' onClick={(event) => handleIsPlaying(event.target.value)}>Postage Stamp</Button>
        <Button color='secondary' variant='contained' value='all' onClick={(event) => handleIsPlaying(event.target.value)}>Letter L</Button>
      </Box>
      {isPlaying === true && gamePlayed === "all" ?
      <Box>
        <Box display='flex' justifyContent='center' sx={{ minHeight: '15vw' }}>
          <Card sx={{ padding: '5px', fontWeight: 'bold', backgroundColor: 'gray', color: 'purple', minWidth: '15vw', minHeight: '10vw', marginBottom: '20px', fontSize: '10vw'}}>{selectedNumber}</Card>
        </Box>
        <Box gap={2} display='flex' justifyContent='center' sx={{ marginBottom: '20px' }}>
          <Typography fontSize='2vw' fontWeight='bold'>B</Typography>
          {bNumbers.map(number => (
            <Card sx={{ minHeight: '2vw', minWidth: '2vw', fontSize: '2vw', padding: '5px', fontWeight: 'bold', backgroundColor: 'gray', color: usedNumbers.includes(number) ? 'red' : 'purple'}}>
              {number}
            </Card>
          ))}
        </Box>
        <Box gap={2} display='flex' justifyContent='center' sx={{ marginBottom: '20px' }}>
          <Typography fontSize='2vw' fontWeight='bold'>I</Typography>
          {iNumbers.map(number => (
            <Card sx={{ minHeight: '2vw', minWidth: '2vw', fontSize: '2vw', padding: '5px', fontWeight: 'bold', backgroundColor: 'gray', color: usedNumbers.includes(number) ? 'red' : 'purple'}}>
              {number}
            </Card>
          ))}
        </Box>
        <Box gap={2} display='flex' justifyContent='center' sx={{ marginBottom: '20px' }}>
          <Typography fontSize='2vw' fontWeight='bold'>N</Typography>
          {nNumbers.map(number => (
            <Card sx={{ minHeight: '2vw', minWidth: '2vw', fontSize: '2vw', padding: '5px', fontWeight: 'bold', backgroundColor: 'gray', color: usedNumbers.includes(number) ? 'red' : 'purple'}}>
              {number}
            </Card>
          ))}
        </Box>
        <Box gap={2} display='flex' justifyContent='center' sx={{ marginBottom: '20px' }}>
          <Typography fontSize='2vw' fontWeight='bold'>G</Typography>
          {gNumbers.map(number => (
            <Card sx={{ minHeight: '2vw', minWidth: '2vw', fontSize: '2vw', padding: '5px', fontWeight: 'bold', backgroundColor: 'gray', color: usedNumbers.includes(number) ? 'red' : 'purple'}}>
              {number}
            </Card>
          ))}
        </Box>
        <Box gap={2} display='flex' justifyContent='center' sx={{ marginBottom: '20px' }}>
          <Typography fontSize='2vw' fontWeight='bold'>O</Typography>
          {oNumbers.map(number => (
            <Card sx={{ minHeight: '2vw', minWidth: '2vw', fontSize: '2vw', padding: '5px', fontWeight: 'bold', backgroundColor: 'gray', color: usedNumbers.includes(number) ? 'red' : 'purple'}}>
              {number}
            </Card>
          ))}
        </Box>
        <Box gap={2} display='flex' justifyContent='center'>
          <Button color='secondary' disabled={availableNumbers.length === 0 ? true : false} variant='contained' onClick={() => handleSelectANumber()}>Select Number</Button>
          <Button color='secondary' variant='contained' onClick={() => handleGameOver()}>Game Over</Button>
        </Box>
      </Box> : isPlaying === true && gamePlayed === 'some' ?
      <Box>
        <Box display='flex' justifyContent='center' sx={{ minHeight: '15vw' }}>
          <Card sx={{ padding: '5px', fontWeight: 'bold', backgroundColor: 'gray', color: 'purple', minWidth: '15vw', minHeight: '10vw', marginBottom: '20px', fontSize: '10vw'}}>{selectedNumber}</Card>
        </Box>
        <Box gap={2} display='flex' justifyContent='center' sx={{ marginBottom: '20px' }}>
          <Typography fontSize='2vw' fontWeight='bold'>G</Typography>
          {gNumbers.map(number => (
            <Card sx={{ minHeight: '2vw', minWidth: '2vw', fontSize: '2vw', padding: '5px', fontWeight: 'bold', backgroundColor: 'gray', color: usedNumbers.includes(number) ? 'red' : 'purple'}}>
              {number}
            </Card>
          ))}
        </Box>
        <Box gap={2} display='flex' justifyContent='center' sx={{ marginBottom: '20px' }}>
          <Typography fontSize='2vw' fontWeight='bold'>O</Typography>
          {oNumbers.map(number => (
            <Card sx={{ minHeight: '2vw', minWidth: '2vw', fontSize: '2vw', padding: '5px', fontWeight: 'bold', backgroundColor: 'gray', color: usedNumbers.includes(number) ? 'red' : 'purple'}}>
              {number}
            </Card>
          ))}
        </Box>
        <Box gap={2} display='flex' justifyContent='center'>
          <Button color='secondary' disabled={availableNumbers.length === 0 ? true : false} variant='contained' onClick={() => handleSelectANumber()}>Select Number</Button>
          <Button color='secondary' variant='contained' onClick={() => handleGameOver()}>Game Over</Button>
        </Box>
      </Box> :
      <></> }
    </div>
  );
}

export default App;
