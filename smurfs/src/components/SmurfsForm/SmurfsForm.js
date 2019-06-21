import React from "react";
import { connect } from "react-redux";
import { postSmurf } from "../../actions/index"


const SmurfsForm = (props) => {
  const {postSmurf, selectedSmurf} = props;
  let nameRef = React.createRef();
  let ageRef = React.createRef();
  let heightRef = React.createRef();

  const onSubmitForm = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const height = heightRef.current.value;
    postSmurf(name, age, height);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <h3>{selectedSmurf ? "Update Smurf" : 'Add Smurf'}</h3>
      <div>
        <label>Name</label>
        <input required type="text" ref={nameRef} />
      </div>
      <div>
        <label>Age</label>
        <input required type="text" ref={ageRef} />
      </div>
      <div>
        <label>Height</label>
        <input required type="text" ref={heightRef} />
      </div>
      <button>{selectedSmurf ? "Update Smurf" : 'Add Smurf'}</button>
    </form>
  );
};

function mapStateToProps(state) {
    return { selectedSmurf: state.smurfsReducer.selectedSmurf }
}

export default connect(mapStateToProps, {postSmurf})(SmurfsForm);
