/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */
$(document).ready(function () {
    console.log('ready to interact');
    
    var colors = ["navy", "blue", "aqua", "teal", "olive", "green", "lime",
            "yellow", "orange", "red", "maroon", "fuchsia", "purple", "silver", "gray", "black"];
    var bg = 'bg-';
    var border = 'border-dash border--';
    $("#dropzone, #dropzone *").mousemove(function (e) {
        if (!$(e.target).hasClass('mouse-over')) {
            var cls = '', dot = '';
            for (var i = 0; i < e.target.classList.length; i++) {
                if (e.target.classList[i] === 'mouse-selected') continue;

                cls += dot + e.target.classList[i];
                dot = '.';
            }
            var id = '#' + e.target.id;
            $('#property>span').html(e.target.nodeName + (id === '#' ? '' : id) + '.' + cls);
            $("#dropzone, #dropzone *").removeClass('mouse-over');
            $(e.target).addClass('mouse-over');
        }
    });
    $("#dropzone").mouseleave(function (e) {
        $("#dropzone, #dropzone *").removeClass('mouse-over');
    });
    $("#dropzone, #dropzone *").click(function (e) {
        $("#dropzone, #dropzone *").removeClass('mouse-selected');
        $(e.target).addClass('mouse-selected');
    });
    $('#button1 *').click(function (e) {
        $('.mouse-selected').append(this.outerHTML);
    });

    $('input[name="fa-size"]').click(function () {
        var cls = '';
        $('input[name="fa-size"]').each(function () {
            cls += this.value + ' ';
        })
        $('.mouse-selected').removeClass(cls).addClass(this.value);
    });

    $('input[name="fa-radius"]').click(function () {
        var cls = '';
        $('input[name="fa-radius"]').each(function () {
            cls += this.value + ' ';
        })
        $('.mouse-selected').removeClass(cls).addClass(this.value);
    });

    $('input[name="fa-color"]').click(function () {
        var cls = '';
        $('input[name="fa-color"]').each(function () {
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
    //    console.log(cls, e.target);
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
    //console.log(cls, e.target);
    //$(e.target).removeClass(toRemove);
    //$(e.target).addClass(cls);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});
