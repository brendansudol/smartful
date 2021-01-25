import { format, formatISO, parseISO, startOfToday } from "date-fns";
import Markdown from "markdown-to-jsx";
import { GetServerSideProps } from "next";
import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";
import { Box, Button, Card, Divider, Flex, IconButton, Image, Link, NavLink, Text } from "theme-ui";
import { DateNav } from "../components/DateNav";
import { getData } from "../lib/getData";
import { PlayCircle } from "../utils/icons";

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

export interface HomeProps {
  data: any;
  dateISO: string;
}

export default function Home({ data, dateISO }: HomeProps) {
  const { artist, charity, event, funFacts, idiom, person, quote, wiki, word } = data;
  const date = parseISO(dateISO);
  const dateDisplay = format(date, "MMM d"); // e.g., Jan 1, Mar 10

  const speakWord = () => {
    const url = `/static/${word.audioPath}`;
    const audio = new Audio(url);
    audio.play();
  };

  // replacing normal anchor link clicking behavior
  // with a smooth scrolling alternative (not sure it's worth it...)
  const handleCategoryClick = (evt) => {
    evt.preventDefault();
    const hash = (evt.currentTarget?.href ?? "").split("#")[1];
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, null, `#${hash}`);
    }
  };

  return (
    <div>
      <Head>
        <title>Smartful :: {dateDisplay} :: Learn something every day</title>
      </Head>
      <Box bg="yellow" py={2} />
      <Box sx={{ maxWidth: 950, mx: "auto", px: 3, py: [4, 5] }}>
        <Box sx={{ display: [null, "flex"], alignItems: [null, "flex-start"] }}>
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
                <NextImage src="/smartful.png" width={26} height={26} />
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
                    <Image mr={2} src={`/emojis/${c.icon}.svg`} width={16} height={16} />
                    <Text sx={{ flex: "1 1 auto", fontWeight: "body" }}>{c.name}</Text>
                  </NavLink>
                ))}
              </Box>
              <Divider my={4} />
            </Box>
            <Box mt={[2, 0]} mb={[2, 0]}>
              <Button variant="nav" mb={[0, 1]} mr={[2, 0]}>
                About
              </Button>
              <Button variant="nav" mb={[0, 1]} mr={[2, 0]} sx={{ display: ["none", "inherit"] }}>
                Data sources
              </Button>
              <Button variant="nav" mb={[0, 1]} mr={[2, 0]}>
                Subscribe to email
              </Button>
            </Box>
          </Box>
          <Box p={[1, 2]} sx={{ flex: "1 1 auto" }}>
            <DateNav date={date} />
            <Box id="word" py={1}>
              <Card mb={3}>
                <Text variant="cardLabel">Word</Text>
                <Box mb={3}>
                  <Flex sx={{ alignItems: "center" }}>
                    <Text variant="cardTitle" mr={1}>
                      {word.word}
                    </Text>
                    <IconButton p={0} sx={{ width: 24, height: 24 }} onClick={speakWord}>
                      <PlayCircle size={18} />
                    </IconButton>
                  </Flex>
                  <Text variant="cardSubtitle">{word.partOfSpeech}</Text>
                </Box>
                <Box mb={3}>
                  <Text variant="sectionLabel">Definition</Text>
                  {word.definitions.length === 1 ? (
                    <Text>{word.definitions[0]}</Text>
                  ) : (
                    <Box as="ol">
                      {word.definitions.map((def, i) => (
                        <Box key={i} as="li">
                          {def}
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
                <Box mb={3}>
                  <Text variant="sectionLabel">Example</Text>
                  <Box as={Markdown}>{word.examples[0]}</Box>
                </Box>
                <Box>
                  <Text variant="sectionLabel">Origin</Text>
                  <Box as={Markdown}>{word.didYouKnow}</Box>
                </Box>
              </Card>
            </Box>
            <Box id="idiom" py={1}>
              <Card mb={3}>
                <Text variant="cardLabel">Idiom</Text>
                <Text variant="cardTitle" mb={3}>
                  {idiom.term}
                </Text>
                <Box as={Markdown}>{idiom.definition}</Box>
              </Card>
            </Box>
            <Box id="funFacts" py={1}>
              <Card mb={3}>
                <Text variant="cardLabel">Fun facts</Text>
                <Box as="ol" pt={1}>
                  {funFacts.map((fact) => (
                    <Box key={fact.number} as="li">
                      {fact.text}
                    </Box>
                  ))}
                </Box>
              </Card>
            </Box>
            <Box id="artist" py={1}>
              <Card mb={3}>
                <Flex mb={2}>
                  <Box>
                    <Text variant="cardLabel">Artist</Text>
                    <Box mb={3}>
                      <Text variant="cardTitle" mb={1}>
                        {artist.name}
                      </Text>
                      <Text variant="cardSubtitle">{artist.dates}</Text>
                    </Box>
                  </Box>
                  <Box ml="auto" sx={{ flex: "none" }}>
                    <Image
                      as={NextImage}
                      src={`/static/${artist.mainImg}`}
                      alt={artist.name}
                      width={100}
                      height={100}
                      sx={{ borderRadius: 10 }}
                    />
                  </Box>
                </Flex>
                <Box mb={3}>
                  {artist.summary.slice(0, 2).map((paragraph, i) => (
                    <Text key={i} as="p" mb={2}>
                      {paragraph}
                    </Text>
                  ))}
                </Box>
                <Box
                  mb={3}
                  sx={
                    {
                      display: "grid",
                      gridGap: 3,
                      gridTemplateColumns: ["repeat(2, 1fr)", "repeat(4, 1fr)"],
                    } as any
                  }
                >
                  {artist.artworkImgs.slice(0, 4).map((img, i) => (
                    <Link key={i} href={img.source} target="_blank">
                      <Image
                        as={NextImage}
                        src={`/static/${img.path}`}
                        alt={img.name}
                        width={250}
                        height={250}
                        sx={{ borderRadius: 10 }}
                      />
                    </Link>
                  ))}
                </Box>
                <Link href={artist.urlGoogle} target="_blank">
                  Learn more »
                </Link>
              </Card>
            </Box>
            <Box id="wiki" py={1}>
              <Card mb={3}>
                <Text variant="cardLabel">Wikipedia article</Text>
                <Text variant="cardTitle" mb={3}>
                  {wiki.name}
                </Text>
                <Box mb={3}>{wiki.summary}</Box>
                <Link href={wiki.url}>Learn more »</Link>
              </Card>
            </Box>
            <Box id="person" py={1}>
              <Card mb={3}>
                <Flex mb={2}>
                  <Box>
                    <Text variant="cardLabel">Historical figure</Text>
                    <Box mb={3}>
                      <Text variant="cardTitle" mb={1}>
                        {person.name}
                      </Text>
                      <Text variant="cardSubtitle">{person.dates}</Text>
                    </Box>
                  </Box>
                  <Box ml="auto" sx={{ flex: "none" }}>
                    <Image
                      as={NextImage}
                      src={`/static/${person.mainImg}`}
                      alt={person.name}
                      width={100}
                      height={100}
                      sx={{ borderRadius: 10 }}
                    />
                  </Box>
                </Flex>
                <Box mb={3}>
                  {person.summary.slice(0, 2).map((paragraph, i) => (
                    <Text key={i} as="p" mb={2}>
                      {paragraph}
                    </Text>
                  ))}
                </Box>
                <Link href={person.urlWiki} target="_blank">
                  Learn more »
                </Link>
              </Card>
            </Box>
            <Box id="event" py={1}>
              <Card mb={3}>
                <Flex mb={2}>
                  <Box>
                    <Text variant="cardLabel">Historic event</Text>
                    <Box mb={3}>
                      <Text variant="cardTitle" mb={1}>
                        {event.name}
                      </Text>
                      <Text variant="cardSubtitle">{event.dates}</Text>
                    </Box>
                  </Box>
                  <Box ml="auto" sx={{ flex: "none" }}>
                    <Image
                      as={NextImage}
                      src={`/static/${event.mainImg}`}
                      alt={event.name}
                      width={100}
                      height={100}
                      sx={{ borderRadius: 10 }}
                    />
                  </Box>
                </Flex>
                <Box mb={3}>
                  {event.summary.slice(0, 2).map((paragraph, i) => (
                    <Text key={i} as="p" mb={2}>
                      {paragraph}
                    </Text>
                  ))}
                </Box>
                <Link href={person.urlWiki} target="_blank">
                  Learn more »
                </Link>
              </Card>
            </Box>
            <Box id="charity" py={1}>
              <Card mb={3}>
                <Text variant="cardLabel">Charity</Text>
                <Box mb={3}>
                  <Text variant="heading" mb={1} sx={{ fontSize: 4 }}>
                    {charity.name}
                  </Text>
                  <Text sx={{ color: "gray", fontSize: 1 }}>
                    {charity.category} • {charity.cause}
                  </Text>
                </Box>
                <Box mb={3}>
                  <Markdown>{charity.mission}</Markdown>
                </Box>
                <Link href={charity.url} target="_blank">
                  Learn more »
                </Link>
              </Card>
            </Box>
            <Box id="quote" py={1}>
              <Card mb={3}>
                <Text variant="cardLabel">Quote</Text>
                <Text mb={1}>{quote.quote}</Text>
                <Text variant="cardSubtitle">—{quote.author}</Text>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const data = getData();
  const today = startOfToday();
  const dateISO = formatISO(today, { representation: "date" });

  return {
    props: {
      data,
      dateISO,
    },
  };
};
