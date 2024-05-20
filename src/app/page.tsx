"use client";
import React, { useState, useEffect } from "react";

const Hexagon = () => {
  const [animationClasses, setAnimationClasses] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    setTimeout(() => {
      setAnimationClasses([
        "fall-bottom-left",
        "fall-top-left",
        "fall-top-right",
        "fall-bottom-right",
        "fall-left",
        "fall-right",
      ]);
    }, 100);
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
      <style jsx>{`
        .hexagon {
          position: relative;
          width: 100px;
          height: 100px;
        }

        .hex-side {
          position: absolute;
          width: 50%;
          height: 50%;
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
          animation: fall-bottom-left 0.5s ease forwards;
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
          animation: fall-top-left 0.5s ease forwards;
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
          animation: fall-top-right 0.5s ease forwards;
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
          animation: fall-bottom-right 0.5s ease forwards;
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
          animation: fall-right 0.5s ease forwards;
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
          animation: fall-left 0.5s ease forwards;
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
      `}</style>
    </div>
  );
};

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-2 bg-transparent w-full"
      style={{ padding: "calc(2rem + 1px)", zIndex: -1 }}
    >
      <Hexagon />
    </main>
  );
}
