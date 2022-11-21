import './Content.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import RowData from '../../constants/URLS';
import Row from '../row/Row';

const Content=()=>{
   
    return(
        <div className='content-wrapper'>
            {RowData.map((el)=>{
                return <Row title={el.title} url={el.url} />
            })}
        </div>
    );
}
export default Content
