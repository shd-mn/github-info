import React, { ReactNode } from "react";
import { Company, LinkIcon, Location } from "@/icons";
import Image from "next/image";
import type { UserTypes } from "@/types/userTypes";
import Link from "next/link";
type PropTypes = {
  data: UserTypes;
};

const Profile = ({ data }: PropTypes) => {
  return (
    <section className="mb-12">
      <div className="rounded-md bg-slate-700 text-white">
        <article className="flex gap-10 px-8 py-8">
          <figure className="h-52 w-52 rounded-full">
            <Image
              className="h-full w-full rounded-full object-contain"
              src={data?.avatar_url}
              alt={data?.name}
              width={300}
              height={300}
              priority
            />
          </figure>
          <div className="flex flex-col">
            <div className="mb-5">
              <h4 className="mb-1 text-3xl capitalize">{data?.name}</h4>
              <p>@{data?.login}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {data?.bio && <Info text={data.bio} icon={<Location />} />}
              {data?.company && <Info text={data.company} icon={<Company />} />}
              {data?.location && (
                <Info text={data.location} icon={<Location />} />
              )}
              {data?.blog && <Info link={data.blog} icon={<LinkIcon />} />}
            </div>
            <a
              className="rounded-md bg-blue-500 px-4 py-2 text-center"
              href={data?.html_url}
              target="_blank"
            >
              follow
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

type InfoType = {
  text?: string;
  icon?: ReactNode;
  link?: string;
};

const Info = ({ text, icon, link }: InfoType) => {
  return (
    <div className="flex items-center gap-2">
      <span>{icon}</span>
      {!link ? (
        <p>{text}</p>
      ) : (
        <Link target="_blank" href={`https://www.${link}`}>
          {link}
        </Link>
      )}
    </div>
  );
};

export default Profile;
