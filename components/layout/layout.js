import { Fragment } from "react";
import Header from "./header";

export default function Layout(props) {
  return (
    <Fragment>
      <Header></Header>
      {props.children}
    </Fragment>
  );
}
