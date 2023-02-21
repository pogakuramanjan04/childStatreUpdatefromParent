import "./styles.css";
import { useState } from "react";
function CC(props) {
  let c1 = props.b;
  let uc1 = props.ub;
  console.log(c1);
  function uuo() {
    uc1("dh");
  }
  return (
    <>
      <h1>{c1}</h1>
      <h1>{c1}</h1>
      <button onClick={uuo}>click</button>
    </>
  );
}
function C(props) {
  let a = props.v;
  let ua = props.uv;
  console.log(a);
  return (
    <>
      <h1>{a}</h1>
      <CC b={a} ub={ua} />
    </>
  );
}
export default function App() {
  const [o, uo] = useState("parent");
  return (
    <div className="App">
      {JSON.stringify(o)}
      <C v={o} uv={uo} />
    </div>
  );
}
