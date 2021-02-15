import { Box, Heading, Link, Text } from "theme-ui";

const ABOUT_LINKS = [
  {
    href: "https://brendansudol.com/",
    text: "Made by @brensudol",
  },
  {
    href: "https://github.com/brendansudol/smartful",
    text: "Code on GitHub",
  },
];

export function AboutModal() {
  return (
    <Box>
      <Heading mb={3} sx={{ fontSize: 4 }}>
        About
      </Heading>
      <Box mb={3}>
        Smartful provides a daily dose of knowledge on a variety of topics, from history to
        linguistics to the arts and more. It's never been easier to learn something new and
        interesting every single day.
      </Box>
      <Box sx={{ fontSize: [0, 1] }}>
        {ABOUT_LINKS.map((link, idx) => (
          <Link key={idx} mr={3} target="_blank" href={link.href}>
            {link.text}
          </Link>
        ))}
      </Box>
      <Text></Text>
    </Box>
  );
}
