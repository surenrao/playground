
(function (nsr, undefined) {

	nsr.swatch = nsr.swatch || {};
	nsr.properties = nsr.properties || {};

	nsr.properties.mapping = {
		".button": ["size", "color", "radius", "disabled", "hide"],
		".button-group": ["radius", "stack", "even-1to8"],
		"p": ["text"],
		".row": ["small-collapse", "medium-collapse", "large-collapse", "prefix-radius", "postfix-radius", "collapse"],
		".columns": ["small-1to12", "medium-1to12", "large-1to12",
            "small-centered", "medium-centered", "large-centered",
            "small-push-pull", "medium-push-pull", "large-push-pull",
            "small-reset-order", "medium-reset-order", "large-reset-order",
            "small-offset", "medium-offset", "large-offset",
            "end"],
	};

	/*#region json*/
	nsr.swatch.masterList = {
		"01: Grid": [
            {
            	"text": "Row",
            	"template": '<div class="row">' +
                                    '   <div class="large-12 columns">L12.cols</div>' +
                                    '</div>'
            },
            {
            	"text": "Column",
            	"template": '<div class="large-12 columns">L12.cols</div>', "parent": "row"
            },
		],
		"03: Buttons": [
            {
            	"text": "Button",
            	"template": '<a href="#" class="button">Button</a>'
            },
            {
            	"text": "Button Group", "template": '<ul class="button-group">\
                  <li><a href="#" class="button">Button 1</a></li>\
                  <li><a href="#" class="button">Button 2</a></li>\
                  <li><a href="#" class="button">Button 3</a></li>\
                </ul>'
            },
            {
            	"text": "Button Bar",
            	"template": '<div class="button-bar">\
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
            	"text": "Split Button",
            	"template": '<a href="#" class="button split">Split Button <span data-dropdown="drop"></span></a><br>\
                    <ul id="drop" class="f-dropdown" data-dropdown-content>\
                      <li><a href="#">This is a link</a></li>\
                      <li><a href="#">This is another</a></li>\
                      <li><a href="#">Yet another</a></li>\
                    </ul>'
            },
            {
            	"text": "Dropdown Button",
            	"template": '<button href="#" data-dropdown="drop1" aria-controls="drop1" aria-expanded="false" class="button dropdown">Dropdown Button</button><br>\
                    <ul id="drop1" data-dropdown-content class="f-dropdown" aria-hidden="true">\
                      <li><a href="#">This is a link</a></li>\
                      <li><a href="#">This is another</a></li>\
                      <li><a href="#">Yet another</a></li>\
                    </ul>'
            }
		],
		"02: Forms": [
            {
            	"text": "Form",
            	"template": '<form><div class="row"><div class="large-12 columns">Form Row</div></div></form>'
            },
            {
            	"text": "Fieldset",
            	"template": '<fieldset><legend>Fieldset Legend</legend></fieldset>',
            },
            {
            	"text": "Input & Label",
            	"template": '<label>Input Label<input type="text" placeholder="input[type=text]" /></label>',
            },
            {
            	"text": "Select & Label",
            	"template": '<label>Select Label<select><option>--select--<option></select></label>',
            },
            {
            	"text": "Textarea & Label",
            	"template": '<label>Textarea Label<textarea placeholder="textarea"></textarea></label>',
            },
            {
            	"text": "Radio & Label",
            	"template": '<label>Choose radio</label><label><input type="radio" name="group1" value="1"> Option 1</label><label><input type="radio" name="group1" value="2"> Option 2</label>'
            },
            {
            	"text": "Checkbox & Label",
            	"template": '<label>Choose chockbox</label><label><input type="checkbox" name="checkbox1" value="1"> Check 1</label><label><input type="checkbox" name="checkbox2" value="2"> Check 2</label>'
            },
            {
            	"text": "Inline Text Input",
            	"template": '<div class="row">' +
                    '    <div class="small-3 columns">' +
                    '      <label for="right-label" class="right inline">Label</label>' +
                    '    </div>' +
                    '    <div class="small-9 columns">' +
                    '      <input type="text" id="right-label" placeholder="Inline Text Input">' +
                    '    </div>' +
                    '  </div>'
            },
            {
            	"text": "prefix Input",
            	"template": '<div class="row collapse">' +
                    '    <div class="small-3 large-2 columns">' +
                    '      <span class="prefix">http://</span>' +
                    '    </div>' +
                    '    <div class="small-9 large-10 columns">' +
                    '      <input type="text" placeholder="Enter your URL...">' +
                    '    </div>' +
                    '  </div>'
            },
           {
           	"text": "postfix Input",
           	"template": '<div class="row collapse">' +
				'    <div class="small-10 columns">' +
				'      <input type="text" placeholder="Hex Value">' +
				'    </div>' +
				'    <div class="small-2 columns">' +
				'      <a href="#" class="button postfix">Go</a>' +
				'    </div>' +
				'  </div>',
           	"parent": "form .row"
           },
            {
            	"text": "prefix Input",
            	"template": '<div class="row collapse prefix-round">' +
                    '    <div class="large-3 columns">' +
                    '      <a href="#" class="button prefix">Go</a>' +
                    '    </div>' +
                    '    <div class="large-9 columns">' +
                    '      <input type="text" placeholder="Value">' +
                    '    </div>' +
                    '  </div>',
            	"parent": "form .row"
            },
		],
	};
	/*#endregion json*/

	/*#region json*/
	nsr.properties.masterList = {
		"small-collapse": {
			"id":"small-collapse",
			"label": "Small Collapse",
			"type": "select",
			"option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "small-collapse", "text": "Small Collapse" },
                { "value": "small-uncollapse", "text": "Small Uncollapse" },
			]
		},
		"medium-collapse": {
			"id": "medium-collapse",
			"label": "Medium Collapse",
			"type": "select",
			"option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "medium-collapse", "text": "Medium Collapse" },
                { "value": "medium-uncollapse", "text": "Medium Uncollapse" },
			]
		},
		"large-collapse": {
			"id": "large-collapse",
			"label": "Large Collapse",
			"type": "select",
			"option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "large-collapse", "text": "Large Collapse" },
                { "value": "large-uncollapse", "text": "Large Uncollapse" },
			]
		},
		"small-centered": {
			"id": "small-centered",
			"label": "Small Centered",
			"type": "select",
			"option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "small-centered", "text": "Small Centered" },
                { "value": "small-uncentered", "text": "Small Uncentered" }]
		},
		"medium-centered": {
			"id": "medium-centered",
			"label": "Medium Centered",
			"type": "select",
			"option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "medium-centered", "text": "Medium Centered" },
                { "value": "medium-uncentered", "text": "Medium Uncentered" }
			]
		},
		"large-centered": {
			"id": "large-centered",
			"label": "Large Centered",
			"type": "select",
			"option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "large-centered", "text": "Large Centered" },
                { "value": "large-uncentered", "text": "Large Uncentered" }
			]
		},
		"small-push-pull": {
			"id": "small-push-pull",
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
			"id": "medium-push-pull",
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
			"id": "large-push-pull",
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
			"value": "hide",
			"text": "Hide"
		},
		"collapse": {
			"type": "checkbox",
			"value": "collapse",
			"text": "Collapse"
		},
		"end": {
			"type": "checkbox",
			"value": "end",
			"text": "End"
		},
		"disabled": {
			"type": "checkbox",
			"value": "disabled",
			"text": "Disabled"
		},
		"small-reset-order": {
			"type": "checkbox",
			"value": "small-reset-order",
			"text": "Small Reset Order"
		},
		"medium-reset-order": {
			"type": "checkbox",
			"value": "medium-reset-order",
			"text": "Medium Reset Order"
		},
		"large-reset-order": {
			"type": "checkbox",
			"value": "large-reset-order",
			"text": "Large Reset Order"
		},
		"prefix-radius": {
			"id": "prefix-radius",
			"label": "Prefix Radius",
			"type": "select",
			"option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "prefix-radius", "text": "Radius" },
                { "value": "prefix-round", "text": "Round" },
			]
		},
		"postfix-radius": {
			"id": "postfix-radius",
			"type": "select",
			"label": "Postfix Radius",
			"option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "postfix-radius", "text": "Radius" },
                { "value": "postfix-round", "text": "Round" },
			]
		},
		"small-offset": {
			"id": "small-offset",
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
			"id": "medium-offset",
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
			"id": "large-offset",
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
			"id": "small-1to12",
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
			"id": "medium-1to12",
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
			"id": "large-1to12",
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
			"id": "text",
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
		"size": {
			"id": "size",
			"label": "Size",
			"type": "select",
			"option": [
                { "value": "tiny", "text": "Tiny" },
                { "value": "small", "text": "Small"},
                { "value": "", "text": "Default", "selected": true },
                { "value": "large", "text": "Large" },
                { "value": "expand", "text": "Expand" }
			]
		},
		"radius": {
			"id": "radius",
			"label": "Radius",
			"type": "select",
			"option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "round", "text": "Round" },
                { "value": "radius", "text": "Radius" }
			]
		},
		"color": {
			"id": "color",
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
		"stack": {
			"id": "stack",
			"label": "Stack",
			"type": "select",
			"option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "stack", "text": "Vertically" },
                { "value": "stack-for-small", "text": "Vertically for small" }
			]
		},
		"even-1to8": {
			"id": "even-1to8",
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
})(window.nsr = window.nsr || {});