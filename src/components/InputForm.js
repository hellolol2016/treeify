import React from 'react'
import { useState } from 'react';
import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
import { kebabCase } from 'lodash';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function InputForm() {
  const [treeAward, setTreeAward] = useState(false);
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");
  const [treeReview, setTreeReview] = useState("");
  const [company, setCompany] = useState('')
  const [treeCounts, setTreecounts] = useState([]);
  const reviewRef = collection(db, 'reviews');
  const treecountRef = collection(db, 'treeCounts')
  const sendReview = async () => {

    await addDoc(reviewRef, {
      name: username,
      review: review,
      treeAward: treeAward,
      treeReview: treeReview,
      company: company
    });
    console.log('doc written with id : ',  reviewRef.id)
    
  }
  
  const getTreeCounts = async () => {
      const data = await getDocs(collection(db, "treeCounts"));
      setTreecounts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  getTreeCounts();
  


  const handleTreeAward = () => {
    setTreeAward(!treeAward);
    return null;
    //needs to update an int value from database
  };

  const sendTreeAward = async() => {
    treeCounts.forEach(async (treeCount) => {
      if (treeCount.company === company) {
        let tc = treeCount.treeCount;
        await addDoc(treecountRef, {
          company: company,
          treeCounts: tc + 1,
        });
      }
    })
  }
  
  return (
    <>
    <form className="inputs">
      <div className="shortInputs">
        <input
          type="text"
          placeholder="company name"
          className="companyName form-style"
          onChange={(e) => {
            setCompany(kebabCase(e.target.value));
          }}
        ></input>
        <input
          type="text"
          placeholder="username"
          className="form-style"
          onChange={(e) => {
            setUsername(kebabCase(e.target.value));
          }}
        ></input>
      </div>
      <div className="longInputs">
        
        <input
          type="text"
          className="form-style"
          placeholder="Tell us about your experience"
          onChange={(e) => {
            setReview(e.target.value);
          }}
        ></input>

        <input
          type="checkbox"
          className="treeAward"
          onClick={handleTreeAward}
        ></input>
        <label for="input">Tree Award</label>
        {treeAward && (
          <input
            tyoe="text"
            placeholder="Why does this small company deserve the special tree award?"
            className="form-style"
            onChange={(e) => {
              setTreeReview(e.target.value);
            }}
          ></input>
        )}

        <button
          className="sendReview btn"
          onClick={function click(e) {
            e.preventDefault()
            toast.success("review submitted!");
            console.log("sending");
              sendReview();
              sendTreeAward();
            
          }}
        >
          Send!
        </button>
      </div>
    </form>
    <ToastContainer />
    </>
  );
}

export default InputForm
