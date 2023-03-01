const toggles = $('.faq-toggle');

toggles.each(function() {
    $(this).click(function() {
        $(this).parent().toggleClass('active');
    });
});
