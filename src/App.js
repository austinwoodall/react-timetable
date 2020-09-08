import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import dayjs from "dayjs";
const weekday = require('dayjs/plugin/weekday');
const localeData = require('dayjs/plugin/localeData')
dayjs.extend(localeData)
dayjs.extend(weekday)
dayjs().localeData()

function App() {

    const firstDayOfWeek = dayjs().weekday(0);
    const lastDayOfWeek = dayjs().weekday(6);
    const daysOfWeek = dayjs.weekdays();

    useEffect(() => {
        console.log(firstDayOfWeek);
        console.log(dayjs().hour())
        console.log(dayjs().minute())
    }, [])
    return (
        <div style={{ display: "flex", flexDirection: "row", width: "100%", overflow: "scroll" }} className="App">
            <div className={"scrolling-container"} style={{ display: "flex", width: "100%", whiteSpace: "nowrap", flexDirection: "row", justifyContent: "space-evenly"}}>
                {
                    daysOfWeek.map((day, index) => {
                        const weekday = dayjs().weekday(index)
                        return (
                            <div key={index} style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "0 2px"
                            }}>
                                <h3 style={{ margin: 0 }}>{day}</h3>
                                <p style={{ margin: 0, fontSize: 12 }}>{weekday.format("MM.DD.YYYY")}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;
