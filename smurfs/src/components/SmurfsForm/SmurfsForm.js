import React from "react";
import { connect } from "react-redux";

const SmurfsForm = () => {
  let nameRef = React.createRef();
  let ageRef = React.createRef();
  let heightRef = React.createRef();

  const onSubmitForm = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const height = heightRef.current.value + "cm";
    // call postSmurf
  };

  return (
    <form>
      <h3>Add Smurf</h3>
      <div>
        <label>Name</label>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <label>Age</label>
        <input type="text" ref={ageRef} />
      </div>
      <div>
        <label>Height</label>
        <input type="text" ref={heightRef} />
      </div>
      <button>Add Smurf</button>
    </form>
  );
};

export default SmurfsForm;
