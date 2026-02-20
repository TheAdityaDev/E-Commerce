import customTheme from "./theme/customTheme";
import { ThemeProvider } from "@emotion/react";

import { Route, Routes } from "react-router-dom";
import SellerDashboard from "./seller/SellerDashboard/sellerDashboard";
import CustomerRoutes from "./routes/CustomerRoutes/CustomerRoutes";
import BecomeSeller from "./auth/BecomeSeller";
import Auth from "./auth/Auth";
import AdminDashboard from "./admin/Dashboard/AdminDashboard";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Routes>
        <Route path="/become-seller" element={<BecomeSeller />} />
        <Route path="/seller/*" element={<SellerDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
