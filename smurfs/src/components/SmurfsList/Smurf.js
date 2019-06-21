import React from "react";
import styled from 'styled-components';

const Smurf = ({ smurf }) => {
  return (
    <StyledSmurf>
      <span>{smurf.name}</span>
      <span>{smurf.age}</span>
      <span>{smurf.height}</span>
    </StyledSmurf>
  );
};

const StyledSmurf = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export default Smurf;
