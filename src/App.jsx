import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom"
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from "./components/layout/Container"

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min_height">
      <Routes>
          <Route index element={<Home/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="company" element={<Company />} />
          <Route path="newproject" element={<NewProject />} />
          <Route path="project/:id" element={<Project/>} />
      </Routes>
        </Container>
      <Footer/>
    </Router>

  )}


export default App;
