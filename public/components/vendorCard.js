import styles from '../../styles/Home.module.css'

import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export function VendorCard(props){
    return(
        <Card className={styles.vendor}>
          <CardMedia
            component="img"
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
            <Button variant="outlined" size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
    )
  }