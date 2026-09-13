import React from 'react';
import {
  RadioTower,
  FileWarning,
  Layers,
  EyeOff,
  AlertTriangle,
  Building2,
  Split,
  PhoneCall,
  Smartphone,
  Camera,
  Cpu,
  Navigation,
  Flame,
  FileText,
  Radar,
  Activity,
  Award,
  Boxes,
  Milestone,
  Hospital,
  MessageSquareShare,
  ShieldCheck,
  Brain,
  Server,
  LayoutDashboard,
  Database,
  Map,
  Network,
  Zap,
  Share2,
  Sliders,
  FileCheck,
  Maximize2,
  Clock,
  BarChart3,
  Radio,
  Users,
  TrendingUp,
  MapPin,
  Compass,
  Car,
  GitBranch,
  RefreshCw,
  ShieldAlert,
  Ambulance,
  Siren,
  Sparkles,
  CheckCircle2,
  Info,
  LucideProps,
} from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'RadioTower':
      return <RadioTower {...props} />;
    case 'FileWarning':
      return <FileWarning {...props} />;
    case 'Layers':
      return <Layers {...props} />;
    case 'EyeOff':
      return <EyeOff {...props} />;
    case 'AlertTriangle':
      return <AlertTriangle {...props} />;
    case 'Building2':
      return <Building2 {...props} />;
    case 'Split':
      return <Split {...props} />;
    case 'PhoneCall':
      return <PhoneCall {...props} />;
    case 'Smartphone':
      return <Smartphone {...props} />;
    case 'Camera':
      return <Camera {...props} />;
    case 'Cpu':
      return <Cpu {...props} />;
    case 'Navigation':
      return <Navigation {...props} />;
    case 'Flame':
      return <Flame {...props} />;
    case 'FileText':
      return <FileText {...props} />;
    case 'Radar':
      return <Radar {...props} />;
    case 'Activity':
      return <Activity {...props} />;
    case 'Award':
      return <Award {...props} />;
    case 'Boxes':
      return <Boxes {...props} />;
    case 'Milestone':
      return <Milestone {...props} />;
    case 'Hospital':
      return <Hospital {...props} />;
    case 'MessageSquareShare':
      return <MessageSquareShare {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'Brain':
      return <Brain {...props} />;
    case 'Server':
      return <Server {...props} />;
    case 'LayoutDashboard':
      return <LayoutDashboard {...props} />;
    case 'Database':
      return <Database {...props} />;
    case 'Map':
      return <Map {...props} />;
    case 'Network':
      return <Network {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'Share2':
      return <Share2 {...props} />;
    case 'Sliders':
      return <Sliders {...props} />;
    case 'FileCheck':
      return <FileCheck {...props} />;
    case 'Maximize2':
      return <Maximize2 {...props} />;
    case 'Clock':
      return <Clock {...props} />;
    case 'BarChart3':
      return <BarChart3 {...props} />;
    case 'Radio':
      return <Radio {...props} />;
    case 'Users':
      return <Users {...props} />;
    case 'TrendingUp':
      return <TrendingUp {...props} />;
    case 'MapPin':
      return <MapPin {...props} />;
    case 'Compass':
      return <Compass {...props} />;
    case 'Car':
      return <Car {...props} />;
    case 'GitBranch':
      return <GitBranch {...props} />;
    case 'RefreshCw':
      return <RefreshCw {...props} />;
    case 'ShieldAlert':
      return <ShieldAlert {...props} />;
    case 'Ambulance':
      return <Ambulance {...props} />;
    case 'Siren':
      return <Siren {...props} />;
    case 'Sparkles':
      return <Sparkles {...props} />;
    case 'CheckCircle2':
      return <CheckCircle2 {...props} />;
    default:
      return <Info {...props} />;
  }
};
