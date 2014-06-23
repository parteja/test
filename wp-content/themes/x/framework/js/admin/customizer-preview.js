// =============================================================================
// JS/ADMIN/CUSTOMIZER-PREVIEW.JS
// -----------------------------------------------------------------------------
// Customizer control handling.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Customizer Control Handling
// =============================================================================

// Customizer Control Handling
// =============================================================================

// ( function( $ ) {

//   var stack = mod.x_stack;

//   wp.customize( 'x_stack', function( value ) {
//     value.bind( function( newval ) {
//       stack = newval;
//       scripts();
//     } );
//   } );

//   console.log('STACK:' + stack);

//   if ( stack === 'integrity' ) {
//     wp.customize( 'x_integrity_sizing_site_max_width', function( value ) {
//       value.bind( function( newval ) {
//         $( '.x-container-fluid.max' ).css( 'max-width', newval + 'px' );
//       } );
//     } );
//   }

//   // reload scripts
//   function scripts() {

//     setTimeout( function() {

//       // clean up on isle 9
//       $('#sidebar').css('min-height','');
//       $('#content').css('min-height','');
//       $('section.borderOff').removeClass('borderOff');
//       $('section.marginOffBot').removeClass('marginOffBot');
//       $('section.marginOffTop').removeClass('marginOffTop');
//       $('span.gap.gap-last').removeClass('gap-last');

//       function borderCheck(){$(".vk_content_borders_1.vk_content_media_fullwidth_1 section.media-wrap").each(function(){$(this).prev().addClass("borderOff")})}function marginCheck(){var s=$(".footer-placement-content.vk_content_media_fullwidth_1 #content section").last();s.hasClass("media-wrap")&&s.prev().hasClass("media-wrap")&&(s.addClass("marginOffTop"),s.prev().addClass("marginOffBot"))}function metaCheck(){$(".entry-meta p").each(function(){var s=$(this).find("span.gap:visible:last");s.addClass("gap-last")})}function buttonClass(){$(".nav-buttons #sidebar li a").addClass("button"),$("input#submitbutton").addClass("button"),$('.post-password-form input[type="submit"]').addClass("button"),$(".page-numbers").addClass("button"),$(".page-numbers.current").addClass("invert"),$(".tagcloud a").addClass("button small"),$("body").hasClass("more-button")&&$("a.more-link").addClass("button")}function hoverAlignment(){$("body").hasClass("vk_hover_icon_")&&$(".hover").each(function(){var s=$(this).height(),a=$(this).children(".hover-meta-wrap"),t=a.height(),o=(s-t)/2;a.css("top",o+"px")})}function quoteLinkHeight(){$(".quote-square, .link-square").each(function(){var s=$(this),a=$(this).children(".vertical-align");s.css("min-height",""),a.css("margin-top","");var t=s.outerWidth();s.css("min-height",t);var o=s.height(),r=a.height(),h=(o-r)/2;a.css("margin-top",h+"px")})}function minHeight(){if($("body").hasClass("vk_sidebar_autoheight_1")){var s=$(".sidebar-left #content, .sidebar-right #content"),a=$(".sidebar-left #sidebar, .sidebar-right #sidebar");s.css("min-height",""),a.css("min-height","");var t=$("#content").outerHeight(),o=$("#sidebar").outerHeight();$(window).width()>900&&(t>o?(a.css("min-height",t),s.css("min-height",t)):(a.css("min-height",o),s.css("min-height",o)))}}function masonryHeight(s){$(s).css("height","");var a=-1;$(s).each(function(){a=a>$(this).outerHeight()?a:$(this).outerHeight()}),$(s).each(function(){$(this).css("height",a)})}function lastRow(){$(".group-2").length<1?$(".group-1").addClass("last-row"):$(".group-3").length<1?$(".group-2").addClass("last-row"):$(".group-4").length<1?$(".group-3").addClass("last-row"):$(".group-5").length<1?$(".group-4").addClass("last-row"):$(".group-6").length<1?$(".group-5").addClass("last-row"):$(".group-7").length<1?$(".group-6").addClass("last-row"):$(".group-8").length<1?$(".group-7").addClass("last-row"):$(".group-9").length<1?$(".group-8").addClass("last-row"):$(".group-10").length<1?$(".group-9").addClass("last-row"):$(".group-11").length<1?$(".group-10").addClass("last-row"):$(".group-12").length<1?$(".group-11").addClass("last-row"):$(".group-13").length<1&&$(".group-12").addClass("last-row")}function plus(s,a){var t=parseInt(s)+parseInt(a);return t}function isotope(s){var a=$(".masonry."+s+"-page");if(a.length>0&&a.is(":visible")){var t=$("body"),o=$("."+s+"-box"),r=o.filter(":visible"),h=parseInt(t.attr("data-gutter-"+s)),e=a.attr("data-layout"),i=plus(Math.floor(a.width()),Math.floor(h)),l=t.width(),n=1,d=1,g=2,u=3,p=4,C=5,c=6,f=7,m=Math.floor(i/1);o.css("height",""),o.removeClass("last last-row group-1 group-2 group-3 group-4 group-5 group-6 group-7 group-8 group-9 group-10 group-11 group-12"),t.hasClass(s+"-1")?(d=1,g=2,u=3,p=4,C=5,c=6,f=7,(t.hasClass("body-width-1200")||t.hasClass("body-width-1050"))&&(d=1,g=1,u=1,p=1,C=1,c=1,f=1),n=t.hasClass("sidebar-left")||t.hasClass("sidebar-right")?1:1):t.hasClass(s+"-2")?(d=2,g=3,u=4,p=5,C=6,c=7,f=8,t.hasClass("body-width-1200")&&(d=2,g=2,u=2,p=2,C=2,c=2,f=2),t.hasClass("body-width-1050")&&(d=2,g=2,u=2,p=2,C=2,c=2,f=2),n=t.hasClass("sidebar-left")||t.hasClass("sidebar-right")?2:2):t.hasClass(s+"-3")?(d=3,g=4,u=5,p=6,C=7,c=8,f=9,t.hasClass("body-width-1200")&&(d=3,g=3,u=3,p=3,C=3,c=3,f=3),t.hasClass("body-width-1050")&&(d=3,g=3,u=3,p=3,C=3,c=3,f=3),n=t.hasClass("sidebar-left")||t.hasClass("sidebar-right")?2:3):t.hasClass(s+"-4")?(d=4,g=5,u=6,p=7,C=8,c=9,f=10,t.hasClass("body-width-1200")&&(d=4,g=4,u=4,p=4,C=4,c=4,f=4),t.hasClass("body-width-1050")&&(d=4,g=4,u=4,p=4,C=4,c=4,f=4),n=t.hasClass("sidebar-left")||t.hasClass("sidebar-right")?2:3):t.hasClass(s+"-5")&&(d=5,g=6,u=7,p=8,C=9,c=10,f=11,t.hasClass("body-width-1200")&&(d=5,g=5,u=5,p=5,C=5,c=5,f=5),t.hasClass("body-width-1050")&&(d=5,g=5,u=5,p=5,C=5,c=5,f=5),n=t.hasClass("sidebar-left")||t.hasClass("sidebar-right")?2:3),600>=l?(m=Math.floor(i/1),r.addClass("last")):900>=l?1===n?(m=Math.floor(i/1),r.addClass("last")):(m=Math.floor(i/2),r.each(function(s){$(this).addClass("group-"+Math.floor(s/2+1)),(s+1)%2===0&&$(this).addClass("last")})):1050>=l?(m=Math.floor(i/n),r.each(function(s){$(this).addClass("group-"+Math.floor(s/n+1)),(s+1)%n===0&&$(this).addClass("last")})):1200>=l?(m=Math.floor(i/d),r.each(function(s){$(this).addClass("group-"+Math.floor(s/d+1)),(s+1)%d===0&&$(this).addClass("last")})):1600>=l?(m=Math.floor(i/g),r.each(function(s){$(this).addClass("group-"+Math.floor(s/g+1)),(s+1)%g===0&&$(this).addClass("last")})):1900>=l?(m=Math.floor(i/u),r.each(function(s){$(this).addClass("group-"+Math.floor(s/u+1)),(s+1)%u===0&&$(this).addClass("last")})):2300>=l?(m=Math.floor(i/p),r.each(function(s){$(this).addClass("group-"+Math.floor(s/p+1)),(s+1)%p===0&&$(this).addClass("last")})):2600>=l?(m=Math.floor(i/C),r.each(function(s){$(this).addClass("group-"+Math.floor(s/C+1)),(s+1)%C===0&&$(this).addClass("last")})):2900>=l?(m=Math.floor(i/c),r.each(function(s){$(this).addClass("group-"+Math.floor(s/c+1)),(s+1)%c===0&&$(this).addClass("last")})):3200>=l?(m=Math.floor(i/f),r.each(function(s){$(this).addClass("group-"+Math.floor(s/f+1)),(s+1)%f===0&&$(this).addClass("last")})):m=300,m=Math.floor(m-h),"fitRows"==e&&lastRow(),o.css({width:m}),a.isotope({layoutMode:e,masonry:{columnWidth:m,gutter:h}}),a.isotope("unbindResize"),r.each(function(s){s%2===0?$(this).removeClass("even").addClass("odd"):s%1===0&&$(this).removeClass("odd").addClass("even")}),"fitRows"==e&&(masonryHeight(".masonry."+s+"-page .group-1"),masonryHeight(".masonry."+s+"-page .group-2"),masonryHeight(".masonry."+s+"-page .group-3"),masonryHeight(".masonry."+s+"-page .group-4"),masonryHeight(".masonry."+s+"-page .group-5"),masonryHeight(".masonry."+s+"-page .group-6"),masonryHeight(".masonry."+s+"-page .group-7"),masonryHeight(".masonry."+s+"-page .group-8"),masonryHeight(".masonry."+s+"-page .group-9"),masonryHeight(".masonry."+s+"-page .group-10"),masonryHeight(".masonry."+s+"-page .group-11"),masonryHeight(".masonry."+s+"-page .group-12")),quoteLinkHeight(),hoverAlignment(),minHeight()}}isotope("portfolio"),isotope("blog"),isotope("footer"),borderCheck(),marginCheck(),metaCheck(),buttonClass();
          
//     }, 500);
  
//   }

// } )( jQuery );