import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEvent } from "../Redux/AppReducer/action.js";
import "./dashboard.css";

const url = "http://localhost:8080/meetups";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error, meetupsData } = useSelector(
    (state) => state.eventData
  );

  useEffect(() => {
    dispatch(getEvent(url));
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "#9f73ab",
        }}
      >
        <button
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "20px",
          }}
          className="my-events"
        >
          {" "}
          Show My Events{" "}
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "20px",
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "20px",
          }}
          className="register"
        >
          Register
        </button>
      </div>
      <h2 style={{ textAlign: "center" }}>Upcoming event</h2>
      <div className="meetups_wrapper">
        {/* Map the below container against your meetup events data */}

        {meetupsData &&
          meetupsData.map((elem) => {
            return (
              <div key={elem.id} className="box">
                <img className="image" alt="img" src={elem.image} />
                <h4 className="title"> {elem.title}</h4>
                <div className="location">{elem.location} </div>
                <div className="date">{elem.date} </div>
                <div className="time"> {elem.time} </div>
                <div className="theme">{elem.theme} </div>
                <div className="description"> {elem.description} </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
