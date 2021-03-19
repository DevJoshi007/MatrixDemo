import React,{ Component } from 'react'
import '../assets/boxcontainer.css'
import Board from './Board';
  
class BoxContainer extends Component{ 

  constructor(props){
    super()
  }
  
  render(){  

    return(
      <div className="game">
        <div className="game-board">
          <Board 
            rowCount={this.props.rowCount}
            colCount={this.props.colCount}
            timeInterval={this.props.time}
            boxes={this.props.boxes}
          />
        </div>
      </div>
    ) 
  } 
} 
  
export default BoxContainer