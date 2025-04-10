import React from 'react';
import Button from './Button';

function Partners() {
  return (
<div>
<div className="bg-gradient-to-r from-[rgb(0,0,0)] via-[#212100] to-[#000000] p-20">
      <h1 className="capitalize font-bold text-[#FCFCFC] text-center uppercase">
        our partners
      </h1>

      <div className="text-white flex items-center justify-center flex-col ">
        
        {/* شبكة 5 أعمدة على الشاشات الكبيرة و 3 في الميديام و 2 في السمال */}
        <div className="grid grid-cols-2 gap-x-30 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-5 lg:gap-2 mt-15   justify-items-center align-items-center ">
          <Button name="Temporal" className="font-thin"  icone={<i className="fa-solid fa-jet-fighter-up"></i>} />
          <Button name="ebay" className="font-bold" />
          <Button name="utbrain" className="font-bold" />
          <Button name="plaid" className="font-bold"    icone={<i className="fa-solid fa-grip-vertical"></i>}    />
          <Button name="peloton" className="font-bold"  icone={<i className="fa-solid fa-paper-plane"></i>} />
        </div>

        {/* شبكة 4 أعمدة على الشاشات الكبيرة و 3 في الميديام و 2 في السمال */}
        <div className="grid grid-cols-2 gap-x-30 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 mt-7 lg:gap-2 justify-items-center align-items-center">
          <Button name="Temporal" className="font-thin" icone={<i className="fa-solid fa-jet-fighter-up"></i>} />
          <Button name="mercado<br />libre" className="text-sm italic p-2" />
          <Button name="Workiva" />
          <Button name="peloton"    icone={<i className="fa-solid fa-paper-plane"></i>} />
        </div>

        {/* شبكة 3 أعمدة على الشاشات الكبيرة و 3 في الميديام و 2 في السمال */}
        <div className="grid grid-cols-2 gap-x-30 gap-y-10  sm:grid-cols-2 md:grid-cols-3 md:gap-2  lg:grid-cols-3 mt-7 lg:gap-2  justify-items-center align-items-center ">
          <Button name="mercado<br />libre" className="text-sm italic pb-2" />
          <Button name="Temporal" className="font-thin"     icone={<i className="fa-solid fa-jet-fighter-up"></i>} />
          <Button name="Workiva" />
        </div>

      </div>
    </div>
</div>
  );
}

export default Partners;
