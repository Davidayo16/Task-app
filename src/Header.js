import React from "react";
import Button from "./Button";

export default function Header({ task, onRemove, show }) {
  return (
    <div className="header">
      <h2>Task Tracker</h2>
      <Button
        color={show ? "rgb(218, 33, 33)" : "green"}
        text={show ? "Close" : "Add"}
        onRemove={onRemove}
      />
    </div>
  );
}
