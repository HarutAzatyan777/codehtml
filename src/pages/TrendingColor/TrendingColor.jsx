import React from 'react'
import './TrendingColor.css'
import TrendingColorPalettes from '../../components/TrendingColorPalettes/TrendingColorPalettes';

const examplePalettes = [
    ['#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff'],
    ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'],
    ['#ff00ff', '#00ffff', '#ffff00', '#ff6600', '#9966ff'],
    ['#33ccff', '#ff99cc', '#00cc99', '#ffcc99', '#ccccff'],
    // Additional 50 example palettes
    ['#ffcc00', '#00ccff', '#cc00ff', '#ccff00', '#ff00cc'],
    ['#99ff99', '#9999ff', '#ff9999', '#ff9999', '#99ff99'],
    ['#660066', '#ff6600', '#6699ff', '#0066cc', '#cc0066'],
    ['#ff9966', '#cc6699', '#66cc99', '#9966cc', '#6699cc'],
    ['#ff6600', '#6600ff', '#66ccff', '#cc33ff', '#99cc33'],
    ['#cc9966', '#99cc66', '#6699cc', '#9966cc', '#ff9933'],
    ['#ff99cc', '#6699ff', '#ff6699', '#cc99ff', '#66cc99'],
    ['#ffcccc', '#ff99cc', '#ff66cc', '#ff33cc', '#ff00cc'],
    ['#ffcc99', '#ffcc66', '#ffcc33', '#ffcc00', '#ffccff'],
    ['#00ccff', '#99ccff', '#cc99ff', '#ff99ff', '#ff66ff'],
    ['#ccffcc', '#ccffff', '#ffffcc', '#ffff99', '#ffccff'],
    ['#ccccff', '#99ccff', '#6699ff', '#3366ff', '#0033ff'],
    ['#ccccff', '#99ccff', '#6699ff', '#3366ff', '#0033ff'],
    ['#0099ff', '#00ccff', '#99ccff', '#ccccff', '#cc99ff'],
    ['#ff99ff', '#ff66ff', '#ff00ff', '#cc00cc', '#990099'],
    ['#99ccff', '#66ccff', '#3399ff', '#0066ff', '#0033cc'],
    ['#ffcc66', '#ff9933', '#ff6600', '#cc3300', '#993300'],
    ['#99ff99', '#66ff66', '#33ff33', '#00cc00', '#009900'],
    ['#ccccff', '#9999ff', '#6666ff', '#3333ff', '#0000ff'],
    ['#ffcccc', '#ff9999', '#ff6666', '#ff3333', '#ff0000'],
    ['#ffff99', '#ffff66', '#ffff33', '#ffff00', '#cccc00'],
    ['#ffccff', '#ff99ff', '#ff66ff', '#ff33ff', '#cc00cc'],
    ['#99cc99', '#669966', '#336633', '#003300', '#000000'],
    ['#ffcc99', '#ff9966', '#ff6633', '#ff3300', '#cc0000'],
    ['#ccffff', '#99ffff', '#66cccc', '#339999', '#006666'],
    ['#ffcc00', '#ff9900', '#ff6600', '#cc6600', '#993300'],
    ['#ff99ff', '#ff66cc', '#ff3399', '#ff0066', '#cc0066'],
    ['#99ccff', '#6699ff', '#3366ff', '#0033ff', '#0000cc'],
    ['#ffff66', '#ffff33', '#ffff00', '#cccc00', '#999900'],
    ['#ff99cc', '#ff6699', '#ff3366', '#ff0033', '#cc0033'],
    ['#ccffcc', '#99ff99', '#66ff66', '#33cc33', '#009900'],
    ['#ccffff', '#99ffff', '#66ffff', '#33cccc', '#009999'],
    ['#ffffcc', '#ffff99', '#ffff66', '#cccc33', '#999900'],
    ['#ffccff', '#ff99ff', '#ff66cc', '#ff3399', '#cc3366'],
    ['#ffcc99', '#ff9966', '#ff6633', '#ff3300', '#cc3300'],
    ['#ccccff', '#9999ff', '#6666ff', '#3333ff', '#0000cc'],
    ['#ffcccc', '#ff9999', '#ff6666', '#ff3333', '#ff0000'],
    ['#ffff99', '#ffff66', '#ffff33', '#cccc00', '#999900'],
    ['#99ff99', '#66ff66', '#33ff33', '#00cc00', '#009900'],
    ['#ff99ff', '#ff66ff', '#ff33ff', '#cc00cc', '#990099'],
    ['#99ccff', '#66ccff', '#3399ff', '#0066ff', '#0033cc'],
    ['#ffcc66', '#ff9933', '#ff6600', '#cc3300', '#993300'],
    ['#ff99cc', '#ff6699', '#ff3366', '#ff0033', '#cc0066'],
    ['#ccffff', '#99ffff', '#66cccc', '#339999', '#006666'],
    ['#ffcc00', '#ff9900', '#ff6600', '#cc6600', '#993300'],
    ['#ff99ff', '#ff66cc', '#ff3399', '#ff0066', '#cc0066'],
    ['#99ccff', '#6699ff', '#3366ff', '#0033ff', '#0000cc'],
    ['#ffff66', '#ffff33', '#ffff00', '#cccc00', '#999900'],
    ['#ff99cc', '#ff6699', '#ff3366', '#ff0033', '#cc0033'],
    ['#ccffcc', '#99ff99', '#66ff66', '#33cc33', '#009900'],
    ['#ccffff', '#99ffff', '#66ffff', '#33cccc', '#009999'],
    ['#ffffcc', '#ffff99', '#ffff66', '#cccc33', '#999900'],
    ['#ffccff', '#ff99ff', '#ff66cc', '#ff3399', '#cc3366'],
    ['#ffcc99', '#ff9966', '#ff6633', '#ff3300', '#cc3300'],
    ['#ccccff', '#9999ff', '#6666ff', '#3333ff', '#0000cc'],
    ['#ffcccc', '#ff9999', '#ff6666', '#ff3333', '#ff0000'],
    ['#ffff99', '#ffff66', '#ffff33', '#cccc00', '#999900'],
    ['#99ff99', '#66ff66', '#33ff33', '#00cc00', '#009900'],
    ['#ff99ff', '#ff66ff', '#ff33ff', '#cc00cc', '#990099'],
    ['#99ccff', '#66ccff', '#3399ff', '#0066ff', '#0033cc'],
    ['#ffcc66', '#ff9933', '#ff6600', '#cc3300', '#993300'],
    ['#ff99cc', '#ff6699', '#ff3366', '#ff0033', '#cc0066'],
    ['#ccffff', '#99ffff', '#66cccc', '#339999', '#006666'],
    ['#ffcc00', '#ff9900', '#ff6600', '#cc6600', '#993300'],
    ['#ff99ff', '#ff66cc', '#ff3399', '#ff0066', '#cc0066'],
    ['#99ccff', '#6699ff', '#3366ff', '#0033ff', '#0000cc'],
    ['#ffff66', '#ffff33', '#ffff00', '#cccc00', '#999900'],
    ['#ff99cc', '#ff6699', '#ff3366', '#ff0033', '#cc0033'],
    ['#ccffcc', '#99ff99', '#66ff66', '#33cc33', '#009900'],
    ['#ccffff', '#99ffff', '#66ffff', '#33cccc', '#009999'],
    ['#ffffcc', '#ffff99', '#ffff66', '#cccc33', '#999900'],
    ['#ffccff', '#ff99ff', '#ff66cc', '#ff3399', '#cc3366'],
    ['#ffcc99', '#ff9966', '#ff6633', '#ff3300', '#cc3300'],
    ['#ccccff', '#9999ff', '#6666ff', '#3333ff', '#0000cc'],
    ['#ffcccc', '#ff9999', '#ff6666', '#ff3333', '#ff0000'],
    ['#ffff99', '#ffff66', '#ffff33', '#cccc00', '#999900']
  ];
  

function TrendingColor() {
  return (
    <div className='trending-container'>

    <div className='trending-color'>
       <TrendingColorPalettes palettes={examplePalettes} /> 
    </div>
    </div>
       
  )
}

export default TrendingColor