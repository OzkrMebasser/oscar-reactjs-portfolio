import React from "react";

const SkillsEarned = (props) => {
  return (
    <>
      <ul className="skillEarnedTags">
        <li className="skillEarnedTagsLi">
          <p className="tag">{props.skillsEarned}</p>
        </li>
      </ul>
    </>
  );
};

export default SkillsEarned;
