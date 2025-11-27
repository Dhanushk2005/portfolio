import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Router, Route } from 'react-router-dom';

function App() {

  const [isFrontEnd , setIsFrontEnd] = useState(false);
  const [isBackEnd , setIsBackEnd] = useState(false);
  const [isDatabaseManagement , setIsDatabaseManagement] = useState(false);
  const [isVersionControl , setIsVersionControl] = useState(false);

  const [isChessGame , setIsChessGame] = useState(false);
  const [isStockMarketTradingSystem , setIsStockMarketTradingSystem] = useState(false);
  const [isEWasteManagementSystem , setIsEWasteManagementSystem] = useState(false);
  const [isBankAndATMSystem , setIsBankAndATMSystem] = useState(false);

  function ChessGame(){
    return (
      <>
        <h1>Hi! I have created a very interesting Chess Game with an interactive gameplay.</h1>
        <h4>I have used JavaScript to manage the game logic and HTML, CSS, JavaScript for the user interface.</h4>
        <h2>Features of My Chess Game:</h2>
        <h3>1.Move Prediction</h3>
        <p>Highlights possible moves for selected pieces, enhancing user experience.</p>
        <h3>2.Check and Checkmate Detection</h3>
        <p>Implements rules to identify check and checkmate situations.</p>
        <h3>3.Interactive User Interface</h3>
        <p>Built with different color for different situation for a seamless gaming experience.</p>
        <br />
        <div className='popUpRefers'>
          <img src='src\assets\chessPic.png' className='popUpPics'></img>
          <a className="gitReferLink" href='https://github.com/Dhanushk2005/chess-game.git'>https://github.com/Dhanushk2005/chess-game.git</a>
        </div>
      </>
    )
  }
  function StockMarketTradingSystem(){

    return (
      <>
        <div>
          <h1>Hi! I have created a Stock Market Trading System.</h1>
          <h4>This system allows users to buy and sell stocks, view real-time stock prices, and manage their portfolios.</h4>
          <h2>Features of My Stock Market Trading System:</h2>
          <h3>1.Can register as both buyer and seller</h3>
          <p>Users can register as buyers to purchase stocks or as sellers to list stocks for sale.</p>
          <h3>2.Can register the conpany</h3>
          <p>Sellers can register their companies and list stocks associated with them.</p>
          <h3>3.Can buy and resell the Stocks</h3>
          <p>Buyers can purchase stocks from sellers and resell them later.</p>
        </div>
      
      </>
    )
  }

  function EWasteManagementSystem(){

    return(
      <></>
    )
  }
  function BankAndATMSystem(){

  } 
  function FrontendDevSkills() {

    return (
      <>
      <h3>Hi! I am a Creative FrontEnd developer</h3>
      <h4>The skills I use here are,</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React JS</li>
      </ul>
      <h4>I have a hands On experience on Frontend development using these. Refer my projects (E Waste Management System, Chess Game)</h4>

      </>
    )
  }
  return (
    <>
      <div className='profileContainer'>
        <div className='intro'>
          <div className='nameContainer'>
            <h1 id='greeting'>Hi, I'm</h1>
            <h1 id='name'>DHANUSHKUMAR K</h1>
          </div>
          <h2 id='aboutMe' >
            A Java developer skilled in Spring Boot, React, and SQL,
            focused on building clean and efficient applications.
          </h2>
          <div className='socialMediaLinks'>
            <a href='https://github.com/Dhanushk2005'>
              <img className='socialMediaLogos' id='gitLogo' src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png' alt='GitHub'></img>
            </a>
            <a href='https://www.linkedin.com/in/K-Dhanush1'>
              <img className='socialMediaLogos' id='linkedInLogo' src='https://img.favpng.com/11/23/19/linkedin-logo-linkedin-logo-icon-in-blue-design-q5tLUUvT.jpg' alt='LinkedIn'></img>
            </a>
            {/* <a href=''>
            <img className='socialMediaLogos' id='twitterLogo' src='https://cdn.pixabay.com/photo/2016/11/29/03/53/twitter-1868613_1280.png' alt='Twitter'></img>
          </a> */}
            <a href='https://leetcode.com/u/Dhanushkumark123/'>
              <img className='socialMediaLogos' id='leetCode' src='https://cdn.iconscout.com/icon/free/png-512/free-leetcode-logo-icon-svg-download-png-2944960.png?f=webp&w=256' alt='LeetCode'></img>
            </a>
          </div>
        </div>

        <div className='profilePic'>
          <img src='https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_640.png'></img>
        </div>
      </div>
      <div className='boxesSection'>
        <h1 className='center'>My Work</h1>
        <div className='boxesContainer'>
          <div className='boxes works' id='chessGame' onClick={() => setIsChessGame(!isChessGame)}>
            <h2 className='center'>Chess Game</h2>
            
            <p className='center'>
              A fully functional chess game application with a graphical user interface (GUI) built using Java Swing. It allows two players to play chess against each other on the same computer, featuring standard chess rules, piece movements, and game state management.
            </p>
            <h3>Tech Used</h3>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className='boxes works' id='stockMarket' onClick={() => setIsStockMarketTradingSystem(!isStockMarketTradingSystem)}>
            <h2 className='center'>Stock Market Trading System</h2>
            
            <p className='center'>
              Developed a stock market trading system that allows users to buy and sell stocks, view real-time stock prices, and manage their portfolios. Implemented using Java for the backend and MySQL for data storage.
            </p>
            <h3>Tech Used</h3>
            <ul>
              <li>Java</li>
            </ul>
          </div>
          <div className='boxes works' id='eWasteManagement'>
            <h2 className='center'>E-Waste Management System</h2>
            
            <p className='center'>
              Created an e-waste management system to facilitate the collection, recycling, and disposal of electronic waste. The system includes user registration, scheduling pickups, and tracking e-waste processing using a React frontend and Java Spring Boot backend.
            </p>
            <h3>Tech Used</h3>
            <ul>
              <li>Java</li>
              <li>SpringBoot</li>
              <li>React</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className='boxes works' id='bankSystem'>
            <h2 className='center'>Bank and ATM System</h2>
            
            <p className='center'>
              Built a bank and ATM system that allows users to perform banking operations such as deposits, withdrawals, balance inquiries, and fund transfers. The system simulates ATM functionalities and ensures secure transactions using Java.
            </p>
            <h3>Tech Used</h3>
            <ul>
              <li>Java</li>
              <li>SpringBoot</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        {
          isFrontEnd && 
          (
            <div className="popUpSection">
              <div className='popUpData'>
                <button id='closeButton' onClick={
                  () => setIsFrontEnd(false)
                }>Close</button>
                <FrontendDevSkills></FrontendDevSkills>
              </div>
            </div>
          )
        }
        {
          isChessGame && 
          (
            <div className="popUpSection">
              <div className='popUpData'>
                <button id='closeButton' onClick={
                  () => setIsChessGame(false)
                }>Close</button>
                <ChessGame></ChessGame>
              </div>
            </div>
          )
        }
        {
          isStockMarketTradingSystem && 
          (
            <div className="popUpSection">
              <div className='popUpData'>
                <button id='closeButton' onClick={
                  () => setIsStockMarketTradingSystem(false)
                }>Close</button>
                <StockMarketTradingSystem></StockMarketTradingSystem>
              </div>
            </div>
          )
        }
        

      </div>
      <div className='boxesSection'>
        <h1 className='center'>Skills</h1>
        <div className='boxesContainer'>
          <div className='boxes skillBox'onClick={() => setIsFrontEnd(!isFrontEnd)}>
              <h2 className='center'>Front End Development</h2>

          </div>
          <div className='boxes skillBox'>
              <h2 className='center'>Back End Development</h2>
          </div>
          <div className='boxes skillBox'>
              <h2 className='center'>Database Management</h2>
          </div>
          <div className='boxes skillBox'>
              <h2 className='center'>Version Control</h2>
          </div>
        </div>
      </div>
        <div>
          sd8asidisa
          dsidfsfs
          <div>
            sdfsds
          </div>
          fdusafj
        </div>
    </>
  )
}

export default App
