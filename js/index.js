let openSidenav = () => {
  $('#sideNavbar').css('width', '100%')
  $('#sideNavbar').css('display', 'block')
  $('.navbar').css('position', 'fixed')
}

let closeSidenav = () => {
  $('#sideNavbar').css('display', 'none')
  $('.navbar').css('position', 'static')
}