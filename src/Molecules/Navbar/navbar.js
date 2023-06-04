import style from './navbar.module.css'
import { HiDocumentText } from 'react-icons/hi'
import { GrUndo, GrRedo } from 'react-icons/gr'
import { AiOutlinePrinter,AiOutlineBold,AiOutlineItalic, AiOutlineUnorderedList,AiOutlineOrderedList,AiOutlineAlignLeft,AiOutlineUnderline } from 'react-icons/ai'
import { SiAcademia } from 'react-icons/si'
import { BiPaintRoll } from 'react-icons/bi'
import {MdFormatColorText,MdLink} from 'react-icons/md'
import {BiHighlight,BiImage} from'react-icons/bi'
import {BsListCheck} from 'react-icons/bs'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'



export default function Nav(){



    return(
        <div className={style.outer}>
            <section className={style.above}>
          < HiDocumentText className={style.icon}/>
          <div>
            <input placeholder='Untitled Document' className={style.fileName}/>
          </div>
          </section>
{/*
            <section className={style.below}>
                <GrUndo/>
                <GrRedo/>
                <AiOutlinePrinter/>
                <SiAcademia/>
                <BiPaintRoll/>
                <p>100%</p> <span className={style.partition}>|</span>
                <p>Normal Text</p>
                
                <FormControl sx={{width:"100px", border:"1none"}}>
                     <InputLabel id='menu'>Arial</InputLabel>
                     <Select labelId='menu' id='menu-list' label='courses'>
                      <MenuItem value={'font1'}>Font1</MenuItem>
                      <MenuItem value={'font2'}>Font2</MenuItem>
                      <MenuItem value={'font2'}>Font3</MenuItem>
                      </Select>     
                </FormControl>
                









                <span className={style.partition}>|</span>
                <button className={style.textSizeBtn} onClick={()=> setSize(size-1)}>-</button>
                <span className={style.textSize}>{size}</span>
                <button className={style.textSizeBtn} onClick={()=> setSize(size+1)}>+</button>
                 <span className={style.partition}>|</span>
                <AiOutlineBold/>
                <AiOutlineItalic/>
                <AiOutlineUnderline/>
                <MdFormatColorText/>
                <BiHighlight/>  <span className={style.partition}>|</span>
                <MdLink/>
                <BiImage/>  <span className={style.partition}>|</span>
                <AiOutlineAlignLeft/>
                <BsListCheck/>
                <AiOutlineUnorderedList/>
                <AiOutlineOrderedList/>
                

            </section>*/}
          
        </div>
    )
}