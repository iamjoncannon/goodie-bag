import React from 'react'
import {connect} from 'react-redux'
import { getAlltheCandyFromServer, changeCandyQuantityInServer } from './../store'

class OneCandy extends React.Component {

  componentDidMount(){
    
    this.props.getCandy()
  }

  render () {
    
    const { candyId } = this.props.match.params

    const { candyList } = this.props
    
    const thisCandy = candyList.filter(candy => candy.id === Number(candyId))

    let soManyCandy = []
    let quant; 

    if(thisCandy[0]){
      quant = Number(thisCandy[0].quantity)

      for (let i = 0; i < quant; i++){

        soManyCandy.push('i want candy')
      }
    }

    return (

      <div>

        <button onClick={ ( )=>this.props.changeCandy(quant + 1, candyId) } >MORE CANDY</button>
        <button onClick={ ( )=>this.props.changeCandy(quant -1, candyId) }>LESS CANDY</button>
        <br />

        { thisCandy[0] ? 
          
          soManyCandy.map((candy, i )=>{ 
            return <img key={i} 
                        src={thisCandy[0].imageUrl} 
                        className="candy"
                    /> 
          })
          : '' }
      
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
    getCandy: () => dispatch( getAlltheCandyFromServer() ),
    changeCandy: (dir, id) => dispatch( changeCandyQuantityInServer(dir, Number(id)) )
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(OneCandy)
