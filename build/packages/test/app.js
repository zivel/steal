steal.packages('steal/build/packages/test/table_scroll.js',
               'mxui/nav/accordion/accordion.js')
	.then('jquery/controller/route',
		'jquery/view/ejs','./app.css')
	.then('./ejs.ejs', function(){

$.Controller('Route', {
	"table route" : function(){
		steal('steal/build/packages/test/table_scroll.js', function(){
			$('#table').mxui_layout_table_scroll()
		})
	},
	"accordion route" : function(){
		steal('mxui/nav/accordion', function(){
			$('#accordion').mxui_nav_accordion()
		})
	}
})
new Route(document.body);
		
		
});
	
