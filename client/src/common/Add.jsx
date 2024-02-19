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
              SOCIAL MEDIA.
            </Link>
            Using our own Social Media Platform, we provide each users the facility to communicate, connect and create public relation to build a huge market and traffic. Social media is a very powerful tool in building rapport to your target audience by providing them a social interaction and connectivity!
SOCIAL MEDIA is a new necessities for almost 3 Billion people in the world so no questions ask it is a REAL DEAL.
          </ListItem>
          <ListItem>
            E-Commerce System is now a new pace of the business in the world today ALIBABA, AMAZON, and LAZADA they already prove to us that the evolution of business is existing.
          </ListItem>
          <ListItem>
            JACK MA is the richest man in China, founder of ALIBABA is one classic example that e-commerce industry had a tremendous growth and E-Commerce Industry in the Philippines and even in ASEAN REGION is potentially growing up to 15% annually which shows the huge market place in these REGION.
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2"
            >
              E-COMMERCE
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
