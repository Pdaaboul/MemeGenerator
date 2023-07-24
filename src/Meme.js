import "./Meme.css";
import MemeData from "./Memedata.js";
import React from "react";
export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(MemeData);
  function handleClick() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="memeinput" placeholder="top-text" />
        <input type="text" className="memeinput" placeholder="bottom-text" />

        <button className="memebutton" onClick={handleClick}>
          Get a new meme image 🖼️
        </button>
        <img src={meme.randomImg} className="memeImage" />
      </div>
    </main>
  );
}
