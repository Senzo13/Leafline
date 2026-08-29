export interface Tip {
  id: string;
  title: string;
  tips: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Tips {
  tips: Tip[];
}
