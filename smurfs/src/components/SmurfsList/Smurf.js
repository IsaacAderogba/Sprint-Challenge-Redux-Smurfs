import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { selectSmurf } from '../../actions/index'


const Smurf = (props) => {
    const { smurf, selectSmurf } = props;
  return (
    <StyledSmurf>
      <span>{smurf.name}</span>
      <span>{smurf.age}</span>
      <span>{smurf.height}</span>
      <button onClick={() => selectSmurf(smurf.id)}>Select Smurf</button>
    </StyledSmurf>
  );
};

const StyledSmurf = styled.div`
    display: flex;
    justify-content: space-evenly;
`


export default connect(null, {selectSmurf})(Smurf);
