import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


export default function Search(){
    return (
        <form>
          <TextField id="city" label="City Name" variant="outlined" required/>
          <IconButton aria-label="delete"  color="secondary" type="submit">
              <SearchIcon />
          </IconButton>
        </form>

    );
}