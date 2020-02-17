import React from 'react';
import Axios from 'axios';
import Loading from "../../UI/Loading/loading";
import styles from './BeastiaryAPI.module.css';

class BeastiaryAPI extends React.Component {
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
    
        {loading ? <Loading/> : data.map(enemy => (

          <div className={styles.font}>
            <div className={styles.b}>

            <div className={styles.gridListContainer}>

              <li><img src= {enemy.enemyURL}></img></li>
            <li >{enemy.enemyName}</li>
            <li>{enemy.enemyLoc}</li>
            <li>{enemy.enemyDesc}</li>
            </div>
            </div>
          </div>


        ))}
      </div>
    )
  }
}

export default BeastiaryAPI;
