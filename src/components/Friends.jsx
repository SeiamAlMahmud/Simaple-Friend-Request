import React, { useEffect, useState } from 'react'
import userData from "../fakeData/user.json"
import Navbar from './Navbar';
import Cart from './Cart';
import { ToastContainer, toast } from 'react-toastify';

function Friends() {

  const [user, setUser] = useState([]);
  const [myFriend, setMyFriend] = useState([]);

  useEffect(() => {
    setUser(userData);
    // console.log(user);
  }, [user])
  const addFriendHandle = (friend) => {
    // console.log(friend.id);
    // console.log(typeof friend);
    const checkFriend = myFriend.find(e => e.id == friend.id)
    if (!checkFriend) {
      const newFriend = [...myFriend, friend];
      setMyFriend(newFriend)
      toast(`You are following ${friend.first_name} ${friend.last_name}`)
      
    }

  }

  const removeItemFromCart = (indexToRemove) => {
    const updatedCart = myFriend.filter((_, index) => index !== indexToRemove);
    // console.log(updatedCart);
    setMyFriend(updatedCart);
   
  }
  // console.log(myFriend);
  return (
    <>
      <Navbar removeItemFromCart={removeItemFromCart} myFriend={myFriend} />


      {
        user.map(profile => <Cart key={profile.id}  profile={profile} addFriendHandle={addFriendHandle} />)
      }
      <ToastContainer />
    </>
  )
}

export default Friends
