import React, { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import Particle2 from "../../Components/particulesBG/Particle2";

am4core.useTheme(am4themes_animated);

const AmChartsMap = () => {
  const chartRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Create the map
    const chart = am4core.create("chartdiv", am4maps.MapChart);
    chartRef.current = chart;

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.deltaLatitude = -30;
    // chart.deltaLongitude = -20; // Adjust as needed
    // chart.rotateSprite = true; // Disable sprite rotation

    // Create map polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    const polygonTemplate = polygonSeries.mapPolygons.template;

    // Crear el gradiente con los valores hexadecimales
    const gradient = new am4core.LinearGradient();
    gradient.addColor(am4core.color("#000000"));
    gradient.addColor(am4core.color("#040301"));
    gradient.addColor(am4core.color("#04121A"));
    gradient.rotation = 50;

    // Aplicar el degradado
    polygonTemplate.fill = gradient;
    // polygonTemplate.fill = am4core.color("#000");
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.stroke = am4core.color("#00bbf0");
    polygonTemplate.strokeWidth = 0.3;
    polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    polygonTemplate.url = "https://en.wikipedia.org/wiki/{name}";
    polygonTemplate.urlTarget = "_blank";

    const graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.mapLines.template.line.stroke = am4core.color("#fefefe");
    graticuleSeries.mapLines.template.line.strokeOpacity = 0.09;
    graticuleSeries.fitExtent = false;

    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.07;
    chart.backgroundSeries.mapPolygons.template.polygon.fill =
      am4core.color("#000");

    const hs = polygonTemplate.states.create("hover");
    // hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);
    hs.properties.fill = am4core.color("#d4af37");

    // Start rotation animation
    animationRef.current = chart.animate(
      { property: "deltaLongitude", to: 10 },
      20000000
    );

    // Stop and restart the animation every 5 seconds
    setInterval(() => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
      animationRef.current = chart.animate(
        { property: "deltaLongitude", to: 100000 },
        20000000
      );
    }, 5000);

    return () => {
      if (chart) {
        if (animationRef.current) {
          animationRef.current.stop();
        }
        chart.dispose();
      }
    };
  }, []);

  return <div id="chartdiv"/>;
};

export default AmChartsMap;
