import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import 'react-spring-bottom-sheet/dist/style.css';
import 'styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default App;
