import React from "react";
import Profile from "./Profile";
import type { UserTypes } from "@/types/userTypes";

type PropTypes = {
  data: UserTypes;
};

const User = ({ data }: PropTypes) => {
  return <Profile data={data} />;
};

export default User;
