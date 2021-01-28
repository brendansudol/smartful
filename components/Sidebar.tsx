import NextImage from "next/image";
import { Box, Button, Divider, Image, Link, NavLink, Text } from "theme-ui";
import { useModal } from "../contexts/modal";

const categories = [
  { id: "word", name: "Word", icon: "1f524" },
  { id: "idiom", name: "Idiom", icon: "1f4a1" },
  { id: "funFacts", name: "Fun facts", icon: "1f649" },
  { id: "artist", name: "Artist", icon: "1f3a8" },
  { id: "wiki", name: "Wikipedia article", icon: "1f4da" },
  { id: "person", name: "Historical figure", icon: "1f9d1" },
  { id: "event", name: "Historic event", icon: "1f4c5" },
  { id: "charity", name: "Charity", icon: "1f497" },
  { id: "quote", name: "Quote", icon: "1f4dd" },
];

export function Sidebar() {
  const { showModal } = useModal();

  // replacing normal anchor link clicking behavior
  // with a smooth scrolling alternative (not sure it's worth it...)
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
          {categories.map((c) => (
            <NavLink
              key={c.id}
              href={`#${c.id}`}
              mb={1}
              px={[0, 1]}
              sx={{ display: "flex", alignItems: "center" }}
              onClick={handleCategoryClick}
            >
              <Image src={`/img/emojis/${c.icon}.svg`} sx={{ mr: "12px", width: 18, height: 18 }} />
              <Text sx={{ flex: "1 1 auto", fontWeight: "body" }}>{c.name}</Text>
            </NavLink>
          ))}
        </Box>
        <Divider my={4} />
      </Box>
      <Box mt={[2, 0]} mb={[2, 0]}>
        <Button
          variant="nav"
          mb={[0, 1]}
          mr={[2, 0]}
          onClick={() => showModal(<Box>TODO: About info...</Box>)}
        >
          About
        </Button>
        <Button
          variant="nav"
          mb={[0, 1]}
          mr={[2, 0]}
          sx={{ display: ["none", "inherit"] }}
          onClick={() => showModal(<Box>TODO: Data sources info...</Box>)}
        >
          Data sources
        </Button>
        <Button
          variant="nav"
          mb={[0, 1]}
          mr={[2, 0]}
          onClick={() => showModal(<Box>TODO: Subscribe to email info...</Box>)}
        >
          Subscribe to email
        </Button>
      </Box>
    </Box>
  );
}
