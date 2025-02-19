export type  Texture = {
  texture: string;
  image: string;
  fallbackImage?: string;
  fallbackLargeImage?: string;
  largeImage?: string;
  artx?: string;
  sizes: string[];
}

export type  Thickness = {
  size: string; // Add a size property to store the thickness value
  textures: Texture[];
}

export type  DataItemThin = {
  id: number;
  fullName: string;
  descriptionTitle: string;
  description: string;
  mainImage: string;
  colorGroup: string[];
  altTag: string;
  thick: Thickness[]; // Change the type of 'thick' to an array of Thickness objects
  projects: string[];
  productLine: string;
}