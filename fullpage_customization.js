// Dokumentet til at indstille hvordan fullPage.js opføre sig
var myFullpage = new fullpage('#fullpage', {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ['1', '2', '3', '4', '5', '6', '7', 'final'], // Bliver brugt under produktion så man nemt kan gå til den section man ønsker ved at ændre linket
  // sectionsColor: ['#f5ebeb', '#67c34b', '#7BAABE', '#a25858', '#4651e9', '#b25db4', '#ffc700'], Unødvendigt siden at vi har definineret farverne i css
  navigation: false,
  // navigationPosition: 'right',


  // //Navigation
  // menu: '#menu',
  // lockAnchors: false,
  // navigationTooltips: ['firstSlide', 'secondSlide'],
  // showActiveTooltip: false,
  // slidesNavigation: false,
  // slidesNavPosition: 'bottom',
  //
  // //Scrolling
  // css3: true,
  scrollingSpeed: 1000,
  // autoScrolling: true,
  // fitToSection: true,
  // fitToSectionDelay: 1000,
  // scrollBar: false,
  // easing: 'easeInOutCubic',
  // easingcss3: 'ease',
  // loopBottom: false,
  // loopTop: false,
  // loopHorizontal: true,
  // continuousVertical: false,
  // continuousHorizontal: false,
  // scrollHorizontally: false,
  // interlockedSlides: false,
  // dragAndMove: false,
  // offsetSections: false,
  // resetSliders: false,
  // fadingEffect: false,
  // normalScrollElements: '#element1, .element2',
  // scrollOverflow: false,
  // scrollOverflowReset: false,
  // scrollOverflowOptions: null,
  // touchSensitivity: 15,
  // normalScrollElementTouchThreshold: 5,
  // bigSectionsDestination: null,
  //
  // //Accessibility
  // keyboardScrolling: true,
  // animateAnchor: true,
  // recordHistory: true,
  //
  // //Design
  // controlArrows: true,
  // verticalCentered: true,
  // sectionsColor: ['#ccc', '#fff'],
  // paddingTop: '3em',
  // paddingBottom: '10px',
  fixedElements: '#header, .footer',
  // responsiveWidth: 0,
  // responsiveHeight: 0,
  // responsiveSlides: false,
  // parallax: false,
  // parallaxOptions: {
  //   type: 'reveal',
  //   percentage: 62,
  //   property: 'translate'
  // },
  //
  // //Custom selectors
  // sectionSelector: '.section',
  // slideSelector: '.slide',
  //
  // lazyLoading: true,
  //
  // //events
  // onLeave: function(origin, destination, direction) {},
  // afterLoad: function(origin, destination, direction) {},
  // afterRender: function() {},
  // afterResize: function(width, height) {},
  // afterResponsive: function(isResponsive) {},
  // afterSlideLoad: function(section, origin, destination, direction) {},
  // onSlideLeave: function(section, origin, destination, direction) {}
});

//disabling scrolling down
fullpage_api.setAllowScrolling(false, 'up');
//disabling keyboard scrolling down
fullpage_api.setKeyboardScrolling(false, 'up');
