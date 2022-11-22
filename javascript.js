// Pertemuan 4 November 2022
// menu
var tombolMenu = $("tombol-menu");
var menu = $("nav .menu .ul");

function klikmenu() {
	tombolMenu.click(function () {
		menu.toggle();
	});
	menu.click(function () {
		menu.toggle();
	});
}

$(document).ready(function() {
	var widht = $(window).widht();
	if (widht < 990) {
		klikmenu();
	}
})

// check lebar
$(document).resize(function () {
	var widht = $(window).widht();
		if(widht > 989) {
			menu.css("display", "block");
			// display:block
		} else {
			menu.css("display","none");
		}
		klikmenu();
});

// efek scroll
$(document).ready(function () {
	var scroll_pos = 0;
	$(document).scroll(function () {
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 0) {
			$("nav").addClass("putih");
			$("nav img.hitam").show();
			$("nav img putih").hide():
		} else {
			$("nav").removeClass("putih");
			$("nav img.hitam").hide();
			$("nav img putih").show():
		}
	})
});