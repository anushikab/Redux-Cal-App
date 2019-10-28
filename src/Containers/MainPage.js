import React, {Component} from 'react';
import DisplayCounter from '../Components/DisplayCounter/DisplayCounter';
import ChangeCounter from '../Components/ChangeCounter/ChangeCounter';

class MainPage extends Component {
  state = {
    counter :0
  }

  changeCounterHandler =(action,value) =>{
    let cnt = this.state.counter;
    let eValue = value;
    if (action === 'INCREMENT'){
      cnt++;
    } else if (action === 'DECREMENT') {
      cnt--;

    } else if (action === 'ADD') {
       cnt = cnt + eValue;
    } else if (action === 'SUBTRACT'){
      cnt = cnt - eValue;
    }
    this.setState({
      counter : cnt
    })
  }
  render(){
     return(
         <div >
          <DisplayCounter value={this.state.counter}/>
          <ChangeCounter label ="Increment" click={()=> this.changeCounterHandler('INCREMENT')}/>
          <ChangeCounter label ="Decrement" click={()=> this.changeCounterHandler('DECREMENT')}/>
          <ChangeCounter label ="Add 5" click={()=> this.changeCounterHandler('ADD',5)}/>
          <ChangeCounter label ="SUBTRACT 5" click={()=> this.changeCounterHandler('SUBTRACT',5)}/>
         </div>
     );
  }
}
export default MainPage;
