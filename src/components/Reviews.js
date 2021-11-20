import React from 'react'
import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(collection(db, "reviews"));
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    getReviews()
  }, [])
  
  return (
    <div> 
      {reviews.map((review) => {
        console.log(review)
        return(<h1>{review.name}</h1>)
      })}
    </div>
  )
}


export default Reviews