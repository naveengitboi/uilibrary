import { GlobalStyle, MyAppWrapper, BackLightDiv } from './Global'
import {Routes, Route} from 'react-router-dom'
import Navbar from './website/WComponents/Utils/Navbar'
import Docs from './website/WPages/UtilPages/Docs'
import HomePage from './website/WPages/UtilPages/HomePage'
function App() {

  return (
    <>
      <GlobalStyle/>
      <BackLightDiv/>
      <Navbar/>

      <MyAppWrapper>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/components" element={<Docs/>} />
        </Routes>
      </MyAppWrapper>
      
    </>
  )
}

export default App
