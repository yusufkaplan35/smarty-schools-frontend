import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavbarBrand } from "react-bootstrap";

const Logo = ({ type = "dark" }) => {
	return (
		<NavbarBrand href="/" as={Link}>
			<Image
				src={`/images/logo/logo-${type}.png`}
				width={230}
				height={103}
				alt={config.project.name}
			/>
		</NavbarBrand>
	);
};

export default Logo;
