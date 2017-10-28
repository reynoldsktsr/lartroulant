<?php /* Template Name: Single Page Template */ get_header(); ?>

	<main role="main">
		<section>
			<?php if (have_posts()): while (have_posts()) : the_post(); ?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<?php the_content(); ?>
				</article>
			<?php endwhile; ?>
			<?php else: ?>
				<article>
					<h2>Sorry, nothing to display.</h2>
				</article>
			<?php endif; ?>
		</section>
	</main>
<?php get_footer(); ?>
