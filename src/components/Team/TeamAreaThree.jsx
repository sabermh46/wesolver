import React from "react";
import TeamAreaTwoItem from "./TeamAreaTwoItem";

const TeamAreaThree = () => {
  const team_members = [
    {
      src: "/img/team/Shujon.png",
      url: "/team-details",
      title: "MD. Shujon Morol",
      designation: "Co-founder and CEO",
    },
    {
      src: "/img/team/labib.png",
      url: "/team-details",
      title: "Sheikh Abu Backkar Siddiq",
      designation: "Co-founder and CTO",
    },
    {
      src: "/img/team/saber.jpg",
      url: "/team-details",
      title: "Saber Mahmud Sourav",
      designation: "Developer",
    },
    {
      src: "/img/team/sonjoy.jpg",
      url: "/team-details",
      title: "Roy Sonjoy",
      designation: "Developer",
    },
    {
      src: "/img/team/donial.jpg",
      url: "/team-details",
      title: "Donial tripura",
      designation: "Developer",
    },
    {
      src: "/img/team/sazu.png",
      url: "/team-details",
      title: "Ismile Hossain Sazu",
      designation: "Designer",
    },
  ];

  return (
    <section className="team-area-two pt-110 pb-100">
      <div className="container">
        <div className="myContainer">
          {team_members.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10 teamArea2FH">
              <TeamAreaTwoItem item={x} className="team-item-hover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAreaThree;
