import { useEffect } from "react";
import { useRouter } from "next/router";
import ga from "react-ga";

ga.initialize("UA-37353161-23");

export function Analytics() {
  usePageViews();
  return null;
}

function usePageViews() {
  const router = useRouter();
  useEffect(() => {
    const logPage = (url: string) => ga.pageview(url);

    // log landing page
    logPage(router.asPath);

    // log other pages as route changes
    router.events.on("routeChangeComplete", logPage);
    return () => {
      router.events.off("routeChangeComplete", logPage);
    };
  }, []);
}
