import { AggregateColor } from "../Types/ProductTypesPathwayAggregate";
export async function FetchProductPathwayAggregate(product: string | null): Promise<AggregateColor[] | null> {
    let jsonFilePath = '/JSON/PathwayAggregate.json'; // Default path
  
    // if (product === 'FaceBrick') {
    //   jsonFilePath = '/JSON/FacebrickColors.json';
    // } else if (product === 'ThinBrick') {
    //   jsonFilePath = '/JSON/ThinbrickColors.json';
    // } else if (product === 'Paver') {
    //   jsonFilePath = '/JSON/PaverColors.json';
    // }else if (product === 'PathwayAggregate'){
    //     jsonFilePath='/JSON/PathwayAggregate.json'
    // }
  
    try {
      const response = await fetch(jsonFilePath);
      const jsonData: AggregateColor[] = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }