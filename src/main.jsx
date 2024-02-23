import React from "react";
import ReactDOM from "react-dom/client";

const userName = () => {
  let data = window.localStorage;

  if (data.getItem("greetUser") == null) {
    let name = prompt("Enter Your Name", "Your Name");
    data.setItem("greetUser", name);

    let greetUser = data.getItem("greetUser");
    return greetUser;
  } else {
    let greetUser = data.getItem("greetUser");
    return greetUser;
  }
};

function editUserName() {
  window.localStorage.removeItem("greetUser");
  window.location.reload();
}

let options = {
  timeZone: "Asia/Kolkata",
  hour12: false,
};

let date = new Date().toLocaleTimeString("hi-IN", options);
let time = parseInt(date.slice(0, 2));

let greet = "";

const greetMsg = (time, greet) => {
  if (0 <= time && time <= 11) {
    greet = greet.replace("", "Morning");
    return greet;
  } else if (12 <= time && time <= 15) {
    greet = greet.replace("", "Afternoon");
    return greet;
  } else if (16 <= time && time <= 18) {
    greet = greet.replace("", "Evening");
    return greet;
  } else if (19 <= time && time <= 23) {
    greet = greet.replace("", "Night");
    return greet;
  }
};

let msg = greetMsg(time, greet);

const newColor = (msg) => {
  if (msg.search("Morning") == 0) {
    return { color: "#FFFFED" };
  } else if (msg.search("Afternoon") == 0) {
    return { color: "#FF3F00" };
  } else if (msg.search("Evening") == 0) {
    return { color: "#00008B" };
  } else if (msg.search("Night") == 0) {
    return { color: "	#A9A9A9" };
  }
};

let msgColor = newColor(msg);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="div">
      <h1>
        Hello {userName()} <span style={msgColor}> Good {msg} </span>
      </h1>
    </div>
    <div className="btnDiv">
      <button className="btn" onClick={editUserName}>Change Name</button>
    </div>
  </>
);
