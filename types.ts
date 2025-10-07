// FIX: Import React to make the React namespace available for type definitions like React.FC.
import type React from 'react';

export interface Place {
  id: string;
  name: string;
  address: string;
  rating: number;
  imageUrl: string;
  reviewCount: number;
}

export interface Hostel {
  name: string;
  floorData: Record<string, string[]>; // Key: "Floor 1", Value: ["101", "102", ...]
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
  isFeatured?: boolean; // For special items like the Auditorium
  featuredText?: string;
  buildingDetails?: {
    floorCount: number;
    floorData: Record<string, string[]>; // e.g., { "Floor 1": ["Teacher A", "Teacher B"] }
    otherInfo?: { // For extra details like list of hostels
      title: string;
      items: Hostel[];
    }
  };
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
