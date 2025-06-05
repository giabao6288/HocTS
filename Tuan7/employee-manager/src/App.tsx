import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomePage from '../src/pages/HomePage/HomePage';
import CreatePage from './pages/CreatePage/CreatePage';
import EditPage from './pages/EditPage/EditPage';
import './App.css';
function App(){
  return(
    <Router> 
     <Navbar/>
        <div className="container mt-4">
          <div className="main-container">
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/create" element={<CreatePage/>}/>
              <Route path="/edit/:id" element={<EditPage/>}/>
            </Routes>
          </div>
        </div>
    </Router>
  )
}
export default App;