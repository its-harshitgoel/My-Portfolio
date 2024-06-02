import { FaPython, FaJs, FaHtml5, FaSlack, FaCss3Alt, FaLinux, FaUbuntu, FaGithub, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaJava, FaAws } from "react-icons/fa";
import { SiCanva, SiGooglecolab, SiDjango, SiSpringboot, SiMysql,SiLeetcode,SiInstagram, SiYoutube} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiAward, FiBriefcase } from "react-icons/fi";
import { RiGraduationCapLine,RiTwitterXFill, RiLinkedinBoxFill } from "react-icons/ri";
import { IoIosMail, IoIosCall, IoIosPin } from "react-icons/io";




export const CONTACT_INFO = [
    {
        icon: <IoIosMail />,
        text: 'its.harshitgoel@gmail.com'
    },
    {
        icon: <IoIosCall />,
        text: '+91 94513xxxxx'
    },
    {
        icon: <IoIosPin />,
        text: 'Bengaluru, India'
    }
];

export const skillsData = [
    { name: "Python", icon: <FaPython size="55px" /> },
    { name: "JavaScript", icon: <FaJs size="55px" /> },
    { name: "HTML", icon: <FaHtml5 size="55px" /> },
    { name: "CSS", icon: <FaCss3Alt size="55px" /> },
    { name: "React", icon: <FaReact size="55px" /> },
    { name: "Node.js", icon: <FaNodeJs size="55px" /> },
    { name: "Git", icon: <FaGitAlt size="55px" /> },
    { name: "Databases", icon: <FaDatabase size="55px" /> },
    { name: "Canva", icon: <SiCanva size="55px" /> },
    { name: "Java", icon: <FaJava size="55px" /> },
    { name: "AWS", icon: <FaAws size="55px" /> },
    { name: "GitHub", icon: <FaGithub size="55px" /> },
    { name: "Ubuntu", icon: <FaUbuntu size="55px" /> },
    { name: "Linux", icon: <FaLinux size="55px" /> },
    { name: "Slack", icon: <FaSlack size="55px" /> },
    { name: "VS Code", icon: <VscVscode size="55px" /> },
    { name: "Google Colab", icon: <SiGooglecolab size="55px" /> },
    { name: "Django", icon: <SiDjango size="55px" /> },
    { name: "Spring Boot", icon: <SiSpringboot size="55px" /> },
    { name: "MySQL", icon: <SiMysql size="55px" /> },
];



export const projectsData = [
    {
        title: "Portfolio Website",
        image: "my-portfolio",
        link: "",
        source: "https://github.com/its-harshitgoel/My-Portfolio",
        type: "WEB-APP"
    },

    {
        title: "Image Editor",
        image: "imgeditor",
        link: "",
        source: "https://github.com/its-harshitgoel/Image-Editor",
        type: "ALL"
    },
    {
        title: "Quiz App",
        image: "quiz",
        link: "https://quiz-app-harshit-goel.vercel.app/",
        source: "https://github.com/its-harshitgoel/Quiz-App",
        type: "WEB-APP"
    },
    {
        title: "Web Scrapper",
        image: "webscrapper",
        link: "",
        source: "https://github.com/its-harshitgoel/WebScrapper",
        type: "ALL"
    },
    {
        title: "Kanban Board",
        image: "kanban",
        link: "https://kanban-board-kj9ese096-harshit-goels-projects.vercel.app/",
        source: "https://github.com/its-harshitgoel/Kanban-Board",
        type: "WEB-APP"
    },
];

export const INFO_DATA = [
    {
        icon: <FiAward />,
        title: 'Experience',
        subtitle: 'Fresher'
    },
    {
        icon: <FiBriefcase />,
        title: 'Completed',
        subtitle: '5+ Projects'
    },
    {
        icon: <RiGraduationCapLine />,
        title: 'Education',
        subtitle: 'Scaler School Of Technology'
    }
];

export const SOCIAL_MEDIA_LINKS = [
    { name: 'Leetcode', link: 'https://leetcode.com/u/hashitgoel/', icon: <SiLeetcode/> },
    { name: 'Twitter', link: 'https://x.com/_chuckheaded', icon: <RiTwitterXFill/> },
    { name: 'Instagram', link: 'https://www.instagram.com/chuckheaded/', icon: <SiInstagram/> },
    { name: 'Github', link: 'https://github.com/its-harshitgoel', icon: <FaGithub/> },
    { name: 'YouTube', link: 'https://www.youtube.com/@harshitgoel7', icon: <SiYoutube/> },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/its-harshit-goel/', icon: <RiLinkedinBoxFill/> }
];
