import Link from "next/link";
import React from "react";
import { TfiLock } from "react-icons/tfi";

const UserMenuGuest = () => {
	return (
		<Link href="/login" className="btn btn-primary">
			<TfiLock /> Login
		</Link>
	);
};

export default UserMenuGuest;
