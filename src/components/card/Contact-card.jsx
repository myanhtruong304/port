import React from "react";

function ContactCard() {
  const socialMedia = [
    {
      icon: "fa-facebook",
      color: "#3B5998",
      link: "https://www.facebook.com/HelloMyAnh/",
    },
    {
      icon: "fa-linkedin",
      color: "#0077B5",
      link: "https://www.linkedin.com/in/anne-n-bb440116a/",
    },
    {
      icon: "fa-github",
      color: "#000000",
      link: "https://github.com/myanhtruong304",
    },
    { icon: "fa-telegram", color: "#0088cc", link: "https://t.me/myanh0105" },
  ];

  return (
    <div className="card-container">
      <div className="card border-dark contact-card">
        <div className="card-body">
          <h1 className="card-title">
            Automating boring and repetitive tasks is my motto. 🦭 🇻🇳
          </h1>
          <div className="contact-group">
            <a className="card-link buzzme" href="https://t.me/myanh0105">
              Buzz me
            </a>

            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={`fa-brands ${item.icon} fa-bounce fa-2xl`}
                  style={{ color: item.color }}
                ></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
