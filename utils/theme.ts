const tableCellStyle = {
  textAlign: "left",
  py: "4px",
  pr: "4px",
  pl: 0,
  borderColor: "muted",
  borderBottomStyle: "solid",
};

const fonts = {
  sans:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  serif: "athelas, georgia, serif",
  monospace: '"duospace", courier, menlo, consolas, monaco, monospace',
};

export default {
  colors: {
    text: "#000000",
    background: "#ffffff",
    primary: "#3333ee",
    secondary: "#111199",
    muted: "#f6f6f6",
    highlight: "#efeffe",
    lightgray: "#e9e9e9",
    gray: "#777777",
    accent: "#660099",
    yellow: "#fff59d",
    darken: "rgba(0, 0, 0, .1)",
    modes: {
      dark: {
        text: "#ffffff",
        background: "#060606",
        primary: "#33ccff",
        secondary: "#ee00ff",
        muted: "#191919",
        lightgray: "#666",
        highlight: "#29112c",
        gray: "#999999",
        accent: "#cc00ff",
      },
    },
  },
  fonts: {
    ...fonts,
    body: fonts.monospace,
    heading: fonts.monospace,
  },
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128],
  breakpoints: ["40em", "56em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
    display: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
    compact: 1,
  },
  sizes: {
    sidebar: 256,
    container: 1024,
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "text.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    cardLabel: {
      variant: "text.caps",
      bg: "yellow",
      display: "inline-block",
      fontSize: 0,
      lineHeight: "heading",
      mb: 3,
    },
    cardTitle: {
      variant: "text.heading",
      fontSize: 4,
    },
    cardSubtitle: {
      color: "gray",
      fontSize: 1,
    },
    sectionLabel: {
      variant: "text.caps",
      fontSize: 0,
      fontWeight: "bold",
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      fontWeight: "bold",
    },
    secondary: {
      variant: "buttons.primary",
      color: "background",
      bg: "secondary",
    },
    icon: {
      p: 0,
      "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.4,
        pointerEvents: "none",
      },
      "&:hover": {
        bg: "muted",
      },
      "&:focus": {
        boxShadow: (t) => `inset 0 0 0 2px ${t.colors.text}`,
        color: "inherit",
        outline: "none",
      },
    },
    nav: {
      variant: "links.nav",
      display: ["inline-block", "block"],
      width: ["inherit", "100%"],
      bg: ["muted", "transparent"],
      textAlign: "left",
      fontFamily: fonts.monospace,
      fontSize: [0, 1],
      cursor: "pointer",
      "&:hover": {
        bg: ["darken", "muted"],
      },
    },
  },
  links: {
    button: {
      display: "inline-block",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: 2,
      p: 3,
      color: "background",
      bg: "text",
      borderRadius: 6,
      "&:hover, &:focus": {
        color: "background",
        bg: "primary",
      },
    },
    nav: {
      display: "block",
      width: "100%",
      px: 2,
      py: 2,
      color: "inherit",
      textDecoration: "none",
      fontSize: 1,
      fontWeight: "bold",
      lineHeight: "compact",
      bg: "transparent",
      transitionProperty: "background-color",
      transitionTimingFunction: "ease-out",
      transitionDuration: ".2s",
      borderRadius: 5,
      "&:hover": {
        bg: "muted",
        color: "inherit",
        textDecoration: "underline",
      },
      "&:focus": {
        boxShadow: (t) => `inset 0 0 0 2px ${t.colors.text}`,
        color: "inherit",
        outline: "none",
      },
      "&.active": {
        color: "primary",
        bg: "muted",
      },
    },
    heading: {
      color: "text",
      fontFamily: "heading",
      fontSize: 4,
      fontWeight: "heading",
      lineHeight: "heading",
      textDecoration: "none",
      "&:hover": {
        color: "inherit",
        textDecoration: "underline",
      },
    },
  },
  badges: {
    primary: {
      color: "background",
    },
    highlight: {
      color: "text",
      bg: "highlight",
    },
    accent: {
      color: "background",
      bg: "accent",
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
    circle: {
      height: 16,
      minWidth: 16,
      lineHeight: "16px",
      textAlign: "center",
      borderRadius: 9999,
    },
  },
  images: {},
  cards: {
    primary: {
      padding: 3,
      borderRadius: 10,
      border: "1px solid",
      borderColor: "lightgray",
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    select: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    slider: {
      bg: "muted",
    },
  },
  alerts: {
    primary: {
      color: "background",
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
    accent: {
      color: "background",
      bg: "accent",
    },
    highlight: {
      color: "text",
      bg: "highlight",
    },
  },
  layout: {
    container: {
      p: 3,
    },
  },
  styles: {
    root: {
      margin: 0,
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    img: {
      maxWidth: "100%",
      height: "auto",
    },
    button: {
      fontFamily: fonts.monospace,
    },
    h1: {
      variant: "text.display",
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "secondary",
      },
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit",
      },
      variant: "prism",
    },
    code: {
      fontFamily: "monospace",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
      ...tableCellStyle,
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
      ...tableCellStyle,
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "lightgray",
    },
  },
};
