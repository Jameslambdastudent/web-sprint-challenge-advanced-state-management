import React from 'react'
import {connect} from 'react-redux'
import {postSmurf, getSmurf} from '../actions'


class SmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
    }
    nameChange = e => {
        this.setState({name: e.target.value})
    }
    ageChange = e => {
        this.setState({age: e.target.value})
    }
    heightChange = e => {
        this.setState({height: e.target.value})
    }
    render(){

        return (
            <> 
            <form>
                <label>
                  Name:
                    <input 
                    type= "text"
                    value={this.state.name}
                    onChange={this.nameChange}
                    placeholder="Name Here"
                    />
                </label>
                <label>
                  Age:
                  <input 
                   type= "text"
                   value={this.state.age}
                   onChange={this.ageChange}
                   placeholder="Age Here"
                   />
              </label>
              <label>
                  Height:
                  <input 
                   type= "text"
                   value={this.state.height}
                   onChange={this.heightChange}
                   placeholder="Height Here"/>
              </label>
              <button onClick={e => {e.preventDefault()
            this.props.postSmurf(this.state)}} >Submit</button>
            </form>
    
                {this.props.smurf.map((s, i) => (
                   <h4 key={i}>
                      Name:  {s.name} | Age: {s.age} | Height: {s.height}
                       </h4> 
                ))}
            </>
        )
        }
    }
    
    const mapStateToProps = state => {
    
      return {
    
          smurf: state.smurf
    
      }
    }
    
    export default connect(
      mapStateToProps,
      {postSmurf, getSmurf}
    )(SmurfForm) 
