import React from 'react';
import Axios from 'axios';
import Loading from "../../UI/Loading/loading";
import styles from "./ItemAPI.module.css";

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

          <div className={styles.font}>
            <div className={styles.b}>

              <div className={styles.gridListContainer}>

                <li >{item.itemName}</li>
                <li>{item.itemChar}</li>
                <li>{item.itemLoc}</li>
                <li>{item.itemDesc}</li>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ItemAPI;
