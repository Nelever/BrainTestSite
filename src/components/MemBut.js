import React from 'react'
const MemBut=(props)=>{
    
    var a;
    function spr()
    {
        for(let i=0;i<props.los.length;i++)
        {
            if(props.los[i]===props.num)
            {
                return i+1;
            }
        }
        return 0;
    }
    function klik()
    {
        if(spr()===0)
        {return 0;}
        if(spr()===props.stanek)
        {props.wat(spr()+1);}
        else
        {props.wat(false);}
    }
    if(props.stanek===spr()+1&&spr()!==0)
    {
        a={background: "hsl(125, 67%, 44%)"}
    }
    if(props.stanek<spr()+1&&spr()!==0&&props.stanek!==1)
    {
        a={color: "hsl(209, 61%, 16%)"}
    }

    return <button style={a} onClick={klik} className={"bt"+spr()}>{spr()}</button>
}
export default MemBut ;