$(document).ready(function(){
    var methods = {
        aCategory    : [],
        aSubCategory : {},
        get: function()
        {
             $.ajax({
                url : '/exec/front/Product/SubCategory',
                dataType: 'json',
                success: function(aData) {
                    if (aData == null || aData == 'undefined') {
                        methods.checkSub();
                        return;
                    }
                    for (var i=0; i<aData.length; i++)
                    {
                        var sParentCateNo = aData[i].parent_cate_no;
                        if (!methods.aSubCategory[sParentCateNo]) {
                            methods.aSubCategory[sParentCateNo] = [];
                        }
                        methods.aSubCategory[sParentCateNo].push( aData[i] );
                    }
                    methods.checkSub();
                }
            });
        },
        getParam: function(sUrl, sKey) {
            var aUrl         = sUrl.split('?');
            var sQueryString = aUrl[1];
            var aParam       = {};
            if (sQueryString) {
                var aFields = sQueryString.split("&");
                var aField  = [];
                for (var i=0; i<aFields.length; i++) {
                    aField = aFields[i].split('=');
                    aParam[aField[0]] = aField[1];
                }
            }
            return sKey ? aParam[sKey] : aParam;
        },
        
        show: function(overNode, iCateNo) {
            var oParentNode = overNode;
            var aHtml = [];
                        
            if (methods.aSubCategory[iCateNo] != undefined) {
                aHtml.push('<ul class="slideSubMenu">');
                $(methods.aSubCategory[iCateNo]).each(function() {
                    var sName = this.name;
                    var sParam = this.param;
                    var sNextParentNo = this.cate_no;
   
                    if (methods.aSubCategory[sNextParentNo] == undefined) {
                        aHtml.push('<li class="noChild">');
                        var sHref = '/product/list.html'+this.param;
                    } else {
                        aHtml.push('<li>');
                        var sHref = '#none';
                    }
                    aHtml.push(' </a><a href="/'+this.design_page_url+this.param+'" class="view">'+this.name+'</a>');
                            
                    if (methods.aSubCategory[sNextParentNo] != undefined) {
                        aHtml.push('<ul>');
                        $(methods.aSubCategory[sNextParentNo]).each(function() {
                            var sNextParentNo2 = this.cate_no;
                            if (methods.aSubCategory[sNextParentNo2] == undefined) {
                                aHtml.push('<li class="noChild">');
                                var sHref = '/product/list.html'+this.param;
                            } else {
                                aHtml.push('<li>');
                                var sHref = '#none';
                            }
                            aHtml.push(' <a href="/'+this.design_page_url+this.param+'" class="view">'+this.name+'</a>');
    
                            if (methods.aSubCategory[sNextParentNo2] != undefined) {
                                aHtml.push('<ul>');
    
                                $(methods.aSubCategory[sNextParentNo2]).each(function() {
                                    aHtml.push('<li class="noChild">');
                                    aHtml.push(' <a href="/'+this.design_page_url+this.param+'" class="view">'+this.name+'</a>');
                                    aHtml.push('</li>');
                                });
                                aHtml.push('</ul>');
                            }
                            aHtml.push('</li>');
                        });
                        aHtml.push('</ul>');
                    }
                    aHtml.push('</li>');
                });
                aHtml.push('</ul>');
            }
            $(oParentNode).append(aHtml.join(''));
        },
        close: function() {
            $('.slideSubMenu').remove();
        },
        checkSub: function() {
            $('.cate').each(function(){
                var iCateNo = Number(methods.getParam($(this).attr('cate'), 'cate_no'));
                var result = methods.aSubCategory[iCateNo];
                if(result == undefined){
                    $(this).attr('href', '/product/list.html'+$(this).attr('cate'));
                    $(this).parent().attr('class', 'noChild');
                }
            });
        }
    };
    var offCover = {
        init : function() {
            $(function() {
               $('#wrap').append('<a href="#container" id="btnFoldLayout">메뉴 토글</a>');
                offCover.resize();
                $(window).resize(function(){
                    offCover.resize();
                });
            });
        },
        layout : function(){
            if($('html').hasClass('expand')){
                $('#btnFoldLayout').show();
                $('#artfinger_slide').css({'visibility':'visible'});
            } else {
                $('#btnFoldLayout').hide();
                setTimeout(function(){
                     $('#artfinger_slide').css({'visibility':'hidden'});
                    }, 300);
            }
            $('#artfinger_slide').css({'visibility':'visible'});
        },
        resize : function(){
            var height = $('body').height();
            $('#container').css({'min-height':height});
        }
    };
    methods.get();
    
    offCover.init();
    
    
    $('#header .fold').click(function(e){
        $('html').toggleClass('expand');
        offCover.layout();
        e.preventDefault();
    });
     
    $('#btnFoldLayout').click(function(e){
        $('#header .fold').trigger('click');
        e.preventDefault();
    });
   
    $('#slideCateList > li > a.cate').click(function(e) {
        var iCateNo = Number(methods.getParam($(this).attr('cate'), 'cate_no'));
        if ($(this).parent().attr('class') == 'xans-record- selected') {
            methods.close();
        } else {
            if (!iCateNo) return;
            $('#artfinger_slide #slideCateList li').removeClass('selected');
            methods.close();
            methods.show(this.parentNode, iCateNo);
        }
    });
    $('#artfinger_slide ul a.cate').click(function(e){
            $(this).parent().find('li').removeClass('selected');
            $(this).parent().toggleClass('selected');
            if (!$(this).parent('li').hasClass('noChild')){
                e.preventDefault();
            }
    });
    $('#artfinger_slide .tab a').click(function(e){
        $(this).addClass('selected').siblings().removeClass('selected');
        $($(this).attr('href')).show().siblings('ul').hide();
        e.preventDefault();
    });  
});
function subMenuEvent(obj) {
    $(obj).parent().find('li').removeClass('selected');
    $(obj).parent().toggleClass('selected');
}