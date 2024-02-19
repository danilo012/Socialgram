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
          src="https://projectwatch.ph/wp-content/uploads/2021/05/watch-logo.png"
          alt="PaysGram"
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
            PaysGram is a combination of the 3 MOST INNOVATIVE INTERNET BUSINESS in the world today SOCIAL MEDIA PLATFORM, E-COMMERCE SYSTEM and AFFILIATE MARKETING PROGRAM.
            <Link
              href="https://paysgram.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2"
            >
              SOCIAL MEDIA 
            </Link>
            E-COMMERCE!
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
