'use client';

import Lottie from 'lottie-react';
import React from 'react';
import designLoader from '../../public/animations/Lottie-loader.json';

export default function Loader() {
	return <Lottie animationData={designLoader} loop={true} />;
}
