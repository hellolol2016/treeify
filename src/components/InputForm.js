import React from 'react'
import { useState } from 'react';



function InputForm() {
  const [treeAward, setTreeAward] = useState(false);

  const handleSubmit = () => {
    return null;
    //updates
  };
  
  const handleTreeAward = () => {
    setTreeAward(!treeAward);
    return null;
    //needs to update an int value from database
  };
  
  return (
    <form>
      <input type="text" placeholder="Tell us about your experience"></input>
      <input type="checkbox" onClick={handleTreeAward}></input>
      <label for="input">Tree Award</label>
      {treeAward && (
        <input
          tyoe="text"
          placeholder="Why does this small company deserve the special tree award?"
        ></input>
      )}
      <button class="sendReview" onClick={handleSubmit}>Send!</button>
    </form>
  );
}

export default InputForm
