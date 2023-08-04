import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const links = [
  {
    text: "Projects",
    url: "projects",
  },
  {
    text: "Contact Me",
    url: "contact-me",
  },
];

const Header = () => {

  const scrollPosition = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      scrollPosition.current < window.scrollY
        ? header.style.transform = "translateY(-200px)"
        : header.style.transform = "translateY(0)";
      scrollPosition.current = window.scrollY
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const handleClick = (anchor) => (e) => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <Box
      id="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={6}>
              {/* Add social media links based on the `socials` data */
                socials.map((social) => (
                  <Link
                    key={social.url}
                    to={social.url}
                    target="_blank" rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={social.icon} size='2x' />
                  </Link>
                ))
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={6}>
              {/* Add links based on the `links` data */
                links.map((link) => (
                  <Link
                    key={link.url}
                    to={`/#${link.url}`}
                    onClick={handleClick(link.url)}
                  >
                    {link.text}
                  </Link>
                ))
              }
            </HStack>
          </nav>
        </HStack>
      </Box >
    </Box >
  );
};
export default Header;
