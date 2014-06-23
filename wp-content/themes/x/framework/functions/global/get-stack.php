<?php

// =============================================================================
// FUNCTIONS/GLOBAL/GET-STACK.PHP
// -----------------------------------------------------------------------------
// Get stack function.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Get Stack
// =============================================================================

// Get Stack
// =============================================================================

if ( ! function_exists( 'x_get_stack' ) ) :
  function x_get_stack() {

    if ( get_theme_mod( 'x_stack' ) == '' ) {
      $stack = 'integrity';
    } else {
      $stack = get_theme_mod( 'x_stack' );
    }

    return $stack;

  }
  add_action( 'customize_save', 'x_get_stack' );
endif;