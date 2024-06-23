import { GlobalStyle, MyAppWrapper } from './Global'
import {Routes, Route} from 'react-router-dom'
import Navbar from './website/WComponents/Utils/Navbar'
import HomePage from './website/WPages/UtilPages/HomePage'


function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      
      <MyAppWrapper>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </MyAppWrapper>
      
    </>
  )
}

export default App
