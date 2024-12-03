import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Contact = () => {
  const [state, handleSubmit] = useForm("meoqnjpo");
  if (state.succeeded) {
    return (
      <h1 style={{ color: "var(--subtitle)", textAlign: "center" }}>
        Thank you for Message !!!
      </h1>
    );
  }
  if (state.error) {
    return (
      <h1 style={{ color: "var(--error)", textAlign: "center" }}>
        There was a problem submitting your form. Please try again later.
      </h1>
    );
  }
  //
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
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address :</label>
            <input type="email" id="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message :</label>
            <textarea id="message" name="message" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
        </form>
        <div className="animation">
          {" "}
          <DotLottieReact
            src="/Contactus.json"
            style={{ height: 400 }}
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
