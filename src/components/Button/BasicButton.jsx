import Button from "@mui/material/Button";

function BasicButton({ label, onClick, color, variant, size, sx }) {
  return (
    <Button
      onClick={onClick}
      color={color}
      variant={variant}
      size={size}
      sx={sx}
    >
      {label}
    </Button>
  );
}

export default BasicButton;
