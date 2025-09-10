export interface Place {
  id: string;
  name: string;
  address: string;
  rating: number;
  imageUrl: string;
  reviewCount: number;
}

// Keep existing type definitions for other components
export interface NavItem {
  id: number;
  label: string;
  icon: React.FC;
}

export interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

export interface NewsArticle {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  author?: string;
  date: string;
  imageUrl: string;
  excerpt: string;
}
