import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skill from './components/Skill'
import Topbar from './components/Topbar'
import Whatsapp from './components/Whatsapp'


function App() {

  return (
    <main>
      <Topbar />
      <Navbar />
      <div className='grid grid-cols-1'>
        <Hero />
        <About />
        <Skill />
        <Portfolio />
        {/* <Contact /> */}
        <Whatsapp />
        <Footer />
      </div>
    </main>
  );
}

export default App
