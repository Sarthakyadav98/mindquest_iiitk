import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import TeamPage from './Pages/TeamPage'
import ThemePage from './Pages/Themepage';

const App = () => {
  return (
    <Routes>
      <Route path ='/'  element ={<Home/>} />
      <Route path ='/login'  element ={<Login/>} />
      <Route path = '/team' element ={<TeamPage/>} />
      <Route path='/theme' element={<ThemePage />} />
    </Routes>
    
  )
}

export default App
