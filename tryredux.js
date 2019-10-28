const redux = require ('redux');
const createStore = redux.createStore;
const initalState = {
  counter : 0
}
const rt =(state=initalState,action)=> {
  console.log("rd called");
  if(action.type === 'INC'){
    state.counter = state.counter +1;
  } else if (action.type === 'ADD'){
    state.counter = state.counter + action.value;
  }
     
  retun state;

}

const store = createStore(rt);
console.log(store.getState());
store.dispatch({
  type : 'Inc'
})
store.dispatch({
  type : 'ADD',
  value : 5
})
