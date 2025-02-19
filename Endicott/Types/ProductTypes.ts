export type Texture = {
    texture: string;
    textureDescription?: string; // Optional property
    image: string;
    fallbackImage?: string; // Optional property
    fallbackLargeImage?: string; // Optional property
    largeImage?: string; // Optional property
    sizes: string[];
    artx:string;
  };  
  export type DataItem = {
    id: number;
    fullName: string;
    descriptionTitle: string;
    description: string;
    mainImage: string;
    colorGroup: string[];
    altTag: string;
    textures: Texture[];
    productLine: string;
    productCall: string;
    projects: Project []; // You might want to define a more specific type for projects if possible
  };
  export type Project = {
    photo?:string[];
    video?:string[];
  };