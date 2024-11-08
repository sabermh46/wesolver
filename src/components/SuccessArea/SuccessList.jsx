import React from "react";
import SuccessListItem from "./SuccessListItem";

const SuccessList = () => {
  const success_list_items = [
    {
      src: "/img/icon/success_icon01.png",
      title: "Web Development",
      percentage: 99,
    },
    {
      src: "/img/icon/success_icon02.png",
      title: "Software Solutions ",
      percentage: 86,
    },
    {
      src: "/img/icon/success_icon03.png",
      title: "App Development ",
      percentage: 95,
    },
    {
      src: "/img/icon/success_icon04.png",
      title: "Maintenance",
      percentage: 92,
    },
  ];

  return (
    <div className="success-list" style={{paddingTop: "20px" }}>
      <ul className="list-wrap">
        {success_list_items.map((x, index) => (
          <li key={index}>
            <SuccessListItem item={x} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessList;
