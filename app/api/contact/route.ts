import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
	fullName?: string;
	phone?: string;
	alternatePhone?: string;
	service?: string;
	productOld?: string;
	address?: string;
	pincode?: string;
};

export async function POST(request: Request) {
	const {
		fullName = "",
		phone = "",
		alternatePhone = "",
		service = "",
		productOld = "",
		address = "",
		pincode = "",
	} = ((await request.json().catch(() => ({}))) as ContactPayload);

	const trimmed = {
		fullName: fullName.trim(),
		phone: phone.trim(),
		alternatePhone: alternatePhone.trim(),
		service: service.trim(),
		productOld: productOld.trim(),
		address: address.trim(),
		pincode: pincode.trim(),
	};

	const errors: Record<string, string> = {};
	if (!trimmed.fullName) errors.fullName = "Full name is required.";

	const phoneDigitsOnly = trimmed.phone.replace(/\D/g, "");
	if (!phoneDigitsOnly || phoneDigitsOnly.length !== 10)
		errors.phone = "Phone must be exactly 10 digits.";
	// Alternate phone is optional
	if (!trimmed.service) errors.service = "Select a service.";
	if (!trimmed.productOld) errors.productOld = "Select product age.";
	if (!trimmed.address) errors.address = "Address is required.";
	const pincodeDigitsOnly = trimmed.pincode.replace(/\D/g, "");
	if (!pincodeDigitsOnly || pincodeDigitsOnly.length !== 6)
		errors.pincode = "Pincode must be exactly 6 digits.";

	if (Object.keys(errors).length > 0) {
		return NextResponse.json({ errors }, { status: 400 });
	}

	const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
	const realIp = request.headers.get("x-real-ip");
	const clientIp = forwardedFor || realIp || "Unknown";
	const userAgent = request.headers.get("user-agent") || "Unknown";
	const submittedAt = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

	const smtpUser = process.env.SMTP_USER;
	const smtpPass = process.env.SMTP_PASS;
	const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
	const smtpPort = Number(process.env.SMTP_PORT || 465);
	const toEmail = process.env.CONTACT_TO_EMAIL;
	const fromName = process.env.CONTACT_FROM_NAME || "Website Contact";

	if (!smtpUser || !smtpPass || !toEmail) {
		return NextResponse.json(
			{ message: "Mail service not configured." },
			{ status: 500 }
		);
	}

	try {
		const transporter = nodemailer.createTransport({
			host: smtpHost,
			port: smtpPort,
			secure: smtpPort === 465,
			auth: {
				user: smtpUser,
				pass: smtpPass,
			},
		});

		await transporter.sendMail({
			from: `${fromName} <${smtpUser}>`,
			to: toEmail,
			replyTo: trimmed.email,
			subject: `New Service Request - 24x7 Repair Services`,
			text: [
				`Name: ${trimmed.fullName}`,
				`Phone: ${trimmed.phone}`,
				`Alternate Phone: ${trimmed.alternatePhone || "(not provided)"}`,
				`Service: ${trimmed.service}`,
				`Product Old: ${trimmed.productOld}`,
				`Address: ${trimmed.address}`,
				`Pincode: ${trimmed.pincode}`,
				`IP: ${clientIp}`,
				`User Agent: ${userAgent}`,
				`Submitted At: ${submittedAt}`,
			].join("\n"),
			html: `
				<div style="font-family: Arial, sans-serif; background: #f7f7f7; padding: 24px;">
					<div style="max-width: 720px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e5e5;">
						<div style="padding: 20px 24px; border-bottom: 3px solid #ca2929;">
							<h2 style="margin: 0; color: #ca2929; font-size: 20px; font-weight: 700;">✉️ New Service Request - 24x7 Repair Services</h2>
						</div>
						<div style="padding: 0 24px 24px 24px;">
							<h3 style="color: #333; margin: 24px 0 12px;">Customer Information</h3>
							<table style="width: 100%; border-collapse: collapse; font-size: 14px;">
								<tbody>
									<tr><td style="padding: 8px 6px; color: #666; width: 160px;">Name:</td><td style="padding: 8px 6px; color: #111;">${trimmed.fullName}</td></tr>
						<tr style="background: #fafafa;"><td style="padding: 8px 6px; color: #666;">Phone:</td><td style="padding: 8px 6px; color: #111;">${trimmed.phone}</td></tr>
						<tr><td style="padding: 8px 6px; color: #666;">Alternate Phone:</td><td style="padding: 8px 6px; color: #111;">${trimmed.alternatePhone || "(not provided)"}</td></tr>
									<tr style="background: #fafafa;"><td style="padding: 8px 6px; color: #666;">Service:</td><td style="padding: 8px 6px; color: #111;">${trimmed.service}</td></tr>
									<tr><td style="padding: 8px 6px; color: #666;">Product Old:</td><td style="padding: 8px 6px; color: #111;">${trimmed.productOld}</td></tr>
									<tr style="background: #fafafa;"><td style="padding: 8px 6px; color: #666;">Address:</td><td style="padding: 8px 6px; color: #111;">${trimmed.address}</td></tr>
									<tr><td style="padding: 8px 6px; color: #666;">Pincode:</td><td style="padding: 8px 6px; color: #111;">${trimmed.pincode}</td></tr>
									<tr style="background: #fafafa;"><td style="padding: 8px 6px; color: #666; vertical-align: top;">Request Details</td></tr>
								</tbody>
							<h3 style="color: #333; margin: 24px 0 12px;">Request Details</h3>
							<table style="width: 100%; border-collapse: collapse; font-size: 14px;">
								<tbody>
									<tr><td style="padding: 8px 6px; color: #666; width: 160px;">Submitted At:</td><td style="padding: 8px 6px; color: #111;">${submittedAt} (IST)</td></tr>
									<tr style="background: #fafafa;"><td style="padding: 8px 6px; color: #666;">IP Address:</td><td style="padding: 8px 6px; color: #111;">${clientIp}</td></tr>
									<tr><td style="padding: 8px 6px; color: #666; vertical-align: top;">User Agent:</td><td style="padding: 8px 6px; color: #111;">${userAgent}</td></tr>
								</tbody>
							</table>
							<p style="margin-top: 24px; color: #555; font-size: 13px;">This is an automated email from the 24x7 Repair Services website. Please respond to this customer as soon as possible.</p>
						</div>
					</div>
				</div>
			`,
		});

		return NextResponse.json({ message: "Message sent" });
	} catch (error) {
		console.error("contact-error", error);
		return NextResponse.json(
			{ message: "Failed to send message. Please try again." },
			{ status: 500 }
		);
	}
}
