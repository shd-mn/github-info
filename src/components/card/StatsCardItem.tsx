import React, { ReactNode } from "react";
type PropTypes = {
  icon: ReactNode;
  text: string;
  num: number;
};
const StatsCardItem = ({ icon, text, num }: PropTypes) => {
  return (
    <article className="flex items-center gap-2 rounded-md bg-slate-500 p-3">
      <span className="p-2">{icon}</span>
      <p>{text}</p>
      <h3>{num}</h3>
    </article>
  );
};

export default StatsCardItem;
