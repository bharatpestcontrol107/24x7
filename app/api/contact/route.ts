import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { COMPANY_INFO } from "@/lib/constants";

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
	/* ---------------------------------------------
	 * Parse & Sanitize Input
	 * --------------------------------------------- */
	const body = (await request.json().catch(() => ({}))) as ContactPayload;

	const data = {
		fullName: body.fullName?.trim() || "",
		phone: body.phone?.trim() || "",
		alternatePhone: body.alternatePhone?.trim() || "",
		service: body.service?.trim() || "",
		productOld: body.productOld?.trim() || "",
		address: body.address?.trim() || "",
		pincode: body.pincode?.trim() || "",
	};

	/* ---------------------------------------------
	 * Validation
	 * --------------------------------------------- */
	const errors: Record<string, string> = {};

	if (!data.fullName) errors.fullName = "Full name is required.";

	const phoneDigits = data.phone.replace(/\D/g, "");
	if (phoneDigits.length !== 10)
		errors.phone = "Phone number must be exactly 10 digits.";

	if (!data.service) errors.service = "Service is required.";
	if (!data.productOld) errors.productOld = "Product age is required.";
	if (!data.address) errors.address = "Address is required.";

	const pincodeDigits = data.pincode.replace(/\D/g, "");
	if (pincodeDigits.length !== 6)
		errors.pincode = "Pincode must be exactly 6 digits.";

	if (Object.keys(errors).length > 0) {
		return NextResponse.json({ errors }, { status: 400 });
	}

	/* ---------------------------------------------
	 * Client IP & Device Info
	 * --------------------------------------------- */
	const forwardedFor = request.headers
		.get("x-forwarded-for")
		?.split(",")[0]
		?.trim();

	const realIp = request.headers.get("x-real-ip");

	const clientIp = forwardedFor || realIp || "Unknown";

	const submittedAt = new Date().toLocaleString("en-IN", {
		timeZone: "Asia/Kolkata",
	});

	/* ---------------------------------------------
	 * Mail Configuration
	 * --------------------------------------------- */
	const smtpUser = process.env.SMTP_USER;
	const smtpPass = process.env.SMTP_PASS;
	const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
	const smtpPort = Number(process.env.SMTP_PORT || 465);

	const toEmail = process.env.CONTACT_TO_EMAIL;
	const fromName = process.env.CONTACT_FROM_NAME || "Website Contact";

	if (!smtpUser || !smtpPass || !toEmail) {
		return NextResponse.json(
			{ message: "Email service is not configured." },
			{ status: 500 },
		);
	}

	/* ---------------------------------------------
	 * Send Email
	 * --------------------------------------------- */
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
			replyTo: data.phone,
			subject: `New Service Request - ${COMPANY_INFO.name}`,

			text: `
				Name: ${data.fullName}
				Phone: ${data.phone}
				Alternate Phone: ${data.alternatePhone || "N/A"}
				Service: ${data.service}
				Product Age: ${data.productOld}
				Address: ${data.address}
				Pincode: ${data.pincode}
				IP Address: ${clientIp}
				Submitted At: ${submittedAt}
					`.trim(),
			html: `
<div style="background:#f6f6f6;padding:24px;font-family:Arial,sans-serif;">
  <div style="max-width:720px;margin:auto;background:#ffffff;border:1px solid #e5e5e5;">
    
    <div style="padding:20px;border-bottom:4px solid #ca2929;">
      <h2 style="margin:0;color:#ca2929;">
        New Service Request – ${COMPANY_INFO.name}
      </h2>
    </div>

    <div style="padding:24px;">
      <h3 style="margin-top:0;color:#333;">Customer Details</h3>
      <table width="100%" cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
        <tr><td width="160">Name</td><td>${data.fullName}</td></tr>
        <tr style="background:#fafafa;"><td>Phone</td><td>${data.phone}</td></tr>
        <tr><td>Alternate Phone</td><td>${data.alternatePhone || "N/A"}</td></tr>
        <tr style="background:#fafafa;"><td>Service</td><td>${data.service}</td></tr>
        <tr><td>Product Age</td><td>${data.productOld}</td></tr>
        <tr style="background:#fafafa;"><td>Address</td><td>${data.address}</td></tr>
        <tr><td>Pincode</td><td>${data.pincode}</td></tr>
      </table>

      <h3 style="margin-top:28px;color:#333;">Request Metadata</h3>
      <table width="100%" cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
        <tr><td width="160">Submitted At</td><td>${submittedAt}</td></tr>
        <tr style="background:#fafafa;"><td>IP Address</td><td>${clientIp}</td></tr>
      </table>

      <p style="margin-top:24px;font-size:13px;color:#666;">
        This is an automated message from the ${COMPANY_INFO.name} website.
      </p>
    </div>
  </div>
</div>
      `,
		});

		return NextResponse.json({ message: "Message sent successfully." });
	} catch (error) {
		console.error("CONTACT_FORM_ERROR:", error);
		return NextResponse.json(
			{ message: "Failed to send message. Please try again." },
			{ status: 500 },
		);
	}
}
