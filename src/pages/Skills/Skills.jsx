import React, {useState, useEffect} from 'react'


const Skills = () => {

  const [hardSkills, setHardSkills] = useState();

  const getApiData = async () => {

    const response = await fetch("https://localhost:8080/src/Api/hardSkillsData.json")
      .then((response) => response.json());
  
    // update the state
    setHardSkills(response);

  };
  
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="container">
    
  {hardSkills &&
        hardSkills.map((user) => (
          <div className="item-container">
            Id:{user.id} <div className="title">Title:{user.title}</div>
          </div>
        ))}
        
    </div>
  )
}
export default Skills;