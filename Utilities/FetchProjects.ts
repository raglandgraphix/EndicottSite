import { useEffect } from "react";
import { Job } from "../Types/ProjectTypes";

export async function FetchProjects(Product: string | null): Promise<Job[] | null> {
    if (Product) { // Check if product is not null
        // Determine the correct path based on the product
        const jsonFilePath = Product === 'FaceBrick' 
          ? '/JSON/FaceBrickProjects.json' 
          : Product === 'ThinBrick'
            ? '/JSON/ThinBrickProjects.json'
            : Product === 'Paver'
              ? '/JSON/PaverProjects.json'
              : '/JSON/ThinBrickProjects.json'; // Default path
    
        try {
          const response = await fetch(jsonFilePath);
          const jsonData: Job[] = await response.json();
          return jsonData;
        } catch (error) {
          console.error('Error fetching data:', error);
          return null;
        }
      } else {
        return null; // Or return a default value or an empty array if needed
      }
    }