import { useState } from "react";
import { Box, Button, Divider, Flex, Input, Text } from "theme-ui";
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
      await fetch("/api/addEmail", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      setStatus(Status.SUCCESS);
      setTimeout(hideModal, 1000);
    } catch (err) {
      console.error(err);
      setStatus(Status.FAIL);
    }
  };

  return (
    <Box>
      <Text variant="heading" mb={2} sx={{ fontSize: [2, 3] }}>
        TODO: Subscribe...
      </Text>
      <Text mb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Text>
      <Box mb={3} as="form" onSubmit={handleSubmit}>
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
          <Box px={1}>
            <Button type="submit" disabled={status === Status.LOADING || status === Status.SUCCESS}>
              {status === Status.SUCCESS ? "Thanks!" : "Submit"}
            </Button>
          </Box>
        </Flex>
      </Box>
      <Text sx={{ fontSize: 1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad.
      </Text>
      <Divider my={4} />
      <Text sx={{ fontSize: 1 }}>Lorem ipsum dolor sit amet</Text>
    </Box>
  );
}
