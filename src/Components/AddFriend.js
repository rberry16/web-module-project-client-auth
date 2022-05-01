import React from "react";

const AddFriend = () => {
    return(
    <div>
      <h2>Add a Friend</h2>
      <form>
        <div>
          <label htmlFor="name">Friend's Name</label>
          <input id="name" />
        </div>
        <div>
          <label htmlFor="age">Friend's Age</label>
          <input id='age' />
        </div>
        <div>
          <label htmlFor="email">Friend's Email</label>
          <input id='email' />
        </div>
        <button>Submit</button>
      </form>
    </div>
    );
  }

  export default AddFriend;