export interface OQPlatform {
	id: string;
	name: string;
	badge: string;
	description: string;
	features: string[];
}

export interface CoveredTask {
	id: string;
	title: string;
	code: string;
	category: 'General' | 'Breakout Tanks' | 'Piping & Valves' | 'Inspection & Integrity';
	description: string;
}

export interface TrainingLocation {
	city: string;
	state: string;
	facilityName: string;
	address: string;
	phone: string;
	email: string;
	isPrimary?: boolean;
}

export const COMPANY_INFO = {
	name: 'Need OQ',
	parentCompany: 'Safe Hands Safety',
	tagline: 'Born and bred in the oil patch. Either oil or gas, we speak your language!',
	experienceYears: 'Since 1999',
	phone: '(432) 231-2207',
	phoneRaw: '+14322312207',
	email: 'JulioMartinez@SafeHandsSafety.com',
	hours: 'Monday – Sunday: 9:00 AM – 5:00 PM (Weekends by Appointment)',
	coverage: 'Nationwide Delivery — In-Field Mobile Labs, ATAC Centers & Remote Proctoring'
};

export const VALUE_PROPOSITIONS = [
	{
		title: 'PHMSA 49 CFR 192 & 195 Compliant',
		desc: 'Full regulatory compliance for Natural Gas (Part 192) and Liquid Pipeline (Part 195) operations with complete audit-ready records.',
		tag: 'REGULATORY COMPLIANCE'
	},
	{
		title: '3 Flexible Delivery Modes',
		desc: 'Get evaluated where you need it: Mobile Labs deployed directly to your job site, our fixed ATAC centers, or Remote Proctoring (CBT).',
		tag: 'FLEXIBLE DEPLOYMENT'
	},
	{
		title: 'NCCER Master Evaluators & Trainers',
		desc: 'Authorized Training Sponsor (ATS) and Unit (ATU) with Master Evaluator credentials for standardized craft verification.',
		tag: 'CERTIFIED EXPERTISE'
	},
	{
		title: 'Multi-Platform Authorization',
		desc: 'One partner for all major OQ databases: Veriforce, Energy WorldNet (EWN), MEA Energy Association, ITS, and OQSG.',
		tag: 'UNIVERSAL COMPATIBILITY'
	}
];

export const OQ_PLATFORMS: OQPlatform[] = [
	{
		id: 'veriforce',
		name: 'Veriforce',
		badge: 'Authorized Provider',
		description: 'Comprehensive operator qualification verification, tracking, and compliance management on the Veriforce platform.',
		features: ['Standard & Custom Covered Tasks', 'Audit-Ready Reporting', 'Field Performance Evaluations']
	},
	{
		id: 'energy-worldnet',
		name: 'Energy Worldnet (EWN)',
		badge: 'Certified Provider',
		description: 'Complete training, testing, and evaluator verification across gas distribution, transmission, and liquid pipelines.',
		features: ['Online CBT Testing', 'Practical Skills Verification', 'Instant Record Synchronization']
	},
	{
		id: 'nccer',
		name: 'NCCER Pipeline Program',
		badge: 'Master Trainer & Sponsor',
		description: 'Authorized Training Sponsor (ATS) & Authorized Training Unit (ATU) offering nationally recognized portable pipeline credentials.',
		features: ['Pipeline Training Curriculum', 'National Craft Assessment', 'Master Evaluator Sign-Off']
	},
	{
		id: 'mea',
		name: 'MEA Energy Association',
		badge: '3rd Party Evaluator',
		description: 'Rigorous 3-step evaluation protocol: comprehensive training, rigorous testing, and documented performance evaluation.',
		features: ['192 Natural Gas Protocols', '195 Hazardous Liquids', 'Industry-Recognized Benchmarks']
	},
	{
		id: 'its',
		name: 'ITS Operator Qualification',
		badge: 'Authorized Center',
		description: 'Industrial Training Services evaluations designed to meet demanding operator and contractor compliance criteria.',
		features: ['Task-Specific Knowledge', 'Hands-On Demonstrations', 'Contractor Readiness']
	},
	{
		id: 'oqsg',
		name: 'OQSG',
		badge: 'Approved Evaluator',
		description: 'Operator Qualification Solutions Group task evaluations and training customized to operator-specific programs.',
		features: ['Operator Matrix Matching', 'Abnormal Operating Conditions', 'Rapid Turnaround']
	}
];

export const ACCREDITATIONS = [
	{ name: 'Basin United', label: 'Authorized Provider' },
	{ name: 'SafeLandUSA / SafeGulf', label: 'Authorized Trainer' },
	{ name: 'Gold Shovel Standard', label: 'Certified Training' },
	{ name: 'PEC H2S Clear', label: 'Certified Instructor' },
	{ name: 'Manlift & Forklift', label: 'Authorized Training Center' },
	{ name: 'Damage Prevention (811)', label: 'Call Before You Dig Partner' }
];

export const COMMON_COVERED_TASKS: CoveredTask[] = [
	{
		id: 'cct-01',
		code: 'TASK 01',
		title: 'Provide Security for Pipeline Facilities',
		category: 'General',
		description: 'Inspection, protocol adherence, and physical/perimeter security maintenance for critical pipeline infrastructure.'
	},
	{
		id: 'cct-02',
		code: 'TASK 02',
		title: 'Test Breakout Tank Overfill Protective Devices',
		category: 'Breakout Tanks',
		description: 'Verification, threshold calibration, and functional testing of automatic shutdown and high-level alarms.'
	},
	{
		id: 'cct-03',
		code: 'TASK 03',
		title: 'Inspect & Calibrate Tank Overfill Protection',
		category: 'Breakout Tanks',
		description: 'Detailed inspection, sensor testing, and precision recalibration of liquid storage overfill prevention systems.'
	},
	{
		id: 'cct-04',
		code: 'TASK 04',
		title: 'Repair Breakout Tank Overfill Protective Devices',
		category: 'Breakout Tanks',
		description: 'Troubleshooting, component repair, and post-maintenance testing of overfill sensors, floats, and logic controls.'
	},
	{
		id: 'cct-05',
		code: 'TASK 05',
		title: 'Inspection of Breakout Tanks',
		category: 'Breakout Tanks',
		description: 'Visual, structural, and containment inspections of atmospheric and low-pressure breakout storage tanks.'
	},
	{
		id: 'cct-06',
		code: 'TASK 06',
		title: 'Operate Valves (Manual, Actuated & Emergency)',
		category: 'Piping & Valves',
		description: 'Manual and remote operation of isolation valves, block valves, emergency shutdown (ESD) valves, and bypass lines.'
	},
	{
		id: 'cct-07',
		code: 'TASK 07',
		title: 'Measurement of Wall Thickness with Ultrasonic Devices',
		category: 'Inspection & Integrity',
		description: 'Non-destructive ultrasonic thickness measurement (UTM) for corrosion monitoring and wall degradation analysis.'
	},
	{
		id: 'cct-08',
		code: 'TASK 08',
		title: 'Movement and/or Relocation of Liquid Pipelines',
		category: 'Piping & Valves',
		description: 'Safe procedures for lowering, raising, or shifting in-service or idle liquid pipelines without compromising integrity.'
	}
];

export const LOCATIONS: TrainingLocation[] = [
	{
		city: 'Midland',
		state: 'TX',
		facilityName: 'Midland ATAC Training Center',
		address: '5301 Cholla Rd, Midland, TX 79706',
		phone: '(432) 231-2207',
		email: 'JulioMartinez@SafeHandsSafety.com',
		isPrimary: true
	},
	{
		city: 'Corpus Christi',
		state: 'TX',
		facilityName: 'Corpus Christi Training Center',
		address: '400 SPID, Suite 103B, Corpus Christi, TX 78405',
		phone: '(432) 231-2207',
		email: 'JulioMartinez@SafeHandsSafety.com'
	},
	{
		city: 'Houston / Golden Triangle',
		state: 'TX',
		facilityName: 'Regional Mobile Hub',
		address: 'On-site Mobile Lab & Assessment Services',
		phone: '(432) 231-2207',
		email: 'JulioMartinez@SafeHandsSafety.com'
	},
	{
		city: 'Sherman / North Texas',
		state: 'TX',
		facilityName: 'Regional Field Deployment',
		address: 'Job Site & Contractor Facility Evaluations',
		phone: '(432) 231-2207',
		email: 'JulioMartinez@SafeHandsSafety.com'
	},
	{
		city: 'New Orleans / Gulf Coast',
		state: 'LA',
		facilityName: 'Gulf Coast Maritime & Pipeline Hub',
		address: 'Offshore & Inshore Pipeline Assessment',
		phone: '(432) 231-2207',
		email: 'JulioMartinez@SafeHandsSafety.com'
	},
	{
		city: 'McAllen / Rio Grande Valley',
		state: 'TX',
		facilityName: 'South Texas Field Unit',
		address: 'Border & Cross-Basin Evaluation Services',
		phone: '(432) 231-2207',
		email: 'JulioMartinez@SafeHandsSafety.com'
	}
];

export const FAQS = [
	{
		question: 'What is the PHMSA Operator Qualification (OQ) Rule?',
		answer: 'Under 49 CFR Part 192 (Natural Gas) and Part 195 (Hazardous Liquids), pipeline operators and contractors must ensure that every individual performing covered tasks is qualified through training, written examinations, and practical performance evaluations.'
	},
	{
		question: 'Can you perform OQ evaluations on our job site?',
		answer: 'Yes! Our Mobile Labs travel directly to your field locations, right-of-ways, pipeline stations, or fabrication yards nationwide, minimizing downtime and travel expenses for your crew.'
	},
	{
		question: 'Do you offer Remote Proctoring for written exams?',
		answer: 'Yes. We offer secure Computer-Based Training (CBT) and remote exam proctoring so your technicians can complete their required knowledge tests from any authorized computer before hands-on evaluations.'
	},
	{
		question: 'Which platforms do you upload qualification records to?',
		answer: 'We submit and record evaluations to Veriforce, Energy WorldNet (EWN), NCCER Registry, MEA, ITS, and OQSG depending on your operating company requirements.'
	},
	{
		question: 'How quickly can we get our technicians qualified?',
		answer: 'We offer rapid scheduling including same-week and weekend sessions by appointment. Most standard evaluations are processed and recorded within 24–48 hours.'
	}
];
