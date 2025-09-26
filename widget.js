const FEEDBACK_API_URL = "http://your:server/api/feedback";

// Widget content
const widget = document.getElementById("feedback-widget");
const voteDiv = document.createElement("div");
const buttonUp = document.createElement("button");
const buttonDown = document.createElement("button");
const thumbsUp = "👍";
const thumbsDown = "👎";

const widgetText = "Your question here"; // ADD YOUR QUESTION HERE
widget.textContent = widgetText;
buttonUp.textContent = thumbsUp;
buttonDown.textContent = thumbsDown;

widget.appendChild(voteDiv);
voteDiv.appendChild(buttonUp);
voteDiv.appendChild(buttonDown);

// Functionality
const handleUpvote = () => {
  handleFeedback("up");
};

const handleDownvote = () => {
  handleFeedback("down");
};

buttonUp.addEventListener("click", handleUpvote);
buttonDown.addEventListener("click", handleDownvote);

// Send feedback to server/API
const handleFeedback = async (vote) => {
  // --------------------- REMOVE - DEMONSTRATION ONLY ---------------------\\
  // TEMP: This fade-out and removal is only for demonstration purposes
  // to show how the widget behaves when a vote is cast. In a real app,
  // you would keep the widget visible or remove it only after a successful API response.
  console.log(vote);
  widget.style.opacity = "0";
  widget.addEventListener("transitionend", function removeWidget(e) {
    if (e.propertyName === "opacity") {
      widget.remove();
      widget.removeEventListener("transitionend", removeWidget);
    }
  });
  // ------------------------------------------------------------------------\\

  /*
  try {
    const response = await fetch(FEEDBACK_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vote: vote }),
    });

    if (response.ok) {
      widget.style.opacity = "0";

      widget.addEventListener(
        "transitionend",
        function removeWidget(e) {
          if (e.propertyName === "opacity") {
            widget.remove();
            widget.removeEventListener("transitionend", removeWidget);
          }
        },
        { once: true }
      );
      return;
    }

    const data = await response.json();
    console.log("Server response:", data);
  } catch (err) {
    console.error("Something went wrong:", err);
  }
    */
};

// Styling
const widgetStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "90px",
  border: "1px solid black",
  borderRadius: "12px",
  boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
  position: "absolute",
  right: "20px",
  fontSize: "16px",
  userSelect: "none",
  opacity: "0",
  transition: "opacity 2s ease",
  // Add/Remove styling to fit your page
};

const voteDivStyles = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "150px",
};

const buttonStyles = {
  background: "none",
  border: "none",
  fontSize: "25px",
  padding: "5px",
  transition: "transform ease 0.2s",
};

for (const prop in widgetStyles) {
  widget.style[prop] = widgetStyles[prop];
}

for (const prop in voteDivStyles) {
  voteDiv.style[prop] = voteDivStyles[prop];
}

for (const prop in buttonStyles) {
  buttonUp.style[prop] = buttonStyles[prop];
  buttonDown.style[prop] = buttonStyles[prop];
}

// Styling effects
window.onload = () => {
  setTimeout(() => {
    widget.style.opacity = "1";
  }, 2000);
};

const addHoverEffect = (button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.3)";
    button.style.cursor = "pointer";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
};

addHoverEffect(buttonUp);
addHoverEffect(buttonDown);
