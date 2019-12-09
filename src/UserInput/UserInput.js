import React, {  Component } from 'react';
import './UserInput.css'
import Question from '../Question/Question'


class UserInput  extends Component{

    state = {
      questions:[ ],
      question : "",
      id: 1
    }

inputHandle = (event) =>{
    this.setState({
        question : event.target.value
    })

}

clickHandle = () =>{
    this.setState({
        questions : [...this.state.questions, {id: this.state.id++ , question: this.state.question}]
    
})
}

deleteHandler = (index ) => {
    const questionList = [...this.state.questions];
    questionList.splice(index,1);
    this.setState({ questions : questionList});
}


    render(){
        let question = (
          <div>
          {this.state.questions.map( (val , index )=> {
            return <Question 
            click = {() => this.deleteHandler(index)}
            id = {val.id} 
            question = {val.question}
            key = {val.i } 
            />
          
          })}
          </div>
    );

    return(
        <div className="UserInput">
            <input type="text" placeholder= "Enter Your Question" onChange= {this.inputHandle}></input>
            <button className="button" onClick={this.clickHandle} >Add Question</button>
            {question}
        </div>
        )
    }
}



export default UserInput