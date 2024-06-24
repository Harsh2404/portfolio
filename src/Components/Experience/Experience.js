import Subtitle from "../../UI/Subtitle/Subtitle";
import TagBar from "../../UI/TagBar/TagBar";
import classes from "./Experience.module.css";
import ExperienceBlock from "./ExperienceBlock/ExperienceBlock";
import consultarer from "../../assets/consultarer-logo.png";
import uofg from "../../assets/uofg.png";
import ineuron from "../../assets/ineuron.png";

const Experience = (props) => {
  const ExperienceList = [
    {
      logo: consultarer,
      content: {
        title: "Software Developer",
        info: "Working with startup to develop Minimum Viable Product (MVP), a web portal named Consultarer leveraging PHP Laravel for backend development and React for the frontend. "+
        "<li>Collaborated with the Payments team to design and implement secure payment processing systems, including transaction management, billing, dispute resolution, and payouts using Stripe Connect."+
        "<li>Assisted the core team in containerizing the application using Docker, enhancing deployment efficiency and scalability. Documented the entire process for future reference and team onboarding..",
      },
      year: "May 2024 - Present"
    },
    {
      logo: uofg,
      content: {
        title: "Teaching Assistant",
        info: "Held the role of an Undergraduate Teaching Assistant for the course CIS 2030: Structure and Application of Microprocessor and CIS 2130: Web Development at the university."+
        "<li>Conducted regular tutorials and lab sessions, providing hands-on guidance and instruction to students on microprocessor architecture, assembly language programming, and interfacing techniques."+
        "<li>Assisted students in understanding complex concepts related to microprocessors, including instruction sets, memory organization, input/output operations, and interrupt handling."+
        "<li>Reviewed and graded student assignments, quizzes, and exams, providing constructive feedback and helping students identify areas of improvement."+
        "<li>Held office hours and one-on-one sessions to address individual student queries, offering tailored assistance and fostering a supportive learning environment.",
      },
      year: "Mar 2023 - Jan 2024"
    },
    {
        logo: uofg,
        content: {
          title: "Research Assistant",
          


          info: "Participated in a research project under Dr. Shawki Areibi at Lab 2314, focusing on enhancing FPGA placement using computer vision techniques applied to GPLACE 3.0."+
          "<li>Conducted a comprehensive literature review on object detection models, assessing their strengths and weaknesses for FPGA cluster placement optimization."+
          "<li>Developed and implemented object detection algorithms like RCNN, Fast-RCNN, Faster-RCNN, and YOLO using TensorFlow and PyTorch to analyze thermal images of FPGA."+
          "<li> Utilized these algorithms to detect and delineate heating clusters within FPGA thermal images by drawing bounding boxes.",
        },
        year: "Mar 2023 - Aug 2023"
      },
      {
        logo: ineuron,
        content: {
          title: "Software Developer",
          info: "Integrated Government Tax Filling API and Payment Gateway(Razorpay), which enabled tax filing easier for users."+
"<li>Created a dashboard that provided users with complete information about the details of the tax filing document, and guidelines to follow on each step that allowed them to manage their taxes more conveniently. Additionally, integrated CA(Chartered Accountant)support through the Zoom video call feature.",
        },
        year: "June 2021 - Jan 2022"
      },
  ];
  return (
    <div className={classes.Experience} id="Experience">
      <div className={classes.ExperienceContainer}>
        <TagBar tagText="Experience" />
        <Subtitle subtitle="Here is a quick summary of my most recent experiences:" />
        {ExperienceList.map((expList, index)=>(<ExperienceBlock key={index} expList={expList}/>))}
      </div>
    </div>
  );
};

export default Experience;
