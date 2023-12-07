export interface NavItemType {
  path: string;
  label: string;
}

export interface SkillType {
  id: number;
  content: string;
}

export interface AppContextType {
  skills: SkillType[];
  navItems: NavItemType[];
  navOpen: boolean;
  toggleNav: () => void;
  closeNav: () => void;
}
