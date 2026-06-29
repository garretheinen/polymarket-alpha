import { notFound } from "next/navigation";

async function getWallet(address: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/wallet/${address}`,
      {
        cache: "no-store",
      }
    );

    return await res.json();
  } catch {
    return null;
  }
}

export default async function WalletPage({
  params,
}: {
  params: Promise<{ address: string }>;
}) {
  const { address } = await params;

  const data = await getWallet(address);

  if (!data) {
    notFound();
  }

  const positions = Array.isArray(data.positions)
    ? data.positions
    : [];

  return (
    <main>
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "20px",
        }}
      >
        Wallet Details
      </h1>

      <div
        style={{
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <strong>Address</strong>

        <div
          style={{
            marginTop: "10px",
            wordBreak: "break-all",
            color: "#6b7280",
          }}
        >
          {address}
        </div>

        <div
          style={{
            marginTop: "10px",
          }}
        >
          Positions: {positions.length}
        </div>
      </div>

      {positions.map(
        (position: any, index: number) => (
          <div
            key={index}
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              {position.title}
            </div>

            <div
              style={{
                marginTop: "8px",
              }}
            >
              Outcome:
              <span
                style={{
                  marginLeft: "8px",
                  fontWeight: 700,
                  color:
                    ["yes", "over"].includes(
                      String(
                        position.outcome
                      ).toLowerCase()
                    )
                      ? "#16a34a"
                      : "#dc2626",
                }}
              >
                {position.outcome}
              </span>
            </div>

            <div
              style={{
                marginTop: "6px",
              }}
            >
              Size: $
              {Number(
                position.size || 0
              ).toLocaleString()}
            </div>

            <div
              style={{
                marginTop: "6px",
                color: "#6b7280",
              }}
            >
              Current Value: $
              {Number(
                position.currentValue || 0
              ).toLocaleString()}
            </div>
          </div>
        )
      )}
    </main>
  );
}