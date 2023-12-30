import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center">
      {" "}
      <div className="container bg-black flex ju  p-8 m-8 text-white border-white border-2  rounded-xl">
        <div className="">
          <div className="text-center p-6 text-xl font-bold">
            Please write your query to <strong>Manish chaudhary</strong>
            <div className="">
              <a href="mailto:manishchaudharyttt@gmail.com">
                Manishchaudharyttt@gmail.com
              </a>
            </div>
            <div className="">
              <a href="https://twitter.com/techmannih">
                Twitter ( Techmannih )
              </a>
            </div>
            <div className="">
              <a href="https://linkedin.com/in/tachmannih">
                Linkedin ( Techmannih )
              </a>
            </div>
          </div>
          <div className="text-center py-3 m-5 hover:bg-white hover:text-black  border-white border-2 rounded-2 rounded-xl ">
            <input
              className="cursor-pointer font-bold  "
              type="button"
              value={"Back to Login"}
              onClick={() => navigate("/")}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ForgotPassword;
