import React, { useEffect } from "react";
import Navbar from "../navbar";
import { useDispatch } from "react-redux";
import { setUserName } from "@/redux/features/userSlice";

function Header() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getDataFromLocalStorage = () => {
      try {
        const username = localStorage.getItem("user");
        if (username) {
          dispatch(setUserName(username));
        }
      } catch (error) {
        console.error("Error retrieving data from localStorage:", error);
      }
    };

    getDataFromLocalStorage();
  }, [dispatch]);

  return (
    <header className="flex h-16 items-center px-10 shadow-[0px_0.1px_1px_#bebebe]">
      <Navbar />
    </header>
  );
}

export default Header;
