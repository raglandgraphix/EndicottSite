export type Products = {
    color: string;
    colorSafe: string;
    size: string;
    texture: string;
    qty: string;
    orderNum: string;
  }
  
export type Job = {
    productName: string;
    productType: string;
    jobTitle: string;
    jobName: string;
    altTag: string;
    colorRange: string[]; // This is the new property
    products: Products[];
    location: string;
    city: string;
    stateLong: string;
    stateShort: string;
    distributor: string;
    architect: string;
    photographer: string;
    structuralEngineer: string;
    constructionManager: string;
    facadeEngineer: string;
    masonryContractor: string;
    jobSize: string;
    cost: string;
    masonryBudget: string;
    completed: string;
    index: number;
    jobThumb: string;
    mainPhoto: string;
    photoAlbum: string[];
    gotoLocation?: string; // Optional property
    coord?: string[]; // Optional property
    gMapsImage?: string; // Optional property
    architect1?: string; // Optional property
    "mainImage-Fallback"?: string; // Optional property with hyphen in key
  }