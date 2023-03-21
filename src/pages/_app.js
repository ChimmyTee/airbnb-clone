import '@/styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: "z-50",
  delay: 100,
});

// fire the progress.start when the routerChange just Started.
Router.events.on('routeChangeStart', progress.start);

// finish the progress when the routerChange is complete.
Router.events.on('routeChangeComplete', progress.finish);

// if there's an error on the route change, finish progress to terminate it.
Router.events.on('routeChangeError', progress.finish);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
