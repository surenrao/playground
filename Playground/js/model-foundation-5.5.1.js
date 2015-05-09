
(function (nsr, undefined) {

	nsr.swatch = nsr.swatch || {};
	nsr.properties = nsr.properties || {};

	nsr.properties.mapping = {
		".button": ["size-tsle", "color", "radius", "disabled", "hide"],
		".button-group": ["radius", "stack", "even-1to8"],
		"p": ["text"],
		"i": ["icons"],
		".row": ["small-collapse", "medium-collapse", "large-collapse", "prefix-radius", "postfix-radius", "collapse"],
		".columns": ["small-1to12", "medium-1to12", "large-1to12",
            "small-centered", "medium-centered", "large-centered",
            "small-push-pull", "medium-push-pull", "large-push-pull",
            "small-reset-order", "medium-reset-order", "large-reset-order",
            "small-offset", "medium-offset", "large-offset",
            "end"],
		".switch": ["size-tsl", "radius"],
		".range-slider": ["radius", "disabled"],
		".panel": ["callout", "radius"],
		".alert-box": ["color", "radius"],
		".progress": ["color", "radius", "small-1to12", "medium-1to12", "large-1to12"],
		".label": ["color", "radius"],
		".icon-bar": ["up-1to8", "vertical", "vertical-small", "vertical-medium", "vertical-large"],
		".item": ["disabled"],
		"ul": ["ul-dcsni"]
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
            	"template": '<div class="large-12 columns">L12.cols</div>',
            	"parent": ".row"
            },
		],
		"02: Buttons": [
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
		"03: Forms": [
            {
            	"text": "Form Row",
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
            	"text": "Prefix Input",
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
				"text": "Prefix round Input",
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
           {
           	"text": "Postfix Input",
           	"template": '<div class="row collapse">' +
				'    <div class="small-10 columns">' +
				'      <input type="text" placeholder="Hex Value">' +
				'    </div>' +
				'    <div class="small-2 columns">' +
				'      <a href="#" class="button postfix">Go</a>' +
				'    </div>' +
				'  </div>'
           },
           {
           	"text": "Postfix round Input",
           	"template": '<div class="row collapse postfix-round">' +
				'    <div class="large-9 columns">' +
				'      <input type="text" placeholder="Value">' +
				'    </div>' +
				'    <div class="large-3 columns">' +
				'      <a href="#" class="button postfix">Go</a>' +
				'    </div>' +
				'  </div>',
           	"parent": "form .row"
           },
		   {
		   	"text": "Error States",
		   	"template": '<label class="error">Error' +
						'	<input type="text" class="error" />' +
					    '</label>' +
					    '<small class="error">Invalid entry</small>'
		   }
		],
		"04: Switches": [
			{
				"text": "Switch",
				"template": '<div class="switch"><input type="checkbox" id="switch1"><label for="switch1"></label></div>'
			},
		],
		"05: Sliders": [
			{
				"text": "Slider",
				"template": '<div class="range-slider" data-slider>' +
							'<span class="range-slider-handle" role="slider" tabindex="0"></span>' +
							'<span class="range-slider-active-segment"></span>' +
							'<input type="hidden">' +
							'</div>'
			},
			{
				"text": "Vertical Slider",
				"template": '<div class="range-slider vertical-range" data-slider data-options="vertical: true;">' +
							'<span class="range-slider-handle" role="slider" tabindex="0"></span>' +
							'<span class="range-slider-active-segment"></span>' +
							'<input type="hidden">' +
							'</div>'
			},
			{
				"text": "Slider & Label",
				"template": '<div class="row">' +
							'	<div class="small-10 medium-10 large-10 columns">' +
							'		<div class="range-slider" data-slider data-options="display_selector: #sliderOutput3;">' +
							'			<span class="range-slider-handle" role="slider" tabindex="0"></span>' +
							'			<span class="range-slider-active-segment"></span>' +
							'			<input type="hidden">' +
							'		</div>' +
							'	</div>' +
							'	<div class="small-2 medium-2 large-2 columns">' +
							'		<span id="sliderOutput3"></span>' +
							'	</div>' +
							'</div>'
			},
			{//TODO data-options="step: 20;",data-options="start: 1; end: 10;"
				"text": "Slider & Input",
				"template": '<div class="row">' +
							'	<div class="small-10 medium-10 large-10 columns">' +
							'		<div class="range-slider" data-slider data-options="display_selector: #days-off-count; initial: 28;">' +
							'			<span class="range-slider-handle" role="slider" tabindex="0"></span>' +
							'			<span class="range-slider-active-segment"></span>' +
							'			<input type="hidden">' +
							'		</div>' +
							'	</div>' +
							'	<div class="small-2 medium-2 large-2 columns">' +
							'		<input type="number" id="days-off-count" value="28" />' +
							'	</div>' +
							'</div>'
			},
		],
		"06: Panels & Alert": [
			{
				"text": "Panel",
				"template": '<div class="panel"> Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.</div>'
			},
			{
				"text": "Alert",
				"template": '<div data-alert class="alert-box"> Tincidunt integer eu augue augue nunc elit dolor, <a href="#" class="close">&times;</a></div>'
			},
		],
		"07: Content": [
			{
				"text": "Progress Bar",
				"template": '<div class="progress"><span class="meter" style="width: 80%"></span></div>'
			},
			{
				"text": "Pricing Table",
				"template": '<ul class="pricing-table">' +
				'<li class="price">$99.99</li>' +
				'<li class="description">An awesome description</li>' +
				'<li class="bullet-item">1 Database</li>' +
				'<li class="bullet-item">5GB Storage</li>' +
				'<li class="bullet-item">20 Users</li>' +
				'<li class="cta-button"><a class="button" href="#">Buy Now</a></li>' +
				'</ul>'
			}
		],
		"08: Typography": [
			{
				"text": "Label",
				"template": '<span class="label">Regular Label</span>'
			},
			{
				"text": "Unordered List",
				"template": '<ul><li>this is an item</li></ul>'
			},
			{
				"text": "Ordered List",
				"template": '<ol><li>this is an item</li></ol>'
			},
			{
				"text": "List item",
				"template": '<li>this is an item</li>',
				"parent": "ul, ol"
			},
			{
				"text": "Keystrokes",
				"template": '<kbd>Cmd</kbd>',
				"parent": "ul, ol"
			},
			{
				"text": "V-Cards",
				"template": '<ul class="vcard">'+
				  '<li class="fn">Gaius Baltar</li>'+
				  '<li class="street-address">123 Colonial Ave.</li>'+
				  '<li class="locality">Caprica City</li>'+
				  '<li><span class="state">Caprica</span>, <span class="zip">12345</span></li>'+
				  '<li class="email"><a href="#">g.baltar@example.com</a></li>'+
				'</ul>'
			},
			{
				"text": "Blockquotes",
				"template": '<blockquote>Those people who think they know everything are a great annoyance to those of us who do.<cite>Isaac Asimov</cite></blockquote>'
			},
			{
				"text": "Data Defination",
				"template": '<dl>' +
				  '<dt>Definition Title</dt>' +
				  '<dd>Definition Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit.</dd>' +
				'</dl>'
			},
			{
				"text": "Paragraph",
				"template": '<p>This is a paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. This is a <a href="http://www.youtube.com/watch?v=zT2aVoUkSDg">Youtube</a>. To show what a paragraph looks like this needs a little more content so, did you know that there are storms occurring on Jupiter that are larger than the Earth? Pretty cool. Wrap strong around type to <strong>make it bold!</strong>. You can also use em to <em>italicize your words</em>.</p>'
			},
			{
				"text": "Headers",
				"template": '<h1>h1. This is a very large header.</h1>'+
							'<h2>h2. This is a large header.</h2>'+
							'<h3>h3. This is a medium header.</h3>'+
							'<h4>h4. This is a moderate header.</h4>'+
							'<h5>h5. This is a small header.</h5>'+
							'<h6>h6. This is a tiny header.</h6>'
			},
			{
				"text": "Subheaders",
				"template": '<h1 class="subheader">h1. This is a very large header.</h1>' +
							'<h2 class="subheader">h2. This is a large header.</h2>' +
							'<h3 class="subheader">h3. This is a medium header.</h3>' +
							'<h4 class="subheader">h4. This is a moderate header.</h4>' +
							'<h5 class="subheader">h5. This is a small header.</h5>' +
							'<h6 class="subheader">h6. This is a tiny header.</h6>'
			},
			{
				"text": "Small Header",
				"template": '<h1>h1. <small>Small segment header.</small></h1>' +
							'<h2>h2. <small>Small segment header.</small></h2>' +
							'<h3>h3. <small>Small segment header.</small></h3>' +
							'<h4>h4. <small>Small segment header.</small></h4>' +
							'<h5>h5. <small>Small segment header.</small></h5>' +
							'<h6>h6. <small>Small segment header.</small></h6>'
			}
		],
		"09: Navigation": [
			{
				"text": "Icon bar",
				"template": '<div class="icon-bar two-up">' +
				'<a class="item">' +
				'<i class="fi-star"></i>' +
				'<label>Text1</label>' +
				'</a>' +
				'<a class="item">' +
				'<i class="fi-heart"></i>' +
				'<label>Text2</label>' +
				'</a>' +
				'</div>'
			},
			{
				"text": "Icon bar item",
				"template": '<a class="item">' +
				'<i class="fi-star"></i>' +
				'<label>Text</label>' +
				'</a>',
				"parent": ".icon-bar"
			},
			{
				"text": "Side Nav",
				"template": '<ul class="side-nav">' +
				'<li class="heading"><label>Heading 1</label></li>' +
				'<li class="active"><a href="#">Link 1</a></li>' +
				'<li><a href="#">Link 2</a></li>' +
				'<li class="divider"></li>' +
				'<li><a href="#">Link 3</a></li>' +
				'<li><a href="#">Link 4</a></li>' +
				'</ul>' 
			},
			{
				"text": "Sub Nav",
				"template": '<dl class="sub-nav">' +
				'<dt>Filter:</dt>' +
				'<dd class="active"><a href="#">All</a></dd>' +
				'<dd><a href="#">Active</a></dd>' +
				'<dd><a href="#">Pending</a></dd>' +
				'<dd><a href="#">Suspended</a></dd>' +
				'</dl>'
			},
			{
				"text": "Breadcrumbs",
				"template": '<ul class="breadcrumbs">' +
				'<li><a href="#">Link 1</a></li>' +
				'<li><a href="#">Link 2</a></li>' +
				'<li class="unavailable"><a href="#">Link 3</a></li>' +
				'<li class="current"><a href="#">Link 4</a></li>' +
				'</ul>'
			},
			{
				"text": "Pagination",
				"template": '<ul class="pagination">' +
				'<li class="arrow unavailable"><a href="">&laquo;</a></li>' +
				'<li class="current"><a href="#">1</a></li>' +
				'<li><a href="#">2</a></li>' +
				'<li><a href="#">3</a></li>' +
				'<li><a href="#">4</a></li>' +
				'<li class="unavailable"><a href="">&hellip;</a></li>' +
				'<li><a href="#">12</a></li>' +
				'<li><a href="#">13</a></li>' +
				'<li class="arrow"><a href="">&raquo;</a></li>' +
				'</ul>'
			},
			{
				"text": "Pagination Center",
				"template": '<div class="pagination-centered"></div>'
			}
		],
		"10: Media": [
            {
            	"text": "Thumbnail",
            	"template": '<a class="th" role="button" aria-label="Thumbnail" href="#">'+
				  '<img aria-hidden=true src="http://lorempixel.com/100/100/" alt="" />'+ 
				'</a>'
            },
			{
            	"text": "Flex Youtube",
            	"template": '<div class="flex-video">'+ 
						'<iframe width="420" height="315" src="//www.youtube.com/embed/aiBt44rrslw" frameborder="0" allowfullscreen></iframe>'+ 
				'</div>'
            }
			,
			{
				"text": "Flex Youtube",
				"template": '<div class="flex-video widescreen vimeo">' +
						'<iframe src="http://player.vimeo.com/video/60122989" width="400" height="225" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' +
				'</div>'
			}
		],
		
	};
	/*#endregion json*/

	/*#region json*/
	nsr.properties.masterList = {
		"ul-dcsni": {
			"id": "ul-dcsni",
			"label": "UL style",
			"type": "select",
			"option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "disc", "text": "Disc" },
                { "value": "circle", "text": "Circle" },
				{ "value": "square", "text": "Square" },
                { "value": "no-bullet", "text": "No bullet" },
				{ "value": "inline-list", "text": "inline list" },
			]
		},
		"label-rl": {
			"id": "label-rl",
			"label": "Label Right/Left",
			"type": "select",
			"option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "label-right", "text": "Label Right" },
                { "value": "label-left", "text": "Label Left" },
			]
		},
		"small-collapse": {
			"id": "small-collapse",
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
			"label": "Small Push & Pull",
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
			"label": "Medium Push & Pull",
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
			"label": "Large Push & Pull",
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
		"callout": {
			"type": "checkbox",
			"value": "callout",
			"text": "Callout"
		},
		"vertical": {
			"type": "checkbox",
			"value": "vertical",
			"text": "Vertical"
		},
		"vertical-range": {
			"type": "checkbox",
			"value": "vertical-range",
			"text": "Vertical Range"
		},
		"vertical-small": {
			"type": "checkbox",
			"value": "vertical-small",
			"text": "Vertical Small"
		},
		"vertical-medium": {
			"type": "checkbox",
			"value": "vertical-medium",
			"text": "Vertical Medium"
		},
		"vertical-large": {
			"type": "checkbox",
			"value": "vertical-large",
			"text": "Vertical Large"
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
		"small-block-grid-1to12": {
			"id": "small-block-grid-1to12",
			"label": "Small Block Grid",
			"type": "select",
			"option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "small-block-grid-1", "text": "Small Block Grid 1" },
                { "value": "small-block-grid-2", "text": "Small Block Grid 2" },
                { "value": "small-block-grid-3", "text": "Small Block Grid 3" },
                { "value": "small-block-grid-4", "text": "Small Block Grid 4" },
                { "value": "small-block-grid-5", "text": "Small Block Grid 5" },
                { "value": "small-block-grid-6", "text": "Small Block Grid 6" },
                { "value": "small-block-grid-7", "text": "Small Block Grid 7" },
                { "value": "small-block-grid-8", "text": "Small Block Grid 8" },
                { "value": "small-block-grid-9", "text": "Small Block Grid 9" },
                { "value": "small-block-grid-10", "text": "Small Block Grid 10" },
                { "value": "small-block-grid-11", "text": "Small Block Grid 11" },
                { "value": "small-block-grid-12", "text": "Small Block Grid 12" }
			]
		},
		"medium-block-grid-1to12": {
			"id": "medium-block-grid-1to12",
			"label": "Medium Block Grid",
			"type": "select",
			"option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "medium-block-grid-1", "text": "Medium Block Grid 1" },
                { "value": "medium-block-grid-2", "text": "Medium Block Grid 2" },
                { "value": "medium-block-grid-3", "text": "Medium Block Grid 3" },
                { "value": "medium-block-grid-4", "text": "Medium Block Grid 4" },
                { "value": "medium-block-grid-5", "text": "Medium Block Grid 5" },
                { "value": "medium-block-grid-6", "text": "Medium Block Grid 6" },
                { "value": "medium-block-grid-7", "text": "Medium Block Grid 7" },
                { "value": "medium-block-grid-8", "text": "Medium Block Grid 8" },
                { "value": "medium-block-grid-9", "text": "Medium Block Grid 9" },
                { "value": "medium-block-grid-10", "text": "Medium Block Grid 10" },
                { "value": "medium-block-grid-11", "text": "Medium Block Grid 11" },
                { "value": "medium-block-grid-12", "text": "Medium Block Grid 12" }
			]
		},
		"large-block-grid-1to12": {
			"id": "large-block-grid-1to12",
			"label": "Large Block Grid",
			"type": "select",
			"option": [
                { "value": "", "text": "None", "selected": true },
                { "value": "large-block-grid-1", "text": "Large Block Grid 1" },
                { "value": "large-block-grid-2", "text": "Large Block Grid 2" },
                { "value": "large-block-grid-3", "text": "Large Block Grid 3" },
                { "value": "large-block-grid-4", "text": "Large Block Grid 4" },
                { "value": "large-block-grid-5", "text": "Large Block Grid 5" },
                { "value": "large-block-grid-6", "text": "Large Block Grid 6" },
                { "value": "large-block-grid-7", "text": "Large Block Grid 7" },
                { "value": "large-block-grid-8", "text": "Large Block Grid 8" },
                { "value": "large-block-grid-9", "text": "Large Block Grid 9" },
                { "value": "large-block-grid-10", "text": "Large Block Grid 10" },
                { "value": "large-block-grid-11", "text": "Large Block Grid 11" },
                { "value": "large-block-grid-12", "text": "Large Block Grid 12" }
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
		"size-tsle": {
			"id": "size-tsle",
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
		"size-tsl": {
			"id": "size-tsl",
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
		"size-sml": {
			"id": "size-sml",
			"label": "Size",
			"type": "select",
			"option": [
                { "value": "", "text": "Default", "selected": true },
                { "value": "small", "text": "Small" },
                { "value": "medium", "text": "Medium" },
                { "value": "large", "text": "Large" }
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
		"up-1to8": {
			"id": "up-1to8",
			"label": "One to Eight Up",
			"type": "select",
			"option": [
                { "value": "one-up", "text": "One Up", "selected": true },
                { "value": "two-up", "text": "Two Up" },
                { "value": "three-up", "text": "Three Up" },
				{ "value": "four-up", "text": "Four Up" },
				{ "value": "five-up", "text": "Five Up" },
				{ "value": "six-up", "text": "Six Up" },
				{ "value": "seven-up", "text": "Seven Up" },
				{ "value": "eight-up", "text": "Eight Up" }
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
				{ "value": "warning", "text": "Warning" },
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
		},
		"icons": {
			"id": "icons",
			"label": "Icons",
			"type": "select",
			"option": [
				  { "value": "fi-star", "text": " star" }
				, { "value": "fi-plus", "text": " plus" }
				, { "value": "fi-minus", "text": " minus" }
				, { "value": "fi-x", "text": " x" }
				, { "value": "fi-check", "text": " check" }
				, { "value": "fi-upload", "text": " upload" }
				, { "value": "fi-download", "text": " download" }
				, { "value": "fi-widget", "text": " widget" }
				, { "value": "fi-marker", "text": " marker" }
				, { "value": "fi-refresh", "text": " refresh" }
				, { "value": "fi-home", "text": " home" }
				, { "value": "fi-trash", "text": " trash" }
				, { "value": "fi-paperclip", "text": " paperclip" }
				, { "value": "fi-lock", "text": " lock" }
				, { "value": "fi-unlock", "text": " unlock" }
				, { "value": "fi-calendar", "text": " calendar" }
				, { "value": "fi-cloud", "text": " cloud" }
				, { "value": "fi-magnifying-glass", "text": " magnifying-glass" }
				, { "value": "fi-zoom-out", "text": " zoom-out" }
				, { "value": "fi-zoom-in", "text": " zoom-in" }
				, { "value": "fi-wrench", "text": " wrench" }
				, { "value": "fi-rss", "text": " rss" }
				, { "value": "fi-share", "text": " share" }
				, { "value": "fi-flag", "text": " flag" }
				, { "value": "fi-list-thumbnails", "text": " list-thumbnails" }
				, { "value": "fi-list", "text": " list" }
				, { "value": "fi-thumbnails", "text": " thumbnails" }
				, { "value": "fi-annotate", "text": " annotate" }
				, { "value": "fi-folder", "text": " folder" }
				, { "value": "fi-folder-lock", "text": " folder-lock" }
				, { "value": "fi-folder-add", "text": " folder-add" }
				, { "value": "fi-clock", "text": " clock" }
				, { "value": "fi-play-video", "text": " play-video" }
				, { "value": "fi-crop", "text": " crop" }
				, { "value": "fi-archive", "text": " archive" }
				, { "value": "fi-pencil", "text": " pencil" }
				, { "value": "fi-graph-trend", "text": " graph-trend" }
				, { "value": "fi-graph-bar", "text": " graph-bar" }
				, { "value": "fi-graph-horizontal", "text": " graph-horizontal" }
				, { "value": "fi-graph-pie", "text": " graph-pie" }
				, { "value": "fi-checkbox", "text": " checkbox" }
				, { "value": "fi-minus-circle", "text": " minus-circle" }
				, { "value": "fi-x-circle", "text": " x-circle" }
				, { "value": "fi-eye", "text": " eye" }
				, { "value": "fi-database", "text": " database" }
				, { "value": "fi-results", "text": " results" }
				, { "value": "fi-results-demographics", "text": " results-demographics" }
				, { "value": "fi-like", "text": " like" }
				, { "value": "fi-dislike", "text": " dislike" }
				, { "value": "fi-upload-cloud", "text": " upload-cloud" }
				, { "value": "fi-camera", "text": " camera" }
				, { "value": "fi-alert", "text": " alert" }
				, { "value": "fi-bookmark", "text": " bookmark" }
				, { "value": "fi-contrast", "text": " contrast" }
				, { "value": "fi-mail", "text": " mail" }
				, { "value": "fi-video", "text": " video" }
				, { "value": "fi-telephone", "text": " telephone" }
				, { "value": "fi-comment", "text": " comment" }
				, { "value": "fi-comment-video", "text": " comment-video" }
				, { "value": "fi-comment-quotes", "text": " comment-quotes" }
				, { "value": "fi-comment-minus", "text": " comment-minus" }
				, { "value": "fi-comments", "text": " comments" }
				, { "value": "fi-microphone", "text": " microphone" }
				, { "value": "fi-megaphone", "text": " megaphone" }
				, { "value": "fi-sound", "text": " sound" }
				, { "value": "fi-address-book", "text": " address-book" }
				, { "value": "fi-bluetooth", "text": " bluetooth" }
				, { "value": "fi-html5", "text": " html5" }
				, { "value": "fi-css3", "text": " css3" }
				, { "value": "fi-layout", "text": " layout" }
				, { "value": "fi-web", "text": " web" }
				, { "value": "fi-foundation", "text": " foundation" }
				, { "value": "fi-page", "text": " page" }
				, { "value": "fi-page-csv", "text": " page-csv" }
				, { "value": "fi-page-export-csv", "text": " page-doc" }
				, { "value": "fi-page-export-csv", "text": " page-pdf" }
				, { "value": "fi-page-export", "text": " page-export" }
				, { "value": "fi-page-export-csv", "text": " page-export-csv" }
				, { "value": "fi-page-export-doc", "text": " page-export-doc" }
				, { "value": "fi-page-export-pdf", "text": " page-export-pdf" }
				, { "value": "fi-page-add", "text": " page-add" }
				, { "value": "fi-page-remove", "text": " page-remove" }
				, { "value": "fi-page-delete", "text": " page-delete" }
				, { "value": "fi-page-edit", "text": " page-edit" }
				, { "value": "fi-page-search", "text": " page-search" }
				, { "value": "fi-page-copy", "text": " page-copy" }
				, { "value": "fi-page-filled", "text": " page-filled" }
				, { "value": "fi-page-multiple", "text": " page-multiple" }
				, { "value": "fi-arrow-up", "text": " arrow-up" }
				, { "value": "fi-arrow-right", "text": " arrow-right" }
				, { "value": "fi-arrow-down", "text": " arrow-down" }
				, { "value": "fi-arrow-left", "text": " arrow-left" }
				, { "value": "fi-arrows-out", "text": " arrows-out" }
				, { "value": "fi-arrows-in", "text": " arrows-in" }
				, { "value": "fi-arrows-expand", "text": " arrows-expand" }
				, { "value": "fi-arrows-compress", "text": " arrows-compress" }
				, { "value": "fi-torso", "text": " torso" }
				, { "value": "fi-torso-female", "text": " torso-female" }
				, { "value": "fi-torsos", "text": " torsos" }
				, { "value": "fi-torsos-female-male", "text": " torsos-female-male" }
				, { "value": "fi-torsos-male-female", "text": " torsos-male-female" }
				, { "value": "fi-torsos-all", "text": " torsos-all" }
				, { "value": "fi-torsos-all-female", "text": " torsos-all-female" }
				, { "value": "fi-torso-business", "text": " torso-business" }
				, { "value": "fi-monitor", "text": " monitor" }
				, { "value": "fi-laptop", "text": " laptop" }
				, { "value": "fi-tablet-portrait", "text": " tablet-portrait" }
				, { "value": "fi-tablet-landscape", "text": " tablet-landscape" }
				, { "value": "fi-mobile", "text": " mobile" }
				, { "value": "fi-mobile-signal", "text": " mobile-signal" }
				, { "value": "fi-usb", "text": " usb" }
				, { "value": "fi-bold", "text": " bold" }
				, { "value": "fi-italic", "text": " italic" }
				, { "value": "fi-underline", "text": " underline" }
				, { "value": "fi-strikethrough", "text": " strike" }
				, { "value": "fi-text-color", "text": " text-color" }
				, { "value": "fi-background-color", "text": " background-color" }
				, { "value": "fi-superscript", "text": " superscript" }
				, { "value": "fi-subscript", "text": " subscript" }
				, { "value": "fi-align-left", "text": " align-left" }
				, { "value": "fi-align-center", "text": " align-center" }
				, { "value": "fi-align-right", "text": " align-right" }
				, { "value": "fi-align-justify", "text": " align-justify" }
				, { "value": "fi-list-number", "text": " list-numbered" }
				, { "value": "fi-list-bullet", "text": " list-bullet" }
				, { "value": "fi-indent-more", "text": " indent-more" }
				, { "value": "fi-indent-less", "text": " indent-less" }
				, { "value": "fi-print", "text": " print" }
				, { "value": "fi-save", "text": " save" }
				, { "value": "fi-photo", "text": " photo" }
				, { "value": "fi-filter", "text": " filter" }
				, { "value": "fi-paint-bucket", "text": " paint-bucket" }
				, { "value": "fi-link", "text": " link" }
				, { "value": "fi-unlink", "text": " unlink" }
				, { "value": "fi-quote", "text": " quote" }
				, { "value": "fi-play", "text": " play" }
				, { "value": "fi-stop", "text": " stop" }
				, { "value": "fi-pause", "text": " pause" }
				, { "value": "fi-previous", "text": " previous" }
				, { "value": "fi-rewind", "text": " rewind" }
				, { "value": "fi-fast-forward", "text": " fast-forward" }
				, { "value": "fi-next", "text": " next" }
				, { "value": "fi-record", "text": " record" }
				, { "value": "fi-play-circle", "text": " play-circle" }
				, { "value": "fi-volume-none", "text": " volume-none" }
				, { "value": "fi-volume", "text": " volume" }
				, { "value": "fi-volume-strike", "text": " volume-strike" }
				, { "value": "fi-loop", "text": " loop" }
				, { "value": "fi-shuffle", "text": " shuffle" }
				, { "value": "fi-eject", "text": " eject" }
				, { "value": "fi-rewind-ten", "text": " rewind-ten" }
				, { "value": "fi-dollar", "text": " dollar" }
				, { "value": "fi-euro", "text": " euro" }
				, { "value": "fi-pound", "text": " pound" }
				, { "value": "fi-yen", "text": " yen" }
				, { "value": "fi-bitcoin", "text": " bitcoin" }
				, { "value": "fi-bitcoin-circle", "text": " bitcoin-circle" }
				, { "value": "fi-credit-card", "text": " credit-card" }
				, { "value": "fi-shopping-cart", "text": " shopping-cart" }
				, { "value": "fi-burst", "text": " burst" }
				, { "value": "fi-burst-new", "text": " burst-new" }
				, { "value": "fi-burst-sale", "text": " burst-sale" }
				, { "value": "fi-paypal", "text": " paypal" }
				, { "value": "fi-price-tag", "text": " price-tag" }
				, { "value": "fi-pricetag-multiple", "text": " pricetag-multiple" }
				, { "value": "fi-shopping-bag", "text": " shopping-bag" }
				, { "value": "fi-dollar-bill", "text": " dollar-bill" }
				, { "value": "fi-wheelchair", "text": " wheelchair" }
				, { "value": "fi-braille", "text": " braille" }
				, { "value": "fi-closed-caption", "text": " closed-caption" }
				, { "value": "fi-blind", "text": " blind" }
				, { "value": "fi-asl", "text": " asl" }
				, { "value": "fi-hearing-aid", "text": " hearing-aid" }
				, { "value": "fi-guide-dog", "text": " guide-dog" }
				, { "value": "fi-universal-access", "text": " universal-access" }
				, { "value": "fi-telephone-accessible", "text": " telephone-accessible" }
				, { "value": "fi-elevator", "text": " elevator" }
				, { "value": "fi-male", "text": " male" }
				, { "value": "fi-female", "text": " female" }
				, { "value": "fi-male-female", "text": " male-female" }
				, { "value": "fi-male-symbol", "text": " male-symbol" }
				, { "value": "fi-female-symbol", "text": " female-symbol" }
				, { "value": "fi-social-500px", "text": " social-500px" }
				, { "value": "fi-social-adobe", "text": " social-adobe" }
				, { "value": "fi-social-amazon", "text": " social-amazon" }
				, { "value": "fi-social-android", "text": " social-android" }
				, { "value": "fi-social-apple", "text": " social-apple" }
				, { "value": "fi-social-behance", "text": " social-behance" }
				, { "value": "fi-social-bing", "text": " social-bing" }
				, { "value": "fi-social-blogger", "text": " social-blogger" }
				, { "value": "fi-social-delicious", "text": " social-delicious" }
				, { "value": "fi-social-designer-news", "text": " social-designer-news" }
				, { "value": "fi-social-deviant-art", "text": " social-deviant-art" }
				, { "value": "fi-social-digg", "text": " social-digg" }
				, { "value": "fi-social-dribbble", "text": " social-dribbble" }
				, { "value": "fi-social-drive", "text": " social-drive" }
				, { "value": "fi-social-dropbox", "text": " social-dropbox" }
				, { "value": "fi-social-evernote", "text": " social-evernote" }
				, { "value": "fi-social-facebook", "text": " social-facebook" }
				, { "value": "fi-social-flickr", "text": " social-flickr" }
				, { "value": "fi-social-forrst", "text": " social-forrst" }
				, { "value": "fi-social-foursquare", "text": " social-foursquare" }
				, { "value": "fi-social-game-center", "text": " social-game-center" }
				, { "value": "fi-social-github", "text": " social-github" }
				, { "value": "fi-social-google-plus", "text": " social-google-plus" }
				, { "value": "fi-social-hacker-news", "text": " social-hacker-news" }
				, { "value": "fi-social-hi5", "text": " social-hi5" }
				, { "value": "fi-social-instagram", "text": " social-instagram" }
				, { "value": "fi-social-joomla", "text": " social-joomla" }
				, { "value": "fi-social-lastfm", "text": " social-lastfm" }
				, { "value": "fi-social-linkedin", "text": " social-linkedin" }
				, { "value": "fi-social-medium", "text": " social-medium" }
				, { "value": "fi-social-myspace", "text": " social-myspace" }
				, { "value": "fi-social-orkut", "text": " social-orkut" }
				, { "value": "fi-social-path", "text": " social-path" }
				, { "value": "fi-social-picasa", "text": " social-picasa" }
				, { "value": "fi-social-pinterest", "text": " social-pinterest" }
				, { "value": "fi-social-rdio", "text": " social-rdio" }
				, { "value": "fi-social-reddit", "text": " social-reddit" }
				, { "value": "fi-social-skype", "text": " social-skype" }
				, { "value": "fi-social-skillshare", "text": " social-skillshare" }
				, { "value": "fi-social-smashing-mag", "text": " social-smashing-mag" }
				, { "value": "fi-social-snapchat", "text": " social-snapchat" }
				, { "value": "fi-social-spotify", "text": " social-spotify" }
				, { "value": "fi-social-squidoo", "text": " social-squidoo" }
				, { "value": "fi-social-stack-overflow", "text": " social-stack-overflow" }
				, { "value": "fi-social-steam", "text": " social-steam" }
				, { "value": "fi-social-stumbleupon", "text": " social-stumbleupon" }
				, { "value": "fi-social-treehouse", "text": " social-treehouse" }
				, { "value": "fi-social-tumblr", "text": " social-tumblr" }
				, { "value": "fi-social-twitter", "text": " social-twitter" }
				, { "value": "fi-social-vimeo", "text": " social-vimeo" }
				, { "value": "fi-social-windows", "text": " social-windows" }
				, { "value": "fi-social-xbox-20", "text": " social-xbox" }
				, { "value": "fi-social-yahoo", "text": " social-yahoo" }
				, { "value": "fi-social-yelp", "text": " social-yelp" }
				, { "value": "fi-social-youtube", "text": " social-youtube" }
				, { "value": "fi-social-zerply", "text": " social-zerply" }
				, { "value": "fi-social-zurb", "text": " social-zurb" }
				, { "value": "fi-compass", "text": " compass" }
				, { "value": "fi-music", "text": " music" }
				, { "value": "fi-lightbulb", "text": " lightbulb" }
				, { "value": "fi-battery-full", "text": " battery-full" }
				, { "value": "fi-battery-half", "text": " battery-half" }
				, { "value": "fi-battery-empty", "text": " battery-empty" }
				, { "value": "fi-projection-screen", "text": " projection-screen" }
				, { "value": "fi-info", "text": " info" }
				, { "value": "fi-power", "text": " power" }
				, { "value": "fi-asterisk", "text": " asterisk" }
				, { "value": "fi-at-sign", "text": " at-sign" }
				, { "value": "fi-key", "text": " key" }
				, { "value": "fi-ticket", "text": " ticket" }
				, { "value": "fi-book", "text": " book" }
				, { "value": "fi-book-bookmark", "text": " book-bookmark" }
				, { "value": "fi-anchor", "text": " anchor" }
				, { "value": "fi-puzzle", "text": " puzzle" }
				, { "value": "fi-foot", "text": " foot" }
				, { "value": "fi-paw", "text": " paw" }
				, { "value": "fi-mountains", "text": " mountains" }
				, { "value": "fi-trees", "text": " trees" }
				, { "value": "fi-sheriff-badge", "text": " sheriff-badge" }
				, { "value": "fi-first-aid", "text": " first-aid" }
				, { "value": "fi-trophy", "text": " trophy" }
				, { "value": "fi-prohibited", "text": " prohibited" }
				, { "value": "fi-no-dogs", "text": " no-dogs" }
				, { "value": "fi-no-smoking", "text": " no-smoking" }
				, { "value": "fi-safety-cone", "text": " safety-cone" }
				, { "value": "fi-shield", "text": " shield" }
				, { "value": "fi-crown", "text": " crown" }
				, { "value": "fi-target", "text": " target" }
				, { "value": "fi-target-two", "text": " target-two" }
				, { "value": "fi-die-one", "text": " die-one" }
				, { "value": "fi-die-two", "text": " die-two" }
				, { "value": "fi-die-three", "text": " die-three" }
				, { "value": "fi-die-four", "text": " die-four" }
				, { "value": "fi-die-five", "text": " die-five" }
				, { "value": "fi-die-six", "text": " die-six" }
				, { "value": "fi-skull", "text": " skull" }
				, { "value": "fi-map", "text": " map" }
				, { "value": "fi-clipboard", "text": " clipboard" }
				, { "value": "fi-clipboard-pencil", "text": " clipboard-pencil" }
				, { "value": "fi-clipboard-notes", "text": " clipboard-notes" }
				, { "value": "fi-heart style3", "text": null }
				, { "value": "fi-compass style5", "text": null }
				, { "value": "fi-social-zurb style1", "text": null }
				, { "value": "fi-cloud style2", "text": null }
				, { "value": "fi-clipboard-notes style4", "text": null }
			]
		},
	};

	//$('i:not(.large,.medium,.small)').each(function () {
	//	var cls = $(this).attr('class');
	//	var sibling = this.nextSibling;
	//	console.log('{ "value": "' + cls + '", "text":', sibling , ' }');
	//});
	/*#endregion*/
})(window.nsr = window.nsr || {});
