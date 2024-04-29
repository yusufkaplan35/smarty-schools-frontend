import UnAuthorizated from "@/components/common/errors/unauthorized";
import Spacer from "@/components/common/spacer";
import React from "react";

const UnauthorizedPage = () => {
	return (
		<>
			<Spacer />
			<UnAuthorizated />
			<Spacer />
		</>
	);
};

export default UnauthorizedPage;
