import React from 'react'
import { AnimatePresence } from 'framer-motion'

import { Routes, Route } from 'react-router-dom'
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
import BlogsPage from './pages/Blogs'
import BlogDetailPage from './pages/Blogdetails'
import AdminPage from './pages/admin/Adminpage'
import AdminDashboard from './pages/admin/Admindashboard'
import blog from './pages/admin/Addblog'
import AdminEnquiries from './pages/admin/Adminenquiries'
import Enquiries from './pages/admin/Enquiry'
import AdminSeo from './pages/admin/Adminseo'
import BlogEditor from './pages/admin/Addblog'
import BlogsList from './pages/admin/BlogList'
import Blogs from './pages/Blogs'
import Blogdetails from './pages/Blogdetails'

import ScrollToTop from './components/Scrolltotop'
import WorkDetailPage from './pages/WorkDetailpage'
import ProtectedRoute from './components/admin/ProtectedRoute'
import WorkList from './pages/admin/WorkList'
import AddWork from './pages/admin/AddWork'





const App = () => {
  return (
    <div>
      <AnimatePresence mode='wait'>

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/social-media-marketing" element={<SocialMedia />}></Route>
          <Route path="/seo" element={<Seo />}></Route>
          <Route path="/ui-ux-design" element={<UIux />}></Route>
          <Route path="/product-design" element={<Productdesign />}></Route>
          <Route path="/branding" element={<Branding />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blogs/:slug" element={<Blogdetails />}></Route>

          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}></Route>
          <Route path="/admin/dashboard/blogs/create" element={<ProtectedRoute><BlogEditor /></ProtectedRoute>}></Route>
          <Route path="/admin/dashboard/blogs/read" element={<ProtectedRoute><BlogsList /></ProtectedRoute>}></Route>
          <Route path="/admin/dashboard/blogs/edit/:id" element={<ProtectedRoute><BlogEditor /></ProtectedRoute>}></Route>
          <Route path="/admin/dashboard/works/create" element={<ProtectedRoute><AddWork /></ProtectedRoute>}></Route>
          <Route path="/admin/dashboard/works/read" element={<ProtectedRoute><WorkList /></ProtectedRoute>}></Route>
          <Route path="/admin/dashboard/works/edit/:id" element={<ProtectedRoute><AddWork /></ProtectedRoute>}></Route>
          <Route path="/admin/dashboard/newsletter" element={<ProtectedRoute><AdminEnquiries /></ProtectedRoute>}></Route>
          <Route path="/admin/dashboard/enquiries" element={<ProtectedRoute><Enquiries /></ProtectedRoute>}></Route>
          <Route path="/admin/dashboard/static-seo" element={<ProtectedRoute><AdminSeo /></ProtectedRoute>}></Route>
          <Route path="/blog/:slug" element={<BlogDetailPage />}></Route>
          <Route path="/paid-ads" element={<Paidads />}></Route>
          <Route path="/business-consulting" element={<Bussiness />}></Route>
          <Route path="/ecommerce-management" element={<Ecommerce />}></Route>
          <Route path="/software-development" element={<Softwaredevlopment />}></Route>
          <Route path="/content-management" element={<Content />}></Route>
          <Route path="/Service-design" element={<Servicedesign />}></Route>
          <Route path="/website-development" element={<WebsiteDesign />}></Route>
          <Route path="/work" element={<Work></Work>}></Route>
          <Route path="/work/:slug" element={<WorkDetailPage></WorkDetailPage>}></Route>

        </Routes>
        <Footer />

      </AnimatePresence>
    </div>
  )
}

export default App
