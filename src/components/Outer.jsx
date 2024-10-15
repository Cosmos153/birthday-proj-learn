import Info from "./Info";
import * as React from "react";
import List from "@mui/material/List";
import dataOrig from "../data.js";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";

const Outer = () => {
  const [data, setData] = React.useState(dataOrig);
  const update = (id) => {
    const wow = data.filter((d) => {
      return d.id !== id;
    });
    setData(wow);
  };
  const deleteAll = () => {
    setData([]);
  };
  return (
    <div className="outer">
      <div className="inner">
        <List sx={{ width: "50%", maxWidth: 360, bgcolor: "background.paper" }}>
          {data.map((d) => {
            return (
              <div onClick={() => update(d.id)}>
                <Info data={d} />
                <Divider className="divider" variant="inset" component="li" />
              </div>
            );
          })}
          <button onClick={deleteAll} className="btn btn-block">
            Clear All
          </button>
        </List>
      </div>
    </div>
  );
};

export default Outer;
