// app/_colorPopRedirect.tsx
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react'; // Import Suspense

function ColorPopContent() {  // Separate component for searchParams
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const getFirstParamKey = () => {
      const iterator = searchParams?.keys(); // Optional chaining here is good
      const firstKey = iterator?.next().value;
      return firstKey;
    };

    const ProductValue = getFirstParamKey();

    if (ProductValue === 'Face Brick') {
      router.push('/FaceBrick/Colors');
    } else if (ProductValue === 'Thin Brick') {
      router.push('/ThinBrick/Colors');
    } else {
      router.push('/FaceBrick/Colors'); // Default case
    }
  }, [searchParams, router]); // Add searchParams and router to the dependency array

  return <p>Redirecting to the appropriate Endicott page</p>;
}

export default function ColorPop() { // Wrap with Suspense
  return (
    <Suspense fallback={<p>Redirecting to the appropriate Endicott page</p>}>
      <ColorPopContent />
    </Suspense>
  );
}