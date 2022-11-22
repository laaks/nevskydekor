(function($) {
	var requestPriceOpen = false;

	$(document).ready(function() {

		$('a.open-search').on('click', function() {
			$(this).hide();
			$('.search-form').css('display', 'flex');
		});

		$('a.close-search').on('click', function() {
			$('a.open-search').show();
			$('.search-form').css('display', 'none');
		});

		$('#slider').slick({
			arrows: false,
			infinite: true,
			dots: true,
			fade: true,
			cssEase: 'linear',
			autoplay: true,
			autoplaySpeed: 2000
		});

		$('.slider-block').slick({
			arrows: true,
			infinite: true,
			dots: false,
			variableWidth: true,
			speed: 800,
			prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2C13.6 2.4 5.83333 10.1667 2 14L14 26" stroke="#2B2B2B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
			nextArrow: '<button type="button" class="slick-next"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26C2.4 25.6 10.1667 17.8333 14 14L2 2" stroke="#2B2B2B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
		});

		$('.reviews-block').slick({
			arrows: true,
			infinite: true,
			dots: false,
			variableWidth: true,
			speed: 800,
			prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2C13.6 2.4 5.83333 10.1667 2 14L14 26" stroke="#2B2B2B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
			nextArrow: '<button type="button" class="slick-next"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26C2.4 25.6 10.1667 17.8333 14 14L2 2" stroke="#2B2B2B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
		});

		$('.product-slider').slick({
			arrows: true,
			infinite: false,
			dots: true,
			speed: 800,
			prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2C13.6 2.4 5.83333 10.1667 2 14L14 26" stroke="#2B2B2B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
			nextArrow: '<button type="button" class="slick-next"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26C2.4 25.6 10.1667 17.8333 14 14L2 2" stroke="#2B2B2B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
		});

		$(document).on('click','.btn-number',function(e){
			e.preventDefault();

			fieldName = $(this).attr('data-field');
			type      = $(this).attr('data-type');
			var input = $("input[name='"+fieldName+"']");
			var currentVal = parseInt(input.val());
			if (!isNaN(currentVal)) {
				if(type == 'minus') {

					if(currentVal /*> input.attr('min')*/) {
						input.val(currentVal - 1).change();
					}
					if(parseInt(input.val()) == input.attr('min')) {
						$(this).attr('disabled', true);
					}

				} else if(type == 'plus') {

					if(currentVal /*< input.attr('max')*/) {
						input.val(currentVal + 1).change();
					}
					if(parseInt(input.val()) == input.attr('max')) {
						$(this).attr('disabled', true);
					}

				}
			} else {
				input.val(0);
			}

			//$(this).closest('div').find('.quaUpdate').trigger('change');
		});

		$('.input-number').focusin(function(){
			$(this).data('oldValue', $(this).val());
		});
		$(document).on('change','.input-number', function() {

			//minValue =  parseInt($(this).attr('min'));
			//maxValue =  parseInt($(this).attr('max'));
			valueCurrent = parseInt($(this).val());

			name = $(this).attr('name');
			if(valueCurrent > 1) {
				$(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
			}
			else {
				$(".btn-number[data-type='minus'][data-field='"+name+"']").attr('disabled', 'disabled')
			}
			/*if(valueCurrent >= minValue) {
				$(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
			} else {
				alert('Sorry, the minimum value was reached');
				$(this).val($(this).data('oldValue'));
			}
			if(valueCurrent <= maxValue) {
				$(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
			} else {
				alert('Sorry, the maximum value was reached');
				$(this).val($(this).data('oldValue'));
			}*/
		});

		$(document).on('keydown', ".input-number", function (e) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
				(e.keyCode == 65 && e.ctrlKey === true) ||
				(e.keyCode >= 35 && e.keyCode <= 39)) {
				return;
			}
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}
		});

		$('#calc select').select2({
			minimumResultsForSearch: -1
		});

		$('.calc-size .size').on('click', function() {
			$('.calc-size').hide();
			$('.size-active').html($(this).html());
			$('.calc-size-2').show(200);
		});

		$('.size-active').on('click', function() {
			$('.calc-size-2').hide();
			$('.calc-size').show(200);
		});

		$('.product-calc').on('click', function() {
			$('#calc').show(200);
			$('#calc').addClass('active');
			$('body').addClass('overlay-open');
		});

		$('.calc-close/*, #calc .product-btn a*/').on('click', function() {
			$('#calc').hide(100);
			$('#calc').removeClass('active');
			$('body').removeClass('overlay-open');
		});

		$('#calc .product-btn a').on('click', function() {
			$('.header-blocks > a > span').html('1');
		});

		$('.calc-back').on('click', function() {
			$('.calc-material').hide(100);
			$('.calc-step').show(100);
		});

		$('.tech').on('click', function() {
			$('.calc-step').hide();
			$('.calc-material').show(100);
		});

		$('.tech-item').on('click', function(e) {
			console.log(e.target);
			if (!$(e.target).is('.tech-zoom') || $('.tech-zoom').has(e.target).length ) {
				$('.tech').addClass('active');
				$('.tech-item').removeClass('active');
				$(this).addClass('active');
				$('.tech span:first-child').html($(this).data('name'));
				//$('.tech span:nth-child(2)').html($(this).data('price'));
				$('.calc-material').hide(100);
				$('.calc-step').show(100);
			}
		});

		$('.range-add svg').on('click', function() {
			$('.range-noty').toggle(100);
		});

		/*$('.range-box input').on('change', function() {
			var wallheight = $('input[name="wall-height"]').val();
			var wallwidth = $('input[name="wall-width"]').val();
			console.log(wallheight);
			$('.range-item label span').html( (wallheight /100 ) * (wallwidth / 100) );
		});*/

		$('.catalog-list .catalog-item').slice(0, 12).show();

		/*$('.load-more a').on("click", function(e){
			e.preventDefault();
			$(this).addClass('loading');
			$('.catalog-list .catalog-item:hidden').slice(0, 12).slideDown();
			if($('.content:hidden').length == 0) {
				$('.load-more').hide();
			}
		});*/

		$(document).on("click", ".load_more a", function(e){
			e.preventDefault();
			$(this).addClass('loading');
			//$('.catalog-list .catalog-item:hidden').slice(0, 12).slideDown();
		});	

		$('#calc').on('click', function (event) {

			if ($(event.target).closest('.calc-wrapper').length === 0) {
				$('#calc').hide(100);
				$('#calc').removeClass('active');
				$('body').removeClass('overlay-open');
			}

		});


		var addWishlist = function(event) {

			var $this = $(event.currentTarget);
			var productID = $this.data("id");

			if($this.attr("href") == "#") {

				if(parseInt(productID, 10) > 0 && !$this.hasClass("active")) {
					$this.addClass("loading");

					var gObj = {
						id: productID,
						act: "addWishlist"
					};

					$.get(ajaxPath, gObj).done(function(hData) {
						if(hData != "") {

							$this.removeClass("loading")
								.addClass("active")
								.attr("href", SITE_DIR + "wishlist/");

							$('.fav-header').addClass('active');
						}

						else {
							$this.removeClass("loading")
								.addClass("error");
						}
					});
				}

				return event.preventDefault();
			}
		};

		$(document).on("click", ".addWishlist", addWishlist);


		var loadingPictureControl = function(imagePath, callBack){

			if(typeof imagePath != "undefined" && imagePath != ""){

				var newImage = new Image();
				newImage.src = imagePath;

				$(newImage).one("load", callBack).each(function(){
					if(this.complete){
						$(this).load();
					}
				});

			}

		};


		var getRequestPrice = function(event){

			var $this = $(this);
			var $requestPrice = $("#requestPrice");
			var $foundation = $("#foundation").addClass("blurred");

			$("#requestPrice, #requestPrice .requstProductContainer").show();
			$("#requestPriceResult").hide();

			//clear form
			$("#requestPriceForm").find('input[type="text"], textarea').val("");
			$requestPrice.find(".requestPricePicture").attr("src", $requestPrice.data("load"));

			var productID = $this.data("id");

			$this.addClass("loading");

			var gObj = {
				id: productID,
				act: "getRequestPrice"
			};

			$.getJSON(ajaxPath, gObj).done(function(jData){

				$this.removeClass("loading");
				$requestPrice.find(".requestPriceUrl").attr("href", jData["PRODUCT"]["DETAIL_PAGE_URL"]);
				$requestPrice.find(".productNameBlock .middle").html(jData["PRODUCT"]["NAME"]);
				$requestPrice.find("#requestPriceProductID").val(jData["PRODUCT"]["ID"]);
				$requestPrice.find(".markerContainer").remove();

				if(jData["PRODUCT"]["MARKER"] != undefined){

					$requestPrice.find("#fastBuyPicture").prepend(
						$("<div>").addClass("markerContainer")
							.append(
								jData["PRODUCT"]["MARKER"]
							)

					);
				}

				$requestPrice.show();

				loadingPictureControl(jData["PRODUCT"]["PICTURE"]["src"], function(){
					$requestPrice.find(".requestPricePicture").attr("src", jData["PRODUCT"]["PICTURE"]["src"]);
				});

				requestPriceOpen = true;

			}).fail(function(jqxhr, textStatus, error){

				$.get(ajaxPath, gObj).done(function(Data){
					console.log(Data)
				});

				$this.removeClass("loading")
					.addClass("error");

				console.error(
					"Request Failed: " + textStatus + ", " + error
				);

			});

			return event.preventDefault();
		};

		var closeRequestPrice = function(event){
			var $appFastBuy = $("#requestPrice").hide();
			var $foundation = $("#foundation").removeClass("blurred");
			requestPriceOpen = false;
			return event.preventDefault();
		};

		var sendRequestPrice = function(event){

			var $this = $(this).addClass("loading");
			var $requestPriceForm = $("#requestPriceForm");
			var $requestPriceFormTelephone = $requestPriceForm.find("#requestPriceFormTelephone").removeClass("error");

			if($requestPriceFormTelephone.val() == ""){
				$requestPriceFormTelephone.addClass("error");
			}

			var $personalInfo = $requestPriceForm.find("#personalInfoRequest");
			if(!$personalInfo.prop("checked")){
				$personalInfo.addClass("error");
			}

			if($requestPriceFormTelephone.val() !="" && $personalInfo.prop("checked")){

				$.getJSON(ajaxPath + "?" + $requestPriceForm.serialize()).done(function(jData){

					$("#requestPriceResultTitle").html(jData["heading"]);
					$("#requestPriceResultMessage").html(jData["message"]);

					$("#requestPrice .requstProductContainer").hide();
					$("#requestPriceResult").show();

					$this.removeClass("loading");

				}).fail(function(jqxhr, textStatus, error){

					$this.removeClass("loading").addClass("error");

					console.error(
						"Request Failed: " + textStatus + ", " + error
					);

				});

			}else{
				$this.removeClass("loading");
			}

			return event.preventDefault();
		};

		var closeElementsAfterClick = function(event){

			if(requestPriceOpen === true){
				$("#foundation").removeClass("blurred");
				$("#requestPrice").hide();
				requestPriceOpen = false;
			}

		};

		var addCart = function(event){

			var $this = $(this);
			var $prCont = $this.closest('.product-row');
			var quantity = $prCont.find('.input-number').val();
			var productID = $this.data("id");
			var wallWidth = $prCont.find("[name=wall-width]").val();
			var wallHeight = $prCont.find("[name=wall-height]").val();
			var wallSquare = Number($prCont.find(".total-square").text());

			if(!$this.hasClass("disabled")) {

				if($this.attr("href") === "#") {

					if(parseInt(productID, 10) > 0) {

						//send object
						var gObj = {
							act: "addCart",
							id: productID,
							width: wallWidth,
							height: wallHeight,
							square: wallSquare,
							site_id: SITE_ID
						};

						if(quantity > 0) {
							gObj["q"] = quantity;
						}

						$.getJSON(ajaxPath, gObj).done(function(jData){

							var reloadCart = cartReload();

							LANG["BASKET_ADDED"] = typeof(addedLabel) == "undefined" ? LANG["BASKET_ADDED"] : addedLabel;

							lastAddCartText = $this.html();

							$this.addClass("added")
								.html(LANG["BASKET_ADDED"])
								.attr("href", SITE_DIR + "personal/cart/");

						}).fail(function(jqxhr, textStatus, error){

							$.get(ajaxPath, gObj).done(function(Data){
								console.log(Data);
							});

							$this.addClass("error");

							console.error(
								"Request Failed: " + textStatus + ", " + error
							);
						});
					}

				}else{
					return true;
				}
			}

			return event.preventDefault();

		}

		var cartReload = function(){

			if(typeof(window.topCartTemplate) == "undefined"){
				window.topCartTemplate = "topCart";
			}

			if(typeof(window.wishListTemplate) == "undefined"){
				window.wishListTemplate = ".default";
			}

			if(typeof(window.compareTemplate) == "undefined"){
				window.compareTemplate = ".default";
			}

			$.get(ajaxPath + "?act=flushCart&topCartTemplate=" + window.topCartTemplate + "&wishListTemplate=" + window.wishListTemplate + "&compareTemplate=" + window.compareTemplate, function(data){
				var $items = $(data).find(".dl");
				var countCart = $items.eq(0).find('.count').html();

				$(".header-blocks .countLink .count").html(countCart);
				//$("#flushFooterCart").html($items.eq(1).html());
				//$("#flushTopwishlist").html($items.eq(2).html());
				//$("#flushTopCompare").html($items.eq(3).html());

			});
		}

		$(document).on("click", ".addCart, .add-cart", addCart);

		$(document).on("click", ".requestPrice", getRequestPrice);
		$(document).on("click", "#requestPrice .closeWindow", closeRequestPrice);

		$(document).on("click", "#requestPriceSubmit", sendRequestPrice);

		$(document).on("click", "#requestPriceContainer, .requestPrice", function(event){
			return event.stopImmediatePropagation();
		});

		$(document).on("click", closeElementsAfterClick);

	});
})(jQuery);