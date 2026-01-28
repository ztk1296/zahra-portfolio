import Box from "@mui/material/Box";
import PageHeader from "../components/PageHeader/PageHeader";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

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
      <Card sx={{ display: "flex" }}>
        <Box sx={{ width: "20%" }}>
          <CardMedia
            component="img"
            // height="140"
            image="https://as1.ftcdn.net/v2/jpg/01/81/47/00/1000_F_181470039_NOQrR8a71hdxYQ5t41SvLX4Z8Sfvqyz3.jpg"
            alt="ZProject Portfolio Redesign"
          />
        </Box>
        <Box sx={{ pt: 1, width: "50%" }}>
          <CardContent>
            <Typography variant="h6">
              Project 1: Portfolio Website Redesign
            </Typography>
            <Typography>
              I am currently working on redesigning my portfolio website to
              enhance user experience and showcase my latest projects. This
              involves updating the UI/UX design, improving responsiveness, and
              adding new features using React and Material-UI.
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ width: "20%" }}>
          <CardMedia
            component="img"
            height="140"
            image="https://as2.ftcdn.net/v2/jpg/04/42/89/95/1000_F_442899581_razSTUduaTfwdGtrOHkyKw28DXjO77Qo.jpg"
            alt="Local Business Website"
          />
        </Box>
        <Box sx={{ pt: 3, width: "50%" }}>
          <CardContent>
            <Typography variant="h6">
              Project 2: Local Business Website
            </Typography>
            <Typography>
              A business website for a local vendor and class instructor. This
              creative entrepreneur offers cross-stitching classes, sells
              handmade crafts and locally sourced minerals. The website is being
              built using React for the frontend and Java SpringBoot for the
              backend. This will allow for easy updates to class schedules,
              product listings, and blog posts.
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Box sx={{ pt: 3 }}>
        <Typography variant="h5">Completed Projects</Typography>
      </Box>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ width: "20%" }}>
          <CardMedia
            component="img"
            height="140"
            src="https://as2.ftcdn.net/v2/jpg/02/10/67/37/1000_F_210673709_XLGs8BSQUxmvXJmBqoDzIq8MSraMSK4p.jpg"
            alt="LSL E-Commerce Portal"
          />
        </Box>
        <Box sx={{ pt: 1, width: "50%" }}>
          <CardContent>
            <Typography variant="h6">Project LSL: E-Commerce Portal</Typography>
            <Typography>
              Developed a full-stack e-commerce web application using React for
              the frontend and Java SpringBoot for the backend. Implemented
              features such as user authentication, product management, shopping
              cart, and order processing. Deployed the application on AWS using
              EC2 and S3 services.
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ width: "20%" }}>
          <CardMedia
            component="img"
            height="140"
            image="https://as2.ftcdn.net/v2/jpg/10/53/61/33/1000_F_1053613381_Fm0BykXmCIDYL9fAFGQLTEhFxCVSTcYK.jpg"
            alt="Coming Soon"
          />
        </Box>
        <Box sx={{ pt: 3, width: "50%" }}>
          <CardContent>
            <Typography variant="h6">More Projects Coming Soon...</Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

export default Home;
