import React from 'react'

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


  const menu = CMenu("#menu1")
  .config({
      menus: [
        {
            title: "3",
            click: function() {
                alert('click event callback');
                }   
            },
        {
            title: "4",
            click: function() {
                alert('click event callback');
                }   
            },
        {
            title: "5",
            click: function() {
                alert('click event callback');
                }   
            },
        {
            title: "6",
            click: function() {
                alert('click event callback');
                }   
            },
        {
            title: "7",
            click: function() {
                alert('click event callback');
                }   
            },
        {
            title: "8",
            click: function() {
                alert('click event callback');
                }   
            },
        {
            title: "9",
            click: function() {
                alert('click event callback');
                }   
            },
        {
            title: "10",
            click: function() {
                alert('click event callback');
                }   
            },
        {
            title: "11",
            click: function() {
                alert('click event callback');
                }   
            },
        {
        title: "12",
        click: function() {
            alert('click event callback');
            }   
        },
        {
        title: "13",
        click: function() {
            alert('click event callback');
            }
        },
        {
        title: "14",
        click: function() {
            alert('click event callback');
            }
        },
        {
        title: "15",
        click: function() {
          alert('click event callback');
            }
        },
        {
        title: "16",
        click: function() {
          alert('click event callback');
            }
        },
        {
        title: "17",
        click: function() {
          alert('click event callback');
            }
        },
        {
        title: "18",
        click: function() {
            alert('click event callback');
        }
        },
        {
        disabled: true,
        title: "disabled"
        }
    ]
  });



$(document).click(function() {
  menu.hide();
});
$(document).contextmenu(function(e) {
  menu.show([e.pageX, e.pageY]);
  return false;
});

function RadialStats(props) {
    const { classes } = props;
  
    return (
        <div>
            <div class="tips">
                Right click in page.
            </div>
        <div id="menu1" class="menu1">
    </div>
     </div>
    );
  }

  export default RadialStats


{/* <div class="tips">
  Right click in page.
</div>
<div id="menu1" class="menu1">

</div> */}