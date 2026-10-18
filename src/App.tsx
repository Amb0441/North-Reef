import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Offices } from './pages/Offices';
import { Properties } from './pages/Properties';
import { Team } from './pages/Team';
import { Sell, Manage, Company } from './pages/ContentPages';
import { Contact } from './pages/Contact';
import { News } from './pages/News';
import { RentalYieldCalculator } from './pages/RentalYieldCalculator';
import { SuburbInsights } from './pages/SuburbInsights';
import { MovingChecklist } from './pages/MovingChecklist';
import { MaintenancePortal } from './pages/MaintenancePortal';
import { FinanceCalculators } from './pages/FinanceCalculators';
import { PropertyAlert } from './pages/PropertyAlert';
import { PropertyDetails } from './pages/PropertyDetails';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="offices" element={<Offices />} />
          <Route path="buy" element={<Properties />} />
          <Route path="rent" element={<Properties />} />
          <Route path="sell" element={<Sell />} />
          <Route path="manage" element={<Manage />} />
          <Route path="team" element={<Team />} />
          <Route path="company" element={<Company />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
          <Route path="rental-yield-calculator" element={<RentalYieldCalculator />} />
          <Route path="suburb-insights" element={<SuburbInsights />} />
          <Route path="moving-checklist" element={<MovingChecklist />} />
          <Route path="maintenance" element={<MaintenancePortal />} />
          <Route path="finance-calculators" element={<FinanceCalculators />} />
          <Route path="property-alert" element={<PropertyAlert />} />
          <Route path="property/:id" element={<PropertyDetails />} />
          
          {/* Aliases mapping to generic views for fallback */}
          <Route path="properties/sale" element={<Properties />} />
          <Route path="properties/rental" element={<Properties />} />
          <Route path="join-us" element={<Company />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
