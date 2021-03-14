import React from 'react'
import TodoItem from '../Todo/TodoItem'
import '/coding/projects/2reactTodo/src/Change/Change.css'

export default class Change extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>!</button>

        {this.state.isOpen && (
          <div className='change'>
            <div className='change-body'>
              <h1>Change Item</h1>
              <input type='text' />
              <button onClick={() => this.setState({ isOpen: false })}>
                OK
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
