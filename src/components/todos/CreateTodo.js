// import React, { Component } from 'react'
// import { connect } from 'react-redux'
//
// class CreateTodo extends Component {
//   state = {
//     text: ''
//   }
//
//   handleChange = event => {
//     this.setState({
//       text: event.target.value
//     })
//   }
//
//   handleSubmit = event => {
//     event.preventDefault()
//     this.props.addTodo(this.state)
//   }
//
//   render(){
//     return(
//       <div>
//         <form onSubmit={event => this.handleSubmit(event)}>
//           <p>
//             <label>add todo</label>
//             <input
//               type="text"
//               onChange={event => this.handleChange(event)}
//               value={this.state.text}
//             />
//           </p>
//           <input type="submit" />
//         </form>
//       </div>
//     )
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({
//       type: 'ADD_TODO',
//       payload: formData
//     })
//   }
// }
//
// export default connect(
//   null,
//   mapDispatchToProps
// )(CreateTodo)

//alternative
  //if not given any arguments, connect will return dispatch as a prop to the component we're wrapping with connect
  //now if we start up the app and click the submit button, we should see our actions via a console.log in our reducer
import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_TODO',
      payload: this.state
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect()(CreateTodo)
