import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { getSmurfs } from '../../actions/index';
import { connect } from 'react-redux';

const SmurfsList = (props) => {
  const { getSmurfs, smurfs } = props;

  useEffect(() => {
      getSmurfs();
  }, [getSmurfs])


  console.log(smurfs);
  
  return (
    <div>
      <h2>Smurf List</h2>
      <Smurf />
      <Smurf />
      <Smurf />
    </div>
  );
};

function mapStateToProps(state) {
    return {
        smurfs: state.smurfsReducer.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfsList);
