import React, { useEffect, useState } from 'react'
import Styles from "./CryptoTable.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getCryptoData } from '../../Redux/Actions/cryptoAction';
import CryptoTableRow from './CryptoTableRow';

const LIMIT = "50"
const CryptoTable = () => {
     const dispatch = useDispatch()
    const [offset, setOffset]= useState(0)
     const crypto = useSelector((state) => state.crypto)
    let {loading, cryptoData} = crypto;

    useEffect(() => {
        dispatch(getCryptoData(LIMIT,0))
    }, [])
    const loadMore = ()=>{
        dispatch(getCryptoData(LIMIT,offset+50))
        setOffset(offset+50)
    }
    return (
        <div className={Styles.container}>
            <table className={Styles.tableWrap}>
            <thead className={Styles.tableHead}>            
            <tr className={Styles.tableHeadRow}>
                <th className={Styles.tableCellHead}>
                    Rank
                </th>
                <th className={Styles.tableCellHeadName}>
                    Name
                </th>
                <th className={Styles.tableCellHead}>
                  Price
                </th>
                <th className={Styles.tableCellHead}>
                    MarketCap
                </th>
                <th className={Styles.tableCellHead}>
                    VWAP(24Hr)
                </th>
                <th className={Styles.tableCellHead}>
                    Supply
                </th>
                <th className={Styles.tableCellHead}>
                    Volume(24Hr)
                </th>
                <th className={Styles.tableCellHead}  style={{ textAlign:'right'}}>
                    Change(24Hr)
                </th>
            </tr>
            </thead>
            
            <div></div>:
            <tbody className={Styles.tableBody}>
                {cryptoData && cryptoData.map((rowData) => (
            <CryptoTableRow key={rowData.symbol} data={rowData} />
          ))}
            </tbody>
            </table>
            <button className={Styles.tableMoreButton} onClick={loadMore}>{loading? "Loading...":"Load More"}</button>
        </div>
    )
}

export default CryptoTable
