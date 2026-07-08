export const signalCompassLayout = {
  politics: {
    node: {
      top: "2%",
      left: "50%",
      transform: "translateX(-50%)",
    },
    network: {
      logoAnchor: "top",
      entrySide: "bottom",
    },
  },

  sports: {
    node: {
      top: "22%",
      right: "4%",
    },
    network: {
      logoAnchor: "right",
      entrySide: "left",
    },
  },

  crypto: {
    node: {
      bottom: "24%",
      right: "12%",
    },
    network: {
      logoAnchor: "right",
      entrySide: "left",
    },
  },

  weather: {
    node: {
      bottom: "6%",
      right: "30%",
    },
    network: {
      logoAnchor: "bottom",
      entrySide: "top",
    },
  },

  entertainment: {
    node: {
      bottom: "0%",
      left: "50%",
      transform: "translateX(-50%)",
    },
    network: {
      logoAnchor: "bottom",
      entrySide: "top",
    },
  },

  macro: {
    node: {
      bottom: "6%",
      left: "30%",
    },
    network: {
      logoAnchor: "bottom",
      entrySide: "top",
    },
  },

  ai: {
    node: {
      bottom: "24%",
      left: "12%",
    },
    network: {
      logoAnchor: "left",
      entrySide: "right",
    },
  },

  economy: {
    node: {
      top: "22%",
      left: "4%",
    },
    network: {
      logoAnchor: "left",
      entrySide: "right",
    },
  },
} as const;

export type SignalCompassNodeId =
  keyof typeof signalCompassLayout;