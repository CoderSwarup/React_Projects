import { ThemeProvider } from 'styled-components'
import About from './Components/About'
import Brands from './Components/Brands'
import Contact from './Components/Contact'
import CounterUp from './Components/CounterUp'
import Footer from './Components/Footer'
import Image_gallery from './Components/Image_gallery'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Skills from './Components/Skills'
import { GlobalStyle } from './GlobalStyle'

function App() {
  const theme = {
    colors: {
      primary: "#1a253f",
      dark: "#151A33",
      secondary: "#2b55cc",
      info: "#4d79f6",
      ternary: "#848db3",
      pure: "#eff2f9",
      fade: "#7081b9",
      mild: "#8997bd",
      footer: "#212A4A",
      black: "#060b1b",
      twitter: "#4ac7ec",
      dribbble: "#ff5da0",
      success: "#1ecab8",
      danger: "#f1646c",
      dark_blue: '#28365f',
      dark_gray: "#171f33",
      yellow: "#f3c74d",
      green: "#27a545",
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>

      <Navbar />
      <Profile></Profile>
      <About></About>
      <Skills></Skills>
      <CounterUp></CounterUp>
      <Image_gallery></Image_gallery>
      <Brands></Brands>
      <Contact></Contact>
      <Footer></Footer>

    </ThemeProvider>
  )
}

export default App
