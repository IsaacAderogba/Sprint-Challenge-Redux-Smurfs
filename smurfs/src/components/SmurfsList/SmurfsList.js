import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { getSmurfs } from "../../actions/index";
import { connect } from "react-redux";

const SmurfsList = props => {
  const { getSmurfs, smurfs, isFetching, errorMessage } = props;

  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  console.log(smurfs, errorMessage);

  return (
    <div>
      <h2>Smurf List</h2>
      {isFetching && <div className="ui active centered inline loader"></div>}
      {errorMessage && <div>{errorMessage}</div>}
      {smurfs &&
        smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    smurfs: state.smurfsReducer.smurfs,
    isFetching: state.fetchReducer.isFetching,
    errorMessage: state.fetchReducer.errorMessage
  };
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfsList);
