import React from "react";

const ConsultationAreaForm = () => {
  return (
    <div className="consultation-form-wrap">
      <h4 className="title">Free Consultation</h4>
      <form action="#">
        <div className="form-grp">
          <input type="text" placeholder="Name" />
        </div>
        <div className="form-grp">
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="form-grp">
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="form-grp">
          <select
            id="shortBy"
            name="select"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="">Services</option>
            <option>Web Development</option>
            <option>App Development</option>
            <option>Software development</option>
            <option>UI/UX Design</option>
          </select>
        </div>
        <button className="btn" type="submit">
          Consultation
        </button>
      </form>
    </div>
  );
};

export default ConsultationAreaForm;
