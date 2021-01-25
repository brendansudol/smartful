import { Box, Heading } from "theme-ui";

// TODO: improve
export default function Custom404() {
  return (
    <Box sx={{ px: 3, py: 4, mx: "auto", maxWidth: 950, textAlign: "center" }}>
      <Heading sx={{ fontSize: [3, 5] }}>404 - Page Not Found</Heading>
    </Box>
  );
}
