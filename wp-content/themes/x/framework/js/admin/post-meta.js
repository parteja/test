// =============================================================================
// JS/ADMIN/POST-META.JS
// -----------------------------------------------------------------------------
// Show/hide Post Format meta boxes as needed, as well as meta boxes for Icon.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Post Meta Functionality
// =============================================================================

// Post Meta Functionality
// =============================================================================

jQuery(document).ready(function($) {

  //
  // Show/hide post format meta boxes.
  //

  var quoteOptions    = $('#x-meta-box-quote');
  var quoteTrigger    = $('#post-format-quote');

  var linkOptions     = $('#x-meta-box-link');
  var linkTrigger     = $('#post-format-link');

  var audioOptions    = $('#x-meta-box-audio');
  var audioTrigger    = $('#post-format-audio');

  var videoOptions    = $('#x-meta-box-video');
  var videoTrigger    = $('#post-format-video');

  var postFormatGroup = $('#post-formats-select input');

  xHideAll(null);

  postFormatGroup.change( function() {
    xHideAll(null);
    if ($(this).val() == 'quote') {
      quoteOptions.css('display', 'block');
    } else if ($(this).val() == 'link') {
      linkOptions.css('display', 'block');
    } else if ($(this).val() == 'audio') {
      audioOptions.css('display', 'block');
    } else if ($(this).val() == 'video') {
      videoOptions.css('display', 'block');
    }
  });

  if (quoteTrigger.is(':checked'))
    quoteOptions.css('display', 'block');

  if (linkTrigger.is(':checked'))
    linkOptions.css('display', 'block');

  if (audioTrigger.is(':checked'))
    audioOptions.css('display', 'block');

  if (videoTrigger.is(':checked'))
    videoOptions.css('display', 'block');

  function xHideAll(notThisOne) {
    videoOptions.css('display', 'none');
    quoteOptions.css('display', 'none');
    linkOptions.css('display', 'none');
    audioOptions.css('display', 'none');
  }


  //
  // Show/hide Icon meta box.
  //

  var iconOptions       = $('#x-meta-box-page-icon');
  var iconTrigger       = $('#page_template option[value*="template-blank"]');
  var pageTemplateGroup = $('#page_template');

  if ( iconTrigger.is(':checked') ) {
    iconOptions.css('display', 'block');
  } else {
    iconOptions.css('display', 'none');
  }

  pageTemplateGroup.change( function() {
    if ( iconTrigger.is(':checked') ) {
      iconOptions.css('display', 'block');
    } else {
      iconOptions.css('display', 'none');
    }
  });


  //
  // Show/hide slider above meta box settings.
  //

  var $sliderAboveDropdown            = $('#_x_slider_above');
  var $sliderAboveDropdownRowSiblings = $sliderAboveDropdown.parents('tr').siblings();

  if ( $('#_x_slider_above option:selected').text() === 'Deactivated' ) {
    $sliderAboveDropdownRowSiblings.css('display', 'none');
  }

  $sliderAboveDropdown.change( function() {
    if ( $('#_x_slider_above option:selected').text() === 'Deactivated' ) {
      $sliderAboveDropdownRowSiblings.css('display', 'none');
    } else {
      $sliderAboveDropdownRowSiblings.css('display', 'table-row');
    }
  });


  //
  // Show/hide slider below meta box settings.
  //

  var $sliderBelowDropdown            = $('#_x_slider_below');
  var $sliderBelowDropdownRowSiblings = $sliderBelowDropdown.parents('tr').siblings();

  if ( $('#_x_slider_below option:selected').text() === 'Deactivated' ) {
    $sliderBelowDropdownRowSiblings.css('display', 'none');
  }

  $sliderBelowDropdown.change( function() {
    if ( $('#_x_slider_below option:selected').text() === 'Deactivated' ) {
      $sliderBelowDropdownRowSiblings.css('display', 'none');
    } else {
      $sliderBelowDropdownRowSiblings.css('display', 'table-row');
    }
  });


  //
  // WordPress Color Picker
  //

  $('.wp-color-picker').wpColorPicker();

});