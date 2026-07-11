/**
 * Title Component
 * A title component that uses the render props pattern to render elements, usually in the form of h1, h2, h3, etc.

 * @param { () => React.ReactNode } render - The content [mandatory] to be rendered.
*/

import React from 'react';

export interface ITitleProps {
	render: () => React.ReactNode;
}

export const Title: React.FC<ITitleProps> = ({
	render,
}) => render();

export default Title;
