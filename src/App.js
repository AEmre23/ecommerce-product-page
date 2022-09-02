import React,{useState,useRef} from 'react'
import './styles/base.scss'
import { Routes, Route } from "react-router-dom";
// ? Components
import Header from './components/Header'
import Home from './components/Home'
import UnderConstruction from './components/UnderConstruction';
import Footer from './components/Footer'


const App = () => {
  const[amount,setAmount] = useState(0)
  const cart = useRef()
  return (
    <div className="App">
      <Header 
        amount={amount}
        setAmount={setAmount}
        cart={cart}
      />
      <Routes>
        <Route path="/" element={
          <Home 
            amount={amount}
            setAmount={setAmount}
            cart={cart}
          />} 
        />
        <Route path="collections" element={<UnderConstruction />} />
        <Route path="men" element={<UnderConstruction />} />
        <Route path="women" element={<UnderConstruction />} />
        <Route path="about" element={<UnderConstruction />} />
        <Route path="contact" element={<UnderConstruction />} />
        <Route path="checkout" element={<UnderConstruction />} />
        <Route path="profile" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

