import {
  signalCompassLayout,
  SignalCompassNodeId,
} from "./signalCompassLayout";

const CENTER = {
  x: 500,
  y: 500,
};

export interface CompassDirection {
  vector: {
    x: number;
    y: number;
  };

  angle: number;

  glowOrigin: {
    x: number;
    y: number;
  };

  haloOffset: {
    x: number;
    y: number;
  };
}

export function getCompassDirection(
  id?: SignalCompassNodeId | null
): CompassDirection {
  //
  // Default (centered)
  //

  if (!id) {
    return {
      vector: {
        x: 0,
        y: 0,
      },

      angle: 0,

      glowOrigin: {
        x: 50,
        y: 35,
      },

      haloOffset: {
        x: 0,
        y: 0,
      },
    };
  }

  const {
    network: {
      svg: { x, y },
    },
  } = signalCompassLayout[id];

  //
  // Direction vector
  //

  const dx = x - CENTER.x;
  const dy = y - CENTER.y;

  const length = Math.sqrt(dx * dx + dy * dy) || 1;

  const nx = dx / length;
  const ny = dy / length;

  //
  // Convert to Beacon percentages
  //

  const glowOrigin = {
    x: 50 + nx * 28,
    y: 35 + ny * 28,
  };

  //
  // Halo drift
  //

  const haloOffset = {
    x: nx * 8,
    y: ny * 8,
  };

  return {
    vector: {
      x: nx,
      y: ny,
    },

    angle: Math.atan2(ny, nx),

    glowOrigin,

    haloOffset,
  };
}