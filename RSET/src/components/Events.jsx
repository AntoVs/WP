import { useEffect, useState } from "react";
import "./Events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading events:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="events-page">

      <div className="events-header">
        <p>RSET</p>

        <h1>Events</h1>

        <span>
          Discover events, activities and programmes
          happening at RSET.
        </span>
      </div>

      {loading ? (
        <p className="events-status">
          Loading events...
        </p>
      ) : events.length === 0 ? (
        <p className="events-status">
          No events available.
        </p>
      ) : (
        <div className="events-grid">
          {events.map((event) => (
            <div className="event-card" key={event.id}>

              <div className="event-date">
                {event.date}
              </div>

              <h2>{event.title}</h2>

              <h4>{event.venue}</h4>

              <p>{event.description}</p>

            </div>
          ))}
        </div>
      )}

    </section>
  );
}

export default Events;