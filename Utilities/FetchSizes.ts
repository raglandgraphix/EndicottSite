
import { DataItem } from "../Types/SizesTypes";
export async function FetchSizes(product: string | null): Promise<DataItem[] | null> {
    
    // const jsonFilePath = product === 'FaceBrick' 
    // ? '/JSON/FaceBrickSizes.json' 
    // : product === 'ThinBrick'
    //   ? '/JSON/ThinBrickSizes.json'
    //   : product === 'Paver'
    //     ? '/JSON/PaverSizes.json'
    //     : '/JSON/ThinBrickSizes.json'; // Default path
    const jsonFilePath='/JSON/FaceBrickSizes.json'
    try {
      const response = await fetch(jsonFilePath);
      const jsonData: DataItem[] = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }