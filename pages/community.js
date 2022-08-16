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
        <VendorCard image="/drone.webp"  title="Drone Business" description="High Quality Drone Services" site="https://exodrones.com"></VendorCard>
        <VendorCard image="/REALTOR.jpg"  title="Local Real Estate" description="Great stuff for you !" site="https://www.redfin.com"></VendorCard>
        <VendorCard image="/CBAlogo.png"  title="Brothers Automotive" description="Mention HP for 5% off" site="https://www.cbac.com"></VendorCard>
        <Button variant="outlined"  onClick={() => handleClick("/")} style={{marginBottom: "5%"}}>
          Home
        </Button>
      </Stack>
    </div>
  )
}
