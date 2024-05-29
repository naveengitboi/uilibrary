import { GlobalStyle, MyAppWrapper } from './Global'
import {Routes, Route} from 'react-router-dom'
import Navbar from './website/WComponents/Utils/Navbar'
import Docs from './website/WPages/UtilPages/Docs'
import HomePage from './website/WPages/UtilPages/HomePage'
import CodeBlock from './website/WComponents/Utils/CodeBlock'
function App() {

  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <CodeBlock language='js' children={
      `
      <GlobalStyle/>
      <Navbar/>
      <CodeBlock language='js' children='import js' />
      <MyAppWrapper>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/components" element={<Docs/>} />
        </Routes>
      </MyAppWrapper>
      `} />
      <MyAppWrapper>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/components" element={<Docs/>}  />
        </Routes>
      </MyAppWrapper>
      
    </>
  )
}

export default App
