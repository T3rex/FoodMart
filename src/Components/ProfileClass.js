import React from "react";

class ProfileClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }

    render(){
        return (
        <div>
            <h1>
                Class based component
            </h1>
            <h2>name: {this.props.name}</h2>
            <h1> Count: {this.state.count}</h1>
            <button onClick={()=>{
                this.setState({
                    count : 1,
                })
            }}>SetCount</button>
        </div>
        )
    }
}

export default ProfileClass;