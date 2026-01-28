import { Box, Stack, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader/PageHeader";

// TODO: Insert Pic of Dogs with You

function AboutMe() {
  const PageHeaderTitle = "About Me";

  return (
    <div>
      <Box sx={{ p: 10 }}>
        <PageHeader title={PageHeaderTitle} />
        <Box sx={{ pt: 3 }}>
          <Typography>
            My name is Zahra Khan and I am a Full-Stack Software Engineer with a
            background in Systems Engineering and Data Science. I am experienced
            in developing web applications using technologies such as React,
            Node.js, Java SpringBoot, and AWS.
          </Typography>
          <Typography sx={{ pt: 1 }}>
            In 2021, I graduated from University of North Texas with a
            Bachelor's of Science in Information Science with a focus in
            Knowledge Discovery and Data Science. My passion lies in creating
            efficient and scalable software solutions that solve real-world
            problems. I am excited to connect with like-minded professionals and
            explore new opportunities in the tech industry.
          </Typography>
          <Typography sx={{ pt: 1 }}>
            Some of my interests include outdoor recreation, games like Dungeons
            and Dragons or Final Fantasy, traveling, and trying out new recipes
            in the kitchen.
          </Typography>
        </Box>
        <Box sx={{ pt: 3 }}>
          <Typography fontWeight="bold">Tech Stack:</Typography>
          <Box sx={{ pl: 2 }}>
            <Stack direction="row" spacing={1}>
              <Typography>Frontend:</Typography>
              <Typography>
                HTML, CSS, JavaScript, TypeScript, React, Redux, Zustand
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography>
                Backend: Node.js, Next.js, Java SpringBoot
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography>Databases:</Typography>
              <Typography>MySQL, PostgreSQL</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography>Cloud Services:</Typography>
              <Typography>
                AWS (S3, EC2, RDS, Lambda, IAM), Azure (VM, IAM, InTune)
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography>Other:</Typography>
              <Typography>Git, Docker, RESTful APIs</Typography>
            </Stack>
          </Box>
          <Box sx={{ pt: 3 }}>
            <Typography>
              Meet my dogs! I own a black lab mix and a terrier mix. They are
              adorable, cuddly and energetic. They help me stay active and bring
              joy to my life.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default AboutMe;
