import { Box, Button, Card, Flex, IconButton, Image, Link, Text } from "theme-ui";

interface IProps {
  moreUrl?: string;
  sourceText: string;
}

export function CardFooter({ moreUrl, sourceText }: IProps) {
  if (moreUrl == null) {
    return (
      <Text variant="citation" sx={{ textAlign: ["left", "right"] }}>
        {sourceText}
      </Text>
    );
  }

  return (
    <Box
      sx={{
        display: [null, "flex"],
        alignItems: "baseline",
        justifyContent: "space-between",
        whiteSpace: [null, "nowrap"],
      }}
    >
      <Link
        href={moreUrl}
        target="_blank"
        sx={{ display: "block", flex: "none", mb: [3, 0], mr: [0, 2] }}
      >
        Learn more »
      </Link>
      <Text
        variant="citation"
        sx={{ overflow: [null, "hidden"], textOverflow: [null, "ellipsis"] }}
      >
        {sourceText}
      </Text>
    </Box>
  );
}
