import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader";

function ContactMe() {
  const PageHeaderTitle = "Contact Me";
  return (
    <div>
      <Box sx={{ p: 10 }}>
        <PageHeader title={PageHeaderTitle} />
        <Box sx={{ pt: 3 }}>
          <Typography>Email: tba@gmail.com</Typography>
        </Box>
        <Box sx={{ pt: 3 }}>
          <Typography>Socials:</Typography>
          <Box sx={{ pl: 3 }}>
            <Typography>LinkedIn:</Typography>
            <Link to="https://www.linkedin.com/in/zahrakhan612/">
              Zahra Khan on LinkedIn
            </Link>
            <Typography>GitHub:</Typography>
            <Link to="https://github.com/ztk1296">Zahra Khan on GitHub</Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ContactMe;
