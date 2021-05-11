export interface LinkPathsType {
  route: string;
  name: string;
}

export interface MobileNavProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
}