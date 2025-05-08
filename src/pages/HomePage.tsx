import React from "react";
import Links from "../components/Links";
import { HiMiniKey } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { SiUmami } from "react-icons/si";
import { UserData, SocialButton } from "../config/userData";
import CustomZoom from "../components/CustomZoom";
import '../styles/customZoom.css';

interface HomePageProps {
  userData: UserData;
  socialButtons: SocialButton[];
  onGPGClick: (e: React.MouseEvent) => void;
}

const HomePage: React.FC<HomePageProps> = ({ userData, socialButtons, onGPGClick }) => {
  return (
    <div className="hero min-h-screen bg-transparent flex items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="pb-5 mt-20 flex justify-center items-center">
            <div className="zoom-container" style={{ display: 'inline-block', textAlign: 'center' }}>
              <CustomZoom zoomScale={1.0}>
                <img
                  className="zoom-thumbnail rounded-full mx-auto"
                  src={userData.imageIcon}
                  alt="星 野 アイ"
                />
              </CustomZoom>
            </div>
          </div>
          <h1 className="text-5xl font-bold">{userData.name}</h1>
          <p className="py-6">{userData.bio}</p>
          <div className="flex flex-wrap justify-center">
            {socialButtons.map((button, index) => (
              <div key={index} className="px-1 hover:text-myPink1 transition-transform duration-200 transform hover:scale-105">
                <a
                  className="hover:text-myPink1"
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {button.icon === "mail" && <MdEmail className="h-8 w-8" />}
                  {button.icon === "umami" && <SiUmami className="h-8 w-8" />}
                </a>
              </div>
            ))}
            <div className="px-1 hover:text-myPink1 transition-transform duration-200 transform hover:scale-105">
              <button
                onClick={onGPGClick}
                className="hover:text-myPink1"
              >
                <HiMiniKey className="h-8 w-8" />
              </button>
            </div>
          </div>
          <Links />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
