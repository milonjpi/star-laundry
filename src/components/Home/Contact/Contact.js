import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 m-auto">
          <h2 className="text-center text-success py-3">Keep in Touch</h2>
          <form action="">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
            />
            <br />
            <textarea
              className="form-control"
              rows="3"
              placeholder="Your Message"
            ></textarea>
            <br />
            <div className="text-right">
              <button onClick={e => e.preventDefault()} className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
