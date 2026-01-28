import BasicButton from "../components/Button/BasicButton";
import Box from "@mui/material/Box";

function Home() {
  return (
    <Box sx={{ p: 10 }}>
      <BasicButton
        label="Home Button"
        onClick={() => console.log("Home Button Clicked")}
      />
      <BasicButton label="Click Me" onClick={() => alert("Button Clicked!")} />
    </Box>
  );
}

export default Home;
