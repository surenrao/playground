
$(document).ready(function () {
    nsr.init();
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
    nsr.mouseSelected = [];

    nsr.$injector = null;

    nsr.init = function () {
        //not using (ng-app="playground") and manually bootstrapping
        angular.element(document).ready(function () {
            nsr.$injector = angular.bootstrap(document, ['playground']);
        });
        //var injector = angular.bootstrap(document, ['playground']);
        nsr.swatch.init();
        nsr.properties.init();
        nsr.playground.init();
        nsr.menu.init();
        nsr.playground.highlightElement($('#dropzone')[0]);
    }

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
        if (elem) {
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
        } else {
            return '';
        }
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

    nsr.getClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
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
            $('#status-message>span').html('');
            nsr.playground.highlightElement(e.target);
            //nsr.properties.refreshProperties($target);
            //$(document).foundation('reflow');
            var $rootScope = nsr.$injector.get("$rootScope");
            $rootScope.$broadcast('onSelected', $(e.target));
            $rootScope.$apply();
        }
    }

    nsr.playground.highlightElement = function (elem) {
        if (elem) {
            $("#dropzone, #dropzone *").removeClass('mouse-selected');
            var selected = nsr.getSelectorHier(elem, 'DIV#dropzone');
            nsr.mouseSelected = selected;
            $('#status-selector').html(['BODY'].concat(selected).join(">"));
            $('#status-over').html(nsr.mouseOver);
            var $elem = $(elem);
            $elem.addClass('mouse-selected');
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
        $('#menu-sibling').click(nsr.menu.selectSibling);
        $('#menu-edit').click(nsr.menu.edit);
    }

    nsr.menu.delete = function () {
        if (nsr.mouseSelected.length == 0) {
            $('.mouse-selected').html('');
        }
        else {
            $('.mouse-selected').not('#dropzone').remove();
        }
    }

    nsr.menu.annotateToggle = function () {
        nsr.isHighlightEnabled = !nsr.isHighlightEnabled;
        if (!nsr.isHighlightEnabled) {
            $("#dropzone, #dropzone *").removeClass('mouse-selected mouse-over');
            $('#menu-annotate').removeClass('blue');
            var $rootScope = nsr.$injector.get("$rootScope");
            $rootScope.$broadcast('onSelected', $('#dropzone'));
            $rootScope.$apply();
            $(document).foundation('reflow');
        } else {
            $('#menu-annotate').addClass('blue');
        }
    }

    nsr.menu.save = function () {
        $('#status-message>span').html('Saving...');
        var $div = $('<div>')
        $div.append($.trim($('#dropzone').html()));
        $div.find('*').removeClass('mouse-selected');
        $('#txtHtml').val(html_beautify($div.html()));
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
        nsr.mouseSelected = nsr.getSelectorHier($('.tmp-selected').parent()[0], 'DIV#dropzone');
        $('#status-selector').html(['BODY'].concat(nsr.mouseSelected).join(">"));
        $('.tmp-selected').parent().addClass('mouse-selected');
        //nsr.properties.refreshProperties($('.tmp-selected').parent());
        var $rootScope = nsr.$injector.get("$rootScope");
        $rootScope.$broadcast('onSelected', $('.tmp-selected').parent());
        $rootScope.$apply();
        $('.tmp-selected').removeClass('tmp-selected');
    }

    nsr.menu.selectDown = function () {
        if ($('.mouse-selected > *:first-child').length) {
            $('.mouse-selected').addClass('tmp-selected');
            $("#dropzone, #dropzone *").removeClass('mouse-selected');
            nsr.mouseSelected = nsr.getSelectorHier($('.tmp-selected > *:first-child')[0], 'DIV#dropzone');
            $('#status-selector').html(['BODY'].concat(nsr.mouseSelected).join(">"));
            //nsr.properties.refreshProperties($('.tmp-selected > *:first-child'));
            var $rootScope = nsr.$injector.get("$rootScope");
            $rootScope.$broadcast('onSelected', $('.tmp-selected > *:first-child'));
            $rootScope.$apply();
            $('.tmp-selected > *:first-child').addClass('mouse-selected');
            $('.tmp-selected').removeClass('tmp-selected');
        }
    }

    nsr.menu.selectSibling = function () {
        console.log($('.mouse-selected').siblings());
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
            $('#status-message>span').html(['BODY'].concat(nsr.mouseSelected).join(">") + 'is now editable');
        } else {
            $('#menu-edit').removeClass('blue');
            $('#status-message>span').html(['BODY'].concat(nsr.mouseSelected).join(">") + 'is not editable');
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
        //$(document).on('click', '#swatch .side-nav a', function (e) {
        //    var $selected = $('.mouse-selected');
        //    if ($selected.length === 0) {
        //        $('#status-message>span').html('select the body');
        //        return;
        //    }
        //    var html = $(this).data('template');//no need of explicit decode
        //    var $html = $(html).addClass('tmp-mouse-selected');
        //    if (nsr.isAppendEnabled) {
        //        $selected.append($html);
        //    } else {
        //        $selected.html($html);
        //    }
        //    $("#dropzone, #dropzone *").removeClass('mouse-selected');
        //    $('.tmp-mouse-selected').addClass('mouse-selected').removeClass('tmp-mouse-selected');
        //    $selected = $('.mouse-selected'); 
        //    nsr.mouseSelected = nsr.getSelectorHier($selected[0], 'DIV#dropzone');
        //    $('#status-selector').html(['BODY'].concat(nsr.mouseSelected).join(">"));
        //    nsr.properties.refreshProperties($selected);
        //});

        //$(document).on('click', '#swatch .heading i', function (e) {
        //    if ($(this).hasClass('fi-arrow-down')) {
        //        $(this).parent().siblings().removeClass('hide');
        //        $(this).removeClass('fi-arrow-down').addClass('fi-arrow-up');
        //    } else {
        //        $(this).parent().siblings().addClass('hide');
        //        $(this).removeClass('fi-arrow-up').addClass('fi-arrow-down');
        //    }
        //});
    }

    nsr.swatch.generateSideNav = function () {
        ////todo context based dynamic generation
        //var html = '';
        //for (var key in nsr.swatch.masterList) {
        //    var group = nsr.swatch.masterList[key];
        //    html += '<ul class="side-nav"><li class="heading">' + key + '<i class="fi-arrow-down right" style="font-size:1.2em;cursor:pointer;margin-right:1em;"></i></li>\n';
        //    for (var i = 0; i < group.length; i++) {
        //        html += '<li class="hide"><a data-template="' + nsr.htmlEncode(group[i].template) + '">' + group[i].text + '</a></li>\n';
        //    }
        //    html += '</ul>';
        //}
        //$('#swatch nav').html(html);
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
        //$(document).on('change', '#property select', nsr.properties.selectboxOnChange);
        //$(document).on('change', '#property input[type="checkbox"]', nsr.properties.checkboxOnChange);
    }

    nsr.properties.refreshProperties = function ($elem) {
        //if ($elem && $elem[0].id === "dropzone") {
        //    $('#single-property').removeClass('hide').addClass('hide');
        //    $('#multiple-property').removeClass('hide').addClass('hide');
        //    $('#single-property').html('');
        //    $('.multiple-property-content').html('');
        //    return;
        //}
        ////todo: implement cache
        //var select = '', checkbox = '';
        //var map = [];
        //if ($elem) {
        //    for (var i = 0; i < $elem[0].classList.length; i++) {
        //        var prop = nsr.properties.mapping["." + $elem[0].classList[i]];
        //        if (prop) {
        //            map = map.concat(prop);
        //        }
        //    }
        //}
        
        //console.log(map);
        //var uniqueTracker = {};
        //for (var i = 0; i < map.length; i++) {
        //    if (!uniqueTracker[map[i]]) {
        //        uniqueTracker[map[i]] = 1;
        //        var item = nsr.properties.masterList[map[i]];
        //        if (item) {
        //            if (item.type === "select") {
        //                select += nsr.properties.generateSelectboxChoice(item, $elem[0].classList);
        //            }
        //            if (item.type === "checkbox") {
        //                checkbox += nsr.properties.generateCheckboxChoice(item.option, $elem[0].classList);
        //            }
        //        }
        //    }
        //}
        
        //$('#single-property').html(select);
        //$('.multiple-property-content').html(checkbox);
        //if (select) {
        //    $('#single-property').removeClass('hide');
        //} else {
        //    $('#single-property').removeClass('hide').addClass('hide');
        //}
        
        //if (checkbox) {
        //    $('#multiple-property').removeClass('hide');
        //} else {
        //    $('#multiple-property').removeClass('hide').addClass('hide');
        //}
        //$(document).foundation('reflow');
    }

    nsr.properties.selectboxOnChange = function (e) {
        //var cls = '';
        //$(this).find("option").each(function () {
        //    cls += this.value + ' ';
        //})
        //$('.mouse-selected').removeClass(cls).addClass(this.value);
    }

    nsr.properties.checkboxOnChange = function (e) {
        //if (this.checked)
        //    $('.mouse-selected').removeClass(this.value).addClass(this.value);
        //else {
        //    $('.mouse-selected').removeClass(this.value);
        //}
    }
    
    nsr.properties.generateSelectboxChoice = function (propItem, classList) {
        
        //var generateOptions = function (opt) {
        //    var options = '';
        //    var modelSelected = '';
        //    var classSelected = '';
        //    if (opt && opt.length) {
        //        for (var i = 0; i < opt.length; i++) {
        //            if (opt[i].value && classList.contains(opt[i].value))
        //                classSelected = opt[i].value;

        //            modelSelected = opt[i].selected || '';
        //        }
        //        for (var i = 0; i < opt.length; i++) {
        //            var selected = (classSelected || modelSelected) === opt[i].value ? "selected" : "";
        //            options += '<option value="' + opt[i].value + '" ' + selected + '>' + opt[i].text + '</option>\n';
        //        }
        //    }

        //    return options;
        //}

        //if (!propItem || !propItem.option.length) return '';
        //var $html =  $('<div class="row">'+
        //            '   <div class="small-12 columns">'+
        //            '       <label>' + propItem.label + ':<select></select></label>' +
        //            '   </div>'+
        //            '</div>');
        //$html.find("select").append(generateOptions(propItem.option));
        //return $html[0].outerHTML;
    }

    nsr.properties.generateCheckboxChoice = function (propOption, classList) {
        //var checked = classList.contains(propOption.value) ? "checked" : "";
        //return '<div class="row small-collapse">' +
        //        '  <div class="small-12 columns">' +
        //        '      <label><input type="checkbox" value="' + propOption.value + '" ' + checked + ' /> ' + propOption.text + '</label>' +
        //        '  </div>' +
        //        '</div>';
    }

    
})(window.nsr = window.nsr || {}, jQuery);
