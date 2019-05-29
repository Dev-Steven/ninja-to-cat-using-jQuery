
$("img").click(function() {
    var temp_cat = $(this).attr("other");
    var temp_ninja = $(this).attr("src");
    $(this).attr("src", temp_cat);
    $(this).attr("other", temp_ninja);
});
