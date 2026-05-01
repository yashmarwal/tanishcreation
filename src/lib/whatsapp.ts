export const WHATSAPP_NUMBER = "918302430391";
export const PHONE_DISPLAY = "+91 83024 30391";
export const EMAIL = "tanishcreation16@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/tanishcreation.co";
export const GST = "08JVCPD4798C1ZD";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function designInquiry(designName: string) {
  return waLink(`Hi Tanish Creation! I'm interested in ordering ${designName} fabric.`);
}
