import { useState } from "react";
import { Alert, Box, Button, Card, Flex, Heading, Image, Input, Link, Text } from "theme-ui";
import { isEmailValid } from "../utils/email";

enum Status {
  NOT_STARTED,
  LOADING,
  SUCCESS,
  FAIL,
}

export default function Unsub() {
  // TODO: create custom hook with this logic and share with `SubscribeModal`
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>(Status.NOT_STARTED);

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    if (!isEmailValid(email)) return;

    try {
      setStatus(Status.LOADING);
      await fetch("/api/unsubscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      setStatus(Status.SUCCESS);
    } catch (err) {
      console.error(err);
      setStatus(Status.FAIL);
    }
  };

  return (
    <Box p={4}>
      <Card sx={{ p: [4, 5], mx: "auto", mt: [0, 4], maxWidth: 500 }}>
        <Flex mb={3} sx={{ alignItems: "center" }}>
          <Heading mr={2} sx={{ fontSize: 4 }}>
            Smartful
          </Heading>
          <Image src="/img/logo.png" width={26} height={26} />
        </Flex>
        <Box mb={3}>Enter your email address below to unsubscribe from the daily email.</Box>
        {status === Status.SUCCESS ? (
          <Alert mb={3} sx={{ display: "block", textAlign: "center" }}>
            Success!
          </Alert>
        ) : (
          <Box mb={3} as="form" onSubmit={handleSubmit}>
            <Flex mx={-1} sx={{ alignItems: "center" }}>
              <Box px={1} sx={{ flex: "1 1 auto" }}>
                <Input
                  name="email"
                  type="email"
                  required={true}
                  placeholder="Enter email..."
                  sx={{ bg: "background" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box px={1} sx={{ flex: "none" }}>
                <Button type="submit" disabled={status === Status.LOADING}>
                  {status === Status.LOADING ? "Saving" : "Submit"}
                </Button>
              </Box>
            </Flex>
          </Box>
        )}
        <Link href="/">Go to home page »</Link>
      </Card>
    </Box>
  );
}
