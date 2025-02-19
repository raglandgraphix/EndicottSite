import { DataItemPaver } from "../Types/ProductTypesPaver";
export async function FetchProductPaver(product: string | null): Promise<DataItemPaver[] | null> {
    let jsonFilePath = '/JSON/PaverColors.json'; // Default path
  
    if (product === 'FaceBrick') {
      jsonFilePath = '/JSON/FacebrickColors.json';
    } else if (product === 'ThinBrick') {
      jsonFilePath = '/JSON/ThinbrickColors.json';
    } else if (product === 'Paver') {
      jsonFilePath = '/JSON/PaverColors.json';
    }
  
    try {
      const response = await fetch(jsonFilePath);
      const jsonData: DataItemPaver[] = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }