import Button from "@mui/material/Button";

function BasicButton({ label, onClick, color }) {
  return (
    <Button onClick={onClick} color={color}>
      {label}
    </Button>
  );
}

export default BasicButton;
