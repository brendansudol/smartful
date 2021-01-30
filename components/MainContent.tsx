import Markdown from "markdown-to-jsx";
import NextImage from "next/image";
import React from "react";
import { Box, Button, Card, Flex, IconButton, Image, Link, Text } from "theme-ui";
import {
  IArtist,
  IDayData,
  IEvent,
  IFunFact,
  IIdiom,
  IPerson,
  IQuote,
  IWiki,
  IWord,
} from "../lib/types";
import { PlayCircle } from "../utils/icons";

export function Word({ data }: { data: IWord }) {
  const speakWord = () => {
    const url = `/data/${data.audioPath}`;
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <Box id="word" py={1}>
      <Card mb={3}>
        <Text variant="cardLabel">Word</Text>
        <Box mb={3}>
          <Flex sx={{ alignItems: "center" }}>
            <Text variant="cardTitle" mr={1}>
              {data.word}
            </Text>
            <IconButton p={0} sx={{ width: 24, height: 24 }} onClick={speakWord}>
              <PlayCircle size={18} />
            </IconButton>
          </Flex>
          <Text variant="cardSubtitle">{data.partOfSpeech}</Text>
        </Box>
        <Box mb={3}>
          <Text variant="sectionLabel">Definition</Text>
          {data.definitions.length === 1 ? (
            <Text>{data.definitions[0]}</Text>
          ) : (
            <Box as="ol">
              {data.definitions.map((def, i) => (
                <Box key={i} as="li">
                  {def}
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <Box mb={3}>
          <Text variant="sectionLabel">Example</Text>
          <Box as={Markdown}>{data.examples[0]}</Box>
        </Box>
        <Box>
          <Text variant="sectionLabel">Origin</Text>
          <Box as={Markdown}>{data.didYouKnow}</Box>
        </Box>
      </Card>
    </Box>
  );
}

export function Idiom({ data }: { data: IIdiom }) {
  return (
    <Box id="idiom" py={1}>
      <Card mb={3}>
        <Text variant="cardLabel">Idiom</Text>
        <Text variant="cardTitle" mb={3}>
          {data.term}
        </Text>
        <Box as={Markdown}>{data.definition}</Box>
      </Card>
    </Box>
  );
}

export function FunFacts({ data }: { data: IFunFact[] }) {
  return (
    <Box id="funFacts" py={1}>
      <Card mb={3}>
        <Text variant="cardLabel">Fun facts</Text>
        <Box as="ol" pt={1}>
          {data.map((fact) => (
            <Box key={fact.id} as="li">
              {fact.fact}
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
}

export function Artist({ data }: { data: IArtist }) {
  return (
    <Box id="artist" py={1}>
      <Card mb={3}>
        <Flex mb={2}>
          <Box>
            <Text variant="cardLabel">Artist</Text>
            <Box mb={3}>
              <Text variant="cardTitle" mb={1}>
                {data.name}
              </Text>
              <Text variant="cardSubtitle">{data.dates}</Text>
            </Box>
          </Box>
          <Box ml="auto" pl={2} sx={{ flex: "none" }}>
            <Image
              as={NextImage}
              src={`/data/${data.mainImg}`}
              alt={data.name}
              width={100}
              height={100}
              sx={{ borderRadius: 10 }}
            />
          </Box>
        </Flex>
        <Box mb={3}>
          {data.summary.slice(0, 2).map((paragraph, i) => (
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
          {data.artworkImgs.slice(0, 4).map((img, i) => (
            <Link key={i} href={img.source} target="_blank">
              <Image
                as={NextImage}
                src={`/data/${img.path}`}
                alt={img.name}
                width={250}
                height={250}
                sx={{ borderRadius: 10 }}
              />
            </Link>
          ))}
        </Box>
        <Link href={data.urlGoogle} target="_blank">
          Learn more »
        </Link>
      </Card>
    </Box>
  );
}

export function Wiki({ data }: { data: IWiki }) {
  return (
    <Box id="wiki" py={1}>
      <Card mb={3}>
        <Text variant="cardLabel">Wikipedia article</Text>
        <Text variant="cardTitle" mb={3}>
          {data.name}
        </Text>
        <Box mb={3}>{data.summary}</Box>
        <Link href={data.url}>Learn more »</Link>
      </Card>
    </Box>
  );
}

export function Person({ data }: { data: IPerson }) {
  return (
    <Box id="person" py={1}>
      <Card mb={3}>
        <Flex mb={2}>
          <Box>
            <Text variant="cardLabel">Historical figure</Text>
            <Box mb={3}>
              <Text variant="cardTitle" mb={1}>
                {data.name}
              </Text>
              <Text variant="cardSubtitle">{data.dates}</Text>
            </Box>
          </Box>
          <Box ml="auto" pl={2} sx={{ flex: "none" }}>
            <Image
              as={NextImage}
              src={`/data/${data.mainImg}`}
              alt={data.name}
              width={100}
              height={100}
              sx={{ borderRadius: 10 }}
            />
          </Box>
        </Flex>
        <Box mb={3}>
          {data.summary.slice(0, 2).map((paragraph, i) => (
            <Text key={i} as="p" mb={2}>
              {paragraph}
            </Text>
          ))}
        </Box>
        <Link href={data.urlWiki} target="_blank">
          Learn more »
        </Link>
      </Card>
    </Box>
  );
}

export function Event({ data }: { data: IEvent }) {
  return (
    <Box id="event" py={1}>
      <Card mb={3}>
        <Flex mb={2}>
          <Box>
            <Text variant="cardLabel">Historic event</Text>
            <Box mb={3}>
              <Text variant="cardTitle" mb={1}>
                {data.name}
              </Text>
              <Text variant="cardSubtitle">{data.dates}</Text>
            </Box>
          </Box>
          <Box ml="auto" pl={2} sx={{ flex: "none" }}>
            <Image
              as={NextImage}
              src={`/data/${data.mainImg}`}
              alt={data.name}
              width={100}
              height={100}
              sx={{ borderRadius: 10 }}
            />
          </Box>
        </Flex>
        <Box mb={3}>
          {data.summary.slice(0, 2).map((paragraph, i) => (
            <Text key={i} as="p" mb={2}>
              {paragraph}
            </Text>
          ))}
        </Box>
        <Link href={data.urlWiki} target="_blank">
          Learn more »
        </Link>
      </Card>
    </Box>
  );
}

export function Quote({ data }: { data: IQuote }) {
  return (
    <Box id="quote" py={1}>
      <Card mb={3}>
        <Text variant="cardLabel">Quote</Text>
        <Text mb={1}>“{data.quote}”</Text>
        <Text variant="cardSubtitle">—{data.author}</Text>
      </Card>
    </Box>
  );
}

export function MainContent({ data }: { data: IDayData }) {
  const { artist, event, funFacts, idiom, person, quote, wiki, word } = data;

  return (
    <React.Fragment>
      {word && <Word data={word} />}
      {idiom && <Idiom data={idiom} />}
      {funFacts && <FunFacts data={funFacts} />}
      {artist && <Artist data={artist} />}
      {wiki && <Wiki data={wiki} />}
      {person && <Person data={person} />}
      {event && <Event data={event} />}
      {quote && <Quote data={quote} />}
    </React.Fragment>
  );
}
