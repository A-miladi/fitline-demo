import type { ContactInfo } from "@/types";
import { CLINIC } from "./clinic";

export const CONTACT_INFO: ContactInfo = {
  phone: [...CLINIC.phones],
  address: `${CLINIC.city}، ${CLINIC.streetAddress}`,
  location: {
    mapUrl: "https://maps.google.com/?q=34.087055,49.695316",
    neshanUrl: "https://neshan.org/maps/routing/car/destination/34.087055,49.695316",
    embedUrl: "https://maps.google.com/maps?q=34.087055,49.695316&z=16&output=embed",
  },
  workingHours: { ...CLINIC.workingHours },
};

