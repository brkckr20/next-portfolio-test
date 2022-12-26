import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

const Fancy = (props) => {
    const delegate = props.delegate || "[data-fancybox]";

    useEffect(() => {
        const opts = props.options || {};

        Fancybox.bind(delegate, opts);

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return <>{props.children}</>;

}
export default Fancy