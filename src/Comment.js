import React from "react";

export const Comment = (props) => {
    return (
      <>
        <h1>Submitted Successfully</h1>
        <button type="submit" onClick={()=>props.onFormSwitch('loggedin') }>HOME</button>
      </>
    );
  }