/** @format */

import React from "react";
import Container from "./Container";
import WeatherIcon from "./WeatherIcon";
import WeatherDetails, { WeatherDetailProps } from "./WeatherDetails";
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";
import { motion } from "framer-motion";

export interface ForecastWeatherDetailProps extends WeatherDetailProps {
  weatehrIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

const ForecastWeatherDetail: React.FC<ForecastWeatherDetailProps> = (
  props
) => {
  const {
    weatehrIcon = "02d",
    date = "19.09",
    day = "Tuesday",
    temp,
    feels_like,
    temp_min,
    temp_max,
    description
  } = props;

  return (
    <Container className="gap-4">
      {/* left */}
      <motion.section
        className="flex gap-4 items-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-1 items-center">
          <WeatherIcon iconName={weatehrIcon} />
          <p>{date}</p>
          <p className="text-sm">{day}</p>
        </div>

        <div className="flex flex-col px-4">
          <span className="text-5xl">{convertKelvinToCelsius(temp)}°</span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span>Feels like</span>
            <span>{convertKelvinToCelsius(feels_like)}°</span>
          </p>
          <p className="capitalize">{description}</p>
        </div>
      </motion.section>

      {/* right */}
      <motion.section
        className="overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <WeatherDetails {...props} />
      </motion.section>
    </Container>
  );
};

export default ForecastWeatherDetail;
