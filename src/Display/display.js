import React, {Component, Fragment} from 'react';


import Toolbar from '../UI/Banner/banner';
import SideDrawer from '../UI/SideDrawer/sideDrawer';

class Display extends Component{
    state = {
        showSideDrawer:false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render () {
        return (<div>
                    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer open={this.state.showSideDrawer}
                                closed={this.sideDrawerClosedHandler}/>
        </div>
        );
    }
}






export default Display;
