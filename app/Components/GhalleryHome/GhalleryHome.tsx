import React from "react";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import image4 from "@/public/image4.jpg";
import Image from "next/image";
import BreakingNews from "./BreakingNews";

function GhalleryHome() {
  return (
    <div className="flex flex-col">
      <div className="my-4 flex ">
        <div className="bg-red-600 w-32 p-3">
          <span className="text-white"> خبرهای فوری</span>
        </div>
        <div className="bg-black flex-1 flex items-center overflow-hidden">
          <BreakingNews />
        </div>
      </div>
      <div className="ghallery">
        <div className="big-image-box img-wraper">
          <span className="category bg-red-600">تکنولوژی</span>
          <span className="description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </span>
          <Image src={image1} alt={"image1"} />
        </div>
        <div className="meduim-image-box img-wraper">
          <span className="category bg-orange-500">سیاسی</span>
          <span className="description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </span>

          <Image src={image2} alt={"image1"} />
        </div>
        <div className="small-image-box ">
          <div className="ghallery-box img-wraper">
            <span className="category bg-blue-500">اجتماعی</span>
            <span className="description">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </span>

            <Image src={image3} alt={"image1"} />
          </div>
          <div className="ghallery-box img-wraper">
            <span className="category bg-green-500">سلامت</span>
            <span className="description">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </span>

            <Image src={image4} alt={"image1"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GhalleryHome;
