import React from 'react';
import Brick from '../Bricks/brick.js'
import './style.css';

class Wall extends React.Component{
    
    

    constructor(props){
       super(props);
        this.state={
            bricks:[1]
        }
    }
    
    addMoreBricks =() =>{

const newBricksArray=[...this.state.bricks];
newBricksArray.push(newBricksArray.length + 1);

          this.setState({
              bricks:newBricksArray
          });
    }
    
    render = () =>{
     return( 

     <div className="wall-container">
{
    this.state.bricks.map((brick)=> {
        return <Brick key={brick} name={brick}/>
    })
}

<button onClick={this.addMoreBricks}> Add More </button>
     </div>
       
     );
};
}

export default Wall;