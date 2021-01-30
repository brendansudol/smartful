import { format, parseISO, startOfToday } from "date-fns";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Box } from "theme-ui";
import { DateNav } from "../components/DateNav";
import { MainContent } from "../components/MainContent";
import { ScrollToTop } from "../components/ScrollToTop";
import { Sidebar } from "../components/Sidebar";
import { getData } from "../lib/getData";
import { IDayData } from "../lib/types";
import { formatDate } from "../utils/dates";

interface IProps {
  data: IDayData;
  dateISO: string;
}

export default function Home({ data, dateISO }: IProps) {
  const date = parseISO(dateISO);
  const dateDisplay = format(date, "MMM d");

  return (
    <div>
      <Head>
        <title>Smartful :: {dateDisplay} :: Learn something every day</title>
      </Head>
      <Box bg="yellow" py={2} />
      <Box sx={{ maxWidth: 950, mx: "auto", px: 3, py: [4, 5] }}>
        <Box sx={{ display: [null, "flex"], alignItems: [null, "flex-start"] }}>
          <Sidebar data={data} />
          <Box p={[1, 2]} sx={{ flex: "1 1 auto" }}>
            <DateNav date={date} />
            <MainContent data={data} />
          </Box>
        </Box>
      </Box>
      <ScrollToTop />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const data = getData();
  const today = startOfToday();
  const dateISO = formatDate(today);

  return {
    props: {
      data,
      dateISO,
    },
  };
};
