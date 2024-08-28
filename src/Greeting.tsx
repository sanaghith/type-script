// Code js:
// import React from 'react'; 
// const Greeting = ({ name }) => { 
// return <div>Hello, {name}!</div>;
//  };
//  export default Greeting;

import React from 'react'
interface GreetingProps {
    name: string}  
  export const Greeting : React.FC<GreetingProps>=({name}) => { 
  return (<div>Hello, {name}!</div>)}
