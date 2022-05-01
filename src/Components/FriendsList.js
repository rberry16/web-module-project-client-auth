import axios from "axios";
import React, { useEffect, useState } from "react";
import axioswithAuth from "../Utils/axiosWithAuth";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axioswithAuth().get('/friends')
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => {
            console.error(err);
        })
    }, [])

    return(
        <div>
          <h2>Friends</h2>
          <ul>
              {friends.map(friend => {
                  return <li key={friend.id}>{friend.name} -- {friend.age} -- {friend.email}</li>
              })}
          </ul>
        </div>
        );
  }

  export default FriendsList;