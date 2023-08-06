import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Faustino!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    id="landing_section"
  >
<VStack>
  <Avatar
    name="Faus"
    src="https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/356138350_2885435288257585_4257090993957727194_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2lE8HKGgA0kAX_ByfKM&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfA0Xeq1S93oiS9yQBm20PKnpS-SlWRnPRB2NwB_TxDFag&oe=64D24B9C"
    style={{ width: "150px", height: "150px" }}
  />
  <Heading size={6}>{greeting}</Heading>
  <Heading>{bio1}</Heading>
  <Heading>{bio2}</Heading>
</VStack>



  </FullScreenSection>
);

export default LandingSection;
