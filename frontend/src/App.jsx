 import {BrowserRouter,Routes,Route} from "react-router-dom"
 import Home from "./pages/Home"
import CreatePage from "./pages/CreatePage"
 import EditPage from "./pages/EditPage"
import SinglePage from "./pages/SinglePage"
function App() {
 
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/create-page" element={<CreatePage/>}/>
    <Route path="/single-page" element={<SinglePage/>}/>
    <Route path="/edit-page" element={<EditPage/>}/>
   </Routes>
   </BrowserRouter>
    
  )
}

export default App
