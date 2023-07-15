import './portfolio.scss';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="wrapper">
        <div className="title">
          <h1>ABOUT ME</h1>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="content">
          <div className="left">
            <h2>Get to know me!</h2>
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section. I also
              like sharing content related to the stuff that I have learned over
              the years in Web Development so it can help other people of the
              Dev Community. Feel free to Connect or Follow me on my Linkedin
              where I post useful content related to Web Development and
              Programming I'm open to Job opportunities where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience then don't hesitate to contact me.
            </p>
            <a href="#contact">Contact</a>
          </div>
          <div className="right">
            <h2>My Skills</h2>
            <div className="skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>SASS</span>
              <span>GIT</span>
              <span>Github</span>
              <span>Responsive design</span>
              <span>Terminal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
