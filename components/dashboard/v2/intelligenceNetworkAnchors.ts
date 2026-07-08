export const logoAnchors = {
  top: {
    x: 500,
    y: 465,
  },

  right: {
    x: 535,
    y: 500,
  },

  bottom: {
    x: 500,
    y: 535,
  },

  left: {
    x: 465,
    y: 500,
  },
} as const;

export const nodeAnchors = {
  politics: {
    x: 500,
    y: 290,
    logoAnchor: "top",
  },

  sports: {
    x: 725,
    y: 410,
    logoAnchor: "right",
  },

  crypto: {
    x: 650,
    y: 645,
    logoAnchor: "right",
  },

  weather: {
    x: 560,
    y: 815,
    logoAnchor: "bottom",
  },

  entertainment: {
    x: 500,
    y: 890,
    logoAnchor: "bottom",
  },

  macro: {
    x: 440,
    y: 815,
    logoAnchor: "bottom",
  },

  ai: {
    x: 340,
    y: 645,
    logoAnchor: "left",
  },

  economy: {
    x: 275,
    y: 410,
    logoAnchor: "left",
  },
} as const;

export type NodeId = keyof typeof nodeAnchors;
export type LogoAnchor = keyof typeof logoAnchors;