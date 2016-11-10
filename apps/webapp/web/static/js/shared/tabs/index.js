/**
 * file: shared/tabs/index.js
 *
 * React components to render MDL tabs components
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/tabs
 */

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/tabs/_tabs.scss';
import Tabs from './Tabs';

/*** exports ***/
export default Tabs;
export {TabBar as TabsTabBar} from './TabBar';
export {Tab as TabsTab} from './Tab';
export {Panel as TabsPanel} from './Panel';
