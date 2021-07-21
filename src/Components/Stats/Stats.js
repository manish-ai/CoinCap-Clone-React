
import React from 'react'
import Styles from "./Stats.module.css";
import { data } from "../../data/fullstat.json";
import StatsItem from './StatsItem';
const Stats = () => {
    return (
        <div className={Styles.statsContainer}>
            <div className={Styles.statsList}>
            {data.map((item) => (
          <StatsItem key={item.title} title={item.title} value={item.value} />
        ))}
            </div>
            
            <div className={Styles}>
            </div>
            <div className={Styles}>
            </div>
        </div>
    )
}

export default Stats
