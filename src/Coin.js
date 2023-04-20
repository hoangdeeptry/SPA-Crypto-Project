import React from "react";

const Coin = ({ name, image, symbol, price, volume, priceChange }) => {
  return (
    <div className="mx-auto w-fit p-4 bg-white my-2 drop-shadow-md rounded-lg">
      <div className="flex items-center">
        <div className="coin flex items-center">
          <img src={image} alt="" className="w-8 h-8" />
          <h1 className="w-32 ml-4 flex justify-start">{name}</h1>
          <p className="w-20 ml-4 flex justify-start uppercase">{symbol}</p>
        </div>
        <div className="coin-data flex">
          <p className="coin-price w-32 flex justify-start">${price}</p>
          <p className="coin-volume w-32 flex justify-start">
            ${volume.toLocaleString()}
          </p>
          {priceChange < 0 ? (
            <p className="coin-percent text-red-500 w-32 ml-4 flex justify-end">
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent text-green-500 w-32 ml-4 flex justify-end">
              {priceChange.toFixed(2)}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
