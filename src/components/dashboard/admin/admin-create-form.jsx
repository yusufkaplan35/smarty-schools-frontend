"use client";
import { createAdminAction } from "@/actions/admin-actions";
import { initialResponse } from "@/helpers/form-validation";
import React from "react";
import { useFormState } from "react-dom";

const AdminCreateForm = () => {
	const [state, dispatch] = useFormState(createAdminAction, initialResponse);

	return <div>AdminCreateForm</div>;
};

export default AdminCreateForm;
