import './App.css'
import Featured from './components/Featured'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Offer from './components/Offer'
import Category from "./components/Category"
import Discount from './components/Discount'
import SideNav from './components/SideNav'

export default function App() {
  return (
    <div className='bg-[#1b2838]'>
      <Header/>
      <Navbar/>
      <div className='md:flex justify-center gap-5'>
        <div className='hidden md:block'>
          <SideNav/>
        </div>
        <div className='md:flex justify-center items-center flex-col'>
          <Featured/>
          <Offer/>
          <Category/>
        </div>
      </div>
    </div>
  )
}