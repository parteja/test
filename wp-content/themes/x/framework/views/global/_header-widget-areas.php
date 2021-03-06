<?php

// =============================================================================
// VIEWS/GLOBAL/_HEADER-WIDGET-AREAS.PHP
// -----------------------------------------------------------------------------
// Outputs the widget areas for the widgetbar.
// =============================================================================

?>

<?php if ( ! is_page_template( 'template-blank-7.php' ) && ! is_page_template( 'template-blank-8.php' ) ) : ?>
  <?php $num = ( get_theme_mod( 'x_header_widget_areas' ) == '' ) ? 2 : get_theme_mod( 'x_header_widget_areas' ); if ( $num != 0 ) : ?>

    <div class="x-widgetbar collapse">
      <div class="x-widgetbar-inner x-container-fluid max width">
        <div class="x-row-fluid">

          <?php

          $i = 0; while ( $i < $num ) : $i ++;
            switch ( $num ) {
              case 4 : $span = 'x-span3';  break;
              case 3 : $span = 'x-span4';  break;
              case 2 : $span = 'x-span6';  break;
              case 1 : $span = 'x-span12'; break;
            }
            echo '<div class="' . $span . '">';
              dynamic_sidebar( 'header-' . $i );
            echo '</div>';
          endwhile;

          ?>

        </div> <!-- end .x-row-fluid -->
      </div> <!-- end .x-widgetbar-inner.x-container-fluid.max.width -->
    </div> <!-- end .x-widgetbar.collapse -->
    <a href="#" class="x-btn-widgetbar collapsed" data-toggle="collapse" data-target=".x-widgetbar">
      <i class="x-icon-plus-circle"><span class="visually-hidden"><?php _e( 'Toggle the Widgetbar', '__x__' ); ?></span></i>
    </a>

  <?php endif; ?>
<?php endif; ?>