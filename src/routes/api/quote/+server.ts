import { json, type RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { Resend } from 'resend';

interface QuoteRequestBody {
	requestedClass: string;
	preferredDateTime: string;
	company: string;
	location: string;
	participantsCount: number | string;
	studentNames: string;
	oqPlatform: string;
	oqTasks: string;
	equipmentNeeds: string;
	contactName: string;
	contactEmail: string;
	contactPhone: string;
	honeypot?: string;
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	try {
		const body = (await request.json()) as QuoteRequestBody;

		const {
			requestedClass,
			preferredDateTime,
			company,
			location,
			participantsCount,
			studentNames,
			oqPlatform,
			oqTasks,
			equipmentNeeds,
			contactName,
			contactEmail,
			contactPhone,
			honeypot
		} = body;

		// 1. Silent anti-bot honeypot check
		if (honeypot && honeypot.trim() !== '') {
			return json({ success: true, message: 'Request processed' }, { status: 200 });
		}

		// 2. Server-side validation
		if (
			!company?.trim() ||
			!contactName?.trim() ||
			!contactEmail?.trim() ||
			!contactPhone?.trim() ||
			!requestedClass?.trim() ||
			!preferredDateTime?.trim() ||
			!location?.trim()
		) {
			return json({ error: 'Please complete all required fields.' }, { status: 400 });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(contactEmail.trim())) {
			return json({ error: 'Please provide a valid email address.' }, { status: 400 });
		}

		// 3. Resend configuration
		const apiKey = env.RESEND_API_KEY;
		if (!apiKey || apiKey === 're_your_api_key_here') {
			console.error('[Resend Error] RESEND_API_KEY is not configured.');
			return json(
				{
					error: 'Email service is not configured. Please ensure RESEND_API_KEY is set.'
				},
				{ status: 503 }
			);
		}

		// Recipient email - directed to Joyce
		const rawToEmail = env.FORM_TO_EMAIL || 'Joyce.Sanchez@SafeHandsSafety.com';
		const toEmails = rawToEmail
			.split(',')
			.map((addr) => addr.trim())
			.filter(Boolean);

		const fromEmail = env.FORM_FROM_EMAIL || 'Need OQ <no-reply@safehandssafety.com>';

		const resend = new Resend(apiKey);
		const submissionTime = new Date().toLocaleString('en-US', {
			timeZone: 'America/Chicago',
			dateStyle: 'full',
			timeStyle: 'long'
		});

		let clientIp = 'Unknown';
		try {
			clientIp = getClientAddress();
		} catch {
			// Ignore if unavailable
		}

		const cleanStudentNames = studentNames?.trim()
			? studentNames.trim().replace(/\n/g, '<br />')
			: 'None listed (To be provided)';
		const cleanEquipmentNeeds = equipmentNeeds?.trim()
			? equipmentNeeds.trim().replace(/\n/g, '<br />')
			: 'None specified';
		const cleanOqTasks = oqTasks?.trim() ? oqTasks.trim() : 'Standard CCTs / None specified';
		const cleanOqPlatform = oqPlatform?.trim() ? oqPlatform.trim() : 'Not specified';

		// 4. HTML Email Template
		const html = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>New Need OQ Training & Assessment Request</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#18181b;">
	<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f4f5;padding:32px 16px;">
		<tr>
			<td align="center">
				<table role="presentation" width="100%" style="max-width:640px;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:4px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
					
					<!-- Header Bar -->
					<tr>
						<td style="background-color:#0A0A0A;padding:24px 28px;border-bottom:3px solid #D22F25;">
							<table role="presentation" width="100%" cellspacing="0" cellpadding="0">
								<tr>
									<td>
										<div style="font-size:22px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;text-transform:uppercase;">
											NEED OQ<span style="color:#D22F25;">.</span>
										</div>
										<div style="font-size:11px;color:#a1a1aa;letter-spacing:1px;text-transform:uppercase;margin-top:2px;">
											New Training &amp; Assessment Registration
										</div>
									</td>
									<td align="right">
										<span style="display:inline-block;padding:4px 10px;background-color:#18181b;border:1px solid #27272a;color:#ef4444;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;">
											INCOMING REQUEST
										</span>
									</td>
								</tr>
							</table>
						</td>
					</tr>

					<!-- Submitter Summary Card -->
					<tr>
						<td style="padding:24px 28px 12px 28px;">
							<div style="background-color:#f8fafc;border-left:4px solid #D22F25;padding:16px 20px;border-radius:2px;">
								<div style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">
									Primary Contact
								</div>
								<div style="font-size:18px;font-weight:800;color:#0f172a;margin-top:4px;">
									${contactName} &bull; ${company}
								</div>
								<div style="font-size:13px;color:#334155;margin-top:6px;line-height:1.5;">
									<strong>Email:</strong> <a href="mailto:${contactEmail}" style="color:#D22F25;text-decoration:none;">${contactEmail}</a> &nbsp;|&nbsp; 
									<strong>Phone:</strong> <a href="tel:${contactPhone}" style="color:#0f172a;text-decoration:none;">${contactPhone}</a>
								</div>
							</div>
						</td>
					</tr>

					<!-- Main Details Table -->
					<tr>
						<td style="padding:12px 28px 24px 28px;">
							<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
								
								<tr style="border-bottom:1px solid #f1f5f9;">
									<td style="padding:10px 0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;width:40%;">Requested Class</td>
									<td style="padding:10px 0;font-size:14px;font-weight:700;color:#0f172a;">${requestedClass}</td>
								</tr>

								<tr style="border-bottom:1px solid #f1f5f9;">
									<td style="padding:10px 0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;">Preferred Dates/Times</td>
									<td style="padding:10px 0;font-size:14px;color:#0f172a;">${preferredDateTime}</td>
								</tr>

								<tr style="border-bottom:1px solid #f1f5f9;">
									<td style="padding:10px 0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;">Location</td>
									<td style="padding:10px 0;font-size:14px;color:#0f172a;">${location}</td>
								</tr>

								<tr style="border-bottom:1px solid #f1f5f9;">
									<td style="padding:10px 0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;">Number of Participants</td>
									<td style="padding:10px 0;font-size:14px;font-weight:700;color:#D22F25;">${participantsCount} Student(s)</td>
								</tr>

								<tr style="border-bottom:1px solid #f1f5f9;">
									<td style="padding:10px 0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;">OQ Platform</td>
									<td style="padding:10px 0;font-size:14px;color:#0f172a;">${cleanOqPlatform}</td>
								</tr>

								<tr style="border-bottom:1px solid #f1f5f9;">
									<td style="padding:10px 0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;">OQ Tasks</td>
									<td style="padding:10px 0;font-size:14px;color:#0f172a;">${cleanOqTasks}</td>
								</tr>

								<tr style="border-bottom:1px solid #f1f5f9;">
									<td style="padding:12px 0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;vertical-align:top;">Student Names</td>
									<td style="padding:12px 0;font-size:13px;color:#1e293b;line-height:1.6;background-color:#fafafa;padding-left:12px;border-radius:2px;">
										${cleanStudentNames}
									</td>
								</tr>

								<tr>
									<td style="padding:12px 0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;vertical-align:top;">Equipment Needs</td>
									<td style="padding:12px 0;font-size:13px;color:#1e293b;line-height:1.6;background-color:#fafafa;padding-left:12px;border-radius:2px;">
										${cleanEquipmentNeeds}
									</td>
								</tr>

							</table>
						</td>
					</tr>

					<!-- Footer Metadata -->
					<tr>
						<td style="background-color:#fafafa;padding:16px 28px;border-top:1px solid #e4e4e7;font-size:11px;color:#71717a;line-height:1.5;">
							<table role="presentation" width="100%" cellspacing="0" cellpadding="0">
								<tr>
									<td>
										Submitted via <strong>Need OQ Landing Page</strong> &bull; ${submissionTime}<br>
										Client IP: ${clientIp}
									</td>
									<td align="right">
										<a href="mailto:${contactEmail}?subject=Re:%20Need%20OQ%20Evaluation%20Request%20-%20${encodeURIComponent(company)}" style="display:inline-block;padding:8px 14px;background-color:#D22F25;color:#ffffff;text-decoration:none;font-weight:700;border-radius:2px;font-size:11px;text-transform:uppercase;">
											Reply to Submitter
										</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>

				</table>
			</td>
		</tr>
	</table>
</body>
</html>
		`.trim();

		// Send email via Resend
		const data = await resend.emails.send({
			from: fromEmail,
			to: toEmails,
			replyTo: contactEmail,
			subject: `[Need OQ Request] ${requestedClass} - ${company} (${participantsCount} pax)`,
			html
		});

		if (data.error) {
			console.error('[Resend Error]', data.error);
			return json({ error: data.error.message || 'Failed to dispatch email' }, { status: 500 });
		}

		return json({
			success: true,
			message: 'Registration request successfully sent to Joyce and the Need OQ evaluation team.',
			id: data.data?.id
		});
	} catch (err: unknown) {
		console.error('[Server Error in /api/quote]', err);
		const message = err instanceof Error ? err.message : 'Internal Server Error';
		return json({ error: message }, { status: 500 });
	}
};
