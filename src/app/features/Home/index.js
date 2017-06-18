import { connect } from "react-redux";
import { loadTime } from "./actions";
import HomeView from "./components/HomeView";

const mapDispatchToProps = (dispatch) => ({
  loadTime: () => {
    dispatch(loadTime());
  }
});

const mapStateToProps = (state) => ({
  time: state.home.time,
  status: state.home.status
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
