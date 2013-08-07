(function(JF){
    JF = JF||{};
    var html = '';
    JF.setting = {
        tab_width:20,
        key_color:"#999",
        value_color:"black",
        bracket_color:"green"
    };
    JF.set_opts = function(opts){
        for(var prop in opts){
            if(opts.hasOwnProperty(prop)){
                JF.setting[prop] = opts[prop];
            }
        }
        this.setting = opts; 
        return this;
    },
    JF.format = function(obj){
        var html = "";
        if(obj instanceof Array){
            html += '<b style="color:'+JF.setting.bracket_color+'">[</b>';
            for(var i=0;i<obj.length;i++){
                html += '<div style="margin-left:'+JF.setting.tab_width+'px">'+JF.format(obj[i]);
                if(i!=obj.length-1){
                    html += ',';
                }
                html += '</div>';
            }
            html += '<b style="color:'+JF.setting.bracket_color+'">]</b>';
        }else if(obj instanceof Object){
            html += '<b style="color:'+JF.setting.bracket_color+'">{</b>';
            for(var prop in obj){
                if(obj.hasOwnProperty(prop)){
                    html += '<div style="margin-left:'+JF.setting.tab_width+'px"><span style="color:'
                    +JF.setting.key_color+'">'+prop+":</span>"
                    +'<span style="color:'+JF.setting.value_color+'">'+JF.format(obj[prop])+'</span>,</div>';
                }
            }
            html = html.substring(0,html.length-7)+html.substring(html.length-6);
            html += '<b style="color:'+JF.setting.bracket_color+'">}</b>';
        }else{
            html =  obj;
        }
        return html;
    }
    window.JSONFormatter = JF;
})();