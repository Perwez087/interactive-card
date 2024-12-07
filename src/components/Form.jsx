import React from "react";

const Form = ({ values, handleInput, handleSubmit }) => {
  return (
    <div className="md:w-1/2 md:py-32">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-8 pt-6 pb-8 mb-4 md:w-2/3 w-full"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 uppercase"
            htmlFor="name"
          >
            Cardholder Name
          </label>
          <input
            className="shadow appearance-none border focus:outline-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={values.name}
            placeholder="e.g.Perwez Alam"
            onChange={handleInput}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 uppercase"
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <input
            className="shadow appearance-none border focus:outline-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
            id="cardNumber"
            type="text"
            name="cardNumber"
            pattern="[0-9]{16}"
            value={values.cardNumber}
            placeholder="e.g.1234 5678 9123 0000"
            maxLength={16}
            onChange={handleInput}
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="exp"
          >
            EXP. DATE (MM/YY)
          </label>
          <input
            className="shadow appearance-none rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-500 focus:shadow-outline"
            id="exp"
            type="text"
            name="monthmax"
            pattern="[0-9]{0,2}"
            maxLength={2}
            value={values.monthmax}
            placeholder="MM"
            onChange={handleInput}
            autoComplete="off"
          />
          <input
            className="shadow appearance-none rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-500 focus:shadow-outline "
            id="exp"
            type="text"
            name="yearmax"
            pattern="[0-9]{0,2}"
            maxLength={2}
            value={values.yearmax}
            placeholder="YY"
            onChange={handleInput}
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cvv"
          >
            CVV
          </label>
          <input
            className="shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
            id="cvv"
            type="text"
            name="cvv"
            pattern="[0-9]{0,3}"
            maxLength={3}
            value={values.cvv}
            placeholder="cvv"
            onChange={handleInput}
            autoComplete="off"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-slate-500 hover:bg-slate-600 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
