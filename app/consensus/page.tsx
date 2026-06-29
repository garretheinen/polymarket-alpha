"use client";

import { useEffect, useState } from "react";

export default function ConsensusPage() {
  const [dashboard, setDashboard] = useState<any>(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data) => setDashboard(data));
  }, []);

  if (!dashboard) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div
        style={{
          marginBottom: "32px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "8px",
          }}
        >
          Smart Money Consensus
        </h1>

        <p
          style={{
            color: "#6b7280",
          }}
        >
          Markets where top traders are
          aligned on the same outcome.
        </p>
      </div>
<h2
  style={{
    marginBottom: "20px",
    fontSize: "28px",
  }}
>
  🔥 Highest Conviction Signals
</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(300px,1fr))",
    gap: "16px",
    marginBottom: "40px",
  }}
>
  {dashboard.consensus
    .slice(0, 3)
    .map((trade: any, index: number) => (
      <div
        key={index}
        style={{
          background: "#ffffff",
          border: "2px solid #16a34a",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: "22px",
          }}
        >
          {trade.market}
        </div>

        <div
          style={{
            marginTop: "12px",
            color: "#6b7280",
          }}
        >
          Position: {trade.outcome}
        </div>

        <div
          style={{
            marginTop: "16px",
            fontSize: "28px",
            fontWeight: 700,
            color: "#16a34a",
          }}
        >
          {formatMoney(trade.capital)}
        </div>

        <div style={{ marginTop: "8px" }}>
          {trade.wallets} Traders
        </div>

        <div style={{ marginTop: "8px" }}>
          Consensus Score: {trade.score}
        </div>
      </div>
    ))}
</div>
      <div
        style={{
          display: "grid",
          gap: "16px",
        }}
      >
        {dashboard.consensus.map(
          (trade: any, index: number) => (
            <div
              key={index}
              style={{
                background: "white",
                border:
                  "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "22px",
                }}
              >
                {trade.market}
              </div>

              <div
                style={{
                  marginTop: "10px",
                }}
              >
                <OutcomeChip
                  outcome={trade.outcome}
                />
              </div>

              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  👥 {trade.wallets} Traders
                </div>

                <div>
                  💰 $
                  {}formatMoney(trade.capital)
                </div>

                <div>
                  ⭐ {trade.score}
                </div>
              </div>

              <div
                style={{
                  marginTop: "12px",
                }}
              >
                {trade.confidence ===
                "Strong" ? (
                  <span
                    style={{
                      color: "#16a34a",
                      fontWeight: 700,
                    }}
                  >
                    🟢 Strong Consensus
                  </span>
                ) : trade.confidence ===
                  "Moderate" ? (
                  <span
                    style={{
                      color: "#ca8a04",
                      fontWeight: 700,
                    }}
                  >
                    🟡 Moderate Consensus
                  </span>
                ) : (
                  <span
                    style={{
                      color: "#dc2626",
                      fontWeight: 700,
                    }}
                  >
                    🔴 Weak Consensus
                  </span>
                )}
              </div>

              <div
                style={{
                  marginTop: "16px",
                }}
              >
                <div
                  style={{
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  Traders
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {trade.traders.map(
  (trader: string, traderIndex: number) => (
    <div
      key={traderIndex}
      style={{
        background: "#eef2ff",
        color: "#4338ca",
        padding: "6px 12px",
        borderRadius: "999px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      👤 {trader}
    </div>
  )
)}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </main>
  );
}

function OutcomeChip({
  outcome,
}: {
  outcome: string;
}) {
  const positive =
    ["yes", "over"].includes(
      String(outcome).toLowerCase()
    );

  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 12px",
        borderRadius: "999px",
        fontWeight: 700,
        background: positive
          ? "#dcfce7"
          : "#fee2e2",
        color: positive
          ? "#166534"
          : "#991b1b",
      }}
    >
      {outcome}
    </span>
  );
}
function formatMoney(value: number) {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  }

  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }

  return `$${value}`;
}