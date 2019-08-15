import React from 'react';
import Axios from 'axios';
import Loading from "../../UI/Loading/loading";
import styles from './EquipAPI.module.css';

class EquipAPI extends React.Component {
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
        {loading ? <Loading/> : data.map(equip => (

          <div className={styles.font}>
            <div className={styles.b}>

            <div className={styles.gridListContainer}>

            <li >{equip.equipName}</li>
            <li>{equip.equipChar}</li>
            <li>{equip.equipLoc}</li>
            <li>{equip.equipDesc}</li>
            </div>
            </div>
          </div>


        ))}
      </div>
    )
  }
}

export default EquipAPI;