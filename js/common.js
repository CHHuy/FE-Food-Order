/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && window.innerWidth <= 767) {
  //alert('Touch Screen');
} else {
}

;(function () {
  'use strict'

  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div')
    scrollDiv.className = 'scrollbar-measure'
    document.body.appendChild(scrollDiv)

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv)
    // console.log(scrollbarWidth);
    return scrollbarWidth
  }

  function valueChanging() {
    if (document.getElementById('cartOrder')) {
      let deductBtnArr = document.getElementsByClassName('decrease')
      let addButtonArr = document.getElementsByClassName('increase')

      for (let deductBtn of deductBtnArr) {
        deductBtn.onclick = () => {
          let currentInputBox = deductBtn.nextElementSibling
          if (currentInputBox.value > 1) {
            currentInputBox.value = currentInputBox.value - 1
          }
        }
      }

      for (let addButton of addButtonArr) {
        addButton.onclick = () => {
          let currentInputBox = addButton.previousElementSibling
          if (currentInputBox.value < 10) {
            currentInputBox.value = parseInt(currentInputBox.value) + 1
          }
        }
      }
    }
  }

  function init() {
    getBarwidth()
    valueChanging()
  }

  init()
})()
