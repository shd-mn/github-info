import React from "react";
import StatsCardItem from "./StatsCartdtem";
import type { UserTypes } from "@/types/userTypes";
import { Repos, Followers, Following, Gists } from "@/icons";

type PropTypes = {
  data: UserTypes;
};
const StatsCard = ({ data }: PropTypes) => {
  return (
    <section>
      <div className="grid grid-cols-4 gap-8">
        <StatsCardItem
          icon={<Repos color="#da4a91" className="h-12 w-12" />}
          text="repos"
          num={data?.public_repos}
        />
        <StatsCardItem
          icon={<Followers color="#2caeba" className="h-12 w-12" />}
          text="followers"
          num={data?.followers}
        />
        <StatsCardItem
          icon={<Following color="#5d55fa" className="h-12 w-12" />}
          text="following"
          num={data?.following}
        />
        <StatsCardItem
          icon={<Gists color="#f0b429" className="h-12 w-12" />}
          text="gists"
          num={data?.public_gists}
        />
      </div>
    </section>
  );
};

export default StatsCard;
