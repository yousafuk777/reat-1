import React from 'react';

const ApplyForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted!");
  };

  return (
    <div className="form-container">
      <form className="apply-form" onSubmit={handleSubmit}>
        <h2>Apply for Position</h2>
        <p className="subtitle">Frontend Engineer - Meta</p>
        
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="john@example.com" required />
        </div>

        <div className="input-group">
          <label>Portfolio Link</label>
          <input type="url" placeholder="https://myportfolio.com" />
        </div>

        <div className="input-group">
          <label>Upload Resume</label>
          <input type="file" className="file-input" required />
        </div>

        <div className="input-group">
          <label>Cover Letter</label>
          <textarea rows="4" placeholder="Why are you a good fit?"></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyForm;