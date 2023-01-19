import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Budget from './Components/Budget/Budget';
import BudgetContainer from './Components/Budget/BudgetContainer';
import BudgetProvider from './Context/BudgetProvider';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <BudgetProvider>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/budgets" element={<BudgetContainer />} />
          </Routes>
        </BudgetProvider>
      </BrowserRouter>
    </>
  )
}
export default App
