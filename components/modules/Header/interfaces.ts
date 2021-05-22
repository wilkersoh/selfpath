export interface LinkPathsType {
  route: string;
  name: string;
  isSubtitle: boolean;
}

export interface MobileNavProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
}