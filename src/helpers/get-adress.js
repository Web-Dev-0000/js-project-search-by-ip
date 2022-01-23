export async function getAddress(ip = '95.153.132.157') {
    const response = await fetch(`
    https://geo.ipify.org/api/v1?apiKey=at_G2xUx1MhmZD219lwVjxnPe2XyHIUm&ipAddress=${ip}`);

    return await response.json();
}