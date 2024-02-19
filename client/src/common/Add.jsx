import React from "react";
import { Box, Link, List, ListItem, Typography } from "@mui/material";

const Adds = () => {
  return (
    <React.Fragment>
      <Box
        style={{
          // height: "86vh",
          overflowY: "auto",
          wordWrap: "wrap",
        }}
      >
        <Typography component="h2" variant="h5" sx={{ my: 4 }}>
          About Project
        </Typography>
        <img
          src="http://seed4na.eu/wp-content/uploads/2020/07/vision-1024x683.jpgzers=1&theme=Dark"
          alt="Socialgram"
          className="w-100 mb-4"
        />
        <Link
          href="https://echozoneph.online"
          title="Repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          Echozone 
        </Link>
        <Typography component="h3" variant="h6" sx={{ mt: 2 }}>
          How to Contribute ?
        </Typography>
        <List>
          <ListItem sx={{ display: "block" }}>
            Take a look at the Existing
            <Link
              href="https://github.com/shelcia/Socialgram/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2"
            >
              Issues
            </Link>
            or create your own Issues!
          </ListItem>
          <ListItem>
            Wait for the Issue to be assigned to you after which you can start
            working on it.
          </ListItem>
          <ListItem>
            Fork the Repo and create a Branch for any Issue that you are working
            upon.
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            Read the
            <Link
              href="https://github.com/shelcia/CRM/blob/master/CODE_OF_CONDUCT.md"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2"
            >
              Code of Conduct
            </Link>
          </ListItem>
          <ListItem>
            Create a Pull Request which will be promptly reviewed and
            suggestions would be added to improve it.
          </ListItem>
          <ListItem>
            Add Screenshots to help us know what this Script is all about.
          </ListItem>
        </List>
      </Box>
    </React.Fragment>
  );
};

export default Adds;
