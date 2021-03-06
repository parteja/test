<?php
/**
* Widget admin for the event list widget.
*/

// Don't load directly
if ( !defined('ABSPATH') ) { die('-1'); }

?>
<p>
	<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e('Title:','tribe-events-calendar-pro');?></label>
	<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $instance['title'] ); ?>" />
</p>

<p>
	<label for="<?php echo $this->get_field_id( 'limit' ); ?>"><?php _e('Number of events to show:','tribe-events-calendar-pro');?></label>
	<select id="<?php echo $this->get_field_id( 'limit' ); ?>" name="<?php echo $this->get_field_name( 'limit' ); ?>" class="widefat">
	<?php for ($i=1; $i<=10; $i++)
	{?>
	<option <?php if ( $i == $instance['limit'] ) {echo 'selected="selected"';}?> > <?php echo $i;?> </option>
	<?php } ?>
	</select>
</p>

<p><?php _e( 'Display:', 'tribe-events-calendar-pro' ); ?><br />

<?php $displayoptions = array (
					"venue" => __("Venue", 'tribe-events-calendar-pro'),
					"organizer" => __("Organizer", 'tribe-events-calendar-pro'),
					"address" => __("Address", 'tribe-events-calendar-pro'),
					"city" => __("City", 'tribe-events-calendar-pro'),
					"region" => __("State (US) Or Province (Int)", 'tribe-events-calendar-pro'),
					"zip" => __("Postal Code", 'tribe-events-calendar-pro'),
					"country" => __("Country", 'tribe-events-calendar-pro'),
					"phone" => __("Phone", 'tribe-events-calendar-pro'),
					"cost" => __("Price", 'tribe-events-calendar-pro'),
				);
	foreach ($displayoptions as $option => $label) { ?>
		<input class="checkbox" type="checkbox" value="1" <?php checked( $instance[$option], true ); ?> id="<?php echo $this->get_field_id( $option ); ?>" name="<?php echo $this->get_field_name( $option ); ?>" style="margin-left:5px"/>
		<label for="<?php echo $this->get_field_id( $option ); ?>"><?php echo $label ?></label>
		<br/>
<?php } ?>
</p>

<?php
/**
 * Filters
 */

$class = "";
if ( empty( $instance['filters'] ) ) {
	$class = "display:none;";
}
?>

<div class="calendar-widget-filters-container"  style="<?php echo $class;?>">

	<h3 class="calendar-widget-filters-title"><?php _e('Filters', 'tribe-events-calendar-pro'); ?>:</h3>

	<input type="hidden" name="<?php echo $this->get_field_name( 'filters' ); ?>"
	       id="<?php echo $this->get_field_id( 'filters' ); ?>" class="calendar-widget-added-filters"
	       value='<?php echo maybe_serialize( $instance['filters'] ); ?>'/>

	<div class="calendar-widget-filter-list">

		<?php
		if ( ! empty( $instance['filters'] ) ) {

			foreach ( json_decode( $instance['filters'] ) as $tax => $terms ) {
				$tax_obj = get_taxonomy( $tax );

				foreach ( $terms as $term ) {
					if ( empty( $term ) )
						continue;
					$term_obj = get_term( $term, $tax );
					echo sprintf( "<li><p>%s: %s&nbsp;&nbsp;<span><a href='#' class='calendar-widget-remove-filter' data-tax='%s' data-term='%s'>(".__('remove', 'tribe-events-calendar-pro').")</a></span></p></li>", $tax_obj->labels->name, $term_obj->name, $tax, $term_obj->term_id );
				}
			}
		}
		?>

	</div>

	<p class="calendar-widget-filters-operand">
		<label for="<?php echo $this->get_field_name( 'operand' ); ?>">
			<input <?php checked( $instance['operand'], 'AND' ); ?> type="radio" name="<?php echo $this->get_field_name( 'operand' ); ?>" value="AND">
			<?php _e('Match all', 'tribe-events-calendar-pro'); ?></label><br/>
		<label for="<?php echo $this->get_field_name( 'operand' ); ?>">
			<input <?php checked( $instance['operand'], 'OR' ); ?> type="radio" name="<?php echo $this->get_field_name( 'operand' ); ?>" value="OR">
			<?php _e('Match any', 'tribe-events-calendar-pro'); ?></label>
	</p>
</div>
<p>
	<label><?php _e('Add a filter', 'tribe-events-calendar-pro'); ?>:
		<select class="widefat calendar-widget-add-filter" id="<?php echo $this->get_field_id( 'selector' ); ?>" data-storage="<?php echo $this->get_field_id( 'filters' ); ?>">
			<?php
			echo "<option value='0'>" . __( 'Select one...', 'tribe-events-calendar-pro' ) . "</option>";
			foreach ( $taxonomies as $tax ) {
				echo sprintf( "<optgroup id='%s' label='%s'>", $tax->name, $tax->labels->name );
				$terms = get_terms( $tax->name, array( 'hide_empty' => false ) );
				foreach ( $terms as $term ) {
					echo sprintf( "<option value='%d'>%s</option>", $term->term_id, $term->name );
				}
				echo "</optgroup>";
			}
			?>
		</select>
	</label>
</p>

<script type="text/javascript">

	jQuery( document ).ready( function ( $ ) {
		if ( jQuery( 'div.widgets-sortables' ).find( 'select.calendar-widget-add-filter:not(#widget-tribe-mini-calendar-__i__-selector)' ).length ) {
			jQuery( ".select2-container.calendar-widget-add-filter" ).remove();
			setTimeout( function () {
				jQuery( "select.calendar-widget-add-filter:not(#widget-tribe-mini-calendar-__i__-selector)" ).select2();
				calendar_toggle_all();
			}, 600 );
		}
	} );
</script>

<p><label for="<?php echo $this->get_field_id( 'no_upcoming_events' ); ?>"><?php _e('Hide this widget if there are no upcoming events:','tribe-events-calendar-pro');?></label>
	<input id="<?php echo $this->get_field_id( 'no_upcoming_events' ); ?>" name="<?php echo $this->get_field_name( 'no_upcoming_events' ); ?>" type="checkbox" <?php checked( $instance['no_upcoming_events'], 1 ); ?> value="1" /></p>