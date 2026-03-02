const WHATSAPP_NUMBER = "2341234567890"; // Replace with actual number

export function generateWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return baseUrl;
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
