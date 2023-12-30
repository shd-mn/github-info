import RateLimit from "@/components/RateLimit";
import Search from "@/components/search";
import { setUser } from "@/redux/features/userSlice";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getDataFromLocalStorage = () => {
      try {
        const username = localStorage.getItem("user");
        if (username) {
          dispatch(setUser(username));
          console.log("local user", username);
        }
      } catch (error) {
        console.error("Error retrieving data from localStorage:", error);
      }
    };

    getDataFromLocalStorage();
  }, [dispatch]);

  return (
    <div className="h-full pt-12">
      <RateLimit />
      <Search />
    </div>
  );
}

export default Home;
