# Feedback Widget (Thumbs Up / Thumbs Down)

A lightweight, embeddable JavaScript widget that allows website visitors to provide quick feedback on articles, blog posts, or any webpage content using a simple thumbs up / thumbs down interface.

# Features

- Fully self-contained: just include a <div> and the script.

- Interactive buttons for thumbs up 👍 and thumbs down 👎.

- Easy to customize styles and text directly in the script.

- Can be extended to send feedback data to your server or API.

- Responsive and lightweight, works on any modern browser.

Installation

1. Add a container <div> where you want the widget to appear:

```html
<div id="feedback-widget"></div>
<script src="feedback-widget.js"></script>
```

2. Optionally, configure the question and API URL inside feedback-widget.js:

```js
const FEEDBACK_API_URL = "https://your-server.com/api/feedback";
const widgetText = "Do you like this page?";
```

3. The widget will automatically render and be ready for interaction.

# Usage

- Clicking 👍 or 👎 triggers a temporary fade-out (for demonstration).

- Replace the temporary code with your server/API call to store feedback:

```js
const handleFeedback = async (vote) => {
   try {
    const response = await fetch(FEEDBACK_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vote: vote }),
    });
   }}...
```

# Customization

- Change question text: widgetText.

- Modify styles: adjust widgetStyles, buttonStyles, and voteDivStyles in widget.js.

- Add additional features or animations as needed.

# License

This project is open source under the MIT License
