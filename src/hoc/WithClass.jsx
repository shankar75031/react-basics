import React from "react";

export default function withClass(props) {
  return <div className={props.classes}>{props.children}</div>;
}
