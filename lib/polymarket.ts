export async function getWalletData(address: string) {
  try {
    const response = await fetch(
      `https://data-api.polymarket.com/positions?user=${address}`,
      {
        next: { revalidate: 60 },
      }
    );

    const positions = await response.json();

    return {
      wallet: address,
      positions,
      fetchedAt: new Date().toISOString(),
    };
  } catch (error) {
    return {
      wallet: address,
      error: "Failed to fetch positions",
      fetchedAt: new Date().toISOString(),
    };
  }
}