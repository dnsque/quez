import './App.css';
import HomePage from './HomePage';
import SurveyStart from './SurveyStart'
import SurveyList from './SurveyList'
import { Route, Routes } from "react-router-dom"
function App() {
  return ( <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/SurveyStart" element={<SurveyStart />}/>
    <Route path="/SurveyList" element={<SurveyList />}/>
  </Routes>
  )
}
export default App;
