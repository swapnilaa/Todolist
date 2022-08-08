import { onValue, ref, remove } from 'firebase/database';
import React, { Component } from 'react'
import { db } from './Firebaseconfig';

export default class MyTasks extends Component {
   state={
    store:{}
   };
   handleclick=(delTask)=>
   {
       let products={...this.state.store};
       delete products[delTask];
       this.setState({store:products});
       let storeId=localStorage.getItem('storeId');
       remove(ref(db,'storage1/'+storeId+'/list/'+delTask))
   };
   componentDidMount(){

    let storeId=localStorage.getItem('storeId');
    let reference=ref( db,'storage1/'+storeId+'/list');
    onValue(reference,(snapshot)=>
    {
        let listitems=snapshot.val();
       this.setState({store:listitems});
        console.log(listitems);
        console.log(this.state.store);
        console.log(Object.keys(listitems).length);
    });
}
    render() {
  return  this.state.store===null?
        (<div><h1>There is no Plan</h1></div>):(
      <div>
        <div className='container' style={{float:"center" , backgroundColor:"green" ,  height:400}}>
        
        <table className="table table-striped" style={{  padding:30 }}>
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Task Details</th>
     
    </tr>
  </thead>
  <tbody>
  {
           Object.keys(this.state.store).map((data,i)=>(
            
            <tr>
            <th scope="row">{i+1}</th>
            <td> {this.state.store[data].task}</td>
            <td><button className='btn btn-danger' onClick={()=>this.handleclick(data)}>Delete Task</button> </td>
            </tr>))
    }
    </tbody>
    </table>
        </div>
      </div>
    );
  }
}
