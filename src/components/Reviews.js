import React from 'react'
import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  getDoc,
  doc,
  onSnapshot,
  getDocs,
  getCollection,
  collectionGroup,
  docs,
  query
} from "firebase/firestore";
import SingleReview from "./SingleReview"

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [treeCounts, setTreeCounts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // const getReviews = async () => {
    //   const data = await getDocs(collection(db, "reviews"));
    //   setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    // };
    const getReviews = async () => {
      const reviewRef = await getDocs(collection(db, 'reviews'));
      reviewRef.forEach(async (review) => {
        const temp = reviews;
        let reviewData = (await getDoc(doc(db, "reviews", review.id))).data();
        temp.push(reviewData)
        setReviews(temp)
        
      })
      if (typeof reviews !== "undefined") {
        setTimeout(() => { setLoading(false); },1000)
      } else {
        setLoading(true);
      }
      
    }
    console.log(reviews)

    const getTreeCounts = async () => {
      const treeCountRef = await getDocs(collection(db, "treeCounts"));
      treeCountRef.forEach(async (treeCount) => {
        const temp = treeCounts;
        let treecountData = (
          await getDoc(doc(db, "treeCounts", treeCount.id))
        ).data();
        temp.push(treecountData);
        setTreeCounts(temp);
      });
    };
    getTreeCounts();
    getReviews()
    console.log(reviews)
  }, [])
  
  if (!loading) {
    return (
      <div className="cardContainer">
        <div id="messages">
          {console.log(reviews.length)}
          {
            reviews.map((review) => {
              console.log("returning single for " + review.name);
              return (
                <SingleReview
                  name={review.name}
                  review={review.review}
                  treeAward={review.treeAward}
                  treeCounts={treeCounts}
                  treeReview={review.treeReview}
                  company={review.company}
                ></SingleReview>
              );
            })
          }
          
        </div>
      </div>
    )
  } else {
    return <div class="loader"></div>;
  }
}


export default Reviews