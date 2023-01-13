import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../Redux/AppReducer/action.js";
import "./dashboard.css";

const url = "http://localhost:8080/meetups";

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading, error, meetupsData } = useSelector(
    (state) => state.eventData
  );

  useEffect(() => {
    dispatch(getEvent(url));
  }, []);

  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>Subscribed Events</h2>
        <div className="subscribed-events">
          {/* Map the below container against your subcribed events */}
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

        <h2 style={{ textAlign: "center" }}>Recommended Events</h2>
        <div
          className="recommended-events"
          style={{
            display: "flex",
            gap: "50px",
            margin: "50px",
            flexWrap: "wrap",
          }}
        >
          {/* Map the below container against your recommended events data */}

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
    </div>
  );
}
