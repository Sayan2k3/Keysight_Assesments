import React from 'react';
 
class MyErrorBoundary extends React.Component{  //this will be included in each and every class
   
    constructor(props)
    {
      super(props)
      this.state={
        errorMessage : ""
      };
    }
   
    static getDerivedStateFromError(error){  // 1st method
        return {
            errorMessage : error.toString()
        }
    }
 
    componentDidCatch(error,info){          // 2nd method
     this.logErrorToServices(error.toString(), info.componentStack)
    }
 
    logErrorToServices = console.log
 
    render(){
        if(this.state.errorMessage){
            return <p>{this.state.errorMessage} </p>
        }
        return this.props.children;
    }
}
 
class BuggyCounter extends React.Component{
 
    constructor(props)
    {
    super(props)
 
    this.state = {
        counter :0
    }
    }
   
 
    handleClick = () =>{
        this.setState({
            counter : this.state.counter + 1
        })
    }
 
    render(){
        if (this.state.counter === 5)
           {
              throw new Error("You cannot increment more than 5") // runtime error is thrown
           }
        return(
            <div>
                <h2> {this.state.counter}</h2>
                <button onClick={this.handleClick}> Add </button>
            </div>
        )
    }
}
 
function App(){
    return(
        <div>
            <MyErrorBoundary>
                <BuggyCounter />
             </MyErrorBoundary>
        </div>
    )
}
 
export default App;
 