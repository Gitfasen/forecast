import React from 'react';
import { useSelector } from 'react-redux';
import {
  AreaChart, XAxis, YAxis, Tooltip, Area,
} from 'recharts';
import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    const { date, temp } = payload[0].payload;

    return (
      <div className="card p-2">
        <div className="cart-body">
          Date:
          {`Date: ${date}`}
          <br />
          {`Temperature: ${temp} °C`}
        </div>
      </div>
    );
  }
  return null;
};
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};
CustomTooltip.defaultProps = {
  active: false,
  payload: [],
};

const MainSection = () => {
  const forecastByCity = useSelector((state) => state.forecast.forecastByCity);

  if (!forecastByCity) return null;

  return (
    <section className="p-3 mb-2 bg-light text-dark h-100 text-center">
      <h3>{forecastByCity?.name}</h3>
      <div className="text-center">
        <AreaChart
          width={800}
          height={400}
          data={forecastByCity.tempList}
          style={{ margin: '0 auto' }}
        >
          <defs>
            <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(23,162,184, 0.8)" />
              <stop offset="95%" stopColor="rgba(0, 136, 254, 0)" />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="temp"
            stroke="#FF5733"
            strokeWidth="2"
            fillOpacity="1"
            fill="url(#MyGradient)"
            dot
          />
        </AreaChart>
      </div>
    </section>
  );
};

export default MainSection;
