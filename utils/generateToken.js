import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // Durée de validité du cookie en millisecondes
		httpOnly: true, // Empêche les attaques XSS (cross-site scripting)
		sameSite: "strict", // Empêche les attaques CSRF (cross-site request forgery)
		secure: process.env.NODE_ENV !== "development", // Assure que le cookie est uniquement envoyé via HTTPS en production
	});
};

export default generateTokenAndSetCookie;
