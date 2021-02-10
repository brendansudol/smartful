import { DateTime } from "luxon";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Box } from "theme-ui";
import { DateNav } from "../components/DateNav";
import { MainContent } from "../components/MainContent";
import { ScrollToTop } from "../components/ScrollToTop";
import { Sidebar } from "../components/Sidebar";
import { getData } from "../lib/getData";
import { IDayData } from "../lib/types";
import { getTodayISO, parseISO } from "../utils/dates";

interface IProps {
  data: IDayData;
  dateISO: string;
  isHomepage?: boolean;
}

export default function Home({ data, dateISO, isHomepage = true }: IProps) {
  const date = parseISO(dateISO);
  const dateDisplay = date.toFormat("DD");

  return (
    <div>
      <Head>
        <title>Smartful :: {isHomepage ? "Learn something every day" : dateDisplay}</title>
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
  const dateISO = getTodayISO();
  const data = getData(dateISO);

  return {
    props: {
      data,
      dateISO,
    },
  };
};
