function tools_loadTemplates (position, tpl, js, css) {
	if (position != "") {
		if (tpl != "") {
			$(position).load(tpl);
		}
	};
	
	if (js != "") {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = js;
		$(position).append(script)
	};
	
	if (css != "") {
		var tag = "<link rel=\"stylesheet\" type=\"text/css\" href=" + css + ">";
		$("head").append(tag)
	};
};