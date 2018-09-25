import React, { Component } from 'react'
import styles from '../styles/table.css'
import PostData from '../data/week1scoring.json'

class PostList extends Component {
  render() {
    return (
      <div>
        <table style={{"borderBottom":"1px solid black","borderCollapse":"collapse"}}>
          <tr>
                <th style={{"border": "1px solid black"}}>Team</th>
                <th style={{"border": "1px solid black"}}>Points Scored</th>
                <th style={{"border": "1px solid black"}}>Quarterback</th>
          </tr>
          {PostData.map((postDetail, index)=>{
          return (
                <tr>
                    <td style={{"border": "1px solid black"}}>{postDetail.team}</td>
                    <td style={{"border": "1px solid black"}}>{postDetail.points}</td>
                    <td style={{"border": "1px solid black"}}>{postDetail.qb}</td>
                </tr>
          )
        })}
        </table>
      </div>
    );
  }
}

export default PostList;
