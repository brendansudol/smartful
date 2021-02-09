import Tippy from "@tippyjs/react";
import { addDays, format, isToday as isTodayFn } from "date-fns";
import { useRouter } from "next/router";
import { Box, Card, Flex, IconButton, Text } from "theme-ui";
import { ChevronLeft, ChevronRight } from "../utils/icons";
import { formatDate, START_DATE_ISO } from "../utils/dates";

interface IProps {
  date: Date;
}

export function DateNav({ date }: IProps) {
  const dateISO = formatDate(date);
  const router = useRouter();
  const isToday = isTodayFn(date);

  const goToDay = (delta: number) => () => {
    const nextDate = addDays(date, delta);
    const nextDateISO = formatDate(nextDate);
    router.push(`/d/${nextDateISO}`);
  };

  const nextButton = (
    <IconButton disabled={isToday} onClick={goToDay(1)}>
      <ChevronRight size={26} />
    </IconButton>
  );

  return (
    <Card mb={3}>
      <Flex py={1} sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ fontSize: 3, fontWeight: "bold" }}>
          <Text sx={{ display: ["none", "block"] }}>{format(date, "MMMM do yyyy")}</Text>
          <Text sx={{ display: ["block", "none"] }}>{format(date, "MMM do yyyy")}</Text>
        </Box>
        <Flex>
          <IconButton mr={1} disabled={dateISO === START_DATE_ISO} onClick={goToDay(-1)}>
            <ChevronLeft size={26} />
          </IconButton>
          {isToday ? (
            <Tippy content="Come back tomorrow!" trigger="click">
              {/* `Box` wrapper needed because button is disabled */}
              <Box sx={{ lineHeight: 1 }}>{nextButton}</Box>
            </Tippy>
          ) : (
            nextButton
          )}
        </Flex>
      </Flex>
    </Card>
  );
}
