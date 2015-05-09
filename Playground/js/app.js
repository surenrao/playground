(function (nsr, $, undefined) {
    var app = angular.module('playground', ['ngAnimate']);

    app.controller('SwatchController', ['$rootScope', function ($rootScope) {
        var swatch = this;
        swatch.toggleList = {};
        swatch.masterList = nsr.swatch.masterList;

        swatch.toggleNav = function (head) {
            if (!swatch.toggleList[head]) {
                swatch.toggleList[head] = true;
            } else {
                swatch.toggleList[head] = false;
            }
        }

        swatch.applySwatch = function (item) {
            //TODO: if id present set unique one
            $('#status-message>span').html('');
            var $selected = $('.mouse-selected');
            if ($selected.length === 0) {
                $('#status-message>span').html('select the body');
                return;
            }
            if (item.parent && !$selected[0].matches(item.parent)) {
                $('#status-message>span').html('Rule required: <span class="red">' + item.parent + '</span>');
                return;
            }

            var $html = $(item.template).addClass('tmp-mouse-selected');

            if (nsr.isAppendEnabled) {
                $selected.append($html);
            } else {
                $selected.html($html);
            }
            
            $("#dropzone, #dropzone *").removeClass('mouse-selected');
            $('.tmp-mouse-selected').addClass('mouse-selected').removeClass('tmp-mouse-selected');
            $selected = $('.mouse-selected'); 
            nsr.mouseSelected = nsr.getSelectorHier($selected[0], 'DIV#dropzone');
            $('#status-selector').html(['BODY'].concat(nsr.mouseSelected).join(">"));
            $rootScope.$broadcast('onSelected', $selected);
        }
    }]);

    app.controller('PropertyController', ['$rootScope', '$scope', function ($rootScope, $scope) {
        var property = this;
        property.selectboxList = [];
        property.checkboxList = [];
        property.selected = {};
        property.checked = {};
        property.classMap = {};//to get all classes

        property.class_collection = {};
        property.$element = null;

        $scope.$on('onSelected', function (event, $elem) {
            //clearing old values by reference
            property.$element = $elem;
            property.selectboxList.length = 0;
            property.checkboxList.length = 0;
            for (var cls in property.selected) {
                delete property.selected[cls];
            }
            for (var cls in property.checked) {
                delete property.checked[cls];
            }
            for (var cls in property.classMap) {
                delete property.classMap[cls];
            }

            if ($elem && $elem[0].id === "dropzone") {
                console.log('onSelected', $elem[0].id);
                return;
            }
            
            //get all properties for the corresponding class
            var map = [];
            if ($elem) {
                for (var i = 0; i < $elem[0].classList.length; i++) {
                    property.classMap[$elem[0].classList[i]] = true;

                    var prop = nsr.properties.mapping["." + $elem[0].classList[i]];
                    if (prop) {
                        map = map.concat(prop);
                    }
                }
            }
            
            var uniqueTracker = {};//only process unique property
            for (var i = 0; i < map.length; i++) {
                if (!uniqueTracker[map[i]]) {
                    uniqueTracker[map[i]] = true;
                    var item = nsr.properties.masterList[map[i]];
                    
                    if (item) {
                        item = nsr.getClone(item);
                        //create selectbox based model
                        if (item.type === "select") {
                            property.selectboxList.push(item);
                            var selected = '';
                            property.selected[item.id] = '';
                            property.class_collection[item.id] = [];
                            for (var j = 0; j < item.option.length; j++) {
                                property.class_collection[item.id].push(item.option[j].value)
                                if (item.option[j].selected)
                                    selected = item.option[j].value;

                                if (item.option[j].value && property.classMap[item.option[j].value]) {
                                    property.selected[item.id] = item.option[j].value;
                                }
                            }
                            if (!property.selected[item.id]) {
                                property.selected[item.id] = selected;
                            }
                        }
                        //create checkbox based model
                        if (item.type === "checkbox") {
                            property.checkboxList.push(item);
                            property.checked[item.value] = property.classMap[item.value] ? true : false;
                        }
                    }
                }
            }
            //console.log(property.selectboxList, property.checkboxList);
            //$(document).foundation('reflow');
        });

        $scope.$watchCollection(function () { return property.selected }, function (obj) {
            for (var key in obj) {
                if (obj[key] === '') {
                    property.$element.removeClass(property.class_collection[key].join(" "))
                } else {
                    property.$element.removeClass(property.class_collection[key].join(" ")).addClass(obj[key]);
                }
            }
        });

        $scope.$watchCollection(function () { return property.checked }, function (obj) {
            for (var key in obj) {
                if (obj[key] === true) {
                    property.$element.removeClass(key).addClass(key);
                } else {
                    property.$element.removeClass(key);
                }
            }
        });
    }]);

})(window.nsr = window.nsr || {}, jQuery);