import React from 'react'
import PieMenu, { Slice } from 'react-pie-menu';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function RadialStats(props) {
    const { classes } = props;
  
    return (
        <div>
            <PieMenu
            radius="125px"
            centerRadius="30px"
            centerX="0"
            centerY="0"
          >
                <Slice>1</Slice>
                <Slice>2</Slice>
                <Slice>3</Slice>
                <Slice>4</Slice>
                <Slice>5</Slice>
                <Slice>6</Slice>
                <Slice>7</Slice>
                <Slice>8</Slice>
                <Slice>9</Slice>
                <Slice>10</Slice>
                <Slice>11</Slice>
                <Slice>12</Slice>
                <Slice>13</Slice>
                <Slice>14</Slice>
                <Slice>15</Slice>
                <Slice>16</Slice>
                <Slice>17</Slice>
                <Slice>18</Slice>
            </PieMenu>
        </div>
    );
  }

  export default RadialStats




// function RadialStats(props) {
//     const { classes } = props;
  
//     return (
//         <div>
//             <button class="cn-button" id="cn-button">+</button>
//             <div class="cn-wrapper" id="cn-wrapper">
//                 <ul>
//                     <li><a href="#"><span class="icon-picture"></span></a></li>
//                     <li><a href="#"><span class="icon-headphones"></span></a></li>
//                     <li><a href="#"><span class="icon-home"></span></a></li>
//                     <li><a href="#"><span class="icon-facetime-video"></span></a></li>
//                     <li><a href="#"><span class="icon-envelope-alt"></span></a></li>
//                 </ul>
//             </div>
//             <div id="cn-overlay" class="cn-overlay"></div>
//         </div>
//     );
//   }

//   export default RadialStats

