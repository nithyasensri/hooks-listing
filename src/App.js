
import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import List from "./List";
import { Form, Button } from 'react-bootstrap'
import Editform from "./Edit";


const Mainheader = () => {

  const [data, setData] = useState("");
  const [usedata, setUsedata] = useState([]);

  const [editing, setEditing] = useState(false);
  const [currentUser,setcurrentUSer]=useState([]);

  const handleSubmit = () => {
    setUsedata([...usedata, { name: data, isComplete: false,id:usedata.length+1 }]);
    setData("");
  }

  const onDone = (item,ind) => {
    const newVal = usedata.map(list => {
      if (list.name === item.name) {
        return { ...list, isComplete: !list.isComplete }
      }
      else {
        return list;
      }
    })
    console.log(item);
    console.log(ind);
    setUsedata(newVal);
  }

  const onDelete = (item,ind) => {
    const newVal = usedata.filter(list => {
      if (list.name === item.name) {
        return false;
      }
      return true;
    })
    console.log(item);
    console.log(ind);
    setUsedata(newVal);
  }

  const onEdit = (item) => {
    setEditing(true);
    setcurrentUSer({name:item.name,id:item.id,isComplete:item.isComplete});
  }

  const updateUser = (user) => {
    setEditing(false);
    setUsedata(usedata.map(list=>(list.id===user.id ? user : list )));
  };


  return (<div style={{ padding: "50px" }}>

    {editing ?
      (<div className="main-header" style={{ width: "50%", border: "solid 1px grey,float:left" }}>
        <div style={{ width: "60%" }}>
         <Editform currentUser={currentUser}  editing={editing} setEditing={setEditing} updateUser={updateUser}/>
        </div>
      </div>) :
      (<div className="main-header" style={{ width: "50%", border: "solid 1px grey,float:left" }}>
        <div style={{ width: "50%" }}>
          <h3>AddForm</h3>
          <Form.Control type="text" placeholder="Enter name" onChange={(event) => setData(event.target.value)} />
          <Button type="submit" onClick={() => handleSubmit()} style={{ margin: "10px 0px 10px" }}>Add Text</Button>
        </div>
      </div>)}
    <div>
      <List usedata={usedata} onDone1={onDone} onDelete1={onDelete} onEdit={onEdit} />
    </div>
  </div>)

}

export default Mainheader