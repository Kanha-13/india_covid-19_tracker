import { useEffect, useState } from "react";
import '../css/tracker.css'
const IndiaCovidTracker = () => {
    const getData = async () => {
        const rawData = await fetch("https://api.covid19india.org/data.json")
        const data = await rawData.json()
        console.log(data.statewise)
        setStateData(data.statewise)
    }
    const [stateWiseData, setStateData] = useState([])
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <h1 className="header">India Covid-19 Tracker</h1>
            <div className="stateWiseStatus">
                <table>
                    <thead>
                        <th className="State">State</th>
                        <th className="data Confirmed">Confirmed</th>
                        <th className="data Active">Active</th>
                        <th className="data Recovered">Recovered</th>
                        <th className="data Deaths">Deaths</th>
                        <th className="data Delta">Delta Case</th>
                        <th className="data Last">Last Updated</th>
                    </thead>
                    <tbody>
                        {stateWiseData.map((stateData, index) => {
                            return (
                                <tr key={index}>
                                    <th className="State">{stateData.state}</th>
                                    <td className="data white Confirmed">{stateData.confirmed}</td>
                                    <td className="data grey Active">{stateData.active}</td>
                                    <td className="data white Recovered">{stateData.recovered}</td>
                                    <td className="data grey Deaths">{stateData.deaths}</td>
                                    <td className="data white Delta">{stateData.deltaconfirmed}</td>
                                    <td className="data grey Last">{stateData.lastupdatedtime}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default IndiaCovidTracker