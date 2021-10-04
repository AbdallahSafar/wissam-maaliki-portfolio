import React from "react";
import insta from "./instagram.svg";
import facebook from "./facebook.svg";
import mail from "./mail.svg";
import linkedin from "./linkedin.svg";

export default function Home() {
  return (
    <div>
      <div className="bg-home-page w-screen h-screen bg-cover bg-center flex justify-center items-center relative">
        <div className="w-45% h-2/5 rounded-3xl dark-color flex justify-center items-center md:w-9/12 sm:w-9/12 xs:w-11/12">
          <div className="text-center">
            <h1 className="raleway text-7xl text-white font-medium md:text-5xl sm:text-5xl xs:text-4xl">
              WISSAM MAALIKI
            </h1>
            <h2
              id="architect"
              className="sail text-6xl mt-3 md:text-5xl sm:text-4xl xs:text-3xl"
            >
              Architect
            </h2>
          </div>
        </div>
        <div className="absolute right-5">
          <a href="https://www.instagram.com" target="_blank">
            <img src={insta} alt="instagram" className="mb-5" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img src={facebook} alt="facebook" className="mb-5" />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <img src={linkedin} alt="linkedin" className="mb-5" />
          </a>
          <a href="mailto:wissam.maaliki@gmail.com" target="_blank">
            <img src={mail} alt="mail" />
          </a>
        </div>
      </div>
    </div>
  );
}
