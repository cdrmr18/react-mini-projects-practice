import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [alert, setAlert] = useState({show:false, msg:'',type:''});
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);


  const handleSubmit = (e) => {
    e.prventDefault();
    // const newItem = value;
    // setList([...list, newItem]);
    // setValue('');
  }
  useEffect(()=>{
    console.log('effect');
  },[])

  return (
    <section className="section-center">
      <form
        className="grocery-form" 
        onSubmit={handleSubmit}
        >
          {alert.show && <Alert />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input 
          type="text" 
          className="grocery" 
          placeholder="e.g. eggs"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <button className="submit-btn">{isEditing? 'edit' : 'submit'}</button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
        <button className="clear-btn">Clear List</button>
      </div>
    </section>
  )
}

export default App
