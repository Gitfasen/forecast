import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './style.scss'
import TextInput from '../TextInput'
import { searchCity, getForecastByCityId } from '../../actions'
import Spinner from "../Spinner";
import Alert from "../Alert";

export const Header = () => {

    const dispatch = useDispatch()
    const findCities = useSelector(state => state.forecast.findCities)
    const loading = useSelector(state => state.app.loading)
    const alert = useSelector(state => state.app.alert)

    const setCity = (text) => {
        if (text.length !== 0) {
            dispatch(searchCity(text))
        }
    }

    const setCityId = id => () => {
        dispatch(getForecastByCityId(id))
    }

    return (
        <header className="p-3 mb-2 bg-info text-white">
            {alert && <Alert text={alert}/>}
            <div className="container">
                <h1 className="text-center p-4">Weather Forecast</h1>
                <div className="city-list-wr">
                    {loading && <Spinner/>}
                    <TextInput
                        onSave={setCity}
                        placeholder="Put you city!"
                    />
                    {findCities.length
                        ? (<div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                            {findCities.map(item => (
                                <div
                                    className="dropdown-item"
                                    key={item.id}
                                    onClick={setCityId(item.id)}>
                                        {item.name} ({item.sys.country}) | {item.coord.lat} / {item.coord.lon}
                                </div>
                            ))}
                        </div>)
                        : null
                    }
                </div>
            </div>
        </header>
    )
}
