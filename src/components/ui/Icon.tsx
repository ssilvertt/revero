import React, { Suspense } from 'react';

export const Icon = ({ name, ...props }: { name: string }) => {
    const IconComponent = React.lazy(() => import(`../../assets/icons/${name}.svg`));

    return (
        <Suspense fallback={<div></div>}>
            <IconComponent {...props} />
        </Suspense>
    );
};
