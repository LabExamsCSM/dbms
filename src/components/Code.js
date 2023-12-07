import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const cardTheme = createTheme({
  palette: {
    background: { paper: "#fafafa" },
    primary: { main: "#212121" },
    secondary: { main: "#212121" },
  },
});

function Code({ title, code }) {
  const handleCopyClick = () => {
    // const textToCopy = code; // Replace with the text you want to copy
    navigator.clipboard.writeText(code);
    alert("Copied to clipboard");
  };

  return (
    <>
      <ThemeProvider theme={cardTheme}>
        <Card sx={{padding:3}}>
          <CardContent>
            <Typography
              color="primary"
              variant="h6"
              component="div"
              sx={{ display: "inline" }}
            >
              {title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCopyClick}
              sx={{paddingX:3, paddingY:1.2}}
            >
              copy
            </Button>
            
          </CardActions>
        </Card>
      </ThemeProvider>
    </>
  );
}

export default Code;
