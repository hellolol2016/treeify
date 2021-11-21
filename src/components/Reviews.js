import React from 'react'
import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import SingleReview from "./SingleReview"

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [treeCounts, setTreeCounts] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(collection(db, "reviews"));
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    const getTreeCounts = async () => {
      const data = await getDocs(collection(db, "treeCounts"))
      setTreeCounts(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    }
    getTreeCounts();
    getReviews()
  }, [])
  
  return (
    <div className="cardContainer">
      {reviews.map((review) => {
        return (<SingleReview
          name={review.user}
          review={review.review}
          treeAward={review.treeAward}
          treeCounts={treeCounts}
          treeReview={review.treeReview}
          company={review.company}>
          </SingleReview>)
      })}
    </div>
  )
}


export default Reviews