import { AppProps } from 'next/app'
import 'sanitize.css/forms.css'
import 'sanitize.css/sanitize.css'
import { GlobalWrapper } from 'src/components/common/global/GlobalWrapper'

const App = ({ Component, pageProps }: AppProps) => (
  <GlobalWrapper>
    <Component {...pageProps} />
  </GlobalWrapper>
)

export default App
