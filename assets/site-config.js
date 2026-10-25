/* SYS Medi Tech contact settings. WhatsApp number is country code + digits only. */
const SYS_MEDI_TECH_WHATSAPP_NUMBER = "918870002787";
const SYS_WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello SYS Medi Tech, I would like to discuss a healthcare infrastructure project."
);

const SYS_WHATSAPP_URL = `https://wa.me/${SYS_MEDI_TECH_WHATSAPP_NUMBER}?text=${SYS_WHATSAPP_MESSAGE}`;
document.querySelectorAll(".whatsapp-float").forEach((link) => {
  link.href = SYS_WHATSAPP_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.title = "Chat with SYS Medi Tech on WhatsApp";
  link.setAttribute("aria-label", "Chat with SYS Medi Tech on WhatsApp");
});
