import React, { useEffect } from 'react';
import './App.css';
import { NavbarComponent, Ticket, TicketComponent } from './components';
import { Routes, Route } from "react-router-dom";
import SuccessTransaction from './pages/success.transaction';
import YourTicket from './pages/yourTickets.component';
import { useStateContext } from './context';
import HomePage from './pages/home/home.page';
import SelectNFT from './pages/selectnft/selectnft.page';
function App() {
  const { setActivePage } = useStateContext();
  useEffect(() => {
    setActivePage("home");
  }, [])
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tickets/:id" element={<SelectNFT />} />
        <Route path="/bookticket/:id/:id" element={
          <div className="wrapper">
            <TicketComponent />
          </div>
        } />
        <Route path="/success" element={<SuccessTransaction />} />
        <Route path="/tickets" element={<YourTicket />} />
      </Routes>

    </div>
  );
}

export default App;
