import { config } from "@/helpers/config";
import React from "react";

const ContactMap = () => {
	return (
		<iframe
			title="map"
			src={config.contact.mapEmbedURL}
			width="100%"
			height="450"
			style={{ border: 0, display: "block" }}
			allowFullScreen=""
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		></iframe>
	);
};

export default ContactMap;
