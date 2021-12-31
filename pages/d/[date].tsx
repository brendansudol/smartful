import { GetServerSideProps } from "next";
import { getData } from "../../lib/getData";
import { isFuture, parseISO } from "../../utils/dates";
import Home from "../index";

// re-use component from `pages/index`
export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const dateParam = context.query.date as string;
  const dateISO: string | null = parseISO(dateParam).toISODate();

  if (dateISO == null || isFuture(dateISO)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      dateISO,
      data: getData(dateISO),
      isHomepage: false,
    },
  };
};
