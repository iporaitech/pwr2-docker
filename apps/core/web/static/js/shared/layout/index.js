/**
 * file: shared/layout/index.js
 *
 * React components to render MDL layout components
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/layout
 */

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/layout/_layout.scss';
import Layout from './Layout';

/*** exports ***/
export default Layout;
export {Content as LayoutContent} from './Content.js';
export {Drawer as LayoutDrawer} from './Drawer.js';
export {Header as LayoutHeader} from './Header.js';
export {HeaderRow as LayoutHeaderRow} from './HeaderRow.js';
export {Icon as LayoutIcon} from './Icon.js';
export {Navigation} from './Navigation.js';
export {NavigationLink} from './NavigationLink.js';
export {Spacer as LayoutSpacer} from './Spacer.js';
export {Title as LayoutTitle} from './Title.js';
