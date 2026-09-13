export interface AgentItem {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: string;
  badge: string;
  telemetry: string;
}

export interface IncidentSource {
  id: string;
  title: string;
  description: string;
  icon: string;
  dataRate: string;
}

export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  severity: 'Critical' | 'High' | 'Moderate';
}

export interface TimelineStep {
  step: number;
  phase: string;
  title: string;
  description: string;
  agentResponsible: string;
  telemetryTag: string;
}

export interface TechStackCategory {
  title: string;
  subtitle: string;
  icon: string;
  items: string[];
}

export interface ImpactItem {
  title: string;
  metric: string;
  description: string;
  icon: string;
}

export interface InnovationItem {
  title: string;
  highlight: string;
  description: string;
  icon: string;
}

export interface MockIncident {
  id: string;
  priority: 'High' | 'Critical' | 'Medium';
  title: string;
  location: string;
  status: string;
  nearestAmbulance: string;
  ambulanceId: string;
  nearestPoliceUnit: string;
  policeId: string;
  recommendedHospital: string;
  routeStatus: string;
  etaMinutes: number;
  reportedTime: string;
  confidenceScore: number;
  casualtiesReported: string;
}

export type SimulationStage =
  | 'DETECTED'
  | 'SEVERITY_ASSESSED'
  | 'PRIORITIZED'
  | 'RESOURCE_ASSIGNED'
  | 'ROUTE_OPTIMIZED'
  | 'HOSPITAL_NOTIFIED'
  | 'AMBULANCE_EN_ROUTE'
  | 'ON_SCENE'
  | 'EN_ROUTE_HOSPITAL'
  | 'HOSPITAL_HANDOVER';

export interface ActivityFeedItem {
  id: string;
  timestamp: string;
  stage: SimulationStage;
  agentName: string;
  title: string;
  detail: string;
  severity: 'info' | 'warning' | 'alert' | 'success';
}

export interface MapCoordinates {
  lat: number;
  lng: number;
}

