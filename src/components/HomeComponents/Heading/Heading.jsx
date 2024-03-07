import {Root,CustomTypography} from './heading.style.js';

export default function Heading({ children, variant, margin, ...props }) {
  return (
    <Root sx={{margin:`0 ${margin}px`}} >
      <CustomTypography
        variant={variant}
        {...props}
      >
        {children}
      </CustomTypography>
    </Root>
  );
}

// sx={{margin:`0 ${margin}px`}} 
