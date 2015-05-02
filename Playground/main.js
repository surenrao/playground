
$(document).ready(function () {
    nsr.swatch.setupEvents();
    nsr.properties.setupEvents();
    nsr.playground.setupEvents();
    nsr.menu.setupEvents();
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

})(window.nsr = window.nsr || {}, jQuery);

/*
 * Swatch Module
 */
(function (nsr, $, undefined) {
    "use strict";
    nsr.swatch = nsr.swatch || {};

    nsr.swatch.setupEvents = function () {
        $('#swatch-button').click(nsr.swatch.button.applyButton);
        $('#swatch-button-group').click(nsr.swatch.button.applyButtonGroup);
        $('#swatch-button-bar').click(nsr.swatch.button.applyButtonBar);
        $('#swatch-split-button').click(nsr.swatch.button.applySplitButton);
        $('#swatch-dropdown-button').click(nsr.swatch.button.applyDropdownButton);
        $('#swatch-grid-col12').click(nsr.swatch.grid.apply12ColumnGrid);
    }

    nsr.swatch.button = nsr.swatch.button || {};

    nsr.swatch.button.applyButton = function (e) {
        var $selected = $('.mouse-selected');
        if ($selected.length === 0) {
            $('#status-message>span').html('select the body');
            return;
        }
        var html = '<a href="#" class="button">Button</a>';
        if (nsr.isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.html(html);
        }
    }

    nsr.swatch.button.applyButtonGroup = function (e) {
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
        if (nsr.isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.html(html);
        }
    }

    nsr.swatch.button.applyButtonBar = function (e) {
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
        if (nsr.isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.html(html);
        }
    }
    
    nsr.swatch.button.applySplitButton = function (e) {
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
        if (nsr.isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.html(html);
        }
    }
    
    nsr.swatch.button.applyDropdownButton = function (e) {
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
        if (nsr.isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.html(html);
        }
    }


    nsr.swatch.grid = nsr.swatch.grid || {};

    nsr.swatch.grid.apply12ColumnGrid = function (e) {
        var $selected = $('.mouse-selected');
        if ($selected.length === 0) {
            $('#status-message>span').html('select playground');
            return;
        }
        var html = '<div class="row">\
          <div class="large-12 columns">L12.cols</div>\
        </div>';
        if (nsr.isAppendEnabled) {
            $selected.append(html);
        } else {
            $selected.html(html);
        }
    }

})(window.nsr = window.nsr || {}, jQuery);

/*
 * Playground Module
 */
(function (nsr, $, undefined) {
    "use strict";
    nsr.playground = nsr.playground || {};

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
 * Properties Module
 */
(function (nsr, $, undefined) {
    "use strict";
    nsr.properties = nsr.properties || {};

    nsr.properties.setupEvents = function () {
        $(document).on('change', '#property select', nsr.properties.selectboxOnChange);
        $(document).on('change', '#property input[type="checkbox"]', nsr.properties.checkboxOnChange);
        //$('#property select').change(nsr.properties.selectboxOnChange);
        //$('input[type="checkbox"]').change(nsr.properties.checkboxOnChange);
    }
    nsr.properties.mapping = {
        ".button": ["size", "color", "radius", "disabled", "hide"],
        ".button-group": ["radius", "stack", "even-1to8"],
        "p": ["text"],
        ".row": ["small-collapse", "medium-collapse", "large-collapse"],
        ".columns": ["small-1to12", "medium-1to12", "large-1to12", "small-centered", "medium-centered", "large-centered", "end", ],
        ".column": ["small-1to12", "medium-1to12", "large-1to12", "end"],
    };

    nsr.properties.refreshProperties = function ($elem) {
        //todo: implement cache
        var single = '', multy = '';
        var map = [];

        if ($elem.hasClass('button')) {
            map = map.concat(nsr.properties.mapping[".button"]);
        } 

        if ($elem.hasClass('button-group')) {
            map = map.concat(nsr.properties.mapping[".button-group"]);
        }

        if ($elem.hasClass('column') || $elem.hasClass('columns')) {
            map = map.concat(nsr.properties.mapping[".columns"]);
        }
        if ($elem.hasClass('row')) {
            map = map.concat(nsr.properties.mapping[".row"]);
        }

        var uniqueTracker = {};
        for (var i = 0; i < map.length; i++) {
            if (!uniqueTracker[map[i]]) {
                uniqueTracker[map[i]] = 1;
                var item = nsr.properties.masterList[map[i]];
                if (!item.isMultiple) {
                    single += nsr.properties.generateSingleChoice(item);
                } else {
                    multy += nsr.properties.generateMultipleChoice(item.option);
                }
            }
        }
        
        $('#single-property').html(single);
        $('.multiple-property-content').html(multy);
        if (single) {
            $('#single-property').removeClass('hide');
        } else {
            $('#single-property').removeClass('hide').addClass('hide');
        }
        
        if (multy) {
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
    
    nsr.properties.generateSingleChoice = function (propItem) {
        if (!propItem || !propItem.option.length) return '';
        var $html =  $('<div class="row">'+
                    '   <div class="small-12 columns">'+
                    '       <label>' + propItem.label + ':</label>' +
                    '       <select></select>'+
                    '   </div>'+
                    '</div>');
        $html.find("select").append(nsr.properties.generateOptions(propItem.option));
        return $html[0].outerHTML;
    }

    nsr.properties.generateMultipleChoice = function (propOption) {
        return  '<div class="row small-collapse">'+
                '  <div class="small-1 columns">'+
                '      <input type="checkbox" value="' + propOption.value + '">' +
                '  </div>'+
                '  <div class="small-11 columns">'+
                '      <label for="fa-disabled">' + propOption.text + '</label>' +
                '  </div>'+
                '</div>';
    }

    nsr.properties.generateOptions = function (opt) {
        var options = '';
        if (opt && opt.length) {
            for (var i = 0; i < opt.length; i++) {
                options += '<option value="'+opt[i].value +'">'+opt[i].text+'</option>\n';
            }
        }

        return options;
    }

    nsr.properties.masterList = {
        "small-collapse":{
            "label": "Small Collapse",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "small-collapse", "text": "Small Collapse", "selected": false },
                { "value": "small-uncollapse", "text": "Small Uncollapse", "selected": false },
            ]
        },
        "medium-collapse":{
            "label": "Medium Collapse",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "medium-collapse", "text": "Medium Collapse", "selected": false },
                { "value": "medium-uncollapse", "text": "Medium Uncollapse", "selected": false },
            ]
        },
        "large-collapse":{
            "label": "Large Collapse",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "large-collapse", "text": "Large Collapse", "selected": false },
                { "value": "large-uncollapse", "text": "Large Uncollapse", "selected": false },
            ]
        },
        "small-centered": {
            "label": "Small Centered",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "small-centered", "text": "Small Centered", "selected": false },
                { "value": "small-uncentered", "text": "Small Uncentered", "selected": false }]
        },
        "medium-centered": {
            "label": "Medium Centered",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "medium-centered", "text": "Medium Centered", "selected": false },
                { "value": "medium-uncentered", "text": "Medium Uncentered", "selected": false }
            ]
        },
        "large-centered": {
            "label": "Large Centered",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "large-centered", "text": "Large Centered", "selected": false },
                { "value": "large-uncentered", "text": "Large Uncentered", "selected": false }
            ]
        },
        "hide": {
            "isMultiple": true,
            "option": { "value": "hide", "text": "Hide", "selected": false }
        },
        "end": {
            "isMultiple": true,
            "option": { "value": "end", "text": "End", "selected": false }
        },
        "disabled": {
            "isMultiple": true,
            "option": { "value": "disabled", "text": "Disabled", "selected": false }
        },
        "small-1to12": {
            "label": "Small Screen",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "small-1", "text": "Small 1", "selected": false },
                { "value": "small-2", "text": "Small 2", "selected": false },
                { "value": "small-3", "text": "Small 3", "selected": false },
                { "value": "small-4", "text": "Small 4", "selected": false },
                { "value": "small-5", "text": "Small 5", "selected": false },
                { "value": "small-6", "text": "Small 6", "selected": false },
                { "value": "small-7", "text": "Small 7", "selected": false },
                { "value": "small-8", "text": "Small 8", "selected": false },
                { "value": "small-9", "text": "Small 9", "selected": false },
                { "value": "small-10", "text": "Small 10", "selected": false },
                { "value": "small-11", "text": "Small 11", "selected": false },
                { "value": "small-12", "text": "Small 12", "selected": false }
            ]
        },
        "medium-1to12": {
            "label": "Medium Screen",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "medium-1", "text": "Medium 1", "selected": false },
                { "value": "medium-2", "text": "Medium 2", "selected": false },
                { "value": "medium-3", "text": "Medium 3", "selected": false },
                { "value": "medium-4", "text": "Medium 4", "selected": false },
                { "value": "medium-5", "text": "Medium 5", "selected": false },
                { "value": "medium-6", "text": "Medium 6", "selected": false },
                { "value": "medium-7", "text": "Medium 7", "selected": false },
                { "value": "medium-8", "text": "Medium 8", "selected": false },
                { "value": "medium-9", "text": "Medium 9", "selected": false },
                { "value": "medium-10", "text": "Medium 10", "selected": false },
                { "value": "medium-11", "text": "Medium 11", "selected": false },
                { "value": "medium-12", "text": "Medium 12", "selected": false }
            ]
        },
        "large-1to12": {
            "label": "Large Screen",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "large-1", "text": "Large 1", "selected": false },
                { "value": "large-2", "text": "Large 2", "selected": false },
                { "value": "large-3", "text": "Large 3", "selected": false },
                { "value": "large-4", "text": "Large 4", "selected": false },
                { "value": "large-5", "text": "Large 5", "selected": false },
                { "value": "large-6", "text": "Large 6", "selected": false },
                { "value": "large-7", "text": "Large 7", "selected": false },
                { "value": "large-8", "text": "Large 8", "selected": false },
                { "value": "large-9", "text": "Large 9", "selected": false },
                { "value": "large-10", "text": "Large 10", "selected": false },
                { "value": "large-11", "text": "Large 11", "selected": false },
                { "value": "large-12", "text": "Large 12", "selected": false }
            ]
        },
        "text": {
            "label": "Text Align",
            "isMultiple": false,
            "option": [
                { "value": "text-left", "text": "Align Left", "selected": false },
                { "value": "text-right", "text": "Align Right", "selected": false },
                { "value": "", "text": "Default", "selected": true },
                { "value": "text-center", "text": "Align Center", "selected": false },
                { "value": "text-justify", "text": "Justify", "selected": false }
            ]
        },
        "size":{
            "label": "Size",
            "isMultiple": false,
            "option": [
                { "value": "tiny", "text": "Tiny", "selected": false },
                { "value": "small", "text": "Small", "selected": false },
                { "value": "", "text": "Default", "selected": true },
                { "value": "large", "text": "Large", "selected": false },
                { "value": "expand", "text": "Expand", "selected": false }
            ]
        },
        "radius":{
            "label": "Radius",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "round", "text": "Round", "selected": false },
                { "value": "radius", "text": "Radius", "selected": false }
            ]
        },
        "color":{
            "label": "Color",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "success", "text": "Success", "selected": false },
                { "value": "secondary", "text": "Secondary", "selected": false },
                { "value": "alert", "text": "Alert", "selected": false },
                { "value": "info", "text": "Info", "selected": false }
            ]
        },
        "stack":{
            "label": "Stack",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "stack", "text": "Vertically", "selected": false },
                { "value": "stack-for-small", "text": "Vertically for small", "selected": false }
            ]
        },
        "even-1to8":{
            "label": "Expand Evenly",
            "isMultiple": false,
            "option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "even-1", "text": "1 Button", "selected": false },
                { "value": "even-2", "text": "2 Buttons", "selected": false },
                { "value": "even-3", "text": "3 Buttons", "selected": false },
                { "value": "even-4", "text": "4 Buttons", "selected": false },
                { "value": "even-5", "text": "5 Buttons", "selected": false },
                { "value": "even-6", "text": "6 Buttons", "selected": false },
                { "value": "even-7", "text": "7 Buttons", "selected": false },
                { "value": "even-8", "text": "8 Buttons", "selected": false }
            ]
        }
    };
    
})(window.nsr = window.nsr || {}, jQuery);

/*
 * Menu Module
 */
(function (nsr, $, undefined) {
    "use strict";
    nsr.menu = nsr.menu || {};

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


