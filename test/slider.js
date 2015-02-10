define(['language','widget','messageCenter'], function(language,widget,mc) {

    function WidgetA() {
        widget.apply(this, arguments);
    }


    WidgetA.prototype.initialize = function() {
    };
    
    WidgetA.prototype.renderUI = function() {
        var me = this;
        //TODO 此处需要任彬写的mc来处理
        //或者改造handler中的event处理模式
        me.on('loadData',function(){
            console.log(new Date().getTime());
        });

        mc.on(this,'hasData',function(source,data){
            console.log(source.getId()+' is '+data.isfire);
        });
    };
    WidgetA.prototype.bindUI = function() {

    };

    WidgetA.prototype.syncUI = function() {

    };
    WidgetA.prototype.destructor = function() {

    };

    WidgetA.ATTRS = {
        name:{
            value:"foo"
        },
        title:{
            value:"bar"
        },
        id:{
            value:"123"
        }
    }


    return language.core.extend(WidgetA, widget);

});