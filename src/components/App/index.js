import { connect } from "react-redux";
import App from "./component";

const mapStateToProps = (state) => ({
  currentView: state.currentView,
});

export default connect(mapStateToProps)(App);
