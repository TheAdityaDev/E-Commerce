import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex justify-center h-[90vh] items-center m-5">
      <div className="max-w-md h-[90dvh] rounded-md border shadow-lg">
        <img
          className="w-full rounded-t-md"
          src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=600&
            auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
          alt=""
        />
        <div className="mt-8 px-10 ">
          {isLogin ? <LoginForm /> : <SignupForm />}
          <div className="flex items-center gap-1 justify-center mt-5">
            <p>{isLogin ? "Not a member?" : "Already a member?"}</p>{" "}
            <p
              onClick={() => setIsLogin(!isLogin)}
              className="text-teal-500 cursor-pointer underline-offset-2 underline"
            >
              {isLogin ? "Signup" : "Login"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
