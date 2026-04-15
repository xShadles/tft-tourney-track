import IconButton from '@mui/material/IconButton';
import Stack  from "@mui/material/Stack"
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import ShareIcon from '@mui/icons-material/Share';
import { orange } from '@mui/material/colors';

export default function IconButtons() {
  return(
    <Stack direction="row" spacing={1}>
      <IconButton>
        <EmailIcon sx={{ color: orange[900] }}/>
      </IconButton>
      <IconButton>
        <PublicIcon sx={{ color: orange[900] }}/>
      </IconButton>
      <IconButton>
        <ShareIcon sx={{ color: orange[900] }}/>
      </IconButton>
    </Stack>
  
  );
}