import React from "react";
import fruits from "../utility/fruits.js";

function FruitsDetails({ index }) {
  return (
    <>
      <h1 className="text-center text-3xl mt-9 text-lime-700 font-bold">
        Name : {fruits[index].name}
      </h1>
      <div className="flex flex-col items-center justify-center mt-5 bg-lime-50 border-2 border-lime-900 w-[250px] mx-auto rounded-2xl">
        <img
          src={fruits[index].img}
          height="250px"
          width="250px"
          className="rounded-t-2xl"
        />
        <div className="text-xl text-lime-800">
          <h3>Family : {fruits[index].family}</h3>
          <h3>Order : {fruits[index].order}</h3>
          <h3>Genus : {fruits[index].genus}</h3>
          <h3 className="underline underline-offset-3 mt-3 text-center text-green-900">
            Nutritions
          </h3>
          <h4>Calories : {fruits[index].nutritions.calories}</h4>
          <h4>Fat : {fruits[index].nutritions.fat}</h4>
          <h4>Sugar : {fruits[index].nutritions.sugar}</h4>
          <h4>Carbohydrates : {fruits[index].nutritions.carbohydrates}</h4>
          <h4>Protein : {fruits[index].nutritions.protein}</h4>
        </div>
      </div>
    </>
  );
}

export default FruitsDetails;
