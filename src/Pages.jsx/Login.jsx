import { useState } from "react";

export default function QuickLogin({ onLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const username = formData.name.trim();

    if (!username) return;

    onLogin(username);

    setFormData({
      name: "",
      email: "",
    });
  }

  return (
    <div className="container py-5">
      <div className="card shadow mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body p-4">
          <h2 className="text-center mb-2"> Login</h2>
          <p className="text-center text-secondary mb-4">
            Enter your details to continue
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
