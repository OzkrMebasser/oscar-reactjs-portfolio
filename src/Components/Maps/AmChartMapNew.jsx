import React, { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import "../../Components/LetterGlitch/LetterGlitch.css";
import LetterGlitch from "../LetterGlitch/LetterGlitch";
import Aurora from "../Auroras/Aurora"; 

am4core.useTheme(am4themes_animated);

const AmChartsMapNew = () => {
  const chartRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Create the map
    const chart = am4core.create("globediv", am4maps.MapChart);
    chartRef.current = chart;

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.deltaLatitude = -30;

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

    // Hacer los países semi-transparentes para que se vea el background detrás
    polygonTemplate.fill = am4core.color("#000");
    // polygonTemplate.fillOpacity = 0.3; // Reducir opacidad para ver el background
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.stroke = am4core.color("#2b00c4");
    polygonTemplate.strokeWidth = 1;
    polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    polygonTemplate.url = "https://en.wikipedia.org/wiki/{name}";
    polygonTemplate.urlTarget = "_blank";

    const graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.mapLines.template.line.stroke = am4core.color("#000");
    graticuleSeries.mapLines.template.line.strokeOpacity = 0.2;
    graticuleSeries.fitExtent = false;

  chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.07;
     chart.backgroundSeries.mapPolygons.template.polygon.fill =
       am4core.color("#000");

    const hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#d4af37");

    // Start rotation animation
    animationRef.current = chart.animate(
      { property: "deltaLongitude", to: 0 },
      500
    );

    // Stop and restart the animation every 5 seconds
    setInterval(() => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
      animationRef.current = chart.animate(
        { property: "deltaLongitude", to: 10000 },
        2000000
      );
    }, 500);

    return () => {
      if (chart) {
        if (animationRef.current) {
          animationRef.current.stop();
        }
        chart.dispose();
      }
    };
  }, []);

  return (
    
<div className="globe-wrapper">

     <div className="globe-container">
      {/* Capa 1: LetterGlitch (fondo) */}
      <div className="glitch-background">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Capa 2: Aurora con reflejo (medio) */}
      <div className="aurora-background">
        <Aurora
          colorStops={["#14e81e", "#8d00c4", "#017ed5"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
          showReflection={true} // Esta nueva prop controla si se muestra el reflejo
        />
      </div>

      {/* Capa 3: Globe (encima) */}
      <div id="globediv"></div>
    </div>
 </div>
  );
};

export default AmChartsMapNew;