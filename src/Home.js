import { onValue } from "firebase/database";
import React, { Component } from "react";
import { ref } from "firebase/database";
import { db } from "./Firebaseconfig";
import { set } from "firebase/database";
export default class Home extends Component {
    state={
        input1:"",
        store:[]
    };
    handleChange=(e)=>
    {
        this.setState({input1:e.target.value })
        //console.log(e.target.value);
    };
    handleSubmit=(e)=>
    {
        e.preventDefault();
        let listId=(Math.random()*99999000).toFixed();
        let storeId=localStorage.getItem('storeId');
        if(storeId==null)
        {
            let storeId=(Math.random()*99999000).toFixed();
            const reference=ref(db,'storage1/'+storeId+'/list/'+listId);
            set(reference,{
                'task':this.state.input1,
                
            });
            localStorage.setItem('storeId',storeId);
        }
        else
        {
            
            const reference=ref(db,'storage1/'+storeId+'/list/'+listId);
            set(reference,{
                'task':this.state.input1,
            });
        }
    };
    
    componentDidMount()
    {
    
    };
    getStorage()
    {
        onValue()
    }
       render() {
    return (
      <div>
        <div className="container" style={{ backgroundColor: "white", height: 880 }}>
          <form onSubmit={this.handleSubmit} style={{width:900 , backgroundColor:"green" , margin:50 , padding:30 }} >
          
            <label for="exampleFormControlTextarea1" class="form-label">
              <h2> Enter Your Plan
              </h2>
            </label>
            <textarea onChange={this.handleChange}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          <button style={{margin:10}} className="btn btn-primary"  >Add</button>
          </form>
          </div>  
        
      </div>
    );
  }
}
