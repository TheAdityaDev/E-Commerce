import React, { useState } from "react";
import SellerLogin from "./BecomeSeller/SellerLogin";
import SellerAccountForm from "./BecomeSeller/SellerAccountForm";
import { Button } from "@mui/material";

const BecomeSeller = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="grid md:gap-5 grid-cols-3 min-h-screen">
      <section className="lg:col-span-1 md:col-span-2 col-span-3 shadow-lg rounded-b-2xl">
        {isLogin ? <SellerLogin /> : <SellerAccountForm />}
        <div className="mt-10 space-y-3 p-5">
          <h1 className="font-medium text-center text-sm">Have an account?</h1>
          <Button
            onClick={() => setIsLogin(!isLogin)}
            variant="contained"
            fullWidth
            sx={{ py: "12px" }}
          >
            {isLogin ? "Create an account" : "Login"}
          </Button>
        </div>
      </section>
      <section className="col-span-2 mt-15 bg-white">
        <div className="hidden md:flex md:col-span-1 lg:col-span-2 ">
          <img
            className=" object-cover"
            fetchPriority="high"
            src="https://m.media-amazon.com/images/G/31/amazonservices/Becoming_an_online_seller.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default BecomeSeller;
