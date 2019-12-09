import React, { Component } from 'react'
import './Question.css';
import Answer from '../Answers/Answer';
class Question extends Component {

    state = {
        answers: [],
        answer: "",
        visibe: true
    }


    changeHandle = (event) => {
        this.setState({answer : event.target.value})
    }


    enableVisibilty = () => {

        this.setState({ 
            answers: [...this.state.answers,this.state.answer],
            visibe: !this.state.visibe 
        })
    }

    render(props) {
        let answers = (
            <div>
            {this.state.answers.map( (val , index )=> {
              return <Answer    
              answer = {val} 
              key = {val.i } 
              />
            
            })}
            </div>
      );
        return (
            <div className="Question">
                <table>
                    <tr><td ><p onClick={this.props.click} >{this.props.id}</p></td>
                        <td><p > {this.props.question}</p></td></tr>
                    <tr><td></td><td>{answers}</td></tr>
                    <tr> <td></td>
                    <td><input placeholder="Answers" onChange= {this.changeHandle} ></input> <button onClick={this.enableVisibilty}>Reply</button></td>
                        </tr>
                </table>
            </div>
        )
    }
}

export default Question;



