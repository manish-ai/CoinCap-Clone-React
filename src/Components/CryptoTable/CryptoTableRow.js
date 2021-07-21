import React from 'react'
import { ICONS } from '../../Utils/Constants';
import Styles from "./CryptoTable.module.css";

const CryptoTableRow = ({data}) => {
    return (
        <tr className={Styles.tableRowWrap}>
            <td className={Styles.tableCell}>
                {data.rank}
            </td>
            <td className={Styles.tableCellName}>
                <img className={Styles.currencyImg} src={`${ICONS}${data.symbol.toLowerCase()}@2x.png`} alt={`${ICONS}${data.symbol.toLowerCase()}@2x.png`}  />
                    
                    <span className={Styles.currencyName}>
           {data.name}
            <span className={Styles.currencyShort}>{data.symbol}</span>
          </span>
            </td>
            <td className={Styles.tableCell}>
                ${parseFloat(data.priceUsd).toFixed(2)}
            </td>
            <td className={Styles.tableCell}>
            ${(Math.round(data.marketCapUsd )/1000000000).toFixed(2)}b
            </td>
            <td className={Styles.tableCell}>
            ${parseFloat(data.vwap24Hr).toFixed(2)}
            </td>
            <td className={Styles.tableCell}>
            {(Math.round(data.supply )/1000000).toFixed(2)}m
            </td>
            <td className={Styles.tableCell}>
            ${(Math.round(data.volumeUsd24Hr )/1000000).toFixed(2)}m
            </td>
            <td className={Styles.tableCell} style={{color:'green', textAlign:'right'}}>
            {parseFloat(data.changePercent24Hr ).toFixed(2)}%
            </td>
        </tr>
    )
}

export default CryptoTableRow
