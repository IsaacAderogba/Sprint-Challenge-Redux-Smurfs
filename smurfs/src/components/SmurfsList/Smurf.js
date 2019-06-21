import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { selectSmurf, deleteSmurf } from '../../actions/index'


const Smurf = (props) => {
    const { smurf, selectSmurf, deleteSmurf } = props;
  return (
    <StyledSmurf>
      <span>{smurf.name}</span>
      <span>{smurf.age}</span>
      <span>{smurf.height}</span>
      <button onClick={() => selectSmurf(smurf.id)}>Select Smurf</button>
      <button onClick={() => deleteSmurf(smurf.id)}>Delete Smurf</button>
    </StyledSmurf>
  );
};

const StyledSmurf = styled.div`
    display: flex;
    justify-content: space-evenly;
`


export default connect(null, {selectSmurf, deleteSmurf})(Smurf);
