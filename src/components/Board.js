import React from 'react';
import Square from './Square';
import { generateColors } from './helpers'

export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            // Color state contains array of rgb color values 
            colors : generateColors(this.props.boxes),
        }
    }
    
    changeColor(c,i){ 
      const{colors} = this.state;
      const {rowCount, colCount, timeInterval} = this.props;
        // Create new random rgb color 
        let newColor;
        do{ 
          newColor = `rgb(255,255,255)` 
        }while(newColor === c) 
      
       colors.map((data, k)=>{
         if(data===c){
           for(var i= 0; i< colors.length; i++){
            this.setState(colors.splice(i, 1, newColor));
           }
         }else{
          for(var j=  colors.length; j<rowCount*colCount; j++){
            this.setState(colors.splice(j, 0, generateColors(1)));
           }
         }
           return this.state.colors;
       })
       setInterval(function(){
        generateColors(1);
       }, timeInterval);
      } 

    renderSquare(i) {
      return (
        <Square  key={i}       
            value={this.state.colors[i]}
            onClick={e=> this.changeColor(this.state.colors[i], i)}
        />
      );
    }
  
    render() {
        const {rowCount, colCount} =this.props;
      return (
          <div className="board-row">
            {
                [...new Array(rowCount)].map((x, rowIndex) => {
                    return (
                    <div className="board-row" key={rowIndex}>
                        {[...new Array(colCount)].map((y, colIndex) => this.renderSquare(rowIndex*colCount + colIndex) )}
                    </div>
                    )
                })
            }           
          </div>          
      );
    }
  }
  
