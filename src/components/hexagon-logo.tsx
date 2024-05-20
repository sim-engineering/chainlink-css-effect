"use client;";
import React, { useEffect, useState } from "react";

export const HexagonLogo = () => {
  const [animationClasses, setAnimationClasses] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const triggerAnimation = () => {
      setAnimationClasses([
        "fall-bottom-left",
        "fall-top-left",
        "fall-top-right",
        "fall-bottom-right",
        "fall-left",
        "fall-right",
      ]);

      setTimeout(() => {
        setShowLogo(true);
      }, 500);

      setTimeout(() => {
        setAnimationClasses(["", "", "", "", "", ""]);
        setShowLogo(false);
      }, 3000);
    };

    triggerAnimation();
    const intervalId = setInterval(triggerAnimation, 4000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="hexagon">
      <div
        className={`hex-side hex-side-bottom-left ${animationClasses[0]}`}
      ></div>
      <div
        className={`hex-side hex-side-top-left ${animationClasses[1]}`}
      ></div>
      <div
        className={`hex-side hex-side-top-right ${animationClasses[2]}`}
      ></div>
      <div
        className={`hex-side hex-side-bottom-right ${animationClasses[3]}`}
      ></div>
      <div className={`hex-side hex-side-left ${animationClasses[4]}`}></div>
      <div className={`hex-side hex-side-right ${animationClasses[5]}`}></div>
      {showLogo && (
        <div className="logo-container">
          <img src="/chainlink-logo.png" className="logo" />
        </div>
      )}
      <style jsx>{`
        .hexagon {
          position: relative;
          width: 250px;
          height: 250px;
        }

        .hex-side {
          position: absolute;
          width: 20%;
          height: 20%;
          background: url("/chainlink-element.png") no-repeat center center;
          background-size: cover;
        }

        .hex-side-bottom-left {
          top: 0;
          left: 0;
        }

        .hex-side-top-left {
          top: 0;
          left: 0;
          transform: rotate(120deg);
        }

        .hex-side-top-right {
          top: 0;
          left: 0;
          transform: rotate(180deg);
        }

        .hex-side-bottom-right {
          top: 0;
          left: 0;
          transform: rotate(-60deg);
        }

        .hex-side-left {
          top: 0;
          left: 0;
          transform: rotate(60deg);
        }

        .hex-side-right {
          top: 0;
          left: 0;
          transform: rotate(240deg);
        }

        .fall-bottom-left {
          bottom: 0;
          right: 0;
          animation: fall-bottom-left 1.5s ease forwards;
        }

        @keyframes fall-bottom-left {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateY(1);
            opacity: 1;
          }
        }

        .fall-top-left {
          top: 0;
          right: 0;
          animation: fall-top-left 1.5s ease forwards;
        }

        @keyframes fall-top-left {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateY(1);
            opacity: 1;
          }
        }

        .fall-top-right {
          bottom: 0;
          left: 0;
          animation: fall-top-right 1.5s ease forwards;
        }

        @keyframes fall-top-right {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(1);
            opacity: 1;
          }
        }

        .fall-bottom-right {
          top: 1;
          left: 1;
          animation: fall-bottom-right 1.5s ease forwards;
        }

        @keyframes fall-bottom-right {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(1);
            opacity: 1;
          }
        }

        .fall-right {
          bottom: 0;
          left: 0;
          animation: fall-right 1.5s ease forwards;
        }

        @keyframes fall-right {
          from {
            transform: translateY(0);
            opacity: 0;
          }
          to {
            transform: translateY(1);
            opacity: 1;
          }
        }

        .fall-left {
          bottom: 0;
          left: 0;
          animation: fall-left 1.5s ease forwards;
        }

        @keyframes fall-left {
          from {
            transform: translateY(0);
            opacity: 0;
          }
          to {
            transform: translateY(1);
            opacity: 1;
          }
        }

        .logo-container {
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: show-logo 1.5s ease forwards;
        }

        .logo {
        }

        @keyframes show-logo {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  );
};
