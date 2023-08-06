import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack height={450} backgroundColor={"white"} width={550} borderRadius={10}>
      <Image src={imageSrc} borderBottomRadius={10} width="100%" height={"65%"}></Image>
      <div style={{ padding: "10px" }}>
        <Heading size={12} color={"Black"} marginBottom={2}>{title}</Heading>
        <Text color={"Black"}>{description}</Text>
      </div>
      <HStack alignContent={"left"} width={"100%"} marginLeft={5}>
        <Box color={"Black"} fontWeight={500}>See more</Box>
        <Box>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color={"Black"} />
        </Box>
      </HStack>
    </VStack>);
};

export default Card;
