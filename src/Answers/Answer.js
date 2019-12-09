import React, { Component } from 'react'

class Answers extends Component{
render(props){
    

    return(
        <div>
            <p>{this.props.answer}</p>
        </div>
    );
}

}

export default Answers