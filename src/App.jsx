import './App.css'
import Featured from './components/Featured'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Offer from './components/Offer'
import Category from "./components/Category"
import SideNav from './components/SideNav'
import FeatureSlide from './components/FeatureSlide'
import OfferSlide from './components/OfferSlide'
import CategorySlide from './components/CategorySlide'

export default function App() {
  return (
    <div className='bg-[#192a3b]'>
      <Header />
      <Navbar />
      <div className='md:flex justify-center gap-5'>
        <div className='hidden md:block'>
          <SideNav />
        </div>
        <div className='md:flex justify-center items-center flex-col md:w-[90%] md:max-w-[900px] md:'>
          <Featured />
          <FeatureSlide />
          <div className='hidden md:block md:mt-10'>
            <img src='https://cdn.akamai.steamstatic.com/steam/clusters/takeunder/c57b1f959eb86fd889f655ed/takeunder_desktop_english.jpg?t=1693434649' alt="" />
          </div>
          <Offer />
          <OfferSlide />
          <Category />
          <CategorySlide/>
        </div>
      </div>
    </div>
  )
}