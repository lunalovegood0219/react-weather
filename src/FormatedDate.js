import React from "react";

export default function FormatedDate() {
    const currentDate = new Date();
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = currentDate.toLocaleString("en-GB", options);

    return (
      <div>
        <p>{formattedDate}</p>
      </div>
    );
}
