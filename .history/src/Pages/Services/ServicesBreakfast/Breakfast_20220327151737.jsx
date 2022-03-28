import {ServicesMenu} from "../../Components/ServicesMenu/ServicesMenu";
import BreakFastData from "../../../JSON/ServicesMenu/ServicesMenu.json"


export default function Breakfast(){
    
   return( <ServicesMenu Data={BreakFastData} />)
}