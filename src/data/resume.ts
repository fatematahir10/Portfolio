// Single source of truth for every piece of content on the site.
// Mirrors public/Fatima-Ali-Resume.docx. Keep the two in sync.

export const profile = {
  name: "Fatima Ali",
  role: "C# / .NET Desktop Engineer",
  location: "Riyadh, Saudi Arabia",
  email: "fatematahir96@gmail.com",
  phone: "+966 53 078 4328",
  years: "7",
  summary:
    "Results-driven C# / .NET developer with 7 years of experience across the full software development life cycle. I specialize in WPF and .NET Core desktop applications built on clean MVVM architecture, high-performance backend logic, and interfaces engineers actually want to use.",
  roles: ["C# Developer", ".NET Expert", "WPF / MVVM Specialist", "Desktop Systems Engineer"],
  links: {
    github: "https://github.com/fatematahir10",
    linkedin: "https://linkedin.com/in/fatematahir",
    stackoverflow: "https://stackoverflow.com/users/10075400/fatima-ali",
  },
  resume: "/Fatima-Ali-Resume.docx",
};

export const stats = [
  { value: "7", unit: "yrs", label: "Experience" },
  { value: "100", unit: "+", label: "Critical bugs resolved" },
  { value: "25", unit: "%", label: "Faster rendering" },
  { value: "2", unit: "×", label: "Shining Star Award" },
];

export type Experience = {
  id: string;
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  points: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    id: "nybl",
    company: "Nybl",
    location: "Remote",
    role: "Software Engineer",
    start: "Oct 2025",
    end: "Present",
    current: true,
    summary:
      "Building WPF desktop applications on a clean MVVM foundation, with a focus on real-time operational dashboards and reporting integrity.",
    points: [
      "Designed and developed WPF desktop applications using MVVM architecture, ensuring clean separation of concerns and maintainable codebases.",
      "Built dynamic dashboards and custom UserControls for real-time metrics such as visitor counts, queue analytics, and system alerts.",
      "Developed Excel and PDF export functionality for reports, ensuring accurate formatting and date handling for business use.",
      "Engineered robust data-normalization logic for complex DateTime conversions and culture-safe formatting across globally distributed databases (SQL Server / Cassandra), ensuring 100% data integrity in multi-region reports.",
      "Conducted comprehensive code reviews and technical documentation, enforcing SOLID principles and industry-standard design patterns.",
      "Participated in requirement analysis, bug fixing, and continuous enhancement of existing features.",
    ],
    tech: ["C#", "WPF", "MVVM", "SQL Server", "Cassandra"],
  },
  {
    id: "gearshift",
    company: "Gearshift Technologies Ltd",
    location: "Remote",
    role: "Software Engineer",
    start: "May 2023",
    end: "Aug 2025",
    summary:
      "Diagnostic software for automotive automatic transmissions, with real-time sensor visualization and low-latency data processing on production test equipment.",
    points: [
      "Engineered backend and UI enhancements for the core C# desktop application used to test and diagnose complex automotive automatic transmissions.",
      "Upgraded the user interface to provide intuitive, real-time visualization of diagnostic data for CAN-bus connected and Dual Shift Gearboxes (DSG).",
      "Optimized backend logic and multi-threading, significantly reducing latency when processing high-frequency sensor data to ensure highly accurate test results.",
      "Streamlined the application's architecture and resolved critical bugs, improving the overall reliability and speed of the testing equipment workflow.",
    ],
    tech: ["C#", ".NET", "Multithreading", "CAN Bus", "Real-Time Diagnostics"],
  },
  {
    id: "bentley-se1",
    company: "Bentley Systems",
    location: "Islamabad",
    role: "Software Engineer I",
    start: "Jan 2020",
    end: "May 2023",
    summary:
      "3D graphics and rendering work on OpenPlant Modeler, a commercial plant design and modeling suite built in C# and C++/CLI.",
    points: [
      "Developed 3D graphical components for OpenPlant Modeler, streamlining accurate and efficient plant design.",
      "Implemented dynamic rendering, integrating real-time rotation and drag functionalities.",
      "Enhanced OpenPlant Modeler by resolving 100+ critical bugs and implementing 15+ new features, leading to a 25% improvement in rendering speed and a 30% reduction in crashes.",
      "Contributed to a cutting-edge 3D Plant Design and Modeling application, streamlining complex engineering tasks in C# and C++/CLI.",
    ],
    tech: ["C#", "C++/CLI", "3D Graphics", "OpenPlant"],
  },
  {
    id: "tech-avenue",
    company: "Tech Avenue Pvt Ltd",
    location: "Islamabad",
    role: "Software Engineer",
    start: "Apr 2019",
    end: "Jan 2020",
    summary:
      "Computer vision systems for surveillance: real-time detection, recognition, and tracking pipelines.",
    points: [
      "Engineered a real-time Face Recognition & Detection system using Dlib, TensorFlow, and MTCNN in Python.",
      "Designed an advanced pedestrian tracking system, improving surveillance accuracy through innovative algorithms.",
    ],
    tech: ["Python", "Dlib", "TensorFlow", "MTCNN"],
  },
  {
    id: "bentley-intern",
    company: "Bentley Systems",
    location: "Islamabad",
    role: "Software Engineer Intern",
    start: "Jun 2018",
    end: "Feb 2019",
    summary:
      "Tooling for UI generation and reporting inside a large native C++ codebase.",
    points: [
      "Developed a ribbon serializer, dynamically generating UI components (ribbons, toolbars, application buttons) from XML using a DOM parser in MFC C++.",
      "Built a C# WinForm application to extract database information and generate custom Excel and text reports based on user-defined queries.",
    ],
    tech: ["C++", "MFC", "C#", "WinForms", "XML"],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  tech: string[];
  image: string;
  text: string;
  meta: string;
};

export const projects: Project[] = [
  {
    id: "wpf-suite",
    index: "P-01",
    title: "WPF Utilities Suite",
    tech: ["C#", "WPF", "Encryption", "WiX Toolset"],
    image: "project-wpf.svg",
    meta: "Enterprise desktop · MVVM",
    text: "A suite of WPF utilities built on MVVM architecture with encryption modules and multithreading for heavy data tasks. Packaged with a WiX installer for enterprise deployment.",
  },
  {
    id: "legacy",
    index: "P-02",
    title: "Legacy System Modernization",
    tech: ["C#", "C++/CLI", "SQLite", "OpenPlant"],
    image: "project-legacy.svg",
    meta: "CAD interoperability · 3D",
    text: "Revamped and maintained legacy desktop applications, fixing critical bugs, enhancing performance, integrating C++/CLI modules for CAD interoperability, and optimizing SQLite operations. Also authored the 3D graphics for parts used throughout the software.",
  },
  {
    id: "adblocker",
    index: "P-03",
    title: "Ad Blocking Tool",
    tech: ["C#", ".NET Framework", "WinForms", "Windows Services"],
    image: "project-adblocker.svg",
    meta: "System-wide filtering",
    text: "A multithreaded ad-blocking solution pairing a desktop UI with a Windows Service for system-wide filtering and continuous monitoring.",
  },
  {
    id: "face-recognition",
    index: "P-04",
    title: "Face Recognition AI",
    tech: ["Python", "Dlib", "TensorFlow", "MTCNN"],
    image: "project-face-recognition.svg",
    meta: "Computer vision · real-time",
    text: "Real-time face detection and recognition modules built on deep learning, optimized for cross-platform performance under live video load.",
  },
];

export const skills = [
  { id: "lang", label: "Languages", items: ["C#", "C++/CLI", "Python", "SQL"] },
  {
    id: "frameworks",
    label: "Frameworks & Technologies",
    items: [".NET Core", ".NET Framework", "WPF", "MVVM", "WinForms", "Windows Services", "MFC", "WiX Toolset"],
  },
  {
    id: "data",
    label: "Databases & Data",
    items: ["SQL Server", "Cassandra", "MySQL", "SQLite", "LINQ"],
  },
  { id: "vcs", label: "Version Control", items: ["Git", "SVN", "Mercurial"] },
];

export const awards = [
  {
    title: "Shining Star Award",
    detail: "Bentley Systems",
    period: "2021 & 2022",
  },
];

export const education = [
  {
    title: "BS Computer Science",
    detail: "University of the Punjab, Pakistan",
    period: "Sep 2014 - Jul 2018",
    note: "Thesis: An Automated Quiz System with Rule-Based Machine Learning [C#]",
  },
];

export const sections = [
  { id: "index", num: "00", label: "Index" },
  { id: "experience", num: "01", label: "Experience" },
  { id: "projects", num: "02", label: "Projects" },
  { id: "skills", num: "03", label: "Skills" },
  { id: "credentials", num: "04", label: "Credentials" },
  { id: "contact", num: "05", label: "Contact" },
];
