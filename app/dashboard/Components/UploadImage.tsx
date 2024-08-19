"use client";
import { IconButton, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import Image from "next/image";
import { newPostStateProps } from "@/app/Types";

const UploadImage: React.FC<newPostStateProps> = ({
  setNewPost,
  newPost,
  type,
}) => {
  /*================== UploadImage =================*/
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const uploadImage = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);

      setNewPost((prev) => ({ ...prev, src: file }));
    }
  };
  useEffect(() => {
    setImagePreview(newPost.src);
  }, [newPost]);

  return (
    <div className="flex justify-center items-center my-8 overflow-hidden h-[25rem] border-2 border-blue-300 rounded-lg">
      {imagePreview ? (
        <Image
          src={type === "edit" ? `/file/${imagePreview}` : imagePreview}
          alt={imagePreview}
          width={500}
          height={500}
          className="object-contain"
        />
      ) : (
        <IconButton
          sx={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            "&:hover": { background: "transparent" },
          }}
          aria-label="fingerprint"
          color="success"
        >
          <div className="file">
            <label htmlFor="input-file" className="flex">
              <FaUpload size={24} className=" hover:cursor-pointer" />
              <span className=" text-lg hover:cursor-pointer "> آپلود عکس</span>
            </label>

            <input
              id="input-file"
              type="file"
              className="hidden"
              onChange={uploadImage}
            />
          </div>
        </IconButton>
      )}
    </div>
  );
};

export default UploadImage;
