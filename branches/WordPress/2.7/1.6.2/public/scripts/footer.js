jQuery(document).ready( function(){wpi.toggle = function(elm){$(elm).animate({"height":"toggle","opacity":"toggle"},{duration:550});};wpi.htoggle = function(elm){$(elm).animate({"width":"toggle","opacity":"toggle"},{duration:550});};$('.title-').click(function(){wpi.toggle($(this).next());});$('.widget-title').click(function(){wpi.toggle($(this).next());});$('a.hreviewer-microid').click(function(){wpi.toggle(this.hash);return false;});if($('#archives').length > 0){ $('#archives .widget-content ul').addClass('select-odd');};$('input.on-click-select').click(function(){this.select();});$('.ttip').tooltip({track: true,delay: 0,showURL: false,showBody:" | ", fade:150});$("a[rel^='external']").tooltip({track: true,delay: 0,showURL: true,showBody:" | ", fade:150});$('.htitle-').click(function(){wpi.htoggle($(this).next());});$('.show-slow').click(function(){$(this).next().show("slow");$(this).hide("fast")});wpi.ftsize=function(e,s){$(e).click(function(){$(this.hash).css({fontSize:s});return false;})};wpi.ftsize('#font',"1.4em");wpi.ftsize('#font-',"1em");$('.entry-content .toggle-content').each(function(){if (!$(this).hasClass("expand")){ $($(this).next()).css({paddingLeft:"13px"}).hide();} else {	$($(this).next()).css({paddingLeft:"13px"});}});$('.entry-content .toggle-content').click(function(){wpi.toggle($(this).next());$(this).toggleClass("expand");});
});