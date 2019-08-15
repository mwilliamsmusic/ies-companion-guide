import React from 'react';
import Axios from 'axios';
import Loading from "../../UI/Loading/loading";


class ItemAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     data:[],
      loading:false,
    }
  }

   componentDidUpdate(prevProps) {
     if (prevProps.url !== this.props.url) {
       this.setState({loading: true}, () => {
         Axios.get(`${this.props.url}`)
           .then(result => this.setState({
             loading: false,
             data: [...result.data],
           }));
       });
     }
   }

  render() {
    let { data, loading} = this.state;

    return(
      <div>
        {this.props.location}
        {loading ? <Loading/> : data.map(item => (
          <li key={item.itemName}>
            {item.itemName}
            {item.itemChar}
            {item.itemLoc}
            {item.itemDesc}
          </li>
        ))}
      </div>
    )
  }
}

export default ItemAPI;