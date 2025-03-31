export interface JobListingAttributes {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  applyLink: string;
}

export const jobs: JobListingAttributes[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "We are looking for a passionate Software Engineer to join our team. You will be working with cutting-edge technology and solving challenging problems.",
    requirements: [
      "Bachelor's degree in Computer Science or related field.",
      "Experience with JavaScript, React, and Node.js.",
      "Strong problem-solving skills.",
    ],
    applyLink: "https://tech-corp.com/apply",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Creative Solutions",
    location: "Remote",
    type: "Part-time",
    description:
      "Join our creative team to design beautiful and intuitive products. You will be collaborating with developers and product managers to create seamless user experiences.",
    requirements: [
      "Proficiency in design tools like Figma, Sketch, or Adobe XD.",
      "Experience in user-centered design principles.",
      "Portfolio showcasing your design work.",
    ],
    applyLink: "https://creativesolutions.com/apply",
  },
  {
    id: 3,
    title: "Marketing Manager",
    company: "GrowthX",
    location: "New York, NY",
    type: "Full-time",
    description:
      "We're looking for an experienced marketing manager to help us grow our brand and expand our reach. You will oversee campaigns and work closely with the sales team.",
    requirements: [
      "5+ years of marketing experience.",
      "Experience with SEO, content marketing, and social media.",
      "Strong communication and leadership skills.",
    ],
    applyLink: "https://growthx.com/apply",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataPro Analytics",
    location: "Chicago, IL",
    type: "Full-time",
    description:
      "Join our data science team to analyze large datasets and help drive business decisions. You will work with machine learning models and statistical analysis.",
    requirements: [
      "Experience with Python, R, and data analysis tools.",
      "Knowledge of machine learning and statistical modeling.",
      "Strong communication skills for explaining findings.",
    ],
    applyLink: "https://datapro.com/apply",
  },
];
