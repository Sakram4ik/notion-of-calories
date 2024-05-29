import React from 'react';
import Svg, { Path, Rect, Defs, Pattern, Use, Image } from 'react-native-svg';

const WaterWaves = () => (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
<Rect width="22" height="22" fill="url(#pattern0_83_16)"/>
<Defs>
<Pattern id="pattern0_83_16" patternContentUnits="objectBoundingBox" width="1" height="1">
<Use xlinkHref="#image0_83_16" transform="scale(0.00666667)"/>
</Pattern>
<Image id="image0_83_16" width="150" height="150" xlinkHref="data:image/png;base64,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"/>
</Defs>
</Svg>
);
 export default WaterWaves