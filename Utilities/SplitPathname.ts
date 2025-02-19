'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


export const SplitPathname = () => {
  const [Product, setProduct] = useState<string | null>(null);
  const [RangeColors, setRangeColors] = useState<string | null>(null);
  const [Page,setPage]=useState<string | null>(null);
  const [Project,setProject]=useState<string | null>(null);
  const [Texture,setTexture]=useState<string | null>(null);
  const [Color,setColor]=useState<string | null>(null);
  const [AggregatePage,setAggregatePage]=useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if(pathname){
    const parts = pathname.split('/');
    
    if (parts.length > 1) {
      if(parts[1]!=='Careers'){
        setProduct(parts[1]);
        //setProject(parts[2].includes('-') ? parts[2].split('-')[0] : parts[2])
      
      
      // if(parts[2].includes('-') ? parts[2].split('-')[0] : parts[2] !=='Colors'){
      //   setProject(parts[2].includes('-') ? parts[2].split('-')[0] : parts[2])
      // }
      if(parts[2]?.includes('-')){
        setRangeColors(parts[2].split('-')[1]);
        setPage(parts[2].split('-')[0]);
        // if(parts[2].split('-')[0]=== 'Projects'){
        //   setProject(parts[2].split('-')[0]);
        // }else if(parts[2].split('_')[0]=== 'Colors'){
        //   setRangeColors(parts[2].split('-')[1])
        // }
        
      }else {
        if(parts[2]=='Colors' || parts[2]==='Textures' ||  parts[2]==='Sizes' || parts[2]==='Projects'){ //if another page is ever added that can be 3 levels (facebrick/something/individualpage) you will need to add it here.
          setPage(parts[2]);
          
        }else{
          setProject(parts[2]);
          //setProject(parts[2].includes('-') ? parts[2].split('-')[0] : parts[2])
        }

       // setPage(parts[2]);
        
        }
      
      
      if(parts[3]){
        if(parts[3].includes('-')){
          setTexture(parts[3].split('-')[1])
          setColor(parts[3].split('-')[0]);
        }else{
          setColor(parts[3]);
        }
      
      
        // setRangeColors(parts[2].includes('-') ? pathname.split('-')[1] : null);
     
      
      // setPage(parts[2].includes('-') ? parts[2].split('-')[0] : parts[2]);
    }
    }
    }
  }
  }, [pathname,Product, RangeColors,Page,Project,Texture,Color]);
  // console.log(Product);
  //   console.log(RangeColors);
  //    console.log(Page);//example: colors or textures
  //    console.log(Project);

  return { Product, setProduct,Page,setPage, RangeColors, setRangeColors,Project, setProject,Color,setColor,Texture,setTexture, AggregatePage,setAggregatePage };
};