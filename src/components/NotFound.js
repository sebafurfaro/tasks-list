import React from "react";

export const NotFound = () => {
  return <div className="flex flex-col items-center justify-center min-h-[50vh]">
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-forbid" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="12" cy="12" r="9" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
    <h1>Not found tasks</h1>
  </div>
}