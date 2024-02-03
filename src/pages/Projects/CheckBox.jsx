import { BsRocketTakeoff } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { BsCodeSquare } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi2";
import { RiEyeOffLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";



function CheckBox({ checked, onChecked, projectType }) {
    const [t] = useTranslation("global");
  
    let label;
    let icon;
    let typeClass;
  
    switch (projectType) {
      case "online":
        label = `${t("myProjects.online")}`;
        icon = <BsRocketTakeoff />;
        typeClass = "online";
        break;
      case "academic":
        label = "ACADEMIC";
        icon = <HiAcademicCap />;
        typeClass = "academic";
        break;
      case "development":
        label = "DEVELOPMENT";
        icon = <BsCodeSquare />;
        typeClass = "development";
        break;
      case "practice":
        label = "PRACTICE";
        icon = <TbTargetArrow />;
        typeClass = "blue";
        break;
      default:
        label = "OFFLINE";
        icon = <RiEyeOffLine />;
        typeClass = "blue"; 
    }
  
    return (
      <span onClick={onChecked}>
        <span className={`labelType ${typeClass}`}>{label}</span>
        <span className={`iconType ${typeClass}`}>{icon}</span>
      </span>
    );
  }
  

export default CheckBox