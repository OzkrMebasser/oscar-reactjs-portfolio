import React from "react";

const SkillsEarned = (props) => {
  return (
    <>
      <ul class="skillEarnedTags">
        <li className="skillEarnedTagsLi">
          <p className="tag">{props.skillsEarned}</p>
        </li>
      </ul>
    </>
  );
};

export default SkillsEarned;
