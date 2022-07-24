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
import Link from 'next/link';

export function VendorCard(props){
  const router = useRouter()
  const handleClick = (value) => {
    router.push(`${value}`);
  };

  return(
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={props.site}>
          <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default function Home() {
  const router = useRouter()
  const handleClick = (value) => {
    router.push(`${value}`);
  };

  return (
    <div>
     <Stack style={{alignItems: "center"}}>
     <VendorCard image="/drone.webp"  title="Drone Business" description="Great Drone Business Cheap!" site="https://exodrones.com"></VendorCard>
     <VendorCard image="/drone.webp"  title="new Biz" description="Great stuff for you !" site="https://exodrones.com"></VendorCard>
    <Button variant="outlined"  onClick={() => handleClick("/")} style={{marginTop: "3%"}}>
        Home
      </Button>
      </Stack>
    </div>
  )
}
