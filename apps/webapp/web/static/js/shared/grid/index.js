/**
 * file: shared/grid/index.js
 *
 * React components to render MDL grid components
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/grid
 */

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/grid/_grid.scss';
import Grid from './Grid';

/*** exports ***/
export default Grid;
export {Cell} from './Cell.js';
