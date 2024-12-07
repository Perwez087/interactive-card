import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="md:bg-gradient-to-r from-red-500 to-blue-600 md:h-[93vh] m-4 rounded-lg md:w-[35%] md:relative md:space-y-0 space-y-8">
      <div className="md:absolute bg-gradient-to-r from-orange-500 to-indigo-600 md:w-[80%] h-[30vh] md:-right-24 md:top-24 rounded-xl p-6 flex flex-col justify-between">
        <div>
          <h1 className="heading md:text-2xl text-lg font-bold italic ">
            American Express
          </h1>
        </div>
        <div>
          <p className="md:text-[32px] text-lg text-yellow-400 uppercase">
            {data.cardNumber
              ? data.cardNumber.replace(/\d{4}(?=.)/g, "$& ")
              : "xxxx xxxx xxxx xxxx"}
          </p>
        </div>

        <div className="flex items-center justify-between text-white">
          <p className="md:text-lg text-xs font-bold text-yellow-400">
            {data.name ? data.name : "Perwez Alam"}
          </p>
          <p className="text-yellow-400">
            {data.monthmax ? data.monthmax : "00"} /{" "}
            {data.yearmax ? data.yearmax : "00"}
          </p>
        </div>
      </div>

      <div className="md:absolute bg-gradient-to-r from-orange-500 to-indigo-600 md:w-[80%] h-[30vh] bottom-32 -right-36  rounded-xl py-6 ">
        <div className="w-full h-12 bg-black"></div>

        <div className="bg-gray-400 w-[80%] m-auto h-9 text-white mt-4 rounded-lg px-4 flex justify-end items-center">
          {data.cvv ? data.cvv : "000"}
        </div>
      </div>
    </div>
  );
};

export default Cards;
