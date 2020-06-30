import * as React from "react";
import { Drawer, ANCHOR } from "baseui/drawer";
import Menu from "../Menu";

    export default ({open, handler}) => {

       /*React.useEffect(() => {
            setIsOpen(open);
        });*/
        
    //const [isOpen, setIsOpen] = React.useState(open);
    
    return (
        <Drawer
        isOpen={open}
        autoFocus
        onClose={handler}
        anchor={ANCHOR.left}
        >
        <div>
            <Menu/>

        </div>
        </Drawer>
    );
}