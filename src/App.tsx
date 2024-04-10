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
function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());


  return (
    <>
      <div className='background'>
        <div id="quote-box">
          <div className="quote-content">
            
            <h2 id="text">
              <FaQuoteLeft size="30" style={{marginRight: "10px"}} />
              {quote.quote}
              <FaQuoteRight size="30" style={{marginLeft: "10px"}} />
              
            </h2>
            <h4 id="author">
              -{quote.author}
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
