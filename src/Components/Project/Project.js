import classes from "./Project.module.css";
import TagBar from "../../UI/TagBar/TagBar";
import Subtitle from "../../UI/Subtitle/Subtitle";
import Projectimg from "../../assets/project-img.png";
import ProjectBlock from "./ProjectBlock/projectBlock";

const projectList = [
  {
    logo: Projectimg,
    content: {
      title: "Water Quality Analysis of Indian river",
      info: "Implemented water quality prediction of 15 Indian rivers using big data analysis and machine learning."+
      "Utilized Apache Hadoop and Apache Spark for scalable data processing. Employed time series analysis and regression techniques like Linear Regression, Random Forest, and Gradient Boosting for accurate water quality forecasting.",
      tags: "Data Visualization, Data Cleaning, Statistics, Hadoop, Scala, PostgreSQL",
      link: "https://github.com/Harsh2404/WaterQualityPred-SparkML",
    },
  },
  
  {
    logo: Projectimg,
    content: {
      title: "Action Recognition using Computer vision Techniques",
      info: "Developed an action recognition system utilizing computer vision techniques and machine learning algorithms. Leveraged state-of-the-art deep learning frameworks such as TensorFlow and PyTorch for model training and inference. Implemented feature extraction using optical flow and convolutional neural networks (CNNs), 3n based on a series of frames. Achieved an accuracy of 85%, performing similarly to benchmark methods.",
      tags: "LSTM, Image Processing, Image Analysis, 3D CNN",
      link: "https://github.com/Harsh2404/HumanActionRecognition",
    },
  },
  {
    logo: Projectimg,
    content: {
      title: "Consultarer - Freelance Job Portal",
      info: "Working with startup to develop Minimum Viable Product (MVP), a web portal named Consultarer leveraging PHP Laravel for backend development and React for the frontend. Integrated Stripe for secure payment processing and transaction management. Implemented features for job posting, application management, and user profiles.",
      tags: "PHP, Laravel, MySQL, React Js, Stripe API, Chakra UI, Git, Agile Methodology",
      link: "https://consultarer.com/",
    },
  },
];

const Project = (props) => {
  return (
    <div className={classes.project} id="Projects">
      <div className={classes.projectContainer}>
        <TagBar tagText="Projects" />
        <Subtitle subtitle="Some of the noteworthy projects I have built:" />
        {projectList.map((project, index) => {
          if (index % 2)
            return <ProjectBlock key={index} project={project} even={true} />;
          return <ProjectBlock key={index} project={project} even={false} />;
        })}
      </div>
    </div>
  );
};
export default Project;
