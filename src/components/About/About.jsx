import "./About.css";
import profPhoto from "../../assets/prof_photo.jpg";

function About() {
  return (
    <div className="about">
      <img src={profPhoto} className="about__image" />
      <div>
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          My name is Daniel. I am a full-stack developer. I am experienced in
          JavaScript, React, Express, HTML, and CSS.
          <br />
          <br />
          This NewsExplorer app was my Final Project for my TripleTen Software
          Engineering course.
        </p>
      </div>
    </div>
  );
}

export default About;
