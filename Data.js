export const data = {
  introduction: {
    name: "John Pat",
    title: "Senior Software Engineer",
    summary: `
      This is the summary section.
      Hello world.
      etc.
    `,
    profilePicture: "./Profile_pic.jpg",
  },
  educationCertificate: {
    title: "Education & Certifications",
    list: [
      {
        school: "New York University",
        location: "City, State",
        degree: "Bachelor of Science",
        description: "Description text",
      },
      {
        school: "Bootcamp",
        location: "City, State",
        degree: "Front End Development Certificate",
        description: "Description text",
      },
    ],
  },
  skills: {
    title: "Skills",
    icons: ["javascript", "typescript", "react", "node", "vue", "angular", "graphql", "postgresql", "python", "django", "gcp", "aws"],
    iconMap: {
      javascript: "javascript.png",
      typescript: "typescript.svg",
      react: "react.jpg",
      // Add more icon mappings as needed
    },
    list: ["JavaScript", "TypeScript", "React", "Node.js", "Vue.js", "Angular", "GraphQL", "PostgreSQL", "Python", "Django", "Google Cloud Platform", "AWS"],
  },
  experience: {
    title: "Experience",
    list: [
      {
        title: "Web Developer",
        type: "Full-Time",
        company: "Company A",
        location: "San Francisco, California",
        duration: "03/2014 - 07/2018",
        achievements: [
          "Achievement 1",
          "Achievement 2",
        ],
      },
     
    ],
  },
  contact: {
    email: "test@test.com",
    phone: "+1(111)222-3333",
    address: "City, State, US, 12345",
  },
};
