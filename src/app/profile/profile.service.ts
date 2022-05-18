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
      githurl: "https://github.com/Shree-git/newChoices",
      blogLink: "",
      imgUrl: "assets/images/cs13.png",
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
      blogLink:
        "https://devpost.com/software/covid-hero-covid-detection-team-8/",
      imgUrl: "assets/images/ch11.png",
      tech: "Ionic, Node, Angular, Firebase, R, Python, Google Maps API",
    },

    {
      id: 3,
      title: "COMPS",
      subtitle: "Chat Engine",
      desc: `A web-chat application which makes online teaching and learning easier for students, professors, and TAs`,
      livedemo: "https://comps-ea6c1.web.app/login-chat",
      githurl: "https://github.com/Shree-git/COMPS-Chat-Engine",
      blogLink:
        "",
      imgUrl: "assets/images/cm.png",
      tech: "Angular, Typescript, Node, Firebase",
    },

    {
      id: 11,
      title: "AI Traveling Salesman",
      subtitle: "",
      desc: `A program which uses genetic algorithm to figure out the optimal solution to the Traveling Salesman Problem.`,
      livedemo: "",
      githurl: "https://github.com/Shree-git/AI-Traveling-Salesman",
      blogLink:
        "",
      imgUrl: "assets/images/tsp2.png",
      tech: "Python3, Tkinter",
    },

    {
      id: 4,
      title: "Paint Replica",
      subtitle: "",
      desc: `Utilized JavaFX library to develop under an aggressive schedule using UML and agile software development methods`,
      livedemo: "",
      githurl: "https://github.com/Shree-git/paint",
      blogLink:
        "",
      imgUrl: "assets/images/paint2.png",
      tech: "Java, JavaFX",
    },

    {
      id: 5,
      title: "Chess 3D",
      subtitle: "Mobile Game",
      desc: ``,
      livedemo: "https://drive.google.com/file/d/1ithRuxG-fqOlu2QxeOglITQnxJkOPYe_/view?usp=sharing",
      githurl: "https://github.com/Shree-git/Chess-3D/",
      blogLink:
        "",
      imgUrl: "assets/images/chess.jpeg",
      tech: "C#, Unity Game Engine, Blender",
    },

    {
      id: 6,
      title: "Match 3",
      subtitle: "Game",
      desc: ``,
      livedemo: "https://shree56.itch.io/match-3",
      githurl: "https://github.com/Shree-git/Match-3-Game",
      blogLink:
        "",
      imgUrl: "assets/images/match2.png",
      tech: "C#, Unity Game Engine, Adobe Photoshop, Adobe Illustrator",
    },

    {
      id: 13,
      title: "Automatic Number Plate Recognition",
      subtitle: "Image Processing AI",
      desc: `A Matlab program which detects the number plate of UK vehicles and extracts it`,
      livedemo: "",
      githurl: "https://github.com/Shree-git/Automatic-Number-Plate-Recognition",
      blogLink:
        "",
      imgUrl: "assets/images/q6.png",
      tech: "Matlab",
    },

    {
      id: 7,
      title: "Tic-Tac-Toe",
      subtitle: "Mobile Game",
      desc: ``,
      livedemo: "https://drive.google.com/file/d/11FndRv0QpWqHB0qlA8GTvxiC4I9Yi1Tt/view?usp=sharing",
      githurl: "https://github.com/Shree-git/tic-tac-toe",
      blogLink:
        "https://shree56.itch.io/shrees-tic-tac-toe",
      imgUrl: "assets/images/ttt2.jpeg",
      tech: "C#, Unity Game Engine",
    },

    {
      id: 8,
      title: "Time Jump",
      subtitle: "Game",
      desc: ``,
      livedemo: "https://shree56.itch.io/time-jump",
      githurl: "https://github.com/Shree-git/GamesPlusJam",
      blogLink:
        "",
      imgUrl: "assets/images/tj.png",
      tech: "C#, Unity Game Engine, Adobe Photoshop, FL Studio",
    },

    {
      id: 9,
      title: "Spooky Torch",
      subtitle: "Game",
      desc: ``,
      livedemo: "https://shree56.itch.io/spooky-torch",
      githurl: "",
      blogLink:
        "",
      imgUrl: "assets/images/spt3.png",
      tech: "C#, Unity Game Engine, Adobe Photoshop, FL Studio",
    },

    {
      id: 10,
      title: "Love or Math",
      subtitle: "Game",
      desc: ``,
      livedemo: "https://shree56.itch.io/love-or-math",
      githurl: "",
      blogLink:
        "",
      imgUrl: "assets/images/lom1.png",
      tech: "C#, Unity Game Engine, Adobe Photoshop, FL Studio",
    },

    {
      id: 12,
      title: "AI Konane",
      subtitle: "Game",
      desc: `A two-player strategy board game integrated with AI built with minimax with alpha-beta cutoffs and 
      a scoring function.`,
      livedemo: "",
      githurl: "https://github.com/Shree-git/AI-Konane-Game",
      blogLink:
        "",
      imgUrl: "assets/images/konane.png",
      tech: "Python3",
    },

    {
      id: 14,
      title: "Space Shooter",
      subtitle: "Multiplayer Game",
      desc: ``,
      livedemo: "",
      githurl: "https://github.com/Shree-git/Space-Shooter-Multiplayer",
      blogLink:
        "",
      imgUrl: "assets/images/space.png",
      tech: "C#, Unity Game Engine",
    },

    {
      id: 15,
      title: "Audio Player",
      subtitle: "",
      desc: ``,
      livedemo: "",
      githurl: "https://github.com/Shree-git/Audio-Player",
      blogLink:
        "",
      imgUrl: "assets/images/ap.png",
      tech: "Angular, Auth0",
    },

    {
      id: 16,
      title: "Social Media App",
      subtitle: "",
      desc: ``,
      livedemo: "",
      githurl: "https://github.com/Shree-git/social-media-app",
      blogLink:
        "",
      imgUrl: "assets/images/sm.jpeg",
      tech: "Ruby, Ruby on Rails, Express, Node",
    },
  ];
  about2 = `My skillsets are listed below:
  - Languages: Python, Java, C, C++ C#, Javascript, Ruby, Golang/Go
  - Artificial Intelligence: Machine Learning, Deep Learning, Fuzzy Logic, Genetic Algorithms, Computer Vision, Quantum Computing, High-Performance Computing
  - Game Development: Unity Game Engine, 2D and 3D games, Unreal Engine
  - Full Stack Development: Angular, Ionic/Angular, React, React Native, Vue, Ruby on Rails, Django, Flask, HTML, CSS, PHP, jQuery, Bootstrap
  - Databases: MySQL, MongoDB, Neo4j, Oracle PL/SQL, Google Cloud Platform/Firebase, AWS
  - Networking: MPLS, BGP, TCP/IP
  - Mobile Apps: Android Studio, XCode
  - Graphic Design: Adobe Photoshop, Adobe Illustrator, UI/UX
  - Music Production: FL Studio, Ableton Live`;

  about =
    "I'm a senior (graduating May 2022) Computer Science and Mathematics Major with a Business Administration Minor at Valparaiso University. I am looking for full-time/internship roles as a software engineer/developer, full-stack engineer, AI engineer, or game developer.";
  resumeurl =
    "https://drive.google.com/file/d/1h2WcqicqCEQcu2ZtG8HRQtimjRLcU0N_/view?usp=sharing";

  // skillsData: any = [
  //   {
  //     id: "6",
  //     skill: "PYTHON, JAVA, C#, Ruby",
  //     progress: "80%",
  //   },
  //   {
  //     id: "1",
  //     skill: "ANGULAR",
  //     progress: "85%",
  //   },
  //   {
  //     id: "2",
  //     skill: "NODE JS, JAVASCRIPT",
  //     progress: "80%",
  //   },
  //   {
  //     id: "3",
  //     skill: "Ruby on Rails",
  //     progress: "80%",
  //   },
  //   {
  //     id: "4",
  //     skill: "SQL, MYSQL, MONOGODB, FIREBASE",
  //     progress: "75%",
  //   },
  //   {
  //     id: "5",
  //     skill: "REACT",
  //     progress: "75%",
  //   },
  //   {
  //     id: "7",
  //     skill: "AI, Machine Learning, Deep Learning, Neural Networks",
  //     progress: "65%",
  //   },
  // ];

  skillsData: any = [
    {
      id: "1",
      title: "LANGUAGES",
      skills: [{
        name: "PYTHON",
        progress: "85%",
      },
      {
        name: "JAVA",
        progress: "80%",
      },
      {
        name: "C#",
        progress: "80%",
      },
      {
        name: "Javascript",
        progress: "85%",
      },
      {
        name: "Ruby",
        progress: "80%",
      },
      {
        name: "C++",
        progress: "65%",
      },
      {
        name: "Go",
        progress: "60%",
      },
      {
        name: "C",
        progress: "65%",
      }]
    },
    {
      id: "2",
      title: "AI",
      skills: [{
        name: "Deep Learning",
        progress: "80%",
      },
      {
        name: "Expert Systems",
        progress: "70%",
      },
      {
        name: "Computer Vision",
        progress: "65%",
      },
      {
        name: "Genetic Algorithms",
        progress: "75%",
      },
      {
        name: "Neural Networks",
        progress: "80%",
      },
      {
        name: "Fuzzy Logic",
        progress: "80%",
      },
      ]
    },
    {
      id: "3",
      title: "WEB DEV",
      skills: [{
        name: "Angular",
        progress: "90%",
      },
      {
        name: "React",
        progress: "75%",
      },
      {
        name: "HTML",
        progress: "90%",
      },
      {
        name: "CSS",
        progress: "85%",
      },
      {
        name: "Ruby on Rails",
        progress: "75%",
      },
      {
        name: "PHP",
        progress: "60%",
      },
      {
        name: "Django",
        progress: "55%",
      },
      {
        name: "Vue",
        progress: "45%",
      },
      {
        name: "UI/UX DESIGN",
        progress: "75%",
      },
      ]
    },
    {
      id: "4",
      title: "DATABASES",
      skills: [{
        name: "MYSQL",
        progress: "80%",
      },
      {
        name: "POSTGRESQL",
        progress: "80%",
      },
      {
        name: "MONGODB",
        progress: "60%",
      },
      {
        name: "FIREBASE",
        progress: "80%",
      },
      {
        name: "AWS",
        progress: "50%",
      },
      {
        name: "NEO4J",
        progress: "45%",
      },
      ]
    },
    {
      id: "5",
      title: "GAME DEV",
      skills: [{
        name: "UNITY ENGINE",
        progress: "90%",
      },
      {
        name: "UNREAL ENGINE",
        progress: "50%",
      },
      {
        name: "GODOT",
        progress: "50%",
      },
      ]
    },
    {
      id: "6",
      title: "MISC",
      skills: [
        {
          name: "LEADERSHIP",
          progress: "85%",
        },
        {
          name: "COLLABORATION",
          progress: "80%",
        },
        {
          name: "COMMUNICATION",
          progress: "85%",
        },
        {
          name: "ADOBE PHOTOSHOP",
          progress: "80%",
        },
        {
          name: "ADOBE ILLUSTRATOR",
          progress: "60%",
        },
        {
          name: "ANDROID STUDIO",
          progress: "60%",
        },
        {
          name: "PROJECT MANAGEMENT",
          progress: "70%",
        },
        {
          name: "QUANTUM COMPUTING",
          progress: "60%",
        },
      ]
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
      Assisted in the process of increasing the company’s annual ARR by 116% and 3x its revenue.`,
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
      timeline: "Aug 2019 - Mar 2022",
      role: "Ambassador in Admissions",
      work: `Gave a tour of the University to prospective students and families.
      Phoned prospective students and guided them through their college search process.`,
    },

    {
      id: 2,
      company: "Valparaiso University",
      location: "Valparaiso, IN",
      timeline: "Aug 2020 - May 2022",
      role: "Teaching Assistant (TA)",
      work: `Assisted the professor with the course and held office hours to work one-on-one with students.`,
    },

    {
      id: 1,
      company: "Duesenberg Welcome Center",
      location: "Valparaiso, IN",
      timeline: "Aug 2019 - Mar 2022",
      role: "Front Desk Attendant",
      work: `Coordinated tour guides and the prospective families for the campus tour and provided customer support.`,
    },
  ];

  leadershipData: any = [
    {
      id: 1,
      organization: "Valparaiso International Students Association",
      location: "Valparaiso, IN",
      timeline: "July 2020 - May 2021",
      role: "President",
      work: `Oversaw all executive members and organized events such as World Banquet and Cultural Nights among others.
      Represented international students and promoted diversity/inclusion in the university.`,
    },
    {
      id: 2,
      organization: "Association of Computing Machinery (ACM)",
      location: "Valparaiso, IN",
      timeline: "Aug 2020 - Dec 2021",
      role: "Vice President",
      work: `Coordinated events such as Hackathons, coding interview preps, among others.
      Brought in speakers to talk about Computer Science and its applications in the world.`,
    },
    {
      id: 3,
      organization: "TEDx",
      location: "Valparaiso, IN",
      timeline: "Jan 2020",
      role: "Speaker",
      work: `Gave a TEDx talk titled: Ten Days of Finding Myself.
      Link: shorturl.at/nxzLW`,
    },
    {
      id: 4,
      organization: "Valparaiso University",
      location: "Valparaiso, IN",
      timeline: "Aug 2020 - May 2021",
      role: "At-Large Senator",
      work: `Advocated for the students and wrote legislations to help the whole at-large student body on campus.
      Served in the Administration Committee overseeing the approval of new student organizations.`,
    },
    {
      id: 5,
      organization: "Nepal Cube Association",
      location: "Kathmandu, Nepal",
      timeline: "Jan 2016 - July 2018",
      role: "Co-Founder",
      work: `Co-started the Nepal Cube Association with 5 people and established cubing as a sport in Nepal.`,
    },
  ];

  honorsData: any = [
    {
      id: 5,
      name: 'Outstanding Leadership and Service Award',
      date: '2022',
    },
    {
      id: 6,
      name: 'Outstanding International Undergraduate Student',
      date: '2022',
    },
    {
      id: 7,
      name: 'Outstanding Student Service Award',
      date: '2022',
    },
    {
      id: 1,
      name: 'Kermit H. Carlson Memorial Award',
      date: '2021',
    },
    {
      id: 2,
      name: 'Dr. Hugh McGuigan Award',
      date: '2021',
    },
    {
      id: 3,
      name: 'Valparaiso University Presidential Scholarship',
      date: '2019 - Present',
    },
    {
      id: 4,
      name: 'Dean’s List',
      date: '2019, 2020, 2021',
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

  experience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  leadershipExp(): Observable<any>{
    return this.leadershipData;
  }

  getHonors(): Observable<any>{
    return this.honorsData;
  }
}
