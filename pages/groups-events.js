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
    <div>
     <p>Groups and Events</p>
     <Button variant="outlined"  onClick={() => handleClick("/")}>
        Home
      </Button>
    </div>
  )
}
