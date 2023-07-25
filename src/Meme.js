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
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
 
  return (
    <main>
      
        <div className="form">
          <input
            type="text"
            className="memeinput"
            placeholder="top-text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="memeinput"
            placeholder="bottom-text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />

          <button className="memebutton" onClick={handleClick}>
            Get a new meme image 🖼️
          </button>
        </div>
      

      <div className="meme">
        <img src={meme.randomImg} className="memeImage" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
