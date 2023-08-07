import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      backgroundColor="white"
      gap={4}
      borderRadius="xl"
      borderWidth="1px"
      borderColor="gray.800"
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="xl"
        objectFit="cover"
      />
      <VStack
        p={4}
        gap={4}
        alignItems="flex-start"
        color="black"
      >
        <Heading as="h2" fontSize="lg">
          {title}
        </Heading>
        <Text>{description}</Text>
        <HStack>
          <Text>See more </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
