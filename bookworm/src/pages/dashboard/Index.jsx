import React from 'react'
import indexs from "../../assets/index.png";
const Index = () => {
  return (
    <>
    <div className="flex justify-center items-center h-full w-full font-bold flex-col ">
      <h1 className="text-4xl font-semibold text-gray-700">Welcome User</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, aliquid!</p>
      <img src={indexs} width={300} height={300} alt="img" />
    </div>
    </>
  )
}

export default Index;