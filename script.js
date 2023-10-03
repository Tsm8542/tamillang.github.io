function create_option(option_value,inner_html,start,limit){
    let x ="";
    for(let i=start;i<limit+1;i++){
        let a = '<option value="'+String(option_value+i)+'">'+inner_html+i+'</option>';
        x += a;
    }
    return x;
}
function create_pr(std,limit){
    let x="";
    let m = 1;
    let n=30;
    for(let i=1;i<limit+1;i++){
        let mn = m+'-'+n;
        let a = '<option value="std_'+std+'_pr_'+mn+'">'+mn+'</option>';
        x+=a;
        m+=30;n+=30;
    }
    x+='<option value="all'+std+'">All</option>';
    return x;
}
function s(){
    var a = document.querySelector("#genre").value;
    var m = document.querySelector("#standard");
    switch(a){
        case 'balbharti':
            m.innerHTML = create_option("std","Std ",1,7);
            break;
        case 'download':
            tg("false");
            break;
        default:
            m.innerHTML = create_option("std","Std ",1,7);
            break;
    }
    x();
}
function x(){
    var s = document.querySelector("#standard").value;
    var t = document.querySelector("#page_range");
    if(document.querySelector("#genre").value=="balbharti"){
        switch(s){
            case 'std1':
                t.innerHTML = create_pr(1,3);
                break;
            case 'std2':
                t.innerHTML = create_pr(2,3);
                break;
            case 'std3':
                t.innerHTML = create_pr(3,4);
                break;
            case 'std4':
                t.innerHTML = create_pr(4,4);
                break;
            case 'std5':
                t.innerHTML = create_pr(5,4);
                break;
            case 'std6':
                t.innerHTML = create_pr(6,4);
                break;
            case 'std7':
                t.innerHTML = create_pr(7,4);
                break;
            default:
                t.innerHTML = create_pr(1,3);
                break;
        }
        z();
    }
}

function z(){
    var n = document.querySelector("#page_range").value;
    var y = document.querySelector("#frame");
    let genre = document.querySelector("#genre").value;
    if(genre=="balbharti")genre="Balbharti Tamil";
    let m="";
    for(let i=0;i<n.length;i++){
        if(n[i]=='p'){
            for(let z=i;z<n.length;z++){
                m+=n[z];
            }
            break;
        }
        else if(n[i]=='a'){
            m="main";
            break;
        }
    }
    let x = document.querySelector("#standard").value;
    let std ="";
    for(let i=3;i<x.length;i++){
        std += x[i];
    }
    y.src = genre+' Std '+std+'/'+m+'.html';
}

function tg(v){
    if(v=="true"){
        document.querySelector("#standard").style.display="inline-block";
        document.querySelector("#page_range").style.display="inline-block";
        document.querySelector("#frame").style.display="block"
    }
    else{
        document.querySelector("#frame").style.display="none";
        document.querySelector(".download").style.display="block";
        document.querySelector("#standard").style.display="none";
        document.querySelector("#page_range").style.display="none";
    }
}
