import image from "./troll.png";
import "./Navbar.css";
export default function NavBar() {
  return (
    <div className="NavDiv">
      <img src={image} className="troll" alt="troll" />
      <h1 className="headerNav">Meme Generator</h1>
    </div>
  );
}
