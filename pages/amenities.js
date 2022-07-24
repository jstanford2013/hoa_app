import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Stack, Button } from '@mui/material';
import { useRouter } from 'next/router'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function Home() {
    const router = useRouter()
  const handleClick = (value) => {
    router.push(`${value}`);
  };

  return (
    <div>
     <Stack style={{alignItems: "center"}}>
     <Image
        alt="Mountains"
        src={img}
        layout="responsive"
        width={1200}
        height={900}
      />
    <Button variant="outlined"  onClick={() => handleClick("/")} style={{marginTop: "3%"}}>
        Home
      </Button>
    </Stack>
    </div>
  )
}
