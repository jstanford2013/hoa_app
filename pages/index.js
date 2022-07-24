import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Stack, Button } from '@mui/material';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleClick = (value) => {
    router.push(`${value}`);
  };

  return (
    <div >
        
        <Stack spacing={2}>
        <Image
        alt="Mountains"
        src="/hoa_logo.png"
        layout="responsive"
        width={700}
        height={450}
      />
         <Button variant="outlined"  onClick={() => handleClick("/amenities")}>
           Amenities
         </Button>
         <Button variant="outlined"  onClick={() => handleClick("/community")}>
           Community
         </Button>
         <Button variant="outlined"  onClick={() => handleClick("/groups-events")}>
           Groups & Events
         </Button>
         <Button variant="outlined"  onClick={() => handleClick("/directory")}>
           Directory
         </Button>         
         </Stack>
    </div>
  )
}
