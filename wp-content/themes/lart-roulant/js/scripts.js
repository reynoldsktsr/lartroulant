var $allSliders = $('.slider-block').map(function(i) { return $(this).attr('class').split(' ')[1]; });
var $allGalleries = $('.gallery-block').map(function(i) { return $(this).attr('class').split(' ')[1]; });
var sliderOptions = {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
var galleryOptions = {
		slidesPerRow: 5,
		rows: 2,
		arrows: false,
		dots: true,
	};
var gallerySliderPair = {};
$allSliders.each(function(i,id) {
	$('.' + id).slick(sliderOptions);
	var $slider = $('.' + id);
	var $sliderFiltered = $slider.find('.slick-slide:not(.slick-cloned)');
	var $sliderImages = $sliderFiltered.find('div.image');
	$sliderImages.each(function(j) {
	    $(this).attr('data-index', j);
	    $(this).addClass('slider-image-' + j);
	});
	if (!gallerySliderPair['pair-' + i]) {
		gallerySliderPair['pair-' + i] = {};
	}
	gallerySliderPair['pair-' + i].slider = {
		slider: $slider,
		images: $sliderImages
	};
});
$allGalleries.each(function(i, id) {
	$('.' + id).slick(galleryOptions);
	var $gallery = $('.' + id);
	var $galleryFiltered = $gallery.find('.slick-slide:not(.slick-cloned)');
	var $galleryImages = $galleryFiltered.find('div.image');
	$galleryImages.each(function(j) {
	    $(this).attr('data-index', j);
	    $(this).addClass('gallery-image-' + j);
	});
	if (!gallerySliderPair['pair-' + i]) {
		gallerySliderPair['pair-' + i] = {};
	}
	gallerySliderPair['pair-' + i].gallery = {
		gallery: $gallery,
		images: $galleryImages
	};
	$galleryImages.on('click', function(e) {
		if (!killit) {
			e.stopPropagation();
			var idx = $(this).data('index');
			gallerySliderPair['pair-' + i].slider.slider.slick('goTo', idx);
		}
	});$gallery
    .on("beforeChange", function() {
        killit = true;
    }).on("afterChange", function() {
        killit = false;
    });
});