import { Button, IconButton } from '@mui/material'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';


function Sidebar() {
  return (
   <div className="sidebar">
    <Button startIcon={<AddIcon fontSize='large'/>} className="sidebar__compose" >Componse</Button>
    <SidebarOption Icon={InboxIcon} title="Inbox" number ={33} selected = {true}/>
    <SidebarOption Icon={StarIcon} title="Starred" number ={33}/>
    <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number ={33}/>
    <SidebarOption Icon={LabelImportantIcon} title="Important" number ={33}/>
    <SidebarOption Icon={NearMeIcon} title="Sent" number ={33}/>
    <SidebarOption Icon={NoteIcon} title="Drafts" number ={33}/>
    <SidebarOption Icon={ExpandMoreIcon} title="More" number ={33}/>

    <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <DuoIcon />
        </IconButton>
        <IconButton>
          <PhoneIcon />
        </IconButton>
        </div>
    </div>
   </div>
  )
}
export default Sidebar
