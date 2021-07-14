import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../action/index'

function AddTodo(props) {
    return (
      <form onSubmit={(e)=>{
          e.preventDefault();
          let input=e.target.userInput.value;
          props.dispatch(addTodo(input));
        // console.log(input);
          e.target.userInput.value="";
      }}>
          <input type="text" name="userInput"></input>
          <button>Submit</button>
      </form>
    )
}

export default connect()(AddTodo)
