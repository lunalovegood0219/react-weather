import React from "react";

export default function FormatedDate() {
    const currentDate = new Date();
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    const formattedDate = currentDate.toLocaleString("en-GB", options);

    return (
      <div>
        <p className="d-inline opacity-75">{formattedDate}</p>
      </div>
    );
}
