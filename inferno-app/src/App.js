import { App, Statusbar, View, Page, Navbar, Toolbar, Link } from 'framework7-react';
import WelcomePage from "./ui/account/WelcomePage"

const f7params = {
  name: 'My App',
  id: 'com.myapp.test',
  // specify routes for app
  routes: [
    {
      path: '/welcome',
      component: WelcomePage,
    },
  ],
};

export default () => (
  // Main Framework7 App component where we pass Framework7 params
  <App params={f7params}>

    {/* Status bar overlay for full screen mode (Cordova or PhoneGap) */}
    <Statusbar></Statusbar>

    {/* Your main view, should have "main" prop */}
    <View main>
      <WelcomePage/>
      {/*  Initial Page */}
      {/*<Page>*/}
        {/*/!* Top Navbar *!/*/}
        {/*<Navbar title="Awesome App"></Navbar>*/}
        {/*/!* Toolbar *!/*/}
        {/*<Toolbar>*/}
          {/*<Link>Link 1</Link>*/}
          {/*<Link>Link 2</Link>*/}
        {/*</Toolbar>*/}
        {/*/!* Page Content *!/*/}
        {/*<p>Page content goes here</p>*/}
        {/*<Link href="/welcome/">About App</Link>*/}
      {/*</Page>*/}
    </View>
  </App>
)