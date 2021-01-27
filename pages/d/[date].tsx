import { isFuture, isValid, parseISO } from "date-fns";
import { GetServerSideProps } from "next";
import { getData } from "../../lib/getData";
import { formatDate, START_DATE } from "../../utils/dates";
import Home from "../index";

// re-use component from `pages/index`
export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const dateParam = context.query.date as string;
  const date = parseISO(dateParam);

  if (!isValid(date) || isFuture(date) || date < START_DATE) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const dateISO = formatDate(date);
  const data = getData();

  return {
    props: {
      dateISO,
      data,
    },
  };
};
