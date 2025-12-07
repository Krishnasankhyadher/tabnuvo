import React from 'react'

import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Services from './pages/Services'
import SocialMedia from './pages/SocialMedia'
import WebsiteDesign from './pages/WebsiteDesign'
import Seo from './pages/Seo'
import Branding from './pages/Branding'
import Servicedesign from './pages/Servicedesign'
import Productdesign from './pages/Productdesign'
import UIux from './pages/UIux'
import Softwaredevlopment from './pages/Softwaredevlopment'
import Ecommerce from './pages/Ecommerce'
import Content from './pages/Content'
import Paidads from './pages/Paidads'
import Bussiness from './pages/Bussiness'


const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/social-media-marketing" element={<SocialMedia/>}></Route>
        <Route path="/seo" element={<Seo/>}></Route>
        <Route path="/ui-ux-design" element={<UIux/>}></Route>
        <Route path="/product-design" element={<Productdesign/>}></Route>
        <Route path="/branding" element={<Branding/>}></Route>
        <Route path="/paid-ads" element={<Paidads/>}></Route>
        <Route path="/business-consulting" element={<Bussiness/>}></Route>
        <Route path="/ecommerce-management" element={<Ecommerce/>}></Route>
        <Route path="/software-development" element={<Softwaredevlopment/>}></Route>
        <Route path="/content-management" element={<Content/>}></Route>
        <Route path="/Service-design" element={<Servicedesign/>}></Route>
        <Route path="/website-development" element={<WebsiteDesign  />}></Route>
        <Route path="/work" element={<Work></Work>}></Route>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
