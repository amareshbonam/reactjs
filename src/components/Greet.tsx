import React, { useState, useEffect } from "react"

interface GreetInterface {
   name?: String
}

function Greet() {
   const [name, setName] = useState('');

   const updateNameProp = () => {
      setName('amaresh');
   }

   const updateName = () => {
      setName('bonam');
   }

   useEffect(() => {
      console.log('amde')
      updateNameProp();
   }, []);

   return (
      <div>hello {name}
         <div>
            <button onClick={updateName}>Click</button>
         </div>
      </div>
   );

}
export default Greet;
