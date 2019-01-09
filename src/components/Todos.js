import React, { Component } from 'react'

import { connect } from 'react-redux';

const Todo = ({title}) => {
    return (
        <div className='todos__todo'>
            <h5>{title}</h5>
            <button>complete</button>
        </div>
    )
}

class Todos extends Component {

   render() {
       const { className, items } = this.props
       return (
            <div className={`${className} todos`}>
               {
                   items.map((item, index) => {
                       return <Todo key={index} title={item}/>
                   })
               }

            </div>
       )
   }
}

function mapStateToProps(state) {
    const { items } = state.todos;
    return { items }
}

Todos = connect(mapStateToProps)(Todos);

export default Todos;