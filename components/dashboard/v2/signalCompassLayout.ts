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
      svg: {
        x: 500,
        y: 170,
      },
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
      svg: {
        x: 810,
        y: 355,
      },
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
      svg: {
        x: 720,
        y: 690,
      },
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
      svg: {
        x: 610,
        y: 835,
      },
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
      svg: {
        x: 500,
        y: 885,
      },
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
      svg: {
        x: 390,
        y: 835,
      },
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
      svg: {
        x: 280,
        y: 690,
      },
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
      svg: {
        x: 190,
        y: 355,
      },
    },
  },
} as const;

export type SignalCompassNodeId =
  keyof typeof signalCompassLayout;