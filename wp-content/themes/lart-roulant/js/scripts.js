// $('#gallery').justifiedGallery({rowHeight: 70});

$('.slider-box').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
});
$('.gallery-box').slick({
	slidesPerRow: 5,
	rows: 2,
	arrows: false,
	dots: true,
});

var $slider = $('.slider-box');
var $sliderFiltered = $slider.find('.slick-slide:not(.slick-cloned)');
var $sliderImages = $sliderFiltered.find('div.image');
var $gallery = $('.gallery-box');
var $galleryFiltered = $gallery.find('.slick-slide:not(.slick-cloned)');
var $galleryImages = $galleryFiltered.find('div.image');
var killit = false;
$sliderImages.each(function(i) {
    $(this).attr('data-index', i);
    $(this).addClass('slider-image-' + i);
});
$galleryImages.each(function(i) {
    $(this).attr('data-index', i);
    $(this).addClass('gallery-image-' + i);
});
$galleryImages.on('click', function(e) {
	if (!killit) {
		e.stopPropagation();
		var idx = $(this).data('index');
		$slider.slick('goTo', idx);
	}
})
$gallery
    .on("beforeChange", function() {
        killit = true;
    }).on("afterChange", function() {
        killit = false;
    });