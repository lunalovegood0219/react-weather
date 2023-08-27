import React from "react";
import "./SearchEngine.css";
export default function SearchEngine() {
  return (
    <div className="row">
      <form class="mb-3 mt-3">
        <div class="row">
          <div class="col-md-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autocomplete="off"
              spellCheck="true"
            />
          </div>
          <div class="col-md-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-dark w-100 "
            />
          </div>
        </div>
      </form>
    </div>
  );
}
