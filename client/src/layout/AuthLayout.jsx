import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Link,
  Typography,
} from "@mui/material";
import Img1 from "../assets/home/gradient-left-dark.svg";
import Img2 from "../assets/home/gradient-right-dark.svg";

const AuthLayout = ({ children }) => (
  <Container className="row" sx={{ height: "100vh" }}>
    <img src={Img1} alt="" style={{ position: "fixed", zIndex: -1 }} />
    <img src={Img2} alt="" style={{ position: "fixed", zIndex: -1 }} />
    <Box
      className="col-md-6"
      sx={{
        justifyContent: "center",
        height: "100vh",
        alignItems: "left",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography component="h1" variant="h1">
        PaysGram
      </Typography>
      <Typography component="p" variant="subtitle1" mt={2}>
        PaysGram is a social media website that allows users to create and
        share content. Users will be able to create posts, and share them with
        others. The platform also allows for users to react and engage with
        other users content, such as by liking, commenting, or sharing. 
        PaysGram has been continuously improving the standards of our social media website development for more years! We care to keep improving and growing for you! , 
        lastly we're giving a chance to our rented users to earn more efficient and earn passive income while creating and sharing content!

thank you.
      </Typography>
      <Box mt={2} sx={{ display: "flex", verticalAlign: "middle" }}>
        <Typography component="p" variant="subtitle1" mr={1}>
          Developed by
        </Typography>
        <Typography
          component={Link}
          variant="subtitle1"
          href="https://echozoneph.online"
          target="_blank"
          mr={1}
        >
          Echozoneph
        </Typography>
        -
        <Typography component="p" variant="subtitle1" mr={1} ml={1}>
          apply us a renter
        </Typography>
        <Typography
          component={Link}
          variant="subtitle1"
          href="https://echozoneph.online"
          target="_blank"
        >
          Rental
        </Typography>
      </Box>
    </Box>
    <Box
      className="col-md-6"
      sx={{
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Card
        sx={{
          minWidth: 275,
          background: "rgba(0, 0, 0, 0.2)",
          borderRadius: 2,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  </Container>
);

export default AuthLayout;
