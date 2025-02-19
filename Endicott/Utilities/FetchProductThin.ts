
import { DataItemThin } from "../Types/ProductTypesThinbrick";
export async function FetchProductThin(product: string | null): Promise<DataItemThin[] | null> {
    let jsonFilePath = '/JSON/ThinbrickColors.json'; // Default path
  
    if (product === 'FaceBrick') {
      jsonFilePath = '/JSON/FacebrickColors.json';
    } else if (product === 'ThinBrick') {
      jsonFilePath = '/JSON/ThinbrickColors.json';
    } else if (product === 'Paver') {
      jsonFilePath = '/JSON/PaverColors.json';
    }
  
    try {
      const response = await fetch(jsonFilePath);
      const jsonData: DataItemThin[] = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }