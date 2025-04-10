import React from 'react'

function FooterImg() {
  return (
    <div className="text-neutral-100 w-full">
      {/* نخلي الصورة داخل div relative */}
      <div className="relative w-full">
        {/* الصورة بتملأ العرض فقط */}
        <img
          src="/sea.jpeg"
          alt="sea"
          className="w-full h-[400px] object-cover filter grayscale brightness-75"
        />

        {/* المحتوى اللي جوا الصورة */}
        <div className="absolute top-0 left-0 w-full h-full px-6 sm:px-10 py-10 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-amber-300 capitalize text-3xl italic">
              <span className="block">flag</span>
              <span className="text-sm block">performance</span>
            </h1>

            <h1 className="mb-4 text-sm pt-2 font-bold max-w-xl sm:text-sm">
              flag performance is your premier destination for high performance
              automotive services and accessories. We specialize in evaluating
              your vehicle performance and style.
            </h1>
          </div>

          {/* أيقونات وسوشيال لينكات */}
          <div className="mt-4">
            <div className="flex gap-5 text-neutral-100 mb-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-solid fa-house"></i>
            </div>

            <ul className="flex gap-5 text-neutral-200 capitalize font-thin text-sm flex-wrap">
              <li>home</li>
              <li>gallery</li>
              <li>services</li>
              <li>news</li>
              <li>inquiries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterImg
