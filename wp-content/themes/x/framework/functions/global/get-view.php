<?php

// =============================================================================
// FUNCTIONS/GLOBAL/GET-VIEW.PHP
// -----------------------------------------------------------------------------
// Get view function.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Get View
// =============================================================================

// Get View
// =============================================================================

if ( ! function_exists( 'x_get_view' ) ) :
  function x_get_view( $stack, $base, $extension = '' ) {

    get_template_part( 'framework/views/' . $stack . '/' . $base, $extension );

  }
endif;