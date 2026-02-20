import { Divider } from "@mui/material";
import OrderDetail from "./OrderDetail";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserDetail from "../pages/account/UserDetail";
import Order from "./Order";

const menu = [
  { name: "orders", path: "/account/orders" },
  { name: "profile", path: "/account" },
  { name: "saved Cards", path: "/account/saved-cards" },
  { name: "newAddress", path: "/account/new-address" },
  { name: "logout", path: "/" },
];

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5 lg:px-52 min-h-screen mt-10">
      <div>
        <h1 className="text-xl font-bold pb-5 flex items-end gap-2">
          👋 Hello,
          <p className="bg-gradient-to-r text-2xl from-teal-400 to-blue-700 bg-clip-text text-transparent">
            Aditya
          </p>
        </h1>
        <Divider />
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
          <div className="flex flex-col lg:grid lg:grid-cols-[250px_1fr] gap-6">
            {/* SIDEBAR */}
            <div
              className="
          flex lg:flex-col
          gap-3
          overflow-x-auto lg:overflow-visible mt-10
          pb-3 lg:pb-0
          "
            >
              {menu.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`
                  whitespace-nowrap
                  px-4 py-2 text-sm font-medium
                  rounded-md border
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-teal-400 to-blue-500 text-white border-transparent"
                      : "hover:bg-gray-100"
                  }
                `}
                  >
                    {item.name.toLocaleUpperCase()}
                  </button>
                );
              })}
            </div>
              <Divider orientation="vertical" flexItem className="hidden lg:block" />
          </div>
          <div className="lg:col-span-2 lg:pl-5 py-5">
            <Routes>
              <Route index element={<UserDetail />} />
              <Route path="orders" element={<Order />} />
              <Route
                path="orders/:orderId/item/:orderItemId"
                element={<OrderDetail />}
              />

              {/* Optional: 404 */}
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
