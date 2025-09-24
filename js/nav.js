// /js/nav.js
$(function () {
    let $toggle = $('#menuToggle');
    let $panel  = $('#mobile-menu');

    function setExpanded(isExpanded) {
        $toggle.attr('aria-expanded', isExpanded);
        $panel.attr('aria-hidden', !isExpanded);
    }

    setExpanded(false);
    $panel.addClass('hidden').hide(); // hide() enables slideToggle animation later


    $toggle.on('click', function () {
        var isOpen = $toggle.attr('aria-expanded') === 'true';
        if (isOpen) {
            $panel.slideUp(160, function () { $panel.addClass('hidden'); });
            setExpanded(false);
        } else {
            $panel.removeClass('hidden').hide().slideDown(160);
            setExpanded(true);
        }
    });

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' && $toggle.attr('aria-expanded') === 'true') {
            $panel.slideUp(160, function () { $panel.addClass('hidden'); });
            setExpanded(false);
        }
    });


    $panel.on('click', 'a', function () {
        if ($toggle.attr('aria-expanded') === 'true') {
            $panel.slideUp(160, function () { $panel.addClass('hidden'); });
            setExpanded(false);
        }
    });
});
