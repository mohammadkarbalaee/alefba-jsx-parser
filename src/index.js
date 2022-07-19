import React from "react";
import { serialize, deserialize } from "react-serialize";

const input = (
  <div className="document line-view">
    <devicePixelRatio
      animationDelay={0}
      fontSize={43}
      text={"دستمزد مستقیم"}
      translationX={201}
      height={49}
      width={185}
      left={195}
      top={40}
    />
  </div>
);

console.clear();

const json = serialize(input);
let ourJson = JSON.parse(json);
console.log("json", ourJson.props);

const output = deserialize(json);
console.log("output", output);
