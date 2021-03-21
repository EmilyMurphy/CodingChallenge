import React, { useState } from "react";
import Preview from './Preview';
import "../Styles/Form.css";

//Simple Form with the main functionality
//can add input values dynamically and passes them to the preview component
//Focused on useState and passing values to component 
//More style and validation could be added 

function Form() {
  const [inputList, setInputList] = useState([{}]);
  const [active, setActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    setActive(false);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    setActive(false);
  };


    // handle click event of the Add button
    const handleAddClick = () => {
      setInputList([...inputList, { firstName: "", Age: "", New: ""}]);
      setActive(false);
    };

    //handle reset event of the clear button
    const handleReset = () => {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      );

      setInputList([{}]);
      setActive(false);
    };

    // Supposed to error check and handle click event of submit
    const handleSubmit = () => {
      if (inputList.length === 0 )
      {
        setErrorMessage('No values to submit');
      }
      else{
        setActive(true);
      }
    };

  return (
    <div className="Form">
      {inputList.map((x, i) => {
        return (
          <div className="box">
          <h3>Add a New Person:</h3>
          <input
              className="field"
              name="firstName"
			        placeholder="Enter First Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="field"
              name="Age"
              type="Number"
			        placeholder="Enter Age"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="field"
              name="New"
			        placeholder="Enter extra information"
              value={x.New}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove Person</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add Person</button>}
            </div>
          </div>
        );
      })}
      <div className="btn-box">
        <button onClick={handleReset}>Clear</button>
      </div>
      
      <div className="btn-box">
        {<button onClick={handleSubmit}>Submit</button>}
        {errorMessage && (
          <p className="error"> {errorMessage} </p>
        )}
        {active === true && inputList.map((inputList, key) => {
            return <Preview key={key} {...inputList}/>
            
          })}
      </div>
      
    </div>
  );
}

export default Form;
