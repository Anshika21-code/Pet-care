import React from "react";
import "./inspiration.css";

export default function KindredBanner() {
  return (
    <>
      <div className="banner-container">
        <div className="floating-elements">
          <div className="floating-paw">🐾</div>
          <div className="floating-paw">🐾</div>
          <div className="floating-paw">🐾</div>
        </div>

        <h1 className="title">Waggy Tails</h1>
        <h2 className="subtitle">Community</h2>

        <div className="cat-container">
          <svg
            className="cat-svg"
            viewBox="0 0 200 160"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cat tail */}
            <g className="cat-tail">
              <path
                d="M15 80 Q5 70 10 50 Q15 30 25 35 Q30 40 25 50 Q20 65 30 75"
                fill="#e0e0e0"
                stroke="#999"
                strokeWidth="1"
              />
              <path
                d="M16 78 Q8 68 12 52 Q16 36 23 38 Q26 42 23 50 Q20 63 27 73"
                fill="#f5f5f5"
              />
            </g>

            {/* Cat body */}
            <ellipse
              cx="100"
              cy="100"
              rx="45"
              ry="35"
              fill="#e0e0e0"
              stroke="#999"
              strokeWidth="1"
            />
            <ellipse cx="100" cy="100" rx="40" ry="30" fill="#f5f5f5" />

            {/* Cat stripes on body */}
            <path
              d="M70 85 Q100 80 130 85"
              stroke="#ccc"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M75 95 Q100 90 125 95"
              stroke="#ccc"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M80 105 Q100 100 120 105"
              stroke="#ccc"
              strokeWidth="2"
              fill="none"
            />

            {/* Cat head */}
            <g className="cat-head">
              <circle
                cx="100"
                cy="60"
                r="30"
                fill="#e0e0e0"
                stroke="#999"
                strokeWidth="1"
              />
              <circle cx="100" cy="60" r="27" fill="#f5f5f5" />

              {/* Cat ears */}
              <g className="cat-ears">
                <path
                  d="M80 45 L85 25 L95 40 Z"
                  fill="#e0e0e0"
                  stroke="#999"
                  strokeWidth="1"
                />
                <path
                  d="M105 40 L115 25 L120 45 Z"
                  fill="#e0e0e0"
                  stroke="#999"
                  strokeWidth="1"
                />
                <path d="M82 42 L87 30 L92 42 Z" fill="#ffb6c1" />
                <path d="M108 42 L113 30 L118 42 Z" fill="#ffb6c1" />
              </g>

              {/* Cat eyes */}
              <g className="cat-eyes">
                <ellipse cx="90" cy="55" rx="6" ry="8" fill="#4a90e2" />
                <ellipse cx="110" cy="55" rx="6" ry="8" fill="#4a90e2" />
                <ellipse cx="90" cy="55" rx="3" ry="6" fill="#000" />
                <ellipse cx="110" cy="55" rx="3" ry="6" fill="#000" />
                <ellipse cx="91" cy="53" rx="1" ry="2" fill="#fff" />
                <ellipse cx="111" cy="53" rx="1" ry="2" fill="#fff" />
              </g>

              {/* Cat nose */}
              <path d="M98 65 L102 65 L100 68 Z" fill="#ffb6c1" />

              {/* Cat mouth */}
              <path
                d="M100 68 Q95 72 90 70"
                stroke="#999"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M100 68 Q105 72 110 70"
                stroke="#999"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Cat whiskers */}
              <g className="cat-whiskers">
                <line x1="70" y1="62" x2="85" y2="60" stroke="#666" strokeWidth="1" />
                <line x1="70" y1="67" x2="85" y2="67" stroke="#666" strokeWidth="1" />
                <line x1="115" y1="60" x2="130" y2="62" stroke="#666" strokeWidth="1" />
                <line x1="115" y1="67" x2="130" y2="67" stroke="#666" strokeWidth="1" />
              </g>
            </g>

            {/* Cat legs */}
            <ellipse cx="80" cy="125" rx="8" ry="15" fill="#e0e0e0" />
            <ellipse cx="95" cy="125" rx="8" ry="15" fill="#e0e0e0" />
            <ellipse cx="105" cy="125" rx="8" ry="15" fill="#e0e0e0" />
            <ellipse cx="120" cy="125" rx="8" ry="15" fill="#e0e0e0" />

            {/* Cat paws */}
            <ellipse cx="80" cy="138" rx="10" ry="6" fill="#ddd" />
            <ellipse cx="95" cy="138" rx="10" ry="6" fill="#ddd" />
            <ellipse cx="105" cy="138" rx="10" ry="6" fill="#ddd" />
            <ellipse cx="120" cy="138" rx="10" ry="6" fill="#ddd" />
          </svg>
        </div>

        <button className="cta-button">Welcome to Family</button>
      </div>

      <div className="content-section">
        <div className="content-text">
          <p>
            Remember the first night you brought your pet home? The way they looked so small and maybe a little scared, 
            and you promised them you'd figure this whole thing out together? We all have that story. We also have the 3 AM
            panic attacks when they wouldn't eat, the tears when they got sick, and those perfect quiet moments when they curl
            up next to you and everything feels right in the world.

          </p>
        </div>
        <div className="content-text">
          <p>
            This isn't just about vet visits and training tips – though we've got plenty of both.
            This is about the people who get why you rearrange your entire life around a nap schedule,
            why you talk to your pets like they understand every word (spoiler: they probably do), and why 
            coming home to that wagging tail or purring welcome is honestly the best part of most days.
          </p>
        </div>
      </div>
    </>
  );
}
