/* ============================================
   Shared constants
   ============================================ */

export const SITE_NAME = "EMS Energi";
export const SITE_URL = "https://emsenergi.dk";

export const CONTACT = {
  phone: "+45 31 42 53 64",
  email: "info@emsenergi.dk",
  address: "Nordre Frihavnsgade 65, kl. tv",
  city: "2100 Østerbro",
  instagram: "@emsenergi",
} as const;

export const OPENING_HOURS = [
  { day: "Mandag - Fredag", time: "06:30 - 21:00" },
  { day: "Lørdag", time: "08:00 - 16:00" },
  { day: "Søndag", time: "09:00 - 15:00" },
] as const;
