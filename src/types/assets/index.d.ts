declare module "\*.svg" {
    import React = require("react");
    const ReactComponent: React.FC<React.SVGProps<SVGElement> & React.HTMLAttributes<SVGElement>>;

    export { ReactComponent };
    const content: string;
    export default content;
}
declare module "\*.jpg" {
    const content: string;
    export default content;
}

declare module "\*.png" {
    const content: string;
    export default content;
}

declare module "\*.json" {
    const content: string;
    export default content;
}
