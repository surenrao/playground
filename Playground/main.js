
$(document).ready(function () {
    nsr.swatch.init();
    nsr.properties.init();
    nsr.playground.init();
    nsr.menu.init();
    
});

/*
 * Global Module
 */
(function (nsr, $, undefined) {
    "use strict";
    nsr.colors = ["navy", "blue", "aqua", "teal", "olive", "green", "lime",
            "yellow", "orange", "red", "maroon", "fuchsia", "purple", "silver", "gray", "black"];
    nsr.bg = 'bg-';
    nsr.border = 'border-dash border--';

    nsr.isHighlightEnabled = true;
    nsr.isAppendEnabled = true;
    nsr.mouseOver = '';
    nsr.mouseSelected = '';

    nsr.getRandomColor = function () {
        return colors[nsr.getRandomInt(0, 15)];
    };

    nsr.getRandomBgColor = function () {
        return nsr.bg + colors[nsr.getRandomInt(0, 15)];
    };

    nsr.getRandomBorderColor = function () {
        return nsr.border + colors[nsr.getRandomInt(0, 15)];
    };

    nsr.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    nsr.getSelectorHier = function (elem, splitPrefix) {
        var selector = $(elem).parents()
                    .map(function () { return nsr.getSelector(this); })
                    .get().reverse();

        if (selector) {
            selector.push(nsr.getSelector(elem));
        }
        var i = 0;
        for (; i < selector.length; i++) {
            if (selector[i].indexOf(splitPrefix) !== -1)
                break;
        }
        return selector.slice(i+1, selector.length);
        //DIV#dropzone
        //.join(">");

        //var id = $(elem).attr("id");
        //if (id) {
        //    selector += "#" + id;
        //}

        //var classNames = $(elem).attr("class");
        //if (classNames) {
        //    selector += "." + $.trim(classNames).replace(/\s/gi, ".");
        //}
    }

    nsr.getSelector = function (elem) {
        var cls = '', dot = '';
        for (var i = 0; i < elem.classList.length; i++) {
            if (elem.classList[i] === 'mouse-selected') continue;
            if (elem.classList[i] === 'mouse-over') continue;
            if (elem.classList[i]) {
                cls += dot + elem.classList[i];
                dot = '.';
            }
        }
        var id = '#' + elem.id;
        return elem.nodeName + (id === '#' ? '' : id) + (cls && '.' + cls);
    };

    nsr.htmlEncode = function (str) {
        //http://stackoverflow.com/questions/1219860/html-encoding-in-javascript-jquery
        return String(str)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
    }

    nsr.htmlDecode = function (str) {
        return $("<div />").html(str).text();
    }

})(window.nsr = window.nsr || {}, jQuery);

/*
 * Playground Module
 */
(function (nsr, $, undefined) {
    "use strict";
    nsr.playground = nsr.playground || {};

    nsr.playground.init = function () {
        nsr.playground.setupEvents();
    }

    nsr.playground.setupEvents = function () {
        $("#dropzone, #dropzone *").mousemove(nsr.playground.onMouseMove);
        $("#dropzone").mouseleave(nsr.playground.onMouseLeave);
        $("#dropzone, #dropzone *").click(nsr.playground.onSelect);
    }

    nsr.playground.onMouseMove = function (e) {
        if (nsr.isHighlightEnabled && !$(e.target).hasClass('mouse-over')) {
            nsr.mouseOver = nsr.getSelector(e.target);
            if (nsr.mouseOver.indexOf("DIV#dropzone") !== -1) {
                nsr.mouseOver = "BODY";
            }
            $('#status-over').html(nsr.mouseOver);
            $("#dropzone, #dropzone *").removeClass('mouse-over');
            $(e.target).addClass('mouse-over');
        }
    };

    nsr.playground.onMouseLeave = function (e) {
        nsr.mouseOver = '';
        $('#status-over').html(nsr.mouseOver);
        if (nsr.isHighlightEnabled) {
            $("#dropzone, #dropzone *").removeClass('mouse-over');
        }
    };

    nsr.playground.onSelect = function (e) {
        if (nsr.isHighlightEnabled) {
            $("#dropzone, #dropzone *").removeClass('mouse-selected');
            var $target = $(e.target);
            var selected = nsr.getSelectorHier(e.target, 'DIV#dropzone');
            nsr.mouseSelected = selected;
            $('#status-selector').html(['BODY'].concat(selected).join(">"));
            $('#status-over').html(nsr.mouseOver);
            $target.addClass('mouse-selected');
            nsr.properties.refreshProperties($target);
            //$(document).foundation('reflow');
        }
    }

})(window.nsr = window.nsr || {}, jQuery);

/*
 * Menu Module
 */
(function (nsr, $, undefined) {
    "use strict";
    nsr.menu = nsr.menu || {};

    nsr.menu.init = function () {
        nsr.menu.setupEvents();
    }

    nsr.menu.setupEvents = function () {
        $('#menu-delete').click(nsr.menu.delete);
        $('#menu-annotate').click(nsr.menu.annotateToggle);
        $('#menu-save').click(nsr.menu.save);
        $('#menu-rewind').click(nsr.menu.undo);
        $('#menu-results').click(nsr.menu.appendToggle);
        $('#menu-copy').click(nsr.menu.copy);
        $('#menu-paste').click(nsr.menu.paste);
        $('#menu-up').click(nsr.menu.selectUp);
        $('#menu-down').click(nsr.menu.selectDown);
        $('#menu-edit').click(nsr.menu.edit);
    }

    nsr.menu.delete = function () {
        $('.mouse-selected').not('#dropzone').remove();
    }

    nsr.menu.annotateToggle = function () {
        nsr.isHighlightEnabled = !nsr.isHighlightEnabled;
        if (!nsr.isHighlightEnabled) {
            $("#dropzone, #dropzone *").removeClass('mouse-selected mouse-over');
            $('#menu-annotate').removeClass('blue');
            $(document).foundation('reflow');
        } else {
            $('#menu-annotate').addClass('blue');
        }
    }

    nsr.menu.save = function () {
        $('#status-message>span').html('Saving...');
        $('#txtHtml').val($.trim($('#dropzone').html()));
        $('#myModal').foundation('reveal', 'open');
    }

    nsr.menu.undo = function () {
        $('#status-message>span').html('Undo not implemented');
    }

    nsr.menu.appendToggle = function () {
        nsr.isAppendEnabled = !nsr.isAppendEnabled;
        if (!nsr.isAppendEnabled) {
            $('#menu-results').removeClass('blue');
        } else {
            $('#menu-results').addClass('blue');
        }
    }

    nsr.menu.copy = function () {
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
    }

    nsr.menu.paste = function () {
        var $selected = $('.mouse-selected');
        if ($selected.length === 0) {
            $('#status-message>span').html('select the destination');
            return;
        }
        var html = $('#html-cache').html();
        if (insr.sAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.replaceWith(html);
        }
        $('#status-message>span').html('pasted');
    }

    nsr.menu.selectUp = function () {
        if ($('.mouse-selected')[0].id === "dropzone")
            return;

        $('.mouse-selected').addClass('tmp-selected');
        $("#dropzone, #dropzone *").removeClass('mouse-selected');
        nsr.mouseSelected = nsr.getSelector($('.tmp-selected').parent()[0]);
        $('#status-selector').html(nsr.mouseSelected);
        $('.tmp-selected').parent().addClass('mouse-selected');
        nsr.properties.refreshProperties($('.tmp-selected').parent());
        $('.tmp-selected').removeClass('tmp-selected');
    }

    nsr.menu.selectDown = function () {
        if ($('.mouse-selected > *:first-child').length) {
            $('.mouse-selected').addClass('tmp-selected');
            $("#dropzone, #dropzone *").removeClass('mouse-selected');
            nsr.mouseSelected = nsr.getSelector($('.tmp-selected > *:first-child')[0]);
            $('#status-selector').html(nsr.mouseSelected);
            nsr.properties.refreshProperties($('.tmp-selected > *:first-child'));
            $('.tmp-selected > *:first-child').addClass('mouse-selected');
            $('.tmp-selected').removeClass('tmp-selected');
        }
    }

    nsr.menu.edit = function () {
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
    }

})(window.nsr = window.nsr || {}, jQuery);

/*
 * Swatch Module
 */
(function (nsr, $, undefined) {
    "use strict";
    nsr.swatch = nsr.swatch || {};

    nsr.swatch.init = function () {
        nsr.swatch.generateSideNav();
        nsr.swatch.setupEvents();
    }

    nsr.swatch.setupEvents = function () {
        $(document).on('click', '#swatch .side-nav a', function (e) {
            var $selected = $('.mouse-selected');
            if ($selected.length === 0) {
                $('#status-message>span').html('select the body');
                return;
            }
            var html = $(this).data('template');//no need of explicit decode
            if (nsr.isAppendEnabled) {
                $selected.append(html);
            } else {
                $selected.html(html);
            }
        });
    }
    /*#region json*/
    nsr.swatch.masterList = {
        "Grid": [
            { "text": "Row", "template": '<div class="row">'+
                                    '   <div class="large-12 columns">L12.cols</div>'+
                                    '</div>'
            },
            {
                "text": "Column", "template": '<div class="large-12 columns">L12.cols</div>', "parent": "row"
            },
        ],
        "Buttons": [
            {
                "text": "Button", "template": '<a href="#" class="button">Button</a>'
            },
            {
                "text": "Button Group", "template": '<ul class="button-group">\
                  <li><a href="#" class="button">Button 1</a></li>\
                  <li><a href="#" class="button">Button 2</a></li>\
                  <li><a href="#" class="button">Button 3</a></li>\
                </ul>'
            },
            {
                "text": "Button Bar", "template": '<div class="button-bar">\
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
                </div>'
            },
            {
                "text": "Split Button", "template": '<a href="#" class="button split">Split Button <span data-dropdown="drop"></span></a><br>\
                    <ul id="drop" class="f-dropdown" data-dropdown-content>\
                      <li><a href="#">This is a link</a></li>\
                      <li><a href="#">This is another</a></li>\
                      <li><a href="#">Yet another</a></li>\
                    </ul>'
            },
            {
                "text": "Dropdown Button", "template": '<button href="#" data-dropdown="drop1" aria-controls="drop1" aria-expanded="false" class="button dropdown">Dropdown Button</button><br>\
                    <ul id="drop1" data-dropdown-content class="f-dropdown" aria-hidden="true">\
                      <li><a href="#">This is a link</a></li>\
                      <li><a href="#">This is another</a></li>\
                      <li><a href="#">Yet another</a></li>\
                    </ul>'
            }
        ]
    };
    /*#endregion json*/

    nsr.swatch.generateSideNav = function () {
        //todo context based dynamic generation
        var html = '';
        for (var key in nsr.swatch.masterList) {
            var group = nsr.swatch.masterList[key];
            html += '<li class="heading">' + key + '</li>\n';
            for (var i = 0; i < group.length; i++) {
                html += '<li><a data-template="' + nsr.htmlEncode(group[i].template) + '">' + group[i].text + '</a></li>\n';
            }
        }
        $('#swatch .side-nav').html(html);
    }
})(window.nsr = window.nsr || {}, jQuery);

/*
 * Properties Module
 */
(function (nsr, $, undefined) {
    "use strict";
    nsr.properties = nsr.properties || {};

    nsr.properties.init = function () {
        nsr.properties.setupEvents();
    }

    nsr.properties.setupEvents = function () {
        $(document).on('change', '#property select', nsr.properties.selectboxOnChange);
        $(document).on('change', '#property input[type="checkbox"]', nsr.properties.checkboxOnChange);
    }

    nsr.properties.mapping = {
        ".button": ["size", "color", "radius", "disabled", "hide"],
        ".button-group": ["radius", "stack", "even-1to8"],
        "p": ["text"],
        ".row": ["small-collapse", "medium-collapse", "large-collapse"],
        ".columns": ["small-1to12", "medium-1to12", "large-1to12",
            "small-centered", "medium-centered", "large-centered",
            "small-push-pull", "medium-push-pull", "large-push-pull",
            "small-reset-order", "medium-reset-order", "large-reset-order",
            "small-offset", "medium-offset", "large-offset",
            "end" ],
    };

    nsr.properties.refreshProperties = function ($elem) {
        if ($elem[0].id === "dropzone") {
            $('#single-property').removeClass('hide').addClass('hide');
            $('#multiple-property').removeClass('hide').addClass('hide');
            $('#single-property').html('');
            $('.multiple-property-content').html('');
            return;
        }
        //todo: implement cache
        var select = '', checkbox = '';
        var map = [];

        for (var i = 0; i < $elem[0].classList.length; i++) {
            var prop = nsr.properties.mapping["." + $elem[0].classList[i]];
            if (prop) {
                map = map.concat(prop);
            }
        }

        var uniqueTracker = {};
        for (var i = 0; i < map.length; i++) {
            if (!uniqueTracker[map[i]]) {
                uniqueTracker[map[i]] = 1;
                var item = nsr.properties.masterList[map[i]];
                if (item.type === "select") {
                    select += nsr.properties.generateSelectboxChoice(item, $elem[0].classList);
                }
                if (item.type === "checkbox") {
                    checkbox += nsr.properties.generateCheckboxChoice(item.option, $elem[0].classList);
                }
            }
        }
        
        $('#single-property').html(select);
        $('.multiple-property-content').html(checkbox);
        if (select) {
            $('#single-property').removeClass('hide');
        } else {
            $('#single-property').removeClass('hide').addClass('hide');
        }
        
        if (checkbox) {
            $('#multiple-property').removeClass('hide');
        } else {
            $('#multiple-property').removeClass('hide').addClass('hide');
        }
        $(document).foundation('reflow');
    }

    nsr.properties.selectboxOnChange = function (e) {
        var cls = '';
        $(this).find("option").each(function () {
            cls += this.value + ' ';
        })
        $('.mouse-selected').removeClass(cls).addClass(this.value);
    }

    nsr.properties.checkboxOnChange = function (e) {
        if (this.checked)
            $('.mouse-selected').removeClass(this.value).addClass(this.value);
        else {
            $('.mouse-selected').removeClass(this.value);
        }
    }
    
    nsr.properties.generateSelectboxChoice = function (propItem, classList) {
        
        var generateOptions = function (opt) {
            var options = '';
            var modelSelected = '';
            var classSelected = '';
            if (opt && opt.length) {
                for (var i = 0; i < opt.length; i++) {
                    if (opt[i].value && classList.contains(opt[i].value))
                        classSelected = opt[i].value;

                    modelSelected = opt[i].selected || '';
                }
                for (var i = 0; i < opt.length; i++) {
                    var selected = (classSelected || modelSelected) === opt[i].value ? "selected" : "";
                    options += '<option value="' + opt[i].value + '" ' + selected + '>' + opt[i].text + '</option>\n';
                }
            }

            return options;
        }

        if (!propItem || !propItem.option.length) return '';
        var $html =  $('<div class="row">'+
                    '   <div class="small-12 columns">'+
                    '       <label>' + propItem.label + ':</label>' +
                    '       <select></select>'+
                    '   </div>'+
                    '</div>');
        $html.find("select").append(generateOptions(propItem.option));
        return $html[0].outerHTML;
    }

    nsr.properties.generateCheckboxChoice = function (propOption, classList) {
        var checked = classList.contains(propOption.value) ? "checked" : "";
        return  '<div class="row small-collapse">'+
                '  <div class="small-1 columns">'+
                '      <input type="checkbox" value="' + propOption.value + '" ' + checked + ' >' +
                '  </div>'+
                '  <div class="small-11 columns">'+
                '      <label for="fa-disabled">' + propOption.text + '</label>' +
                '  </div>'+
                '</div>';
    }

    /*#region json*/
    nsr.properties.masterList = {
        "small-collapse":{
            "label": "Small Collapse",
            "type": "select",
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "small-collapse", "text": "Small Collapse" },
                { "value": "small-uncollapse", "text": "Small Uncollapse" },
            ]
        },
        "medium-collapse":{
            "label": "Medium Collapse",
            "type": "select",
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "medium-collapse", "text": "Medium Collapse" },
                { "value": "medium-uncollapse", "text": "Medium Uncollapse" },
            ]
        },
        "large-collapse":{
            "label": "Large Collapse",
            "type": "select",
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "large-collapse", "text": "Large Collapse" },
                { "value": "large-uncollapse", "text": "Large Uncollapse" },
            ]
        },
        "small-centered": {
            "label": "Small Centered",
            "type": "select",
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "small-centered", "text": "Small Centered" },
                { "value": "small-uncentered", "text": "Small Uncentered" }]
        },
        "medium-centered": {
            "label": "Medium Centered",
            "type": "select",
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "medium-centered", "text": "Medium Centered" },
                { "value": "medium-uncentered", "text": "Medium Uncentered" }
            ]
        },
        "large-centered": {
            "label": "Large Centered",
            "type": "select",
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "large-centered", "text": "Large Centered" },
                { "value": "large-uncentered", "text": "Large Uncentered" }
            ]
        },
        "small-push-pull": {
            "label": "Small Push &amp; Pull",
            "type": "select",
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "small-push-0", "text": "Small Push 0" },
                { "value": "small-pull-0", "text": "Small Pull 0" },
                { "value": "small-push-1", "text": "Small Push 1" },
                { "value": "small-pull-1", "text": "Small Pull 1" },
                { "value": "small-push-2", "text": "Small Push 2" },
                { "value": "small-pull-2", "text": "Small Pull 2" },
                { "value": "small-push-3", "text": "Small Push 3" },
                { "value": "small-pull-3", "text": "Small Pull 3" },
                { "value": "small-push-4", "text": "Small Push 4" },
                { "value": "small-pull-4", "text": "Small Pull 4" },
                { "value": "small-push-5", "text": "Small Push 5" },
                { "value": "small-pull-5", "text": "Small Pull 5" },
                { "value": "small-push-6", "text": "Small Push 6" },
                { "value": "small-pull-6", "text": "Small Pull 6" },
                { "value": "small-push-7", "text": "Small Push 7" },
                { "value": "small-pull-7", "text": "Small Pull 7" },
                { "value": "small-push-8", "text": "Small Push 8" },
                { "value": "small-pull-8", "text": "Small Pull 8" },
                { "value": "small-push-9", "text": "Small Push 9" },
                { "value": "small-pull-9", "text": "Small Pull 9" },
                { "value": "small-push-10", "text": "Small Push 10" },
                { "value": "small-pull-10", "text": "Small Pull 10" },
                { "value": "small-push-11", "text": "Small Push 11" },
                { "value": "small-pull-11", "text": "Small Pull 11" }
            ]
        },
        "medium-push-pull": {
            "label": "Medium Push &amp; Pull",
            "type": "select",
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "medium-push-0", "text": "Medium Push 0" },
                { "value": "medium-pull-0", "text": "Medium Pull 0" },
                { "value": "medium-push-1", "text": "Medium Push 1" },
                { "value": "medium-pull-1", "text": "Medium Pull 1" },
                { "value": "medium-push-2", "text": "Medium Push 2" },
                { "value": "medium-pull-2", "text": "Medium Pull 2" },
                { "value": "medium-push-3", "text": "Medium Push 3" },
                { "value": "medium-pull-3", "text": "Medium Pull 3" },
                { "value": "medium-push-4", "text": "Medium Push 4" },
                { "value": "medium-pull-4", "text": "Medium Pull 4" },
                { "value": "medium-push-5", "text": "Medium Push 5" },
                { "value": "medium-pull-5", "text": "Medium Pull 5" },
                { "value": "medium-push-6", "text": "Medium Push 6" },
                { "value": "medium-pull-6", "text": "Medium Pull 6" },
                { "value": "medium-push-7", "text": "Medium Push 7" },
                { "value": "medium-pull-7", "text": "Medium Pull 7" },
                { "value": "medium-push-8", "text": "Medium Push 8" },
                { "value": "medium-pull-8", "text": "Medium Pull 8" },
                { "value": "medium-push-9", "text": "Medium Push 9" },
                { "value": "medium-pull-9", "text": "Medium Pull 9" },
                { "value": "medium-push-10", "text": "Medium Push 10" },
                { "value": "medium-pull-10", "text": "Medium Pull 10" },
                { "value": "medium-push-11", "text": "Medium Push 11" },
                { "value": "medium-pull-11", "text": "Medium Pull 11" }
            ]
        },
        "large-push-pull": {
            "label": "Large Push &amp; Pull",
            "type": "select",
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "large-push-0", "text": "Large Push 0" },
                { "value": "large-pull-0", "text": "Large Pull 0" },
                { "value": "large-push-1", "text": "Large Push 1" },
                { "value": "large-pull-1", "text": "Large Pull 1" },
                { "value": "large-push-2", "text": "Large Push 2" },
                { "value": "large-pull-2", "text": "Large Pull 2" },
                { "value": "large-push-3", "text": "Large Push 3" },
                { "value": "large-pull-3", "text": "Large Pull 3" },
                { "value": "large-push-4", "text": "Large Push 4" },
                { "value": "large-pull-4", "text": "Large Pull 4" },
                { "value": "large-push-5", "text": "Large Push 5" },
                { "value": "large-pull-5", "text": "Large Pull 5" },
                { "value": "large-push-6", "text": "Large Push 6" },
                { "value": "large-pull-6", "text": "Large Pull 6" },
                { "value": "large-push-7", "text": "Large Push 7" },
                { "value": "large-pull-7", "text": "Large Pull 7" },
                { "value": "large-push-8", "text": "Large Push 8" },
                { "value": "large-pull-8", "text": "Large Pull 8" },
                { "value": "large-push-9", "text": "Large Push 9" },
                { "value": "large-pull-9", "text": "Large Pull 9" },
                { "value": "large-push-10", "text": "Large Push 10" },
                { "value": "large-pull-10", "text": "Large Pull 10" },
                { "value": "large-push-11", "text": "Large Push 11" },
                { "value": "large-pull-11", "text": "Large Pull 11" }
            ]
        },
        "hide": {
            "type": "checkbox",
            "option": { "value": "hide", "text": "Hide" }
        },
        "end": {
            "type": "checkbox",
            "option": { "value": "end", "text": "End" }
        },
        "disabled": {
            "type": "checkbox",
            "option": { "value": "disabled", "text": "Disabled" }
        },
        "small-reset-order": {
            "type": "checkbox",
            "option": { "value": "small-reset-order", "text": "Small Reset Order" }
        },
        "medium-reset-order": {
            "type": "checkbox",
            "option": { "value": "medium-reset-order", "text": "Medium Reset Order" }
        },
        "large-reset-order": {
            "type": "checkbox",
            "option": { "value": "large-reset-order", "text": "Large Reset Order" }
        },
        "small-offset": {
            "label": "Small Offset",
            "type": "select",
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "small-offset-0", "text": "Small Offset 0" },
                { "value": "small-offset-1", "text": "Small Offset 1" },
                { "value": "small-offset-2", "text": "Small Offset 2" },
                { "value": "small-offset-3", "text": "Small Offset 3" },
                { "value": "small-offset-4", "text": "Small Offset 4" },
                { "value": "small-offset-5", "text": "Small Offset 5" },
                { "value": "small-offset-6", "text": "Small Offset 6" },
                { "value": "small-offset-7", "text": "Small Offset 7" },
                { "value": "small-offset-8", "text": "Small Offset 8" },
                { "value": "small-offset-9", "text": "Small Offset 9" },
                { "value": "small-offset-10", "text": "Small Offset 10" },
                { "value": "small-offset-11", "text": "Small Offset 11" }
            ]
        },
        "medium-offset": {
            "label": "Medium Offset",
            "type": "select",
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "medium-offset-0", "text": "Medium Offset 0" },
                { "value": "medium-offset-1", "text": "Medium Offset 1" },
                { "value": "medium-offset-2", "text": "Medium Offset 2" },
                { "value": "medium-offset-3", "text": "Medium Offset 3" },
                { "value": "medium-offset-4", "text": "Medium Offset 4" },
                { "value": "medium-offset-5", "text": "Medium Offset 5" },
                { "value": "medium-offset-6", "text": "Medium Offset 6" },
                { "value": "medium-offset-7", "text": "Medium Offset 7" },
                { "value": "medium-offset-8", "text": "Medium Offset 8" },
                { "value": "medium-offset-9", "text": "Medium Offset 9" },
                { "value": "medium-offset-10", "text": "Medium Offset 10" },
                { "value": "medium-offset-11", "text": "Medium Offset 11" }
            ]
        },
        "large-offset": {
            "label": "Large Offset",
            "type": "select",
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "large-offset-0", "text": "Large Offset 0" },
                { "value": "large-offset-1", "text": "Large Offset 1" },
                { "value": "large-offset-2", "text": "Large Offset 2" },
                { "value": "large-offset-3", "text": "Large Offset 3" },
                { "value": "large-offset-4", "text": "Large Offset 4" },
                { "value": "large-offset-5", "text": "Large Offset 5" },
                { "value": "large-offset-6", "text": "Large Offset 6" },
                { "value": "large-offset-7", "text": "Large Offset 7" },
                { "value": "large-offset-8", "text": "Large Offset 8" },
                { "value": "large-offset-9", "text": "Large Offset 9" },
                { "value": "large-offset-10", "text": "Large Offset 10" },
                { "value": "large-offset-11", "text": "Large Offset 11" }
            ]
        },
        "small-1to12": {
            "label": "Small Screen",
            "type": "select",
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "small-1", "text": "Small 1" },
                { "value": "small-2", "text": "Small 2" },
                { "value": "small-3", "text": "Small 3" },
                { "value": "small-4", "text": "Small 4" },
                { "value": "small-5", "text": "Small 5" },
                { "value": "small-6", "text": "Small 6" },
                { "value": "small-7", "text": "Small 7" },
                { "value": "small-8", "text": "Small 8" },
                { "value": "small-9", "text": "Small 9" },
                { "value": "small-10", "text": "Small 10" },
                { "value": "small-11", "text": "Small 11" },
                { "value": "small-12", "text": "Small 12" }
            ]
        },
        "medium-1to12": {
            "label": "Medium Screen",
            "type": "select",
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "medium-1", "text": "Medium 1" },
                { "value": "medium-2", "text": "Medium 2" },
                { "value": "medium-3", "text": "Medium 3" },
                { "value": "medium-4", "text": "Medium 4" },
                { "value": "medium-5", "text": "Medium 5" },
                { "value": "medium-6", "text": "Medium 6" },
                { "value": "medium-7", "text": "Medium 7" },
                { "value": "medium-8", "text": "Medium 8" },
                { "value": "medium-9", "text": "Medium 9" },
                { "value": "medium-10", "text": "Medium 10" },
                { "value": "medium-11", "text": "Medium 11" },
                { "value": "medium-12", "text": "Medium 12" }
            ]
        },
        "large-1to12": {
            "label": "Large Screen",
            "type": "select",
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "large-1", "text": "Large 1" },
                { "value": "large-2", "text": "Large 2" },
                { "value": "large-3", "text": "Large 3" },
                { "value": "large-4", "text": "Large 4" },
                { "value": "large-5", "text": "Large 5" },
                { "value": "large-6", "text": "Large 6" },
                { "value": "large-7", "text": "Large 7" },
                { "value": "large-8", "text": "Large 8" },
                { "value": "large-9", "text": "Large 9" },
                { "value": "large-10", "text": "Large 10" },
                { "value": "large-11", "text": "Large 11" },
                { "value": "large-12", "text": "Large 12" }
            ]
        },
        "text": {
            "label": "Text Align",
            "type": "select",
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "text-left", "text": "Align Left" },
                { "value": "text-right", "text": "Align Right" },
                { "value": "text-center", "text": "Align Center" },
                { "value": "text-justify", "text": "Justify" }
            ]
        },
        "size":{
            "label": "Size",
            "type": "select",
            "option": [
                { "value": "tiny", "text": "Tiny" },
                { "value": "small", "text": "Small" },
                { "value": "", "text": "Default", "selected": true },
                { "value": "large", "text": "Large" },
                { "value": "expand", "text": "Expand" }
            ]
        },
        "radius":{
            "label": "Radius",
            "type": "select",
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "round", "text": "Round" },
                { "value": "radius", "text": "Radius" }
            ]
        },
        "color":{
            "label": "Color",
            "type": "select",
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "success", "text": "Success" },
                { "value": "secondary", "text": "Secondary" },
                { "value": "alert", "text": "Alert" },
                { "value": "info", "text": "Info" }
            ]
        },
        "stack":{
            "label": "Stack",
            "type": "select",
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "stack", "text": "Vertically" },
                { "value": "stack-for-small", "text": "Vertically for small" }
            ]
        },
        "even-1to8":{
            "label": "Expand Evenly",
            "type": "select",
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "even-1", "text": "1 Button" },
                { "value": "even-2", "text": "2 Buttons" },
                { "value": "even-3", "text": "3 Buttons" },
                { "value": "even-4", "text": "4 Buttons" },
                { "value": "even-5", "text": "5 Buttons" },
                { "value": "even-6", "text": "6 Buttons" },
                { "value": "even-7", "text": "7 Buttons" },
                { "value": "even-8", "text": "8 Buttons" }
            ]
        }
    };
    /*#endregion*/
})(window.nsr = window.nsr || {}, jQuery);
