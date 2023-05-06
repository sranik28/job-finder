import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {

  return (
    <div>
      <Header />
      <div className='max-w-[1240px] mx-auto px-4 md:min-h-[calc(100vh-100px)]'>
        <Outlet />        
      </div>
      <Footer/>
    </div>
  )
}

export default App
