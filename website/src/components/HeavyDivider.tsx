import Divider from "@mui/material/Divider";


export default function HeavyDivider()
{

    return (
        <Divider sx={{position:"relative", height:"6px", bgcolor:"black", left:{xs:"0%", sm:"0%", md:"0%", lg:"-10%"}, width:"120%", maxWidth:"90vw", boxShadow:"6px 6px 0px #1ab394", my:2}}></Divider>
    )
}