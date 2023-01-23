import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Budget from './Components/Budget/Budget';
import BudgetContainer from './Components/Budget/BudgetContainer';
import BudgetProvider from './Context/BudgetProvider';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Home from './Components/Home';
import AddBudgetModel from './Components/AddBudgetModel';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <BudgetProvider>
          <Routes>
            {/* <Route  path="" element={<Home/>}/> */}
            <Route index  path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/budgets" element={<BudgetContainer />} />
          </Routes>
          <AddBudgetModel/>
        </BudgetProvider>
      </BrowserRouter>
    </>
  )
}
export default App
