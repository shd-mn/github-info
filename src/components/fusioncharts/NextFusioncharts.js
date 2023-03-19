import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import styles from './Carts.module.scss';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const color = '#2caeba, #5d62b5, #ffc533, #f2726f, 8d6e63';

// STEP 2 - Chart Data
const chartData = [
    {
        label: 'Venezuela',
        value: '3100',
    },
    {
        label: 'Saudi',
        value: '2800',
    },
    {
        label: 'Canada',
        value: '1680',
    },
    {
        label: 'Iran',
        value: '1230',
    },
    {
        label: 'Iran',
        value: '1230',
    },
];

// STEP 3 - Creating the JSON object to store the chart configurations
const languageConfigs = {
    type: 'pie2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        chart: {
            //Set the chart caption
            caption: 'Language',
            showLegend: "0",
            decimals: "0",
            showPercentValues: "0",
            // numberSuffix: 'K',

            //Set the chart subcaption
            // subCaption: 'In MMbbl = One Million barrels',
            //Set the x-axis name
            // xAxisName: 'Country',
            //Set the y-axis name
            // yAxisName: 'Reserves (MMbbl)',
            // numberSuffix: 'K',
            //Set the theme for your chart
            theme: 'fusion',
            palettecolors: color,
            // baseFont: "Roboto",
            // baseFontSize: "11",
            // baseFontColor: "primary-clr"
        },
        data: chartData,
    },
};
const starsConfigs = {
    type: 'column2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: 'Most Popular',
            showValues: '1',
            xAxisName: 'Repos',
            yAxisName: 'Stars',
            xAxisName: 'Repos',
            yAxisName: 'Forks',
            xAxisNameFontSize: "18",
            xAxisNameFontBold: "1",
            xAxisNameFontColor: "#617d98",
            yAxisNameFontSize: "18",
            yAxisNameFontBold: "1",
            yAxisNameFontColor: "#617d98",
            theme: 'fusion',
            palettecolors: color,
        },
        data: chartData,
    },
};
const starsPerLangConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: 'Stars Per Language',
            decimals: "0",
            showPercentValues: "0",
            showLegend: "0",
            xAxisName: 'Repos',
            yAxisName: 'Stars',
            theme: 'fusion',
            palettecolors: color,
        },
        data: chartData,
    },
};
const forkedReposConfigs = {
    type: 'bar2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: 'Most Forked',
            showValues: '1',
            xAxisName: 'Repos',
            yAxisName: 'Forks',
            xAxisNameFontSize: "18",
            xAxisNameFontBold: "1",
            xAxisNameFontColor: "#617d98",
            yAxisNameFontSize: "18",
            yAxisNameFontBold: "1",
            yAxisNameFontColor: "#617d98",
            theme: 'fusion',
            palettecolors: color,
        },
        data: chartData,
    },
};

const NextFusionCharts = () => {
    return (
        <section>
            <div className="container">
                <div className={styles.cart}>
                    <ReactFC {...languageConfigs} />
                    <ReactFC {...starsConfigs} />
                    <ReactFC {...starsPerLangConfigs} />
                    <ReactFC {...forkedReposConfigs} />
                </div>
            </div>
        </section>
    );
};

export default NextFusionCharts;
