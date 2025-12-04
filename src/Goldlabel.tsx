// /Users/goldlabel/GitHub/tefl/package/src/Goldlabel.tsx
'use client';
import * as React from 'react';
// import { TTheme, IDesignSystem, TFeedback } from './types';
// import { ThemeProvider, CssBaseline } from '@mui/material';
// import {
//   useDesignSystem,
//   useMUITheme,
//   setFeedback,
//   setDesignSystemKey,
//   Feedback,
//   PushButton,
//   LoadingOverlay,
//   Footer,
// } from '../DesignSystem';
// import { useDispatch, useSlice } from '../Uberedux';



export default function Goldlabel({
  config,
  children = null,
}: any) {
  // const newtheme = useMUITheme(theme as TTheme);
  // const { feedbackTested } = useDesignSystem();
  // const dispatch = useDispatch();
  // const { version } = useSlice();
  // React.useEffect(() => {
  //   if (!feedbackTested) {
  //     // const feedback: TFeedback = {
  //     //   severity: 'success',
  //     //   title: `v${version} booted OK`,
  //     // };
  //     // dispatch(setFeedback(feedback));
  //     dispatch(setDesignSystemKey('feedbackTested', true));
  //   }
  // }, [dispatch, feedbackTested]);

  return (
          <>
            <h1>Goldlabel</h1>
            <pre>config: {JSON.stringify(config, null, 2)}</pre>
            {children}
          </>
    // <ThemeProvider theme={newtheme}>
    //   <CssBaseline />
    //   <LoadingOverlay />
    //   <Feedback />
    //   {children}
    //   <PushButton />
    //   <Footer />
    // </ThemeProvider>
  );
}
