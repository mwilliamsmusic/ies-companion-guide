import React, { Component } from "react";
import {connect} from "react-redux";
import * as actionType  from '../../Store/actions';
import EquipAPI from './EquipAPI';

class EquipAPIMain extends Component {

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
        <div className="container" ref={this.container}>
          <button type="button" class="button" onClick={this.handleButtonClick}>
            Select Location
          </button>
          {this.state.open && (
            <div class="container">
              <ul>
                <button onClick={()=> {this.props.oCoast(); this.handleButtonClick()}}>Ornery Coast</button>
                <button onClick={()=> {this.props.kami(); this.handleButtonClick()}}>Kami</button>
                <button onClick={()=> {this.props.magik(); this.handleButtonClick()}}>Magik</button>
              </ul>
            </div>
          )}
        </div>
        <EquipAPI url={this.props.link} location ={this.props.loc}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loc : state.equip.location,
    link: state.equip.link
  };
};

const mapDispatchToProps =(dispatch) => {
  return {
    kami:() => dispatch({type:actionType.KAMI_EQUIP}),
    magik:() => dispatch({type:actionType.MAGIK_EQUIP}),
    oCoast:() => dispatch({type:actionType.ORNERY_COAST_EQUIP})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EquipAPIMain);