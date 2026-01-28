import Box from "@mui/material/Box";
import PageHeader from "../components/PageHeader/PageHeader";
import { Typography } from "@mui/material";

function Home() {
  const PageHeaderTitle = "Zahra Khan - Full-Stack Software Engineer";
  return (
    <Box sx={{ p: 10 }}>
      <PageHeader title={PageHeaderTitle} />
      <Typography sx={{ pt: 3 }}>
        Welcome to my portfolio website! I am Zahra Khan, a Full-Stack Software
        Engineer with a passion for creating efficient and scalable web
        applications. Here, you can learn more about my background, skills, and
        projects. Feel free to explore and reach out if you'd like to connect!
      </Typography>

      <Typography sx={{ pt: 3 }}>
        Use the navigation links to learn more about me.
      </Typography>
      <Typography>You can view some of my work below.</Typography>

      <Box sx={{ pt: 3 }}>
        <Typography variant="h5">Ongoing Projects</Typography>
      </Box>
      <Box sx={{ pt: 1 }}>
        <Typography variant='h6'>Project 1: Portfolio Website Redesign</Typography>
        <Typography>
          I am currently working on redesigning my portfolio
          website to enhance user experience and showcase my latest projects.
          This involves updating the UI/UX design, improving responsiveness,
          and adding new features using React and Material-UI.
        </Typography>
      </Box>
      <Box sx={{ pt: 3 }}>
        <Typography variant='h6'>Project 2: Local Business Website</Typography>
        <Typography>
          A business website for a local vendor and class instructor.
          This creative entrepreneur offers cross-stitching classes, sells handmade crafts and locally sourced minerals.
          The website is being built using React for the frontend and Java SpringBoot for the backend.
          This will allow for easy updates to class schedules, product listings, and blog posts.
        </Typography>
      </Box>
      <Box sx={{ pt: 3 }}>
        <Typography variant="h5">Completed Projects</Typography>
      </Box>
      <Box sx={{ pt: 1 }}>
        <Typography variant='h6'>Project LSL: E-Commerce Portal</Typography>
        <Typography>
          Developed a full-stack e-commerce web application using
          React for the frontend and Java SpringBoot for the backend.
          Implemented features such as user authentication, product
          management, shopping cart, and order processing. Deployed the
          application on AWS using EC2 and S3 services.
        </Typography>
      </Box>
      <Box sx={{ pt: 3 }}>
        <Typography variant='h6'>More Projects Coming Soon...</Typography>      
      </Box>
    </Box>
  );
}

export default Home;
