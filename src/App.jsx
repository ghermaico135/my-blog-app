
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LayOut from './Layout/Layout';
import NoLayout from './Layout/NoLayout';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';

function App() {

  return (
    <div className="app">
        <div className="container">
          <Router>
            <Routes>
              <Route path="/" element={<LayOut/>} >
                  <Route index element={<Home />} />
                  <Route path="Single" element={<Single/>} /> 
                  <Route path="Write" element={<Write/>} /> 
              </Route>  

              <Route path="/login" element={<NoLayout />}>
                  <Route index element={<Login/>} /> 
              </Route>

              <Route path="/Register" element={<NoLayout/>}>
                <Route index element={<Register/>} /> 
              </Route>
              
            </Routes>

        </Router>
      </div>
    </div>
   
  )
}

export default App
