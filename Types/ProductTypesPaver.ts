// types/ProductData.ts 

export type Texture = {
    texture: string;
    image: string;
    fallbackImage?: string;
    fallbackLargeImage?: string;
    largeImage?: string;
    artx?: string;
    sizes: string[];
    alt:string;
  }
  
  export type DataItemPaver ={
    id: number;
    fullName: string;
    descriptionTitle: string;
    description: string;
    mainImage: string;
    colorGroup: string[];
    altTag: string;
    textures: Texture[];
    productLine: string;
    projects: { photo?: string[], video?: string[] }[]; // Define the structure of the projects array
  }