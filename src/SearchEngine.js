import React from "react";
export default function SearchEngine (){
    return <div>
        <form>
            <input type="search" placeholder="Type a city..." autoComplete="off" />
            <input type="submit" className="btn btn-dark"/>
        </form>
    </div>
}