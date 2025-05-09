import React from "react";
import "@/assets/global.css";
function login() {
  return (
    <div>
      <form>
        <div className="flex flex-col gap-5 mb-5">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="email">Email / username </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email or username"
              className="bg-[#F7F7F7] p-3 focus:border-3 focus:border-btn-primary"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="bg-[#F7F7F7] p-3 focus:border-3 focus:border-btn-primary text-[20px]"
              placeholder="Enter your password"
            />
          </div>
        </div>
      </form>
      <button className="text-center text-green underline cursor-pointer">
        Nouveau-membre? Inscrivez-vous ici
      </button>
    </div>
  );
}

export default login;
