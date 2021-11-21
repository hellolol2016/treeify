import React, {useState} from 'react'
import silver from "../images/silver.png"
import gold from "../images/gold.png";
import { kebabCase } from "lodash";
function SingleReview({ name, review, treeAward, treeCounts, treeReview, company }) {
  let tc = 0
  treeCounts.forEach((treeCount) => {
    if (kebabCase(treeCount.company) === kebabCase(company)) {
      tc = treeCount.treeCount;
    }
  })

  return (
    <div class="card">
      <div class="card-details">
        <h1>@{name}</h1>
        <h2>{company}</h2>
        <p>{review}</p>
      </div>
      <div className="card-image">
        {treeAward && tc >= 10 ? (
          <img
            src={gold}
            title="Gold Tree Recognition"
            className="card-image"
          />
        ) : treeAward ? (
          <img src={silver} title="Silver Tree Recognition" />
        ) : null}
        <p>{treeReview}</p>
      </div>
    </div>
  );
}

export default SingleReview
