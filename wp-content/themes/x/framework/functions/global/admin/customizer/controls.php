<?php

// =============================================================================
// FUNCTIONS/GLOBAL/ADMIN/CUSTOMIZER/CONTROLS.PHP
// -----------------------------------------------------------------------------
// Sets up custom controls for the Customizer.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Custom Controls
// =============================================================================

// Custom Controls
// =============================================================================

function x_add_customizer_custom_controls( $wp_customize ) {
  class X_Customize_Control_Textarea extends WP_Customize_Control {
    public $type = 'textarea';
    public function render_content() {
      ?>
        <label>
          <span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
          <textarea <?php $this->link(); ?> rows="10" style="width: 98%;"><?php echo esc_textarea( $this->value() ); ?></textarea>
        </label>
      <?php
    }
  }

  class X_Customize_Control_Multiple_Select extends WP_Customize_Control {
    public $type = 'multiple-select';
    public function render_content() {
      ?>
        <label>
          <span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
          <select <?php $this->link(); ?> multiple="multiple" style="height: 156px;">
            <?php
              foreach ( $this->choices as $value => $label ) {
                $selected = ( in_array( $value, $this->value() ) ) ? selected( 1, 1, false ) : '';
                echo '<option value="' . esc_attr( $value ) . '"' . $selected . '>' . $label . '</option>';
              }
            ?>
          </select>
        </label>
      <?php
    }
  }

  class X_Customize_Control_Number extends WP_Customize_Control {
    public $type = 'number';
    public function render_content() {
    ?>
      <label>
        <span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
        <input type="number" <?php $this->link(); ?> value="<?php echo intval( $this->value() ); ?>" style="width: 98%;"/>
      </label>
    <?php
    }
  }

  class X_Customize_Sub_Title extends WP_Customize_Control {
    public $type = 'sub-title';
    public function render_content() {
    ?>
      <h4 class="customize-sub-title"><?php echo esc_html( $this->label ); ?></h4>
    <?php
    }
  }

  class X_Customize_Description extends WP_Customize_Control {
    public $type = 'description';
    public function render_content() {
    ?>
      <p class="customize-description"><span>INFO:</span> <?php echo esc_html( $this->label ); ?></p>
    <?php
    }
  }
}

add_action( 'customize_register', 'x_add_customizer_custom_controls' );