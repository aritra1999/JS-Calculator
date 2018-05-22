function factorial(x)
{
    if(x==0)
        return 1;
    else
        return x*factorial(x-1);
};
function gcd(x,y)
{
	while(y>0)
	{
		x%=y;
		x^=y;
		y^=x;
		x^=y;
	}
	return(x);
}
var prog=0;
var i=2;
var y=0;
var a=0;
var j=0;
var z1=document.getElementById("trig1");
var z2=document.getElementById("trig2");
var z3=document.getElementById("trig3");
function inverse()
{
    var x=document.getElementById("b4");
    if(i%2==0)
    {
        x.style.backgroundColor="#FFA500";
        i++;
        y=1;
        z1.value="arcsin ";
        z2.value="arccos ";
        z3.value="arctan ";
    }
    else
    {
        x.style.backgroundColor="#DCDCDC";
        i--;
        y=0;
        z1.value="   sin    ";
        z2.value="   cos   ";
        z3.value="    tan   ";
    }
};
function deg1()
{
    var x1=document.getElementById("deg");
    var x2=document.getElementById("rad");
    x1.style.backgroundColor="#4682B4";//degree mode
    x2.style.backgroundColor="#DCDCDC";
    j=0;
};
function rad1()
{
    var x1=document.getElementById("deg");
    var x2=document.getElementById("rad");
    x2.style.backgroundColor="#4682B4";//radian mode
    x1.style.backgroundColor="#DCDCDC";
    j=1;
};
function sinh1(x)
{
    var x1=x;
    var y1;
    {
        if(j==0)
        {
            y1=(Math.exp(x1)-Math.exp(-x1))*0.5;
            return(y1);
        }
        else
        {
            y1=(Math.exp(x1)-Math.exp(-x1))*0.5;
            return(y1);
        }
    }
};
function cosh1(x)
{
    var x1=x;
    var y1;
    {
        if(j==0)
        {
            y1=(Math.exp(x1)+Math.exp(-x1))*0.5;
            return(y1);
        }
        else
        {
            y1=(Math.exp(x1)+Math.exp(-x1))*0.5;
            return(y1);
        }
    }
};
function tanh1(x)
{
    var x1=x;
    var y1;
    {
        if(j==0)
        {
            y1=sinh1(x1)/cosh1(x1);
            return(y1);
        }
        else
        {
            y1=sinh1(x1)/cosh1(x1);
            return(y1);
        }
    }
};
function sin1(x)
{
    var x1=x;
    var y1;
    if(y==0)
    {
        if(j==0)
        {
            x1=(x1*Math.PI)/180;
            y1=Math.sin(x1);
            return(y1);
        }
        else
        {
            y1=Math.sin(x1);
            return(y1);
        }
    }
    else
    {
        if(1>=x1 && -1<=x1)
        {
            if(j==0)
            {
                y1=((Math.asin(x1))*180)/(Math.PI);
                return(y1);
            }
            else
            {
                y1=Math.asin(x1);
                return(y1);
            }
        }
    }
};
function cos1(x)
{
    var x1=x;
    var y1;
    if(y==0)
    {
        if(j==0)
        {
            x1=(x1*Math.PI)/180;
            y1=Math.cos(x1);
            return(y1);
        }
        else
        {
            y1=Math.cos(x1);
            return(y1);
        }
    }
    else
    {
        if(1>=x1 && -1<=x1)
        {
            if(j==0)
            {
                y1=((Math.acos(x1))*180)/(Math.PI);
                return(y1);
            }
            else
            {
                y1=Math.acos(x1);
                return(y1);
            }
        }
    }
};
function tan1(x)
{
    var x1=x;
    var y1;
    if(y==0)
    {
        if(j==0)
        {
            x1=(x1*Math.PI)/180;
            y1=Math.tan(x1);
            return(y1);
        }
        else
        {
            y1=Math.tan(x1);
            return(y1);
        }
    }
    else
    {
        if(j==0)
        {
            y1=((Math.atan(x1))*180)/(Math.PI);
            return(y1);
        }
        else
        {
            y1=Math.atan(x1);
            return(y1);
        }
    }
};
function calculate(x)
{
    var x1=x;
    var y4=x1.indexOf("^");
    var c1=x1.indexOf("C");
    var c11=x1.indexOf("P");
    if(y4 >= 0)
    {
        var y5=parseFloat(eval(x1.slice(0,(y4))));
        var y6=parseFloat(eval(x1.slice((y4+1),(x1.length))));
        var y7=Math.pow(y5,y6);
        return(y7);
    }
    if(c1>0)	//nCr
    {
        var c2=parseInt(x1.slice(0,c1));
        var c3=parseInt(x1.slice((c1+1),(x1.length)));
       	var c4=Math.max(c3,(c2-c3));
       	var c5=Math.min(c3,(c2-c3));
       	var c6=1,c7;
       	for(var i=c2;i>c4;i--)
       	{
       		c6=c6*i;
       		while(c6%c5==0 && c5>1)
       		{
       			c6=c6/c5;
       			c5--;
       		}
       	}
        return(c6);
    }
    if(c11>0)	//nPr
    {
        var c2=parseInt(x1.slice(0,c11));
        var c3=parseInt(x1.slice((c11+1),(x1.length)));
        var i,c5=1;
        for(i=c2;i>(c2-c3);i--)
        	c5=c5*i;
        return(c5);
    }
    else
    {
        var y2=1;
        var y3;
        y3=eval(x);
        if(y2==1)
        {
            a=y3;
            y2=0;
        }
        return(y3);
    }
};
function hex(x)
{
    var y1=parseInt(eval(x)).toString(16).toUpperCase();
    prog=1;
    return(y1);
}
function oct(x)
{
    var y1=parseInt(eval(x)).toString(8);
    prog=2;
    return(y1);
}
function bin(x)
{
    var y1=parseInt(eval(x)).toString(2);
    prog=3;
    return(y1);
}
function dec(x)
{
    var y1;
    if(prog==0)
        y1=eval(x);
    if(prog==1)
        y1=parseInt(x,16);
    if(prog==2)
        y1=parseInt(x,8);
    if(prog==3)
        y1=parseInt(x,2);
    prog=0;
    return(y1);
}
var strans;
function getans()
{
    var xans=document.getElementById("screen").value;
    strans=xans;
}
function printans()
{
    return strans;
}
function quad(x)
{
    var x1=x;
    var c1=x1.indexOf(".");
    var c2=x1.lastIndexOf(".");
    var c3=parseFloat(x1.slice(0,c1));
    var c4=parseFloat(x1.slice((c1+1),c2));
    var c5=parseFloat(x1.slice((c2+1),x1.length));
    var c6=0.5*(-c4+Math.sqrt(c4*c4-4*c3*c5));
    var c7=0.5*(-c4-Math.sqrt(c4*c4-4*c3*c5));
    c6=c6.toFixed(6);
    c7=c7.toFixed(6);
    var c8=c6+" , "+c7;
    return (c8);
}
var flen=20;
var req=false;
var f1=0;
function resize()
{
    var s=document.getElementById("screen");
    var len=s.value.length;
    var sz=window.getComputedStyle(s,null).getPropertyValue('font-size');
    sz=parseFloat(sz);
    if(len>=flen)
    {
        s.style.fontSize= (sz/2)+"px";
        req=true;
        flen*=2;
        f1++;
    }
}
function restore()
{
    var s=document.getElementById("screen");
    var sz=window.getComputedStyle(s,null).getPropertyValue('font-size');
    sz=parseFloat(sz);
    if(req)
    {
        s.style.fontSize=(sz*(1<<f1))+"px";
        flen=20;
        f1=0;
        req=false;
    }
}
function cresize()
{
    var s=document.getElementById("screen");
    var sz=window.getComputedStyle(s,null).getPropertyValue('font-size');
    sz=parseFloat(sz);
    var len=s.value.length;
    if(len<flen/2 && flen>20 && f1>0)
    {
        s.style.fontSize=(sz*(2))+"px";
        f1--;
        flen=flen/2;
    }
}