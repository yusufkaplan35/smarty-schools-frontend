"use client";
import { swConfirm } from "@/helpers/swal";
import React from "react";
import { Nav } from "react-bootstrap";
import { MdOutlineLogout } from "react-icons/md";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
	const handleLogout = async () => {
		const res = await swConfirm("Are you sure to logout?");
		if (!res.isConfirmed) return;

		signOut({ callbackUrl: "/" });
	};

	return (
		<Nav.Link onClick={handleLogout}>
			<MdOutlineLogout /> LOGOUT
		</Nav.Link>
	);
};

export default LogoutButton;
