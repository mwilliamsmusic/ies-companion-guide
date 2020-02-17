import React, { Component } from "react";
import {connect} from "react-redux";
import * as actionType  from '../../Store/actions';
import BeastiaryAPI from './BeastiaryAPI';


class BeastiaryAPIMain extends Component {

  container = React.createRef();

  state = {
    open: false,
    loading:false,
    data:[],
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };


  render() {
    return (
      <div className="App">
        <div  ref={this.container}>
          <button  onClick={this.handleButtonClick}>
            Select Location
          </button>
          {this.state.open && (
            <div class="container">
              <ul>
                <button onClick={()=> {this.props.oCoast(); this.handleButtonClick()}}>Ornery Coast</button>
                <button onClick={()=> {this.props.haven(); this.handleButtonClick()}}>Haven</button>
                <button onClick={()=> {this.props.bPeaks(); this.handleButtonClick()}}>Beaks Peaks</button>

              </ul>
            </div>
          )}
        </div>
        <BeastiaryAPI url={this.props.link} location ={this.props.loc}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loc : state.enemy.location,
    link: state.enemy.link
  };
};

const mapDispatchToProps =(dispatch) => {
  return {
    haven:() => dispatch({type:actionType.HAVEN_ENEMY}),
    bPeaks:() => dispatch({type:actionType.BEAKS_PEAKS_ENEMY}),
    oCoast:() => dispatch({type:actionType.ORNERY_COAST_ENEMY})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(BeastiaryAPIMain);
