
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Service } from './components/Service'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Certificaciones } from './components/Certificaciones'

import { Clientes } from './components/Clientes'
import { WhatsApp } from './components/WhatsApp'


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Clientes />
      <Certificaciones />
      <Footer />
      <WhatsApp />
    </>
  )
}

export default App
