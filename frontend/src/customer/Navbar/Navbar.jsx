import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";
import { AddShoppingCart, Menu, People, Storefront } from "@mui/icons-material";
import { mainCategory } from "../../data/category/mainCategory";
import { useState } from "react";
import CategorySheet from "./CategorySheet";
import { Heart, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../json/common";

const Navbar = () => {
  const [showSheet, setShowSheet] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const navigate = useNavigate();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box className="sticky top-0 bg-white z-50 shadow-sm ">
      {/* NAVBAR */}
      <div className="flex items-center justify-between h-16 px-2 sm:px-10  lg:px-20">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          {!isLarge && (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <Menu />
            </IconButton>
          )}

          {/* Logo */}
          <Link to="/" className="logo font-bold text-lg sm:text-xl">
            {logo.name}
          </Link>

          {/* Desktop Categories */}
          {isLarge && (
            <ul className="flex items-center font-medium text-gray-600">
              {mainCategory.map((category) => (
                <li
                  key={category.categoryId}
                  onMouseEnter={() => {
                    setSelectedCategory(category.categoryId);
                    setShowSheet(true);
                  }}
                  onMouseLeave={() => setShowSheet(false)}
                  className="hover:text-teal-500 cursor-pointer hover:border-b-2 h-16 px-4 border-teal-400 flex items-center"
                >
                  {category.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop / Tablet (sm and above) */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <IconButton>
              <Search size={20} />
            </IconButton>

            <IconButton>
              <Heart size={20} />
            </IconButton>

            <IconButton onClick={() => navigate("/cart")}>
              <AddShoppingCart />
            </IconButton>

            {false ? (
              <Button
                onClick={() => navigate("/account")}
                className="flex items-center gap-2"
                startIcon={
                  <Avatar
                    src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww"
                    className="text-xl"
                  />
                }
              >
                {" "}
                Aditya{" "}
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                variant="contained"
                startIcon={<People />}
              >
                Login
              </Button>
            )}

            <Button
              onClick={() => navigate("/become-seller")}
              variant="contained"
              startIcon={<Storefront />}
            >
              Become Seller
            </Button>
          </div>

          {/* Mobile view (below sm) — only Login button */}
          <div className="flex  m-3 sm:hidden">
            {false ? (
              <Button
                onClick={() => navigate("/account")}
                className="flex items-center gap-2 sm:p-5"
                startIcon={
                  <Avatar
                    src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww"
                    className="text-xl"
                  />
                }
              >
                {" "}
                Aditya{" "}
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                variant="contained"
                startIcon={<People />}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Category Dropdown */}
      {isLarge && showSheet && (
        <div
          onMouseEnter={() => setShowSheet(true)}
          onMouseLeave={() => setShowSheet(false)}
          className="absolute top-16 left-20 right-20"
        >
          <CategorySheet
            selectCategory={selectedCategory}
            setShowSheet={setShowSheet}
          />
        </div>
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box className="w-64 p-4">
          <List>
            {mainCategory.map((category) => (
              <ListItem key={category.categoryId} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/products/${category.categoryId}`);
                    setOpenDrawer(false);
                  }}
                >
                  <ListItemText primary={category.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
