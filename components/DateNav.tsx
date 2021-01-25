import { addDays, format, formatISO, isToday, parseISO, startOfToday } from "date-fns";
import { useRouter } from "next/router";
import { Box, Card, Flex, IconButton, Text } from "theme-ui";
import { ChevronLeft, ChevronRight } from "../utils/icons";

export interface DateNavProps {
  date: Date;
}

export function DateNav({ date }: DateNavProps) {
  const router = useRouter();
  const goToDay = (delta: number) => () => {
    const nextDate = addDays(date, delta);
    const nextDateISO = formatISO(nextDate, { representation: "date" });
    router.push(`/d/${nextDateISO}`);
  };

  return (
    <Card mb={3}>
      <Flex py={1} sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Box>
          <Text sx={{ display: ["none", "block"], fontSize: 3, fontWeight: "bold" }}>
            {format(date, "MMMM do yyyy")}
          </Text>
          <Text sx={{ display: ["block", "none"], fontSize: 3, fontWeight: "bold" }}>
            {format(date, "MMM do yyyy")}
          </Text>
        </Box>
        <Box>
          <IconButton mr={1} onClick={goToDay(-1)}>
            <ChevronLeft size={26} />
          </IconButton>
          <IconButton disabled={isToday(date)} onClick={goToDay(1)}>
            <ChevronRight size={26} />
          </IconButton>
        </Box>
      </Flex>
    </Card>
  );
}
