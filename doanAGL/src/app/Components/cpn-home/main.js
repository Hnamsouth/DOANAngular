// ----------------------------------------------------------------------------
// Rollover
// ----------------------------------------------------------------------------
$(function() {
    $('body').on('mouseenter', '.roll', function() {
        var src = $(this).attr('src');

        if ($(this).hasClass('noRoll')) {
            return;
        }

        replaceImageAttachSuffix($(this), '_o');
    }).on('mouseleave', '.roll', function() {
        var src = $(this).attr('src');

        if ($(this).hasClass('noRoll')) {
            return;
        }

        replaceImageDetachSuffix($(this), '_o');
    });
});

// ----------------------------------------------------------------------------
// Plan Sheet Rollover
// ----------------------------------------------------------------------------
$(function() {
    var target = $('.boxPlan03 .month td');

    target.find('.hover').hide();
    target.hover(function() {
        $(this).find('.hover').stop(true, false).fadeToggle(80);
    });
});


// ----------------------------------------------------------------------------
// Castle
// ----------------------------------------------------------------------------

$(function() {
    var footer = $('#footer .inner'),
        footerHegith = footer.outerHeight(),
        bg = $('#castle, #castleMorning, #castleNoon, #castleNight'),
        bgHeight = bg.height(),
        footerPos = $(document).height() - footerHegith - bgHeight,
        bottomPos = $(document).height() - $(window).height() - footerHegith;

    if ($(window).scrollTop() >= bottomPos) {
        bg.css({ 'position': 'absolute', 'top': footerPos });
    } else {
        bg.css({ 'position': 'fixed', 'bottom': '0', 'top': 'auto' });
    }

    $(window).scroll(function() {
        var footer = $('#footer .inner'),
            footerHegith = footer.outerHeight(),
            bg = $('#castle, #castleMorning, #castleNoon, #castleNight'),
            bgHeight = bg.height(),
            footerPos = $(document).height() - footerHegith - bgHeight,
            bottomPos = $(document).height() - $(window).height() - footerHegith;

        if ($(this).scrollTop() >= bottomPos) {
            bg.css({ 'position': 'absolute', 'top': footerPos });
        } else {
            bg.css({ 'position': 'fixed', 'bottom': '0', 'top': 'auto' });
        }
    });
});


// ----------------------------------------------------------------------------
// Swap Image
// ----------------------------------------------------------------------------

$(function() {
    if (!$('#swapImage').length) {
        return;
    }

    var target = $('#swapImage');

    target.each(function() {
        var mainImg = $(this).find('.photoMain img'),
            mainCap = $(this).find('.caption'),
            thumbnail = $(this).find('.photoThumb li');

        thumbnail.on('click', function(e) {
            e.preventDefault();

            var anc = $(this).find('a'),
                changeImg = anc.attr('href'),
                changeCap = anc.attr('data-caption');

            $(this).addClass('current').siblings('li').removeClass('current');
            mainImg.attr('src', changeImg);
            mainCap.text(changeCap);
        });
    });
});

//----------------------------------------------------------------------------
//Disable Next Button
//----------------------------------------------------------------------------
function agreeCheckboxCheck(checkboxId, nextBtnId) {
    // helper constants
    var helperVariables = {
        imgExtension: '.png',
        imgDisabledSuffix: '_d',
        imgFocusedSuffix: '_o'
    };
    var helperFunctions = {
        toggleActiveStatus: function(imgElement) {
            var src = getAttributeSrc(imgElement);
            if (isIncludedSuffix(src, helperVariables.imgDisabledSuffix)) {
                replaceImageDetachSuffix(imgElement, helperVariables.imgDisabledSuffix);
            } else {
                replaceImageAttachSuffix(imgElement, helperVariables.imgDisabledSuffix);
            }
        },
        turnOnActiveStatus: function(imgElement) {
            replaceImageDetachSuffix(imgElement, helperVariables.imgDisabledSuffix);
        },
        turnOffActiveStatus: function(imgElement) {
            replaceImageAttachSuffix(imgElement, helperVariables.imgDisabledSuffix);
        },
        isActive: function(imgElement) {
            var src = getAttributeSrc(imgElement);
            return !isIncludedSuffix(src, helperVariables.imgDisabledSuffix)
        }
    };

    if (checkboxId == undefined) {
        checkboxId = $('.listForm02 input[type=checkbox]').attr('id');
        if (checkboxId == undefined) {
            return;
        }
    }
    if (nextBtnId == undefined) {
        nextBtnId = $('.listBtn01 input[type=image]').attr('id');
        if (nextBtnId == undefined) {
            return;
        }
    }
    var $nextBtn = $('#' + nextBtnId);
    var $checkbox = $('.listForm02 #' + checkboxId);
    if ($checkbox.length <= 0 || $nextBtn.length <= 0) {
        return;
    }
    if ($checkbox.is(':checked')) {
        $nextBtn.removeAttr('disabled');
        helperFunctions.turnOnActiveStatus($nextBtn);
    } else {
        $nextBtn.attr('disabled', 'disabled');
        helperFunctions.turnOffActiveStatus($nextBtn);
        $nextBtn.css('border', 'none');
    }
}

//----------------------------------------------------------------------------
//Chat Display Control
//----------------------------------------------------------------------------
//#11226：チャットツールのコンテンツ表示制御
//本来はZENDESKのSDKをカスタマイズして対応すべきところ、
//先方の都合により今回はフロント側で強制的に制御しています。
//----------------------------------------------------------------------------

window.onload = function() {
    // チャットウィンドウ画面ロード時
    $zopim.livechat.window.onShow(hideContents);
    $zopim.livechat.setOnConnected(hideContents);
    // チャットコンテンツ非表示ファンク
    function hideContents() {
        $("iframe").contents().find('div.button_container').not('.last_child').hide();
        $("iframe").contents().find('button.settings').hide();
    }
}

//相対パスを絶対パスに変換する
function convertAbsUrl(url) {
    return $("<a>").attr("href", url).get(0).href;
}
