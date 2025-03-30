import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                class="w-full object-cover h-full object-center block hover:scale-[1.05] transition-transform duration-300 ease-in-out"
                src="/resources/blog/gallery/img1.jpg"
                width={200}
                height={300}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                class="w-full object-cover h-full object-center block hover:scale-[1.05] transition-transform duration-300 ease-in-out"
                src="/resources/blog/gallery/img2.jpg"
                width={200}
                height={300}
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                class="w-full h-full object-cover object-center block hover:scale-[1.05] transition-transform duration-300 ease-in-out"
                src="/resources/blog/gallery/img3.jpg"
                width={200}
                height={300}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                class="w-full h-full object-cover object-center block hover:scale-[1.05] transition-transform duration-300 ease-in-out"
                src="/resources/blog/gallery/img6.jpg"
                width={200}
                height={300}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                class="w-full object-cover h-full object-center block hover:scale-[1.05] transition-transform duration-300 ease-in-out"
                src="/resources/blog/gallery/img4.jpg"
                width={200}
                height={300}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                class="w-full object-cover h-full object-center block hover:scale-[1.05] transition-transform duration-300 ease-in-out"
                src="/resources/blog/gallery/img8.jpg"
                width={200}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
