import { config } from "./config";

export const capitalizeFirstLetter = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getGenderValues = () => {
	return config.genders.map((item) => item.value);
};
