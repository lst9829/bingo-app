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
  const [image, setImage] = useState("")
  const [image2, setImage2] = useState("")

  const handleIsPlaying = (value) => {
    setIsPlaying(true)
    console.log(value)
    if(value !== 'postage') {
      setAvailableNumbers([...bNumbers, ...iNumbers, ...nNumbers, ...gNumbers, ...oNumbers])
      setGamePlayed(value)
      setUsedNumbers([])
      setSelectedNumber()
      if (value === 'all') {
        setImage('https://cdn11.bigcommerce.com/s-ykblmppim4/images/stencil/1280x1280/products/248/674/apilfjeow__58971.1641219352.png?c=1')
      } else if (value === 'bingo') {
        setImage('https://cdn11.bigcommerce.com/s-ykblmppim4/images/stencil/1280x1280/products/331/788/apifdh6kd__85165.1641219357.png?c=1')
        setImage2('https://cdn11.bigcommerce.com/s-ykblmppim4/images/stencil/1280x1280/products/249/425/api6cb5px__30507.1641219353.png?c=1')
      } else if (value === 'madam') {
        setImage('https://cdn11.bigcommerce.com/s-ykblmppim4/images/stencil/1280x1280/products/529/438/apiehslmh__74313.1641219364.png?c=1')
      } else if (value === 'letterL') {
        setImage('https://cdn11.bigcommerce.com/s-ykblmppim4/images/stencil/1280x1280/products/446/804/apifiec4w__54253.1641219363.png?c=1')
      }
    } else {
      setAvailableNumbers([...gNumbers, ...oNumbers])
      setGamePlayed("postage")
      setImage("https://cdn11.bigcommerce.com/s-ykblmppim4/images/stencil/1280w/products/207/794/BGPostageStamp-2__67236.1597518423.png?c=1' alt='bingo success example")
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
    setImage("")
  }

  const handleSelectANumber = () => {
    const numberIndex = Math.floor(Math.random() * availableNumbers.length)
    const randomNumber = availableNumbers[numberIndex]

    setSelectedNumber(randomNumber)
    setUsedNumbers([...usedNumbers, randomNumber])
    setAvailableNumbers(prevNumbers => prevNumbers.filter(number => number !== randomNumber))
  }

  return (
    <div className="App">
      <Typography variant='h3' textAlign='center'>
        Loy Elementary Bingo Web Application
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} sx={{ marginBottom: '15px', marginTop: '14px'}}>
        <Button color='secondary' variant='contained' value='bingo' onClick={(event) => handleIsPlaying(event.target.value)}>Regular Bingo</Button>
        <Button color='secondary' variant='contained' value='all' onClick={(event) => handleIsPlaying(event.target.value)}>Coverall</Button>
        <Button color='secondary' variant='contained' value='madam' onClick={(event) => handleIsPlaying(event.target.value)}>Madam X</Button>
        <Button color='secondary' variant='contained' value='postage' onClick={(event) => handleIsPlaying(event.target.value)}>Postage Stamp</Button>
        <Button color='secondary' variant='contained' value='letterL' onClick={(event) => handleIsPlaying(event.target.value)}>Letter L</Button>
      </Box>
      {isPlaying === true && gamePlayed !== "postage" ?
      <Box>
        <Box gap={2} display='flex' justifyContent='center' sx={{ minHeight: '15vw' }}>
          <img height='237vw' width='237vw' src={image} alt='bingo success example' />
          <Card sx={{ padding: '5px', fontWeight: 'bold', backgroundColor: 'gray', color: 'purple', minWidth: '15vw', minHeight: '10vw', marginBottom: '20px', fontSize: '10vw'}}>{selectedNumber}</Card>
          <img height='237vw' width='237vw' src={gamePlayed === 'bingo' ? image2 : image} alt='bingo success example' />
        </Box>
        <Box gap={2} display='flex' justifyContent='center' sx={{ marginBottom: '20px' }}>
          <Typography fontSize='2vw' fontWeight='bold'>B</Typography>
          {bNumbers.map(number => (
            <Card sx={{ minHeight: '2vw', minWidth: '2.2vw', fontSize: '2vw', padding: '5px', fontWeight: 'bold', backgroundColor: 'gray', color: usedNumbers.includes(number) ? 'red' : 'purple'}}>
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
      </Box> : isPlaying === true && gamePlayed === 'postage' ?
      <Box>
        <Box gap={2} display='flex' justifyContent='center' sx={{ minHeight: '15vw' }}>
          <img height='237vw' width='237vw' src={image} alt='bingo success example' />
          <Card sx={{ padding: '5px', fontWeight: 'bold', backgroundColor: 'gray', color: 'purple', minWidth: '15vw', minHeight: '10vw', marginBottom: '20px', fontSize: '10vw'}}>{selectedNumber}</Card>
          <img height='237vw' width='237vw' src={image} alt='bingo success example' />
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
