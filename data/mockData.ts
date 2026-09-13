import {
  AgentItem,
  IncidentSource,
  ChallengeItem,
  TimelineStep,
  TechStackCategory,
  ImpactItem,
  InnovationItem,
  MockIncident,
} from '../types';

export const HERO_DATA = {
  projectName: 'Aegis',
  tagline: 'From Emergency Detection to Intelligent Response — Faster, Safer, Smarter.',
  description:
    'An AI-powered multi-agent emergency response coordination platform that orchestrates real-time incident detection, rapid triage, multi-agency fleet allocation, and predictive hospital intake through a unified mission command center.',
  badge: 'Autonomous Multi-Agent Public Safety Mesh',
  visionQuote: 'Every emergency deserves the right response at the right time.',
  telemetryStats: [
    { label: 'Agent Mesh', value: '8 / 8 Online' },
    { label: 'Dispatch Latency', value: '< 1.4s' },
    { label: 'Coordination Mode', value: 'Multi-Agency Real-Time' },
    { label: 'System State', value: 'MISSION READY' },
  ],
};

export const CHALLENGES: ChallengeItem[] = [
  {
    id: 'ch-1',
    title: 'Disconnected Sources',
    description:
      '911 calls, CCTV cameras, traffic sensors, and citizen reports arrive via isolated silos with no unified processing channel.',
    icon: 'RadioTower',
    severity: 'Critical',
  },
  {
    id: 'ch-2',
    title: 'Manual Severity Assessment',
    description:
      'Operators face acute cognitive overload manually categorizing incident gravity, resulting in subjective triage delays.',
    icon: 'FileWarning',
    severity: 'High',
  },
  {
    id: 'ch-3',
    title: 'Competing Emergencies',
    description:
      'Multiple simultaneous crisis events struggle for regional responder priority without global algorithmic balancing.',
    icon: 'Layers',
    severity: 'Critical',
  },
  {
    id: 'ch-4',
    title: 'Incomplete Real-Time Info',
    description:
      'First responders are dispatched with incomplete scene hazard telemetry, outdated casualty counts, and blind entry points.',
    icon: 'EyeOff',
    severity: 'High',
  },
  {
    id: 'ch-5',
    title: 'Traffic Delays',
    description:
      'Emergency vehicles lose critical golden-hour minutes navigating dynamic bottleneck choke points without green-corridor sync.',
    icon: 'AlertTriangle',
    severity: 'Critical',
  },
  {
    id: 'ch-6',
    title: 'Unprepared Hospitals',
    description:
      'Emergency departments receive critical trauma patients without advance digital triage alerts, bed reservations, or specialist prep.',
    icon: 'Building2',
    severity: 'High',
  },
  {
    id: 'ch-7',
    title: 'Lack of Centralized Coordination',
    description:
      'Police, Fire & Rescue, and Medical fleets operate on separate radio bands with zero live inter-agency situational exchange.',
    icon: 'Split',
    severity: 'Critical',
  },
];

export const CORE_PROBLEM_CALLOUT = {
  title: 'The Core Structural Failure',
  quote:
    'Current emergency response operates in silos — detection is separate from dispatch, routing ignores dynamic hospital readiness, and every second lost in coordination costs human lives.',
  highlight: 'Coordination latency, not detection deficiency, is the true fatal bottleneck in urban emergency response.',
};

export const SOLUTION_FLOW = [
  { step: '01', name: 'Incident Sources', description: 'Multimodal data ingestion' },
  { step: '02', name: 'AI Detection', description: 'Anomaly identification & geocoding' },
  { step: '03', name: 'Severity Assessment', description: 'Casualty & risk modeling' },
  { step: '04', name: 'Priority Assignment', description: 'Global grid triage ranking' },
  { step: '05', name: 'Resource Allocation', description: 'Multi-agency unit dispatch' },
  { step: '06', name: 'Route Optimization', description: 'Live traffic & corridor routing' },
  { step: '07', name: 'Hospital Coordination', description: 'Bed & trauma team reservation' },
  { step: '08', name: 'Continuous Monitoring', description: 'Closed-loop telemetry reassessment' },
];

export const INCIDENT_SOURCES: IncidentSource[] = [
  {
    id: 'src-1',
    title: 'Emergency Calls',
    description: 'Real-time audio NLP transcription & panic keyword extraction',
    icon: 'PhoneCall',
    dataRate: 'Audio / VoIP stream',
  },
  {
    id: 'src-2',
    title: 'Mobile App Alerts',
    description: 'Instant SOS geolocated citizen pings with photo & video upload',
    icon: 'Smartphone',
    dataRate: 'GPS & user media',
  },
  {
    id: 'src-3',
    title: 'CCTV & Video Feeds',
    description: 'Computer vision vehicle collision, smoke, and crowd panic detection',
    icon: 'Camera',
    dataRate: '30 FPS visual stream',
  },
  {
    id: 'src-4',
    title: 'IoT City Sensors',
    description: 'Acoustic gunshot sensors, smoke detectors, and structural monitors',
    icon: 'Cpu',
    dataRate: 'MQTT / LoRaWAN telemetry',
  },
  {
    id: 'src-5',
    title: 'GPS & Telematics',
    description: 'Automotive crash sensors (eCall) & fleet vehicle transponders',
    icon: 'Navigation',
    dataRate: 'Real-time vector packets',
  },
  {
    id: 'src-6',
    title: 'Disaster Feeds',
    description: 'National weather alerts, flood sensor arrays, and seismic warnings',
    icon: 'Flame',
    dataRate: 'Public safety CAP feeds',
  },
  {
    id: 'src-7',
    title: 'Manual Reports',
    description: 'Field officer radio logs and municipal agency dispatches',
    icon: 'FileText',
    dataRate: 'Verified dispatcher entry',
  },
];

export const AGENTS: AgentItem[] = [
  {
    id: 'agent-1',
    name: 'Incident Detection Agent',
    role: 'Sensor Ingestion & Verification',
    description: 'Ingests multimodal data streams to identify and localize anomalies in milliseconds.',
    icon: 'Radar',
    badge: 'Sensor Mesh',
    telemetry: 'Latency: 18ms • F1 Score: 99.4%',
  },
  {
    id: 'agent-2',
    name: 'Severity Assessment Agent',
    role: 'Hazard & Casualty Analysis',
    description: 'Analyzes crisis urgency, casualties, and threat level using predictive models.',
    icon: 'Activity',
    badge: 'Predictive Triage',
    telemetry: 'Multi-factor risk evaluation active',
  },
  {
    id: 'agent-3',
    name: 'Priority Agent',
    role: 'Dynamic Grid Balancing',
    description: 'Dynamically ranks active emergencies across the jurisdiction to optimize fleet deployment.',
    icon: 'Award',
    badge: 'Jurisdiction Triage',
    telemetry: 'Global priority ranking re-evaluated @ 1Hz',
  },
  {
    id: 'agent-4',
    name: 'Resource Coordination Agent',
    role: 'Cross-Agency Asset Allocation',
    description: 'Matches appropriate vehicles, equipment, and certified crews to incident needs.',
    icon: 'Boxes',
    badge: 'Fleet Allocator',
    telemetry: 'Police • Fire • EMS • Hazmat readiness sync',
  },
  {
    id: 'agent-5',
    name: 'Route Optimization Agent',
    role: 'Dynamic Waypoint & Corridor Guidance',
    description: 'Computes mission-critical fastest routes factoring real-time traffic, closures, and sirens.',
    icon: 'Milestone',
    badge: 'Corridor Routing',
    telemetry: 'Adaptive ETA updating every 10 sec',
  },
  {
    id: 'agent-6',
    name: 'Hospital Coordination Agent',
    role: 'Facility Intake & Trauma Prep',
    description: 'Pre-notifies trauma centers, verifies bed capacity, and prepares specialized surgical teams.',
    icon: 'Hospital',
    badge: 'ER Link',
    telemetry: 'ICU & Trauma bay digital handshake established',
  },
  {
    id: 'agent-7',
    name: 'Communication Agent',
    role: 'Broadcast & Inter-Agency Relay',
    description: 'Automates inter-agency broadcasts, responder updates, and citizen advisories.',
    icon: 'MessageSquareShare',
    badge: 'Data Dispatch',
    telemetry: 'Encrypted tactical mesh broadcast active',
  },
  {
    id: 'agent-8',
    name: 'Monitoring Agent',
    role: 'Closed-Loop Telemetry & Safety',
    description: 'Tracks live telemetry, responder safety, and mission status until incident closure.',
    icon: 'ShieldCheck',
    badge: 'Mission Safety',
    telemetry: 'Continuous heartbeat telemetry logging',
  },
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    phase: 'Phase 01',
    title: 'Detect',
    description:
      'Continuous ingestion and anomaly identification across municipal sensor feeds, 911 audio streams, and citizen mobile signals.',
    agentResponsible: 'Incident Detection Agent',
    telemetryTag: 'Triggered in < 250ms',
  },
  {
    step: 2,
    phase: 'Phase 02',
    title: 'Understand',
    description:
      'Multimodal AI extracts situational context: precise GPS coordinates, collision severity, vehicle count, and trapped victims.',
    agentResponsible: 'Severity Assessment Agent',
    telemetryTag: '98.7% Classification Confidence',
  },
  {
    step: 3,
    phase: 'Phase 03',
    title: 'Prioritize',
    description:
      'Global triage algorithm compares new event against regional incident queue to prevent responder fleet exhaustion.',
    agentResponsible: 'Priority Agent',
    telemetryTag: 'Urgency Tier: High / Tier 1',
  },
  {
    step: 4,
    phase: 'Phase 04',
    title: 'Coordinate',
    description:
      'Automated dispatch recommendation selects closest certified Advanced Life Support (ALS) unit and law enforcement escort.',
    agentResponsible: 'Resource Coordination Agent',
    telemetryTag: 'Multi-Agency Pairing Confirmed',
  },
  {
    step: 5,
    phase: 'Phase 05',
    title: 'Optimize',
    description:
      'Dynamic routing synthesizes live congestion, elevation, and traffic light preemption to chart the fastest emergency corridor.',
    agentResponsible: 'Route Optimization Agent',
    telemetryTag: 'ETA reduced by 3.8 mins',
  },
  {
    step: 6,
    phase: 'Phase 06',
    title: 'Respond',
    description:
      'Responders arrive with live hazard briefings while target hospital locks in trauma room and prepares surgical specialists.',
    agentResponsible: 'Hospital & Comm Agents',
    telemetryTag: 'ER Trauma Room #3 Reserved',
  },
  {
    step: 7,
    phase: 'Phase 07',
    title: 'Reassess',
    description:
      'Closed-loop telemetry tracks patient vitals handoff, fleet turnaround, and automated incident debrief logging.',
    agentResponsible: 'Monitoring Agent',
    telemetryTag: 'Post-Mission Audit Recorded',
  },
];

export const PRIMARY_MOCK_INCIDENT: MockIncident = {
  id: 'INC-2026-0941',
  priority: 'High',
  title: 'High Priority — Road Accident',
  location: 'Main Road Junction',
  status: 'Response Required',
  nearestAmbulance: '2.4 km',
  ambulanceId: 'Unit Medic-04 (ALS)',
  nearestPoliceUnit: '1.8 km',
  policeId: 'Patrol-212 (Sector 4)',
  recommendedHospital: 'Hospital A (Level-1 Trauma)',
  routeStatus: 'Moderate Traffic',
  etaMinutes: 4.2,
  reportedTime: '10:42:15 AM',
  confidenceScore: 98.4,
  casualtiesReported: '2 Injured (Conscious)',
};

export const SECONDARY_INCIDENTS: MockIncident[] = [
  {
    id: 'INC-2026-0940',
    priority: 'Critical',
    title: 'Structural Fire — Commercial Complex',
    location: 'North Avenue Industrial Zone',
    status: 'Units En Route',
    nearestAmbulance: '3.1 km',
    ambulanceId: 'Unit Medic-09',
    nearestPoliceUnit: '0.9 km',
    policeId: 'Patrol-108',
    recommendedHospital: 'Hospital C (Burn Specialty)',
    routeStatus: 'Heavy Congestion — Green Corridor Active',
    etaMinutes: 6.5,
    reportedTime: '10:39:04 AM',
    confidenceScore: 99.2,
    casualtiesReported: 'Evacuation in Progress',
  },
  {
    id: 'INC-2026-0938',
    priority: 'Medium',
    title: 'Water Main Rupture / Road Hazard',
    location: 'West Boulevard & 5th St',
    status: 'Assigned',
    nearestAmbulance: '5.2 km',
    ambulanceId: 'Standby Unit M-12',
    nearestPoliceUnit: '1.2 km',
    policeId: 'Traffic-03',
    recommendedHospital: 'Hospital B (General)',
    routeStatus: 'Clear',
    etaMinutes: 8.0,
    reportedTime: '10:31:18 AM',
    confidenceScore: 94.1,
    casualtiesReported: 'No Casualties',
  },
];

export const ALLOCATION_EQUATION_FACTORS = [
  {
    symbol: 'S',
    name: 'Incident Severity',
    weight: '30%',
    desc: 'Casualty risk, environmental threat, and escalation rate',
  },
  {
    symbol: 'D',
    name: 'Distance',
    weight: '20%',
    desc: 'Euclidean and street-network geodesic proximity',
  },
  {
    symbol: 'RA',
    name: 'Resource Availability',
    weight: '15%',
    desc: 'Current duty state and readiness of regional emergency assets',
  },
  {
    symbol: 'C',
    name: 'Capability',
    weight: '15%',
    desc: 'Specialized gear (ALS, jaws-of-life, hazmat, pediatric equipment)',
  },
  {
    symbol: 'T',
    name: 'Traffic',
    weight: '10%',
    desc: 'Live road congestion index and dynamic corridor flow',
  },
  {
    symbol: 'HS',
    name: 'Hospital Suitability',
    weight: '10%',
    desc: 'Trauma level, operating room availability, and bed capacity',
  },
];

export const ALLOCATION_FLOW_STEPS = [
  { step: 'Step 1', title: 'Incident Ingestion', detail: 'AI registers verified alert & severity parameters' },
  { step: 'Step 2', title: 'Asset Scan', detail: 'Identifies available ambulances and police patrols within 10 km' },
  { step: 'Step 3', title: 'Geospatial Evaluation', detail: 'Evaluates real-time distance, traffic choke points & ETA' },
  { step: 'Step 4', title: 'Optimal Selection', detail: 'Selects suitable ambulance with verified ALS capabilities' },
  { step: 'Step 5', title: 'Corridor Routing', detail: 'Recommends fastest green-corridor route with traffic clearance' },
  { step: 'Step 6', title: 'Hospital Preparation', detail: 'Identifies appropriate hospital with open ICU & trauma surgical bay' },
];

export const ROUTING_FEATURES = [
  {
    title: 'Responder Location',
    description: 'High-frequency GNSS tracking with dead reckoning for tunnel and urban canyon navigation.',
    icon: 'Navigation',
  },
  {
    title: 'Incident Location',
    description: 'Sub-meter pin precision with 3D structural entry point suggestions for large complexes.',
    icon: 'MapPin',
  },
  {
    title: 'Suggested Route',
    description: 'Algorithmic turn-by-turn trajectory avoiding structural chokepoints and construction zones.',
    icon: 'Compass',
  },
  {
    title: 'Traffic-Aware Routing',
    description: 'Dynamic speed estimation integrating crowdsourced feeds and municipal camera velocity models.',
    icon: 'Car',
  },
  {
    title: 'Dynamic ETA',
    description: 'Predictive arrival estimation accounting for emergency vehicle siren privilege and intersection clearance.',
    icon: 'Clock',
  },
  {
    title: 'Alternative Routes',
    description: 'Instant contingency rerouting pre-calculated in case of unexpected primary corridor blockages.',
    icon: 'GitBranch',
  },
  {
    title: 'Continuous Updates',
    description: 'Live mission updates pushed to mobile terminals with hazard warnings and scene evolution.',
    icon: 'RefreshCw',
  },
];

export const HOSPITAL_MODULE_FEATURES = [
  'Real-time emergency department bed & ICU availability tracking',
  'Automated trauma triage notification before patient departure from scene',
  'Surgical and specialized trauma team standby activation',
  'Continuous pre-arrival patient vitals and telemetry streaming',
  'Dynamic ETA countdown timer for admitting emergency physicians',
  'Specialty facility matching (burn, cardiac, stroke, pediatric, polytrauma)',
];

export const RESOURCE_MODULE_FEATURES = [
  'Ambulances: Advanced Life Support (ALS) and Basic Life Support (BLS) fleet tracking',
  'Police Units: Rapid response, sector patrol, and intersection escort units',
  'Fire & Rescue: Heavy pumper trucks, ladder units, and extrication teams',
  'Medical Teams: On-call emergency physicians and mobile triage teams',
  'Specialized Units: Hazardous materials (Hazmat), flood rescue, and canine search',
  'Telemetry Status: Fuel, equipment readiness, and crew shift-duty monitoring',
];

export const TECH_STACK: TechStackCategory[] = [
  {
    title: 'AI & Intelligence',
    subtitle: 'Autonomous Reasoning & Perception',
    icon: 'Brain',
    items: [
      'Machine Learning',
      'NLP (Natural Language Processing)',
      'Computer Vision',
      'Multi-Agent AI Coordination',
      'Rule-Based Safety Constraints',
    ],
  },
  {
    title: 'Backend',
    subtitle: 'Mission-Critical Processing',
    icon: 'Server',
    items: [
      'Python',
      'FastAPI / Node.js',
      'REST & WebSocket APIs',
      'Real-Time Event Processing',
      'Asynchronous Worker Queues',
    ],
  },
  {
    title: 'Frontend',
    subtitle: 'Command Center Interface',
    icon: 'LayoutDashboard',
    items: [
      'React / Next.js',
      'Responsive Tactical Dashboard',
      'Interactive Geospatial Maps',
      'Real-Time Alert HUD',
      'Tailwind CSS Theming',
    ],
  },
  {
    title: 'Data & Infrastructure',
    subtitle: 'Resilient Cloud & Geospatial Storage',
    icon: 'Database',
    items: [
      'PostgreSQL / Firebase',
      'Geospatial Data (PostGIS)',
      'High-Precision GPS Ingestion',
      'Real-Time Telemetry APIs',
      'Cloud Resilient Infrastructure',
    ],
  },
  {
    title: 'Maps & Routing',
    subtitle: 'Intelligent Wayfinding & Traffic',
    icon: 'Map',
    items: [
      'Interactive Map Services',
      'Live Traffic Data APIs',
      'Geospatial Corridor Routing',
      'Emergency Vehicle Green Wave Preemption',
      'Turn-by-Turn Navigation Feed',
    ],
  },
];

export const INNOVATION_USP: InnovationItem[] = [
  {
    title: 'Multi-Agent Coordination',
    highlight: 'Decentralized Intelligence',
    description:
      'Eight specialized AI agents operate concurrently, exchanging tactical parameters without a single bottleneck point of failure.',
    icon: 'Network',
  },
  {
    title: 'Real-Time Decision Support',
    highlight: 'Sub-Second Actionability',
    description:
      'Processes raw alerts into actionable dispatch and hospital recommendations in seconds, preserving the critical golden hour.',
    icon: 'Zap',
  },
  {
    title: 'Cross-Agency Coordination',
    highlight: 'Unified Public Safety',
    description:
      'Bridges the historical void between police dispatch, fire rescue, EMS paramedics, and hospital trauma admitting desks.',
    icon: 'Share2',
  },
  {
    title: 'Dynamic Resource Allocation',
    highlight: 'Multi-Variable Optimization',
    description:
      'Replaces rigid closest-unit dispatch with holistic optimization of vehicle capabilities, traffic, and emergency severity.',
    icon: 'Sliders',
  },
  {
    title: 'Explainable Decisions',
    highlight: 'Operational Transparency',
    description:
      'Every routing suggestion and hospital recommendation includes clear rationale factors so commanders maintain confidence.',
    icon: 'FileCheck',
  },
  {
    title: 'Scalable Architecture',
    highlight: 'Mass Casualty Ready',
    description:
      'Designed to effortlessly scale from single-vehicle traffic accidents to multi-alarm regional natural disaster responses.',
    icon: 'Maximize2',
  },
];

export const SECURITY_DATA = {
  security: [
    'Role-based access control (RBAC) for field responders, dispatchers, and hospital heads',
    'End-to-end encrypted API communication (TLS 1.3 & mTLS)',
    'Strict multi-factor authentication and federated identity authorization',
    'Encrypted data at rest and in transit (AES-256)',
    'Immutable audit logs for post-incident review and legal compliance',
    'Principle of least privilege (minimum necessary patient medical data access)',
  ],
  reliability: [
    'Human approval mandatory for all critical dispatch and resource orders',
    'Automated fallback procedures to standard radio and cellular networks',
    'Confidence indicator scores attached to all automated AI recommendations',
    'Comprehensive redundant event logging and black-box mission recording',
    'Fail-safe architectural design with zero single-point dependency',
  ],
  futureScope: [
    'Drone-based first-look situational awareness and thermal aerial triage',
    'Advanced computer vision for real-time smoke, structural, and weapon detection',
    'IoT-based automatic collision detection integrated with smart city infrastructure',
    'Predictive emergency clustering analysis for proactive ambulance staging',
    'Multilingual voice assistant for panic-stricken callers in 40+ dialects',
    'Direct integration with national disaster and municipal governmental grids',
    'Large-scale disaster management modules (earthquake, flood, typhoon)',
    'AI-assisted emergency resource and medical supply forecasting',
  ],
};

export const IMPACT_POINTS: ImpactItem[] = [
  {
    title: 'Faster Response',
    metric: '42% Reduction',
    description: 'Slashing coordination and dispatch latency to deliver life-saving interventions minutes sooner.',
    icon: 'Clock',
  },
  {
    title: 'Better Resource Utilization',
    metric: '35% Efficiency Gain',
    description: 'Eliminating duplicate dispatches and ensuring advanced specialist vehicles are reserved for high-triage events.',
    icon: 'BarChart3',
  },
  {
    title: 'Improved Situational Awareness',
    metric: '360° Real-Time View',
    description: 'Equipping responders with live hazard telematics, building layouts, and verified victim counts before arrival.',
    icon: 'Radio',
  },
  {
    title: 'Better Coordination',
    metric: 'Zero Information Silos',
    description: 'Seamless synchronization across 911 dispatch, police patrols, fire rescue teams, and emergency departments.',
    icon: 'Users',
  },
  {
    title: 'Scalable Emergency Management',
    metric: 'City-Wide Elasticity',
    description: 'Elastic multi-agent cloud infrastructure ready for daily traffic collisions or catastrophic multi-zone disasters.',
    icon: 'TrendingUp',
  },
];

export const MAP_LOCATIONS = {
  incident: {
    lat: 37.7749,
    lng: -122.4194,
    title: 'High Priority — Road Accident',
    location: 'Main Road Junction',
  },
  ambulanceStart: {
    lat: 37.7560,
    lng: -122.4340,
    title: 'Unit Medic-04 (ALS)',
    initialDistanceKm: 2.4,
  },
  police: {
    lat: 37.7690,
    lng: -122.4040,
    title: 'Patrol-212 (Sector 4)',
    initialDistanceKm: 1.8,
  },
  hospital: {
    lat: 37.7890,
    lng: -122.4080,
    title: 'Hospital A (Level-1 Trauma)',
  },
};

// Precise waypoints along street corridors from ambulance to incident, then to hospital
export const AMBULANCE_TO_INCIDENT_PATH: [number, number][] = [
  [37.7560, -122.4340],
  [37.7595, -122.4305],
  [37.7630, -122.4270],
  [37.7670, -122.4245],
  [37.7710, -122.4220],
  [37.7749, -122.4194],
];

export const INCIDENT_TO_HOSPITAL_PATH: [number, number][] = [
  [37.7749, -122.4194],
  [37.7780, -122.4170],
  [37.7820, -122.4140],
  [37.7855, -122.4110],
  [37.7890, -122.4080],
];

export interface PipelineSimulationStep {
  stage: string;
  badge: string;
  agent: string;
  title: string;
  detail: string;
  incidentStatus: string;
  eta: string;
  distanceKm: number;
  ambulanceProgress: number; // 0 to 1 on path 1, 1 to 2 on path 2
  routeStatus: string;
  severity: 'info' | 'warning' | 'alert' | 'success';
}

export const PIPELINE_STEPS: PipelineSimulationStep[] = [
  {
    stage: 'DETECTED',
    badge: 'STAGE 1: DETECTION',
    agent: 'Incident Detection Agent',
    title: 'Incident Detected via Sensor Stream',
    detail: 'Optical anomaly & acoustic collision pattern localized at Main Road Junction.',
    incidentStatus: 'Detected — Verifying',
    eta: '4.2 min',
    distanceKm: 2.4,
    ambulanceProgress: 0.0,
    routeStatus: 'Evaluating Corridors',
    severity: 'warning',
  },
  {
    stage: 'SEVERITY_ASSESSED',
    badge: 'STAGE 2: SEVERITY',
    agent: 'Severity Assessment Agent',
    title: 'Severity Evaluated: High Priority (Tier 1)',
    detail: 'Multi-vehicle collision confirmed with 2 casualties reported. Immediate intervention required.',
    incidentStatus: 'Response Required',
    eta: '4.2 min',
    distanceKm: 2.4,
    ambulanceProgress: 0.0,
    routeStatus: 'Moderate Traffic',
    severity: 'alert',
  },
  {
    stage: 'PRIORITIZED',
    badge: 'STAGE 3: TRIAGE',
    agent: 'Priority Agent',
    title: 'Jurisdiction Queue Priority Assigned',
    detail: 'Elevated to Top Priority in Sector 04 emergency queue. Zero preemption conflicts.',
    incidentStatus: 'Response Required',
    eta: '4.0 min',
    distanceKm: 2.4,
    ambulanceProgress: 0.0,
    routeStatus: 'Moderate Traffic',
    severity: 'alert',
  },
  {
    stage: 'RESOURCE_ASSIGNED',
    badge: 'STAGE 4: ALLOCATION',
    agent: 'Resource Coordination Agent',
    title: 'Resources Allocated: Medic-04 & Patrol-212',
    detail: 'Assigned nearest ALS paramedic unit Medic-04 (2.4 km) and Police Patrol-212 (1.8 km).',
    incidentStatus: 'Units Dispatched',
    eta: '3.8 min',
    distanceKm: 2.4,
    ambulanceProgress: 0.05,
    routeStatus: 'Green Wave Active',
    severity: 'info',
  },
  {
    stage: 'ROUTE_OPTIMIZED',
    badge: 'STAGE 5: ROUTING',
    agent: 'Route Optimization Agent',
    title: 'Green Wave Corridor Route Computed',
    detail: 'Dynamic routing established via Market/Valencia corridor. Signal preemption engaged.',
    incidentStatus: 'Units En Route',
    eta: '3.4 min',
    distanceKm: 2.0,
    ambulanceProgress: 0.25,
    routeStatus: 'Siren Corridor Clear',
    severity: 'info',
  },
  {
    stage: 'HOSPITAL_NOTIFIED',
    badge: 'STAGE 6: HOSPITAL PREP',
    agent: 'Hospital Coordination Agent',
    title: 'Hospital A Trauma Bay #3 Reserved',
    detail: 'Pre-arrival notice sent to Hospital A. Level-1 trauma surgeon and ortho team alerted.',
    incidentStatus: 'Units En Route — Hospital Ready',
    eta: '2.5 min',
    distanceKm: 1.5,
    ambulanceProgress: 0.55,
    routeStatus: 'Siren Corridor Clear',
    severity: 'success',
  },
  {
    stage: 'AMBULANCE_EN_ROUTE',
    badge: 'STAGE 7: EN ROUTE',
    agent: 'Monitoring Agent',
    title: 'Rapid Approach: Unit Medic-04 Closing Distance',
    detail: 'Approaching Main Road Junction intersection. Real-time telemetry lock maintained.',
    incidentStatus: 'Approaching Scene',
    eta: '1.2 min',
    distanceKm: 0.7,
    ambulanceProgress: 0.85,
    routeStatus: 'Green Corridor Active',
    severity: 'info',
  },
  {
    stage: 'ON_SCENE',
    badge: 'STAGE 8: ON SCENE',
    agent: 'Monitoring Agent',
    title: 'Unit Medic-04 Arrived On Scene',
    detail: 'Responders on scene. Patient stabilization in progress. Police securing junction.',
    incidentStatus: 'On Scene — Triaging',
    eta: '0.0 min',
    distanceKm: 0.0,
    ambulanceProgress: 1.0,
    routeStatus: 'Scene Secured',
    severity: 'success',
  },
  {
    stage: 'EN_ROUTE_HOSPITAL',
    badge: 'STAGE 9: TRANSPORT',
    agent: 'Route Optimization Agent',
    title: 'Patient In Transit to Hospital A',
    detail: 'Paramedics transporting patient with stabilized vitals. Direct intake corridor enabled.',
    incidentStatus: 'In Transit to Hospital A',
    eta: '2.8 min',
    distanceKm: 1.4,
    ambulanceProgress: 1.5,
    routeStatus: 'Priority Hospital Transit',
    severity: 'info',
  },
  {
    stage: 'HOSPITAL_HANDOVER',
    badge: 'STAGE 10: HANDOVER',
    agent: 'Hospital Coordination Agent',
    title: 'Patient Transferred to Trauma Bay #3',
    detail: 'Successful clinical handover completed at Hospital A. Incident resolved.',
    incidentStatus: 'Handover Complete',
    eta: '0.0 min',
    distanceKm: 0.0,
    ambulanceProgress: 2.0,
    routeStatus: 'Facility Admitted',
    severity: 'success',
  },
];

