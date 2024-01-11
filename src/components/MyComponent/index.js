import React, { useEffect } from 'react';

const MyComponent = () => {
  console.log('My component is rendered')
 
  let globalVariable = null;

  useEffect(() => {
    
    console.log('Initial Value:', globalVariable);

    
    globalVariable = 22;

   
    console.log('Updated Value:', globalVariable);
  }, []);

  
  const useUpdatedValue = () => {
    console.log('Value to be used:', globalVariable);
   
  };

  return (
    <div>
     
      <button onClick={useUpdatedValue}>Use Updated Value</button>
    </div>
  );
};

export default MyComponent;
