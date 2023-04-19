import React, { Component } from "react";
import MyMoves from "../MyMoves/index.js";
import { db } from "../../db/db.js";
import "./index.css"


class MainComponent extends Component {
  constructor(props) {
    super();
    this.state = { db: db, showMoveDetails: false, id: null, inventory: "" };
    
  }
  toggleMoveDetails(e) {
    e.preventDefault();

    this.setState({
      showMoveDetails: !this.state.showMoveDetails,
    });
    console.log("hello" + this.state.id);
  }

  render() {
    return (
      <>
        <div class="container">
          <div class="row mt-5">
            <div class="col-12 col-sm-3 side-bar">
              <div class="row mt-5">
                <span class="fa fa-truck"></span> <a href="/" className="links">MY MOVES</a> 
              </div>

              <div class="row mt-2">
                <span class="fa fa-user"></span><a href="/profile"  className="links">MY PROFILE</a>
              </div>

              <div class="row mt-2">
                <span class="fa fa-clipboard"></span><a href="/quote" className="links">GET QUOTE</a>
              </div>

              <div class="row mt-2">
                <span class="fa fa-sign-out"><a href="/logout"  className="links">LOGOUT</a></span>
              </div>

            </div>


            {/* Main Area */}
            <div class="col-12 col-sm-9 ">
              <div class="row mt-3 main-container">
                <h4 className="heading">
                  <h2 className="tittle">My Moves</h2>
                </h4>
              </div>
              {this.state.db.Customer_Estimate_Flow.map((data) => {
                return (
                  <MyMoves
                    key={data.estimate_id}
                    data={data}
                    showMoveDetails={this.state.showMoveDetails}
                    />
                );
               
              })}
              <hr/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainComponent;
