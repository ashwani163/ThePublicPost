import react from 'react'
import { BrowserRouter , Route , Routes } from "react-router-dom"
import SignInForm from "./auth/forms/signInForm"
import SignUpForm from "./auth/forms/signUpForm"
import Home from "./pages/Home"
import About from "./pages/About"
import NewsArtical from "./pages/NewsArtical"
import Dashboard from "./pages/Dashboard"
import Header from "./components/shared/Header"
import Footer from './components/shared/footer'
import PrivateRoute from './components/shared/PrivateRoute'
import CreatePost from './pages/CreatePost'
import AdminPrivateRoute from './components/shared/AdminPrivateRoute'
import EditPost from './pages/EditPost'
import PostDetails from './pages/PostDetails'
import ScrollToTop from './components/shared/ScrollToTop'
import Search from './pages/Search'
{/*import { Toaster } from "@/components/ui/toaster"*/}
function App() {

  return (
    
      <BrowserRouter>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <Routes >
        <Route path = "/sign-in" element = {<SignInForm/>}/>
        <Route path = "/sign-up" element = {<SignUpForm/>}/>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path="/search" element={<Search />} />
        <Route path = "/news" element = {<Search/>}/>
        <Route path="/post/:postSlug" element={<PostDetails />} />
        <Route element={<AdminPrivateRoute />}>
          <Route path="/create-post" element = {<CreatePost/>}/>
          <Route path="/update-post/:postId" element={<EditPost />} />
        </Route>
        
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer></Footer>
      {/*<Toaster></Toaster>*/}
      </BrowserRouter>
    
  ) 
}

export default App
