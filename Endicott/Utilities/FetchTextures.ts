import { TextureData } from "../Types/TextureTypes";
export async function FetchTexture(product: string | null): Promise<TextureData[] | null> {
    let jsonFilePath = '/JSON/ThinbrickTextures.json'; // Default path
    
    if (product === 'FaceBrick') {
      jsonFilePath = '/JSON/FacebrickTextures.json';
    } else if (product === 'ThinBrick') {
      jsonFilePath = '/JSON/ThinBrickTextures.json';
    } else if (product === 'Paver') {
      jsonFilePath = '/JSON/PaverTextures.json';
    }
    
  
    try {
      const response = await fetch(jsonFilePath);
      const jsonData: TextureData[] = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  // useEffect(() => {
  //   const getData = async () => {
  //       if (Product) { // Only fetch data if Product is not null
  //         const result = await FetchTexture(Product);
  //         setTextureData(result);
  //       }
  //     };
    
  //     getData();
    
  // }, [Product]);