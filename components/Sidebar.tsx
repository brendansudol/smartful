import NextImage from "next/image";
import { Box, Button, Divider, Image, Link, NavLink, Text } from "theme-ui";
import { useModal } from "../contexts/modal";
import { IDayData } from "../lib/types";
import { AboutModal } from "./AboutModal";
import { SubscribeModal } from "./SubscribeModal";

interface Category {
  id: keyof IDayData;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: "word", name: "Word", icon: "1f524" },
  { id: "idiom", name: "Idiom", icon: "1f4a1" },
  { id: "funFacts", name: "Fun facts", icon: "1f649" },
  { id: "artist", name: "Artist", icon: "1f3a8" },
  { id: "person", name: "Historical figure", icon: "1f9d1" },
  { id: "event", name: "Historic event", icon: "1f4c5" },
  { id: "quote", name: "Quote", icon: "1f4dd" },
];

export function Sidebar({ data }: { data: IDayData }) {
  const { showModal } = useModal();

  // replacing normal anchor link clicking behavior
  // with a smooth scrolling alternative (worth it? probably not...)
  const handleCategoryClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const hash = (evt.currentTarget?.href ?? "").split("#")[1];
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${hash}`);
    }
  };

  return (
    <Box
      p={[1, 2]}
      mr={[0, 3]}
      sx={{
        flex: "none",
        width: ["auto", 250],
        position: ["static", "sticky"],
        top: 0,
      }}
    >
      <Box px={[0, 1]} mb={[1, 4]}>
        <Link variant="heading" href="/" sx={{ display: "flex", alignItems: "center" }}>
          <Box mr={2}>Smartful</Box>
          <NextImage src="/img/logo.png" width={26} height={26} />
        </Link>
        <Text sx={{ fontSize: 0 }}>Learn something every day</Text>
      </Box>
      <Box sx={{ display: ["none", "block"] }}>
        <Box>
          {categories
            .filter((c) => data[c.id] != null)
            .map((c) => (
              <NavLink
                key={c.id}
                href={`#${c.id}`}
                mb={1}
                px={[0, 1]}
                sx={{ display: "flex", alignItems: "center" }}
                onClick={handleCategoryClick}
              >
                <Image
                  src={`/img/emojis/${c.icon}.svg`}
                  sx={{ mr: "12px", width: 18, height: 18 }}
                />
                <Text sx={{ flex: "1 1 auto", fontWeight: "body" }}>{c.name}</Text>
              </NavLink>
            ))}
        </Box>
        <Divider my={4} />
      </Box>
      <Box mt={[2, 0]} mb={[2, 0]}>
        <Button variant="nav" mb={[0, 1]} mr={[2, 0]} onClick={() => showModal(<AboutModal />)}>
          About
        </Button>
        <Button variant="nav" mb={[0, 1]} mr={[2, 0]} onClick={() => showModal(<SubscribeModal />)}>
          Subscribe to email
        </Button>
      </Box>
    </Box>
  );
}
