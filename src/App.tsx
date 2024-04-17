import { useState } from 'react'
import './App.css'
import quotes from './assets/quotes.json'
import {FaTwitter , FaQuoteLeft , FaQuoteRight} from "react-icons/fa"

interface Quote {
    quote: string;
    author: string;
}

const getRandomQuote= (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const getRandomColor= (): string[] => {
  const red= Math.floor(Math.random() * 60) 
  const green= Math.floor(Math.random() * 60) 
  const blue= Math.floor(Math.random() * 60) 
  return [`rgb(${red},${green},${blue})`,`rgb(${red + 170},${green + 170},${blue + 170})`]
}
function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string[]>(getRandomColor())



  const changeQuote= ()=>{
      setQuote(getRandomQuote());
      setRandomColor(getRandomColor());
  }

  return (
    <>
      <div className='background' style={{backgroundColor: randomColor[0], transition: "background-color 0.5s ease-in-out"}}>
        <div id="quote-box" style={{backgroundColor: randomColor[1], transition: "background-color 0.5s ease-in-out"}}>
          <div className="quote-content">
            
            <h2 id="text" style={{color: randomColor[0]}}>
              <FaQuoteLeft size="30" style={{marginRight: "10px"}} />
              {quote.quote}
              <FaQuoteRight size="30" style={{marginLeft: "10px"}} />
              
            </h2>
            <h4 id="author" style={{color: randomColor[0], transition: "color 0.5s ease-in-out"}}>
              -{quote.author}
            </h4>
          </div>
          <div className="buttons">
            <a href="twitter.com/intent/tweet" id="tweet-quote">
              <FaTwitter color={randomColor[0]} style={{transition: "color 0.5s ease-in-out"}} size="30"/>
            </a>
           
          </div>
          <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor[0], color: randomColor[1]}}>Next Quote</button>
        </div>
      </div>
    </>
  )
}

export default App
