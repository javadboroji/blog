import { blogPost } from "@/app/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const PostCard: React.FC<blogPost> = ({
  key,
  src,
  date,
  author,
  title,
  _id,
}) => {
  return (
    <div className="flex h-full flex-col my-4">
      <div style={{ height: "350px" }}>
        <Link
          href={{
            pathname: `post/${_id}`,
            //query: { name:title},
          }}
        >
          <Image
            src={`/file/${src}`}
            alt="image/card"
            width={350}
            height={350}
            style={{
              borderRadius: "0.5rem",
              objectFit: "cover",
              height: "100%",
            }}
          />
        </Link>
      </div>
      <div className="flex">
        <span className=" pe-2 text-sm text-gray-400">{date}</span>
        <span className="px-2 text-sm text-gray-400"> نویسنده:{author}</span>
      </div>
      <p className="mt-4 font-bold">{title}</p>
    </div>
  );
};

export default PostCard;
