jQuery(function(i){var e=window.parent.document.getElementById("bodyBgColorInput").value;(void 0==e||6!=e.length)&&(e="FFFFFF"),i("ul.dividers").css("backgroundColor","#"+e),i(document).on("click",".dividers a",function(){i(".dividers a").removeClass("selected"),i(this).addClass("selected");var e=i(this).children(":first");return i("#divider_src").val(e.attr("src")),i("#divider_width").val(e.attr("width")),i("#divider_height").val(e.attr("height")),!1}),i("#dividers-submit").click(function(){return wysijaAJAX.task="set_divider",wysijaAJAX.id=i("#email_id").val(),wysijaAJAX.wysijaData={src:i("#divider_src").val(),width:i("#divider_width").val(),height:i("#divider_height").val()},i.ajax({type:"POST",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(i){i.result!==!1&&(window.parent.Wysija.setDivider(Base64.decode(i.result),wysijaAJAX.wysijaData),window.parent.Wysija.replaceDividers(),window.parent.Wysija.init(),window.parent.Wysija.autoSave(),window.parent.WysijaPopup.close())}}),!1})});