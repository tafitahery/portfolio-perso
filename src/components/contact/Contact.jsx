import './contact.scss';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <h1>CONTACT</h1>
        <p>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <form>
          <div className="inputs">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="inputs">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter Your Message"
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
