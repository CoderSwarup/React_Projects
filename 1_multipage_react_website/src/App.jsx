import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Services from './Components/Services'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Error from './Components/Error'
import { ThemeProvider } from 'styled-components'
import './Style.css'
import GlobalStyle from './GlobalStyle'
import ScrollTop from './Components/ScrollTop'

function App() {
  const theme = {
    colors: {
      heading: "#1c1c1c",
      text: "#222",
      white: "#fff",
      helper: "#8497ff",
      bg: "#ffffff",
      bg2: "#fcecff",
      footer: "#2b1151",
      btn: "rgb(98 ,84,243)",
      border: "rgb(0, 0, 0)",
      hr: "#fffff",
      gradient:
        "linear-gradient,rgb(132,144,255) 0% , rgb(98,189,252) 100%",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px  , rgba(27, 31,34,0.15) 0px 0px 0px 1px ",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px"

    },
    media: {
      mobile: "786px",
      tab: "998px"

    }

  }
  return (
    // this is style component 
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/service' element={<Services></Services>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
        <ScrollTop />
        <Footer></Footer>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
