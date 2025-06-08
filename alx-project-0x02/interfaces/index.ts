export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
  children: React.ReactNode;
}

export interface PostCardProps {
  title: string;
  content: string;
  userId: string | number;
}

export interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}