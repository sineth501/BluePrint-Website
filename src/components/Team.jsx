import React from "react";

export const Team = () => {
  const teamMembers = [
    {
      name: "Rishara Siriwardhana",
      job: "Backend Developer / Project Manager",
      img: "/img/team/01.jpg",
      linkedin: "https://www.linkedin.com/in/rishara-siriwardhana"
    },
    {
      name: "Induwara Jayakody",
      job: "Frontend Developer / Backend Developer",
      img: "/img/team/02.jpg",
      linkedin: "https://www.linkedin.com/in/induwara-jayakody"
    },
    {
      name: "Sineth Wickramarachchi",
      job: "Web Developer / Frontend Developer",
      img: "/img/team/03.jpg",
      linkedin: "https://www.linkedin.com/in/sineth-wickramarachchi-b45b11292/"
    },
    {
      name: "Supundi Gooneratne",
      job: "Web Developer / Backend Developer",
      img: "/img/team/04.jpg",
      linkedin: "https://www.linkedin.com/in/supundi-dinaya-gooneratna-091346282/"
    },
    {
      name: "Roshan Irugalbandara",
      job: "UI / UX Designer",
      img: "/img/team/05.jpg",
      linkedin: "https://www.linkedin.com/in/roshan-irugalbandara"
    },
    {
      name: "Pramudith Kothalawala",
      job: "UI / UX Designer",
      img: "/img/team/06.jpg",
      linkedin: "https://www.linkedin.com/in/pramudith-kothalawala"
    }
  ];

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 section-title">
            <h2>Meet the Team</h2>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, i) => (
            <div key={`${member.name}-${i}`} className="col-md-4 col-sm-6 team">
              <div className="thumbnail">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="team-img" 
                  style={{ width: "250px", height: "250px", objectFit: "cover" }}
                />
                <div className="caption">
                  <h4>{member.name}</h4>
                  <p>{member.job}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/img/LinkedIn.jpg" 
                      alt="LinkedIn" 
                      style={{ width: "24px", height: "24px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};