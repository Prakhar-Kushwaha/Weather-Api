import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import Card from '@mui/material/Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Button from '@mui/material/Button';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  }));



 //Test api - "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=XXXXXXXXXXXXXXXXXXXXXXXXXXX"

  const WeatherApi = "https://api.openweathermap.org/data/2.5/weather"; // ?q={city name}&appid={apiKey}
  const ApiKey = process.env.REACT_APP_ApiKey;

  let [city , setCity] = useState("London");

  const apiUrl = `${WeatherApi}?q=${city},uk&appid=${ApiKey}`;

  let [weather , setWeather] = useState({

  });

   let response = async() => {
     let res = await fetch(apiUrl);
     let data = await res.json();
   }

export default function WeatherCard(){
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
        };

         const today = new Date().toLocaleDateString();

return (
    <Card sx={{ maxWidth: 345 }}>
            <CardHeader 
                    avatar = {
                            <Avatar sx= {{bgcolor : red[500]}}
                                    aria-label = "weather">
                            </Avatar>
                    }
                    action = {
                            <IconButton aria-label = "settings">
                                    <MoreVertIcon/>
                            </IconButton>
                    }
                    title = "Weather Information"
                    subheader = {today}
            />

            <CardMedia
                    component = "img"
                    height = "194"
                    image = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt = "Paella dish"
            />
            <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {/* Weather info here */}
                    </Typography>
                    <Button variant="outlined">Outlined</Button>
                        Get Weather Info
            </CardContent>

            <CardActions disableSpacing>
                 <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                 <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography sx={{ marginBottom: 2 }}>Enjoy:</Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        .....................................................
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        
                        EveryDay is great . Just go and enjoy .☺
                    </Typography>
                    </CardContent>
            </Collapse>
    </Card>
    
  );
}



const Images = {
    Hot : "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Cold : "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8fHww" ,
    Rainy : "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
}

const WeatherIcons = {
    Cold : <AcUnitIcon/>,
    Hot : <SunnyIcon/>,
    Rain : <WaterDropIcon/>,
}
