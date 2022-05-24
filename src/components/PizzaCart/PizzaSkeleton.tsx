import React, {FC} from 'react';
import ContentLoader from "react-content-loader"

export const PizzaSkeleton: FC = (props) => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={465}
            viewBox="0 0 280 465"
            backgroundColor="#ffffff"
            foregroundColor="#eae6e6"
            {...props}
        >
            <circle cx="133" cy="120" r="120" />
            <rect x="0" y="257" rx="5" ry="5" width="280" height="27" />
            <rect x="0" y="296" rx="10" ry="10" width="280" height="88" />
            <rect x="0" y="414" rx="10" ry="10" width="90" height="27" />
            <rect x="125" y="400" rx="30" ry="30" width="153" height="50" />
        </ContentLoader>
    );
};
