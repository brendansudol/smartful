import { useState } from "react";
import { Alert, Box, Button, Flex, Heading, Input } from "theme-ui";
import { useModal } from "../contexts/modal";
import { isEmailValid } from "../utils/email";

enum Status {
  NOT_STARTED,
  LOADING,
  SUCCESS,
  FAIL,
}

export function SubscribeModal() {
  const { focusRef, hideModal } = useModal();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>(Status.NOT_STARTED);

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    if (!isEmailValid(email)) return;

    try {
      setStatus(Status.LOADING);
      await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      setStatus(Status.SUCCESS);
      setTimeout(hideModal, 2000);
    } catch (err) {
      console.error(err);
      setStatus(Status.FAIL);
    }
  };

  return (
    <Box>
      <Heading mb={3} sx={{ fontSize: 4 }}>
        Subscribe
      </Heading>
      <Box mb={3}>Sign up for the daily email and learn five new things before breakfast.</Box>
      {status === Status.SUCCESS ? (
        <Alert mb={2} sx={{ display: "block", textAlign: "center" }}>
          Thanks!
        </Alert>
      ) : (
        <Box mb={2} as="form" onSubmit={handleSubmit}>
          <Flex mx={-1} sx={{ alignItems: "center" }}>
            <Box px={1} sx={{ flex: "1 1 auto" }}>
              <Input
                ref={focusRef}
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
                {status === Status.LOADING ? "Saving" : "Try it"}
              </Button>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
