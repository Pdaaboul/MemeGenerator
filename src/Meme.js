import "./Meme.css";
import MemeData from "./Memedata.js";
export default function Meme() {
  function handleClick() {
    const memesArray = MemeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url
    console.log(url)
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="memeinput" placeholder="top-text" />
        <input type="text" className="memeinput" placeholder="bottom-text" />

        <button className="memebutton" onClick={handleClick}>
          Get a new meme image 🖼️
        </button>
      </div>
    </main>
  );
}
