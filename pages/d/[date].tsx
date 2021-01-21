import { formatISO, isFuture, isValid, parseISO } from "date-fns";
import { GetServerSideProps } from "next";
import { getData } from "../../lib/getData";
import Home from "../index";

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const dateParam = context.query.date as string;
  const date = parseISO(dateParam);

  if (!isValid(date) || isFuture(date)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const dateISO = formatISO(date, { representation: "date" });
  const data = getData();

  return {
    props: {
      dateISO,
      data,
    },
  };
};
