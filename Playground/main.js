/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */
$(document).ready(function () {
    
    var colors = ["navy", "blue", "aqua", "teal", "olive", "green", "lime",
            "yellow", "orange", "red", "maroon", "fuchsia", "purple", "silver", "gray", "black"];
    var bg = 'bg-';
    var border = 'border-dash border--';
    var isHighlightEnabled = true;
    var isAppendEnabled = true;
    var mouseOver = '';
    var mouseSelected = '';
    $("#dropzone, #dropzone *").mousemove(function (e) {
        if (isHighlightEnabled && !$(e.target).hasClass('mouse-over')) {
            mouseOver = getSelector(e.target);
            $('#status-selector').html(mouseSelected);
            $('#status-over').html(mouseOver);
            $("#dropzone, #dropzone *").removeClass('mouse-over');
            $(e.target).addClass('mouse-over');
        }
    });

    function getSelector(elem) {
        var cls = '', dot = '';
        for (var i = 0; i < elem.classList.length; i++) {
            if (elem.classList[i] === 'mouse-selected') continue;

            cls += dot + elem.classList[i];
            dot = '.';
        }
        var id = '#' + elem.id;
        return elem.nodeName + (id === '#' ? '' : id) + '.' + cls;
    }

    $("#dropzone").mouseleave(function (e) {
        mouseOver = '';
        $('#status-selector').html(mouseSelected);
        $('#status-over').html(mouseOver);
        if (isHighlightEnabled) {
            $("#dropzone, #dropzone *").removeClass('mouse-over');
        }
    });

    $("#dropzone, #dropzone *").click(function (e) {
        if (isHighlightEnabled) {
            $("#dropzone, #dropzone *").removeClass('mouse-selected');
            var $target = $(e.target);
            mouseSelected = mouseOver + '';
            $('#status-selector').html(mouseSelected);
            $('#status-over').html(mouseOver);
            $target.addClass('mouse-selected');
            refreshProperties($target);
            $(document).foundation('reflow');
        }
    });

    function refreshProperties($elem) {
        if ($elem.hasClass('button')) {
            $("#property-color,#property-size,#property-radius,#property-misc").removeClass('hide');
        } else {
            $("#property-color,#property-size,#property-radius,#property-misc").removeClass('hide').addClass('hide');
        }
        if ($elem.hasClass('button-group')) {
            $("#property-radius,#property-stack,#property-even-1to8").removeClass('hide');
        } else {
            $("#property-radius,#property-stack,#property-even-1to8").removeClass('hide').addClass('hide');
        }
    }

    $('#menu-delete').click(function () {
        $('.mouse-selected').not('#dropzone').remove();
    });

    $('#menu-annotate').click(function () {
        isHighlightEnabled = !isHighlightEnabled;
        if (!isHighlightEnabled) {
            $("#dropzone, #dropzone *").removeClass('mouse-selected mouse-over');
            $('#menu-annotate').removeClass('blue');
            $(document).foundation('reflow');
        } else {
            $('#menu-annotate').addClass('blue');
        }
    });

    $('#menu-save').click(function () {
        $('#status-message>span').html('Saving...');
        $('#txtHtml').val($.trim($('#dropzone').html()));
        $('#myModal').foundation('reveal', 'open');
    });

    $('#menu-rewind').click(function () {
        $('#status-message>span').html('Undo not implemented');
    });

    $('#menu-results').click(function () {
        isAppendEnabled = !isAppendEnabled;
        if (!isAppendEnabled) {
            $('#menu-results').removeClass('blue');
        } else {
            $('#menu-results').addClass('blue');
        }
    });
    $('#menu-copy').click(function () {
        var $selected = $('.mouse-selected');
        if ($selected.length === 0) {
            $('#status-message>span').html('select the item to copy');
            return;
        }
        if ($selected[0].id === "dropzone") {
            $("#html-cache").html($selected.html());
        } else {
            $("#html-cache").html($selected[0].outerHTML);
        }
        
        $('#status-message>span').html('copied');
    });
    $('#menu-paste').click(function () {
        var $selected = $('.mouse-selected');
        if ($selected.length === 0) {
            $('#status-message>span').html('select the destination');
            return;
        }
        var html = $('#html-cache').html();
        if (isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.replaceWith(html);
        }
        $('#status-message>span').html('pasted');
    });
    $('#menu-up').click(function () {
        if ($('.mouse-selected')[0].id === "dropzone")
            return;

        $('.mouse-selected').addClass('tmp-selected');
        $("#dropzone, #dropzone *").removeClass('mouse-selected');
        mouseSelected = getSelector($('.tmp-selected').parent()[0]);
        $('#status-selector').html(mouseSelected);
        $('.tmp-selected').parent().addClass('mouse-selected');
        refreshProperties($('.tmp-selected').parent());
        $('.tmp-selected').removeClass('tmp-selected');
    });
    $('#menu-down').click(function () {
        if ($('.mouse-selected > *:first-child').length) {
            $('.mouse-selected').addClass('tmp-selected');
            $("#dropzone, #dropzone *").removeClass('mouse-selected');
            mouseSelected = getSelector($('.tmp-selected > *:first-child')[0]);
            $('#status-selector').html(mouseSelected);
            refreshProperties($('.tmp-selected > *:first-child'));
            $('.tmp-selected > *:first-child').addClass('mouse-selected');
            $('.tmp-selected').removeClass('tmp-selected');
        }
    });
    $('#menu-edit').click(function () {
        var $selected = $('.mouse-selected');
        if ($selected.length === 0) {
            $('#status-message>span').html('select the destination');
            return;
        }
        var isEditable = $selected.attr('contentEditable');
        console.log(isEditable);
        if (isEditable == "true") {
            isEditable = "false";
        } else {
            isEditable = "true";
        }
        
        $selected.attr('contentEditable', isEditable);
        console.log(isEditable);
        if (isEditable == "true") {
            $('#menu-edit').addClass('blue');
            $('#status-message>span').html(mouseSelected + 'is now editable');
        } else {
            $('#menu-edit').removeClass('blue');
            $('#status-message>span').html(mouseSelected + 'is not editable');
        }
    });
   
    $('#swatch-button').click(function (e) {
        var $selected = $('.mouse-selected');
        if ($selected.length === 0) {
            $('#status-message>span').html('select the body');
            return;
        }
        var html = '<a href="#" class="button">Button</a>';
        if (isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.html(html);
        }
    });

    $('#swatch-button-group').click(function (e) {
        var $selected = $('.mouse-selected');
        if ($selected.length === 0) {
            $('#status-message>span').html('select the body');
            return;
        }
        var html = '<ul class="button-group">\
          <li><a href="#" class="button">Button 1</a></li>\
          <li><a href="#" class="button">Button 2</a></li>\
          <li><a href="#" class="button">Button 3</a></li>\
        </ul>';
        if (isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.html(html);
        }
    });

    $('#swatch-button-bar').click(function (e) {
        var $selected = $('.mouse-selected');
        if ($selected.length === 0) {
            $('#status-message>span').html('select the body');
            return;
        }
        var html = '<div class="button-bar">\
          <ul class="button-group">\
            <li><a href="#" class="small button">Button 1</a></li>\
            <li><a href="#" class="small button">Button 2</a></li>\
            <li><a href="#" class="small button">Button 3</a></li>\
          </ul>\
          <ul class="button-group">\
            <li><a href="#" class="small button">Button 1</a></li>\
            <li><a href="#" class="small button">Button 2</a></li>\
            <li><a href="#" class="small button">Button 3</a></li>\
          </ul>\
        </div>';
        if (isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.html(html);
        }
    });

    $('#swatch-split-button').click(function (e) {
        var $selected = $('.mouse-selected');
        if ($selected.length === 0) {
            $('#status-message>span').html('select the body');
            return;
        }
        var html = '<a href="#" class="button split">Split Button <span data-dropdown="drop"></span></a><br>\
        <ul id="drop" class="f-dropdown" data-dropdown-content>\
          <li><a href="#">This is a link</a></li>\
          <li><a href="#">This is another</a></li>\
          <li><a href="#">Yet another</a></li>\
        </ul>';
        if (isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.html(html);
        }
    });

    $('#swatch-dropdown-button').click(function (e) {
        var $selected = $('.mouse-selected');
        if ($selected.length === 0) {
            $('#status-message>span').html('select the body');
            return;
        }
        var html = '<button href="#" data-dropdown="drop1" aria-controls="drop1" aria-expanded="false" class="button dropdown">Dropdown Button</button><br>\
        <ul id="drop1" data-dropdown-content class="f-dropdown" aria-hidden="true">\
          <li><a href="#">This is a link</a></li>\
          <li><a href="#">This is another</a></li>\
          <li><a href="#">Yet another</a></li>\
        </ul>';
        if (isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.html(html);
        }
    });

    $('#swatch-grid-col12').click(function (e) {
        var $selected = $('.mouse-selected');
        if ($selected.length === 0) {
            $('#status-message>span').html('select playground');
            return;
        }
        var html = '<div class="row">\
          <div class="large-12 columns">L12.cols</div>\
        </div>';
        if (isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.html(html);
        }
    });

    $('select[name="fa-size"]').change(function () {
        var cls = '';
        $('select[name="fa-size"] option').each(function () {
            cls += this.value + ' ';
        })
        $('.mouse-selected').removeClass(cls).addClass(this.value);
    });

    $('select[name="fa-radius"]').change(function () {
        var cls = '';
        $('select[name="fa-radius"] option').each(function () {
            cls += this.value + ' ';
        })
        $('.mouse-selected').removeClass(cls).addClass(this.value);
    });

    $('select[name="fa-color"]').change(function () {
        var cls = '';
        $('select[name="fa-color"] option').each(function () {
            cls += this.value + ' ';
        })
        $('.mouse-selected').removeClass(cls).addClass(this.value);
    });

    $('select[name="fa-stack"]').change(function () {
        var cls = '';
        $('select[name="fa-stack"] option').each(function () {
            cls += this.value + ' ';
        })
        $('.mouse-selected').removeClass(cls).addClass(this.value);
    });

    $('select[name="fa-even"]').change(function () {
        var cls = '';
        $('select[name="fa-even"] option').each(function () {
            cls += this.value + ' ';
        })
        $('.mouse-selected').removeClass(cls).addClass(this.value);
    });

    $('input[type="checkbox"]').click(function () {
        if(this.checked)
            $('.mouse-selected').removeClass(this.value).addClass(this.value);
        else {
            $('.mouse-selected').removeClass(this.value);
        }
    });

    //$(document).click(function (e) {
    //    //var cls = 'border border--' + colors[getRandomInt(0, 15)];
    //    var cls = 'bg-' + colors[getRandomInt(0, 15)];
    //    var toRemove = '';
    //    for (var i = 0; i < e.target.classList.length; i++) {
    //        if (e.target.classList[i].indexOf('bg-') !== -1) {
    //            toRemove += e.target.classList[i] + ' ';
    //        }
    //    }
    //    $('#status-message>span').html(cls, e.target);
    //    $(e.target).removeClass(toRemove);
    //    $(e.target).addClass(cls);
    //});

    ////var cls = 'border border--' + colors[getRandomInt(0, 15)];
    //var cls = 'bg-' + colors[getRandomInt(0, 15)];
    //var toRemove = '';
    //for (var i = 0; i < e.target.classList.length; i++) {
    //    if (e.target.classList[i].indexOf('bg-') !== -1) {
    //        toRemove += e.target.classList[i] + ' ';
    //    }
    //}
    //$('#status-message>span').html(cls, e.target);
    //$(e.target).removeClass(toRemove);
    //$(e.target).addClass(cls);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});
