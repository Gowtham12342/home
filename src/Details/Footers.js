import React from 'react';

function Footers({listAddItems}) {
    return (
        <div style={{ position : "fixed",bottom : "0",height:"5%",backgroundColor : "#0975df",color:"white",textAlign:"center",width:"27%"}}> 
            {listAddItems}
        </div>
    );
}

export default Footers;