import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  projects: any = [
    {
      id: 1,
      title: "Choices",
      subtitle: "An app to challenge addiction",
      desc: `A cross-platform app for iOS, Android, Desktop and Web which help patients recover from drug and alcohol addiction.`,
      livedemo: "https://choicesnew-a0046.web.app/",
      githurl: "https://github.com/mehulk05/MyShop",
      mediumlink: "",
      imgUrl: "assets/images/z1.png",
      tech: "Ionic, Node, Angular, Firebase",
    },

    {
      id: 2,
      title: "COVID Hero",
      subtitle: "",
      desc: `An all-in-one app that keeps users up to date on the spread of Covid-19 while offering features like testing 
      locations, future prediction system, GPS hotzone tracker and crowd-sourced reviews for businesses on how COVID safe 
      they are`,
      livedemo: "https://covid-detection-37cda.web.app/",
      githurl: "https://github.com/Shree-git/covid-detection-team08/",
      mediumlink:
        "https://devpost.com/software/covid-hero-covid-detection-team-8/",
      imgUrl: "assets/images/z26.png",
      tech: "Ionic, Node, Angular, Firebase, R, Python, Google Maps API",
    },

    {
      id: 3,
      title: "COMPS",
      subtitle: "",
      desc: `A web-chat application which online teaching and learning easier for students, professors, and TAs`,
      livedemo: "https://comps-ea6c1.web.app/login-chat",
      githurl: "https://github.com/Shree-git/COMPS-Chat-Engine",
      mediumlink:
        "",
      imgUrl: "assets/images/z27.png",
      tech: "Angular, Node, Firebase",
    },
  ];
  about2 = `Software Developer with 2.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`;

  about =
    "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.";
  resumeurl =
    "https://drive.google.com/file/d/1h2WcqicqCEQcu2ZtG8HRQtimjRLcU0N_/view?usp=sharing";

  skillsData: any = [
    {
      id: "6",
      skill: "PYTHON, JAVA, C#, Ruby",
      progress: "80%",
    },
    {
      id: "1",
      skill: "ANGULAR",
      progress: "85%",
    },
    {
      id: "2",
      skill: "NODE JS, JAVASCRIPT",
      progress: "80%",
    },
    {
      id: "3",
      skill: "Ruby on Rails",
      progress: "80%",
    },
    {
      id: "4",
      skill: "SQL, MYSQL, MONOGODB, FIREBASE",
      progress: "75%",
    },
    {
      id: "5",
      skill: "REACT",
      progress: "75%",
    },
    {
      id: "7",
      skill: "AI, Machine Learning, Deep Learning, Neural Networks",
      progress: "65%",
    },
  ];

  educationData: any = [
    {
      id: "1",
      from_to_year: "2015 - 2019",
      education: "Bachelor's Degree",
      stream: "Bachelor of Engineering",
      info: `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.  
Won the Best Student Award 3 times for excellent Academic records at College. 
Maintained above 9.1 spi in every semester of college academic .`,
      institution: "ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD",
    },
    {
      id: "2",
      from_to_year: "2013 - 2015",
      education: "Higher Secondary",
      stream: "Science and Mathematics",
      institution: "GYANDEEEP VIDHYALAYA,AHMEDABAD",
      info: `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`,
    },
    {
      id: "3",
      from_to_year: "2012 - 2013",
      education: "Secondary  School",
      stream: "Science and Mathematics",
      institution: "GYANDEEEP VIDHYALAYA,AHMEDABAD",
      info: `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`,
    },
  ];
  exprienceData: any = [
    {
      id: 5,
      company: "Woven",
      location: "Indianapolis, IN (Remote)",
      timeline: "June 2021 - Aug 2021",
      role: "Software Engineering Intern",
      work: `Used React and Ruby on Rails to maintain a full-stack application which helped over 30 customers make their hiring process efficient and find hidden gems within a pool of applicants.
      Assisted in the process of increasing the company’s annual ARR by 116% and 3x its revenue`,
    },
    {
      id: 4,
      company: "Techpoint",
      location: "Indianapolis, IN (Remote)",
      timeline: "June 2020 - July 2020",
      role: "Software Engineering S.O.S. Challenge Intern",
      work: `Worked as a project manager and software developer on a multi-disciplinary team to create a solution for the challenges faced during COVID-19 pandemic. Won the ‘Fan Favorite’ award.
      Built features like self-assessment test, testing locations, daily COVID updates, prediction system, GPS hotzone tracker and crowd-sourced reviews for businesses on how COVID safe they are.`,
    },

    {
      id: 3,
      company: "Valparaiso University",
      location: "Valparaiso, IN",
      timeline: "Aug 2019 - Present",
      role: "Ambassador in Admissions",
      work: `Give tour of the University to prospective students and families.
      Phone prospective students and guide them through their college search process.`,
    },

    {
      id: 2,
      company: "Valparaiso University",
      location: "Valparaiso, IN",
      timeline: "Aug 2020 - Present",
      role: "Teaching Assistant (TA)",
      work: `Assist the professor with the course and hold office hours to work one-on-one with students`,
    },

    {
      id: 1,
      company: "Duesenberg Welcome Center",
      location: "Valparaiso, IN",
      timeline: "Aug 2019 - Present",
      role: "Front Desk Attendant",
      work: `Coordinate tour guides and the prospective families for the campus tour and provide customer support`,
    },
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
