export const projects = [
  // Love Link website
  {
    slug: "NewLoveLink",
    title: "Matrimonial Website",
    image: "/images/lovek.png",

    client: "Paid",

    // SHORT OVERVIEW
    objective:
      "LoveLink is a fully-featured matrimonial website built with React, Tailwind CSS, and Firebase. The platform includes user registration, profile creation and viewing, chat functionality, and intelligent match-finding, providing a complete experience for users seeking meaningful connections.",

    // PROBLEM STATEMENT
    problem:
      "Many users seeking matrimonial connections struggle with incomplete or unorganized platforms that lack real-time communication, detailed profiles, and personalized match suggestions.",

    // SOLUTION / APPROACH
    solution:
      "The project was built with React for a responsive frontend, Tailwind CSS for modern styling, and Firebase for authentication, database, and real-time chat. Users can create and update profiles, view other profiles, chat securely, and find matches based on preferences. The platform includes over 15 fully designed pages for a comprehensive user experience.",

    tech: ["React", "Tailwind CSS", "Firebase"],

    features: [
      "User registration and authentication with Firebase",
      "Profile creation and detailed profile viewing",
      "Real-time chat between matched users",
      "Match-finding system based on user preferences",
      "Search and filter users by different criteria",
      "Fully responsive design for desktop and mobile",
      "Clean and modern UI using Tailwind CSS",
      "Over 15 functional pages including dashboard, profile, chat, and matches",
    ],

    // CHALLENGES & LEARNINGS
    challenges: [
      "Managing real-time updates and chat functionality using Firebase",
      "Designing a clean and scalable UI for multiple pages",
      "Handling authentication and secure user data",
      "Implementing efficient match-finding logic",
      "Ensuring responsiveness across devices and screen sizes",
    ],

    // FUTURE IMPROVEMENTS
    improvements: [
      "Add advanced search and filter options",
      "Integrate premium features for paid users",
      "Enhance AI-based match suggestions",
      "Add notifications and email alerts for messages and matches",
      "Improve performance and reduce page load times",
    ],

    code: "https://github.com/Lovekumar-10/NEW-LOVELINK",
    live: "https://new-lovelink.vercel.app/",
  },


  

  // "Fareeda Logistics Website"

  {
    slug: "FareedaLogistics",
    title: "Fareeda Logistics Website",
    image: "/images/lovek.png",
    client: " Paid",
    // SHORT OVERVIEW
    objective:
      "A modern, responsive logistics website built with React and Tailwind CSS. The site includes a hero section, contact form, embedded map, and social links, providing a professional and functional web presence for the logistics business.",

    // PROBLEM STATEMENT
    problem:
      "Small logistics businesses often lack a professional web presence to showcase their services and allow easy contact. Existing templates can be generic and may not provide integrated contact forms, maps, or social links.",

    // SOLUTION / APPROACH
    solution:
      "The website was designed and built with React and Tailwind CSS to be fully responsive. It features a contact hero, contact form integrated with EmailJS for direct messaging, an embedded Google Map showing the location, and social links for WhatsApp, Facebook, LinkedIn, and Instagram. CSS variables were used to maintain consistent styling.",

    tech: ["React", "Tailwind", "React Icons", "EmailJS", "Google Maps Embed"],

    features: [
      "Responsive Hero section with background image and decorative text",
      "Contact Form integrated with EmailJS for sending messages",
      "Embedded Google Map showing location",
      "Social links: WhatsApp (pre-filled message), Facebook, LinkedIn, Instagram",
      "Clean, modern UI with consistent colors and typography using CSS variables",
      "Fully responsive design for mobile and desktop",
    ],

    // CHALLENGES & LEARNINGS
    challenges: [
      "Ensuring a fully responsive layout across devices",
      "Integrating EmailJS for contact form functionality",
      "Embedding Google Map correctly for the business location",
      "Maintaining consistent styling using Tailwind and CSS variables",
      "Organizing components in a clean and reusable way",
    ],

    // FUTURE IMPROVEMENTS
    improvements: [
      "Add multi-language support",
      "Add live tracking for logistics updates",
      "Integrate analytics to track form submissions and user behavior",
      "Enhance SEO and performance optimizations",
      "Add animations and interactive elements for better engagement",
    ],

    code: "https://github.com/Lovekumar-10/FareedaLogistics",
    live: "https://www.fareedalogistics.com/",
  },




  // Map
  {
    slug: "TrackIt",
    title: "Map  Web-App",
    image: "/images/lovek.png",

    // SHORT OVERVIEW
    objective:
      "A full-stack interactive map application that lets users share their live location and find routes between two locations using Leaflet. It features real-time location sharing, route drawing, and a responsive UI built for practical navigation use.",

    // PROBLEM STATEMENT
    problem:
      "Most map applications are static or require external map services with high costs. Users need an intuitive interface to share live locations and find routes easily within a web app.",

    // SOLUTION / APPROACH
    solution:
      "Built using a Leaflet map integrated with React and a backend service, this application allows users to share their real-time location on the map and calculate routes by selecting starting and destination points. It uses interactive markers and polyline routing to show paths dynamically.",

    tech: [
      "React",
      "Tailwind CSS",
      "Leaflet",
      "Socket.io",
      "React-Leaflet",
      "Node.js",
      "Express.js",
    ],

    features: [
      "Share live location on an interactive map",
      "Find route between two selected locations",
      "Interactive markers and real-time updates",
      "Responsive map UI with Leaflet",
      "Custom routing logic with map visualization",
      "Clean, user-friendly design for practical use",
    ],

    // CHALLENGES & LEARNINGS
    challenges: [
      "Integrating Leaflet with React for map rendering",
      "Handling live location updates and syncing with backend",
      "Drawing dynamic routes and updating map state",
      "Ensuring responsive behavior across devices",
      "Managing map controls and user interactions smoothly",
    ],

    // FUTURE IMPROVEMENTS
    improvements: [
      "Add search/autocomplete for places",
      "Add user accounts and saved routes",
      "Add offline map caching",
      "Enhance route accuracy and speed optimization",
      "Add real-time communication with WebSockets",
    ],

    level: "Full Stack",
    code: "https://github.com/Lovekumar-10/MapFrontend",
    live: "https://map-frontend-mu.vercel.app/",
  },

  // Searh Engine
  {
    slug: "smart-search-engine",
    title: "Smart Search Engine",
    image: "/images/lovek.png",

    // SHORT OVERVIEW (for card + intro)
    objective:
      "I built this project to improve the way users interact with search results. Instead of only showing links, it focuses on giving clear summaries, AI-based explanations, and a more personalized search experience.",

    // PROBLEM STATEMENT
    problem:
      "While using traditional search engines, I noticed that results are often scattered across multiple platforms and important information is buried inside long content. There is very little personalization, and users usually spend more time understanding results than actually finding answers.",

    // SOLUTION / APPROACH
    solution:
      "To solve this, I created a single platform that combines multiple search sources and enhances them using AI. Users can chat with the system to get summaries or explanations and customize things like theme and language to make the experience more comfortable and useful.",

    tech: [
      "React",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI APIs",
      "OAuth",
    ],

    features: [
      "Search across web, images, videos, and news from one place",
      "AI chat that provides summaries and explains topics in simple terms",
      "Conversational and context-aware search flow",
      "User customization for themes and language preferences",
      "Secure login using Google and GitHub authentication",
    ],

    // CHALLENGES & LEARNINGS
    challenges: [
      "Managing AI response delay without breaking the user experience",
      "Making AI summaries actually useful instead of raw output",
      "Handling API limits and errors properly",
      "Structuring the backend in a clean and scalable way",
    ],

    // FUTURE IMPROVEMENTS
    improvements: [
      "Smarter AI-based ranking of search results",
      "Search history and saved items for users",
      "Better contextual memory in AI conversations",
      "Improved mobile responsiveness",
      "Performance optimization for larger usage",
    ],
    level: "Full Stack",
    code: "https://github.com/Lovekumar-10/Search-Engine",
    live: "https://search-engine-weld-ten.vercel.app/",
  },

  // EduGenieAi

  {
    slug: "EduGenieAI",
    title: "EduGenie AI Platform ",
    image: "/images/lovek.png",

    // SHORT OVERVIEW
    objective:
      "EduGenie is an AI-powered education platform built to help students study smarter by generating notes, summaries, quizzes, and visual learning tools in one place.",

    // PROBLEM STATEMENT
    problem:
      "Many students struggle with large and complex study material, spend too much time making notes manually, and lack effective revision and exam-oriented practice. Existing tools often solve only one part of the learning process instead of the full workflow.",

    // SOLUTION / APPROACH
    solution:
      "EduGenie automates key learning tasks using AI. Students can upload study material and instantly generate notes, summaries, flashcards, quizzes, and mind maps. The platform focuses on personalization, simplicity, and practical exam preparation rather than generic content.",

    tech: [
      "React",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI APIs",
      "TLDraw",
      " ImageKit",
    ],

    features: [
      "AI-generated notes, summaries, and flashcards from PDFs and chapters",
      "Customizable output based on learning style and depth",
      "Mind map generator for visual learning and concept clarity",
      "AI-powered quiz generator with difficulty and timer options",
      "Community page to upload and download notes without login",
    ],

    // CHALLENGES & LEARNINGS
    challenges: [
      "Designing AI outputs that are useful for real exam preparation",
      "Handling different file formats and large study materials",
      "Keeping the UI simple while offering multiple learning tools",
      "Improving features based on real student feedback",
    ],

    // FUTURE IMPROVEMENTS
    improvements: [
      "User profiles with saved progress and history",
      "Advanced quiz analytics and performance tracking",
      "Stronger AI personalization based on user behavior",
      "Better mobile experience for students",
    ],
    level: "Full Stack",
    code: "https://github.com/Lovekumar-10/EDUGENIEAI",
    live: "https://edugenieai.vercel.app/",
  },

  // Video CAll App

  {
    slug: "real-time-video",
    title: "Video Calling Website",
    image: "/images/lovek.png",

    // SHORT OVERVIEW
    objective:
      "A real-time video streaming platform for group calls, built to make online meetings simple, interactive, and secure with features like screen sharing, messaging, and private rooms.",

    // PROBLEM STATEMENT
    problem:
      "Users often face issues with online meetings: joining and managing group calls is difficult, links are not secure, video/audio quality can be poor, and collaboration features like chat or screen sharing are limited.",

    // SOLUTION / APPROACH
    solution:
      "This platform enables real-time group video and audio calls with secure meeting links, chat, and screen sharing. The interface is clean and intuitive, making it easy to host or join meetings without technical barriers.",

    tech: ["React", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.IO"],

    features: [
      "Real-time group video and audio calls",
      "Screen sharing during meetings",
      "Live messaging for participants",
      "Secure private meeting links",
      "Simple, intuitive interface for desktop and mobile",
    ],

    // CHALLENGES & LEARNINGS
    challenges: [
      "Managing real-time video and audio streaming with minimal delay",
      "Implementing secure and private meeting rooms",
      "Handling multiple participants in a single call",
      "Keeping the UI simple while offering essential collaboration features",
    ],

    // FUTURE IMPROVEMENTS
    improvements: [
      "Add meeting recording functionality",
      "Better mobile-first responsive design",
      "Participant management options (mute, remove, etc.)",
      "Optimizations for larger groups",
    ],
    level: "Full Stack",
    code: "https://github.com/Lovekumar-10/Video_Call_App",
    live: "https://oneononemeet.vercel.app/",
  },

  // Photo Explorer

  {
    slug: "photo-explorer",
    title: "Photo Explorer",
    image: "/images/lovek.png",

    // SHORT OVERVIEW
    objective:
      "Photo Explorer is a React application that allows users to search, explore, and browse high-quality images from the Pixabay API in a clean and responsive interface.",

    // PROBLEM STATEMENT
    problem:
      "Searching and browsing images online can be scattered and slow. Beginners learning React also need a project that demonstrates API integration, state management, and responsive design.",

    // SOLUTION / APPROACH
    solution:
      "Photo Explorer provides a smooth search experience where users can type keywords to fetch images from the Pixabay API. Infinite scrolling allows seamless browsing, and the app is fully responsive for desktop and mobile use.",

    tech: ["React", "PixabayAPI", "Bootstrap", "CSS"],

    features: [
      "Search images by keyword",
      "Infinite scrolling for continuous browsing",
      "Responsive UI for desktop and mobile devices",
      "Clean grid layout for image display",
      "Simple and beginner-friendly interface",
    ],

    // CHALLENGES & LEARNINGS
    challenges: [
      "Understanding API integration in React",
      "Managing state across components using Hooks and Context API",
      "Implementing infinite scrolling",
      "Creating a responsive and clean layout",
    ],

    // FUTURE IMPROVEMENTS
    improvements: [
      "Add image categories and filters",
      "Implement image preview modal",
      "Improve loading and error handling",
      "Enhance UI and user experience",
    ],
    level: "Frontend",
    code: "https://github.com/Lovekumar-10/Photo-Explorer",
    live: "https://photo-explorer-one.vercel.app/",
  },

  // Dashboard UI

  {
    slug: "dashboard-ui",
    title: "Dashboard UI",
    image: "/images/lovek.png",

    // SHORT OVERVIEW
    objective:
      "Dashboard UI is a beginner-friendly React project demonstrating a finance-focused dashboard layout. It includes key sections such as Budget, Loans, Transactions, Cash Flow, Savings, and Financial Advice. The project focuses on arranging components, cards, and charts in a clean and structured interface, helping beginners understand basic React UI development and responsive layouts.",

    // PROBLEM STATEMENT
    problem:
      "For beginners learning React, building a structured UI with multiple sections and categories can be challenging. Finance dashboards, in particular, require clear organization to display budgets, transactions, savings, and loans in a way that is easy to read and navigate.",

    // SOLUTION / APPROACH
    solution:
      "This project uses React components to build a structured dashboard with side navigation, header, cards, and charts. Each section represents a different financial category. Simple HTML, CSS, and JavaScript are used for styling, making the layout responsive and easy to follow for learning purposes.",

    tech: ["React", "HTML", "CSS", "JavaScript"],

    features: [
      "Side navigation menu with categories: Home, Budget, Transactions, Subscriptions, Loans, Reports, Savings, Financial Advice, Account, Settings",
      "Cards displaying balances, transactions, and budget details",
      "Basic charts for reports and budget tracking",
      "Responsive layout suitable for desktop and tablet screens",
      "Organized structure to help beginners understand React component hierarchy",
    ],

    // CHALLENGES & LEARNINGS
    challenges: [
      "Learning to break down a UI into reusable React components",
      "Structuring multiple sections and categories in a clean layout",
      "Applying basic styling and ensuring responsiveness",
      "Understanding how to display static data using cards and charts for practice",
    ],

    // FUTURE IMPROVEMENTS
    improvements: [
      "Add interactive charts and real-time data updates",
      "Enhance mobile responsiveness",
      "Connect the dashboard to live backend data",
      "Improve UI aesthetics and add animations",
    ],
    level: "Frontend",
    code: "https://github.com/Lovekumar-10/Dashboard-UI",
    live: "https://dashboard-by-love.vercel.app/",
  },

  // URL Shortener

  {
    slug: "url-shortener",
    title: "URL Shortener",
    image: "/images/UrlShortner.png",

    // SHORT OVERVIEW (for card + intro)
    objective:
      "I built this project to understand how real-world backend systems work. The main goal was to convert long URLs into short, easy-to-share links and handle redirection efficiently using a database-driven approach.",

    // PROBLEM STATEMENT
    problem:
      "Long URLs are hard to share, remember, and look messy, especially on social media or messaging platforms. Manually managing or tracking such links is inefficient and error-prone.",

    // SOLUTION / APPROACH
    solution:
      "To solve this, I created a URL Shortener that generates a unique short ID for every long URL and stores it in MongoDB. When a user accesses the short link, the server fetches the original URL from the database and redirects the user instantly.",

    tech: ["Node.js", "Express.js", "MongoDB", "EJS"],

    features: [
      "Convert long URLs into short, shareable links",
      "Instant redirection from short URL to original URL",
      "Server-side rendered UI using EJS",
      "MongoDB database to store and manage URLs",
      "Simple and clean user interface",
    ],

    // CHALLENGES & LEARNINGS
    challenges: [
      "Designing a reliable short ID generation logic",
      "Handling invalid or broken URLs gracefully",
      "Understanding URL redirection flow in Express",
      "Working with MongoDB schemas and queries",
    ],

    // FUTURE IMPROVEMENTS
    improvements: [
      "Click count and analytics for each short URL",
      "Custom short URLs for users",
      "User authentication and dashboard",
      "URL expiration feature",
      "REST API version of the project",
    ],
    level: "Backend",
    code: "https://github.com/Lovekumar-10/URL_Shortner_proj",
    // live: "https://your-live-url.com",
  },

  //Basic Auth System
  {
    slug: "basic-login-profile",
    title: "Basic Auth System",
    image: "/images/Login.png",

    // SHORT OVERVIEW
    objective:
      "I built this project to understand the basics of user authentication, form handling, and image uploads. The main focus was learning how Cloudinary works for storing and displaying user profile images.",

    // PROBLEM STATEMENT
    problem:
      "Beginner developers often struggle to understand how login systems, user data storage, and image uploads work together in a backend application. Handling user credentials and profile images requires clear backend flow.",

    // SOLUTION / APPROACH
    solution:
      "I created a simple login system where users can register using name, email, password, and a profile picture. User data is stored in MongoDB, profile images are uploaded to Cloudinary, and logged-in users can see their profile details on screen.",

    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Cloudinary",
    ],

    features: [
      "Basic user registration with name, email, password, and profile picture",
      "Simple login using email and password",
      "Profile section displaying user details after login",
      "Image upload and storage using Cloudinary",
      "Server-side rendered UI using EJS",
    ],

    // CHALLENGES & LEARNINGS
    challenges: [
      "Understanding how file uploads work with Multer",
      "Integrating Cloudinary for image storage",
      "Handling form data and validations",
      "Managing basic login flow with MongoDB",
    ],

    // FUTURE IMPROVEMENTS
    improvements: [
      "Password hashing for better security",
      "Session or JWT-based authentication",
      "Logout functionality",
      "Better form validations",
      "UI improvements",
    ],
    level: "Backend",

    code: "https://github.com/your-github-username/basic-login-profile",
    // live: "" // not deployed
  },

  // Todo List

  {
    slug: "TodoWithLove",
    title: "Todo List",
    image: "/images/Login.png",

    // SHORT OVERVIEW
    objective:
      "A clean and beginner-friendly Todo App built using React JS. Users can add, update, mark as done, and delete tasks. Tasks persist in local storage and the app features light/dark mode and sound feedback for actions, providing a simple yet interactive UI experience.",

    // PROBLEM STATEMENT
    problem:
      "Many beginners need a practical project to learn React basics such as state management, component-based architecture, and handling user input. Existing simple Todo apps often lack persistence, sound feedback, or clean UI design.",

    // SOLUTION / APPROACH
    solution:
      "The app allows users to add tasks, delete tasks, mark them as done, and update existing tasks. All tasks are stored in local storage so they persist across sessions. Multi-mode UI (light/dark) and popup sounds enhance interactivity and usability, while keeping the interface clean and beginner-friendly.",

    tech: ["React", "HTML", "CSS", "Tailwind", "JavaScript"],

    features: [
      "Add new tasks",
      "Update existing tasks",
      "Delete tasks",
      "Mark tasks as completed",
      "Tasks persist in local storage",
      "Light/Dark mode",
      "Popup sounds on adding, deleting, or completing tasks",
      "Clean and simple UI layout",
    ],

    // CHALLENGES & LEARNINGS
    challenges: [
      "Breaking the UI into reusable React components",
      "Managing task state effectively with useState",
      "Implementing local storage for persistent data",
      "Adding interactive feedback with sounds",
      "Maintaining clean, responsive, and beginner-friendly UI",
    ],

    // FUTURE IMPROVEMENTS
    improvements: [
      "Add task categories and filters",
      "Set reminders or due dates for tasks",
      "Sync tasks with a backend or cloud storage",
      "Enhance UI with animations and better theming",
      "Add search functionality for tasks",
    ],

    level: "Frontend",
    code: "https://github.com/Lovekumar-10/Todo-With-love",
    live: "https://todo-with-love.vercel.app/",
  },
];
