
import { DataItem } from "../Types/SizesTypes";
export async function FetchSizesThin(product: string | null): Promise<DataItem[] | null> {
    
    const jsonFilePath = '/JSON/ThinBrickSizes.json'
      
    try {
      const response = await fetch(jsonFilePath);
      const jsonData: DataItem[] = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }