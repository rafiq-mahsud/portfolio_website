import React from "react";
import ReactDOM from "react-dom";
import { data } from "./Data";
import "../src/Style.css";

function App() {
  return (
    <div className="wrapper">
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <aside
          style={{
            flexShrink: 0,
    width: "200px",
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#f2f2f2",
    padding: "20px",
    background: "linear-gradient(30deg, #75EAD5, #ABB7E4)"
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <li style={{ padding: "20px 0" }}>
              <a
                style={{
                  textDecoration: "none",
                  padding: "20px 0",
                  fontFamily: "Verdana",
                  fontSize: "24px",
                  color: "#30302e",
                }}
                href="#Introduction"
              >
                Introduction
              </a>
            </li>
            <li style={{ padding: "20px 0" }}>
              <a
                style={{
                  textDecoration: "none",
                  padding: "20px 0",
                  fontFamily: "Verdana",
                  fontSize: "24px",
                  color: "#30302e",
                }}
                href="#Education"
              >
                Education
              </a>
            </li>
            <li style={{ padding: "20px 0" }}>
              <a
                style={{
                  textDecoration: "none",
                  padding: "20px 0",
                  fontFamily: "Verdana",
                  fontSize: "24px",
                  color: "#30302e",
                }}
                href="#Skills"
              >
                Skills
              </a>
            </li>
            <li style={{ padding: "20px 0" }}>
              <a
                style={{
                  textDecoration: "none",
                  padding: "20px 0",
                  fontFamily: "Verdana",
                  fontSize: "24px",
                  color: "#30302e",
                }}
                href="#Experience"
              >
                Experience
              </a>
            </li>
            <li style={{ padding: "20px 0" }}>
              <a
                style={{
                  textDecoration: "none",
                  padding: "20px 0",
                  fontFamily: "Verdana",
                  fontSize: "24px",
                  color: "#30302e",
                }}
                href="#Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </aside>
      </div>
      <main
        className="content"
        style={{ marginLeft: '225px',
        background: "linear-gradient(30deg, #75EAD5, #ABB7E4)",
        }}
      >
        <p id="Introduction">
          <div>
            <h2
              style={{
                fontFamily: "Arial",
                fontSize: "32px",
                color: "#30302e",
              }}
            >
              Introduction
            </h2>
            <div
              style={{
                background: "linear-gradient(30deg, #75EAD5, #ABB7E4)",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                animation: "fade-in 1s ease",
              }}
            >
              <img
                src={data.introduction.profilePicture}
                alt="pic"
                style={{
                  width: "200px",
                  borderRadius: "10%",
                  marginRight: "20px",
                  animation: "slide-left 1s ease",
                }}
              />
              <div>
                <h3
                  style={{
                    fontFamily: "Verdana",
                    fontSize: "24px",
                    color: "#30302e",
                  }}
                >
                  {data.introduction.name}
                </h3>
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "18px",
                    color: "#30302e",
                  }}
                >
                  {data.introduction.title}
                </p>
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "16px",
                    color: "#30302e",
                  }}
                >
                  {data.introduction.summary}
                </p>
              </div>
            </div>
          </div>
        </p>

        <p id="Education">
          <div>
            <h2
              style={{
                fontFamily: "Arial",
                fontSize: "32px",
                color: "#30302e",
              }}
            >
              {data.educationCertificate.title}
            </h2>
            <div
              style={{
                background: "linear-gradient(30deg, #75EAD5, #ABB7E4)",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                animation: "fade-in 1s ease",
              }}
            >
              <ul
                style={{
                  listStyleType: "disc",
                  fontFamily: "Arial",
                  fontSize: "18px",
                }}
              >
                {data.educationCertificate.list.map((item, index) => (
                  <li key={index}>
                    <h3
                      style={{
                        fontFamily: "Verdana",
                        fontSize: "24px",
                        color: "#30302e",
                      }}
                    >
                      {item.school}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#30302e",
                      }}
                    >
                      {item.location}
                    </p>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#30302e",
                      }}
                    >
                      {item.degree}
                    </p>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </p>

        <p id="Skills">
          <div>
            <h2
              style={{
                fontFamily: "Arial",
                fontSize: "32px",
                color: "#30302e",
              }}
            >
              {data.skills.title}
            </h2>
            <div
              style={{
                background: "linear-gradient(30deg, #75EAD5, #ABB7E4)",
                display: "flex",
                alignItems: "center",
                animation: "fade-in 1s ease",
              }}
            >
              <ul
                style={{
                  fontFamily: "Arial",
                  fontSize: "18px",
                  color: "#30302e",
                }}
              >
                {data.skills.list.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </p>

        <p id="Experience">
          <h2
            style={{
              fontFamily: "Arial",
              fontSize: "32px",
              color: "#30302e",
            }}
          >
            {data.experience.title}
          </h2>
          <div
            style={{
              background: "linear-gradient(30deg, #75EAD5, #ABB7E4)",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              animation: "fade-in 1s ease",
            }}
          >
            <ul
              style={{
                listStyleType: "disc",
                fontFamily: "Arial",
                fontSize: "18px",
              }}
            >
              {data.experience.list.map((item, index) => (
                <li key={index}>
                  <h3
                    style={{
                      fontFamily: "Verdana",
                      fontSize: "24px",
                      color: "#30302e",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Arial",
                      fontSize: "18px",
                      color: "#30302e",
                    }}
                  >
                    {item.type}
                  </p>
                  <p
                    style={{
                      fontFamily: "Arial",
                      fontSize: "18px",
                      color: "#30302e",
                    }}
                  >
                    {item.company}
                  </p>
                  <p
                    style={{
                      fontFamily: "Arial",
                      fontSize: "18px",
                      color: "#30302e",
                    }}
                  >
                    {item.location}
                  </p>
                  <p
                    style={{
                      fontFamily: "Arial",
                      fontSize: "18px",
                      color: "#30302e",
                    }}
                  >
                    {item.duration}
                  </p>
                  <ul
                    style={{
                      fontFamily: "Arial",
                      fontSize: "18px",
                      color: "#30302e",
                    }}
                  >
                    {item.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </p>

        <p id="Contact">
          <h2
            style={{
              fontFamily: "Arial",
              fontSize: "32px",
              color: "#30302e",
            }}
          >
            Contact
          </h2>
          <div
            style={{
              background: "linear-gradient(30deg, #75EAD5, #ABB7E4)",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              animation: "fade-in 1s ease",
            }}
          >
            <ul
              style={{
                fontFamily: "Arial",
                fontSize: "18px",
                color: "#30302e",
              }}
            >
              <li>
                <h3
                  style={{
                    fontFamily: "Verdana",
                    fontSize: "24px",
                    color: "#30302e",
                  }}
                >
                  Email
                </h3>
                <p>example@example.com</p>
              </li>
              <li>
                <h3
                  style={{
                    fontFamily: "Verdana",
                    fontSize: "24px",
                    color: "#30302e",
                  }}
                >
                  Phone
                </h3>
                <p>+1 123 456 7890</p>
              </li>
            </ul>
          </div>
        </p>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
