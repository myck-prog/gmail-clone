import { Button } from '@mui/material'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
function Sidebar() {
  return (
   <div className="sidebar">
    <Button startIcon={<AddIcon fontSize='large'/>} className="sidebar__compose" >Componse</Button>
   </div>
  )
}
export default Sidebar