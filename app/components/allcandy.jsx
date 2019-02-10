import React from 'react'
import {connect} from 'react-redux'
import { getAlltheCandyFromServer } from './../store'
import { Link } from 'react-router-dom'

class AllCandy extends React.Component {

  componentDidMount(){
    
    this.props.getCandy()
  }

  render () {

    const { candyList } = this.props

    return (

      <div>
        {candyList.map((candy, i)=>{
                       return <div key={i}> 
                              <Link to={`/candies/${candy.id}`}>
                              <img src={candy.imageUrl} /> 
                              </Link>
                              </div>
                     }
                     )
        } 
      </div>
    )
  }
}

const mapStatetoProps = (store) => {

  return {
    candyList: store.candyList
  }
}

const mapDispatchtoProps = (dispatch) => {
  // YOUR CODE HERE
  return {
    getCandy: () => dispatch(getAlltheCandyFromServer())
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AllCandy)
