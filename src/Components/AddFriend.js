import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const AddFriend = () => {
  const {push} = useHistory();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = evt => {
    evt.preventDefault();
    setFormData({
      ...formData,
            [evt.target.name]: evt.target.value
    })
    console.log(formData)
  }
  
  const handleSubmit = evt => {
    const token = localStorage.getItem('token');
    evt.preventDefault();
    axios.post('http://localhost:9000/api/friends', {
      id: Date.now(),
      name: `${formData.name}`,
      age: formData.age,
      email: `${formData.email}`, 
  }, {headers: {authorization: token}})
      .then(push('/friends'))
      .catch(err => {
        console.error(err);
      })
  };

    return(
    <div>
      <h2>Add a Friend</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Friend's Name</label>
          <input onChange={handleChange} name='name' id="name" />
        </div>
        <div>
          <label htmlFor="age">Friend's Age</label>
          <input onChange={handleChange} name='age' id='age' />
        </div>
        <div>
          <label htmlFor="email">Friend's Email</label>
          <input onChange={handleChange} name='email' id='email' />
        </div>
        <button>Submit</button>
      </form>
    </div>
    );
  }

  export default AddFriend;