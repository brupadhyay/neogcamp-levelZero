import { useState } from "react";
import "./styles.css";

var emojiDB = {
  "😀": "grinning face",
  "😎": "smiling face with sunglasses",
  "😅": "grinning face with sweat",
  "🤡": "clown face",
  "🥱": "yawning face",
  "😇": "smiling face with halo",
  "👋": "waving hand",
  "🙏": "folded hands",
  "🚀": "rocket",
  "😜": "winking face with tongue",
  "🛐": "place of worship",
  "🔨": "hammer"
};

const emojis = Object.keys(emojiDB);

export default function App() {
  const [meaning, setmeaning] = useState("emoji meaning will come here");

  function changeEventHandler(event) {
    var userInput = emojiDB[event.target.value];
    if (userInput !== undefined) {
      setmeaning(userInput);
    } else {
      setmeaning("Emoji not found!");
    }
  }

  function clickEventHandler(emoji) {
    var meaning = emojiDB[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Express</h1>
      <input
        onChange={changeEventHandler}
        placeholder={"enter your emoji here"}
      ></input>
      <h2>{meaning}</h2>
      <h3> emojis we know </h3>
      <ul>
        {emojis.map((emoji) => {
          return (
            <li key={emoji} onClick={() => clickEventHandler(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
