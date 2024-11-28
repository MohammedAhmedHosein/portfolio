import "./contact.css";
const Contact = () => {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and get notified when i publish
        something new{" "}
      </p>

      <div className="flex">
        <form className="">
          <div className="flex">
            <label htmlFor="email">Email Address :</label>
            <input type="email" id="email" required />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message :</label>
            <textarea id="message" required></textarea>
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
        <div className="border animation">animation</div>
      </div>
    </section>
  );
};

export default Contact;
