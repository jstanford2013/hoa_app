import { Stack, Button } from '@mui/material';
import { VendorCard } from '../public/components/vendorCard';
import { useRouter } from 'next/router'

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
        <Button variant="outlined"  onClick={() => handleClick("/")} style={{marginBottom: "5%"}}>
          Home
        </Button>
      </Stack>
    </div>
  )
}
