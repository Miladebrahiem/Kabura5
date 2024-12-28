export interface ContactMediumData {
  label: string;
  href: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  isExternal: boolean;
}