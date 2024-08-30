import React, { Suspense } from 'react';

export const Icon = ({ name, ...props }) => {
	const IconComponent = React.lazy(() => import((`../../assets/icons/${name}.svg`)));
	
	return (
		<Suspense fallback={<div></div>}>
			<IconComponent {...props} />
		</Suspense>
	);
};