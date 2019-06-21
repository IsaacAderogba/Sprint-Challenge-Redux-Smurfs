import React from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { postSmurf, putSmurf } from "../../actions/index";

const SmurfsForm = props => {
  const { postSmurf, putSmurf, selectedSmurf, smurfs } = props;
  let nameRef = React.createRef();
  let ageRef = React.createRef();
  let heightRef = React.createRef();

  const onSubmitForm = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const height = heightRef.current.value;

    if (selectedSmurf) {
      putSmurf(foundSmurf.id, name, age, height);
    } else {
      postSmurf(name, age, height);
    }
  };

  let foundSmurf;
  if (selectedSmurf) {
    foundSmurf = smurfs.find(smurf => smurf.id === parseInt(selectedSmurf, 10));
  }

  return (
    <StyledForm className="ui form" onSubmit={onSubmitForm}>
      <h3>{selectedSmurf ? "Update Smurf" : "Add Smurf"}</h3>
      <div className="field">
        <label>Name</label>
        <input
          required
          defaultValue={selectedSmurf ? foundSmurf.name : ""}
          type="text"
          ref={nameRef}
        />
      </div>
      <div className="field">
        <label>Age</label>
        <input
          required
          defaultValue={selectedSmurf ? foundSmurf.age : ""}
          type="text"
          ref={ageRef}
        />
      </div>
      <div className="field">
        <label>Height</label>
        <input
          required
          defaultValue={selectedSmurf ? foundSmurf.height : ""}
          type="text"
          ref={heightRef}
        />
      </div>
      <button className="ui button primary">
        {selectedSmurf ? "Update Smurf" : "Add Smurf"}
      </button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
    margin-top: 36px;
`

function mapStateToProps(state) {
  return {
    selectedSmurf: state.smurfsReducer.selectedSmurf,
    smurfs: state.smurfsReducer.smurfs
  };
}

export default connect(
  mapStateToProps,
  { postSmurf, putSmurf }
)(SmurfsForm);
