# react-router-relay and Auth


We need to reset the Router environment because when an user logs out we need to remove all the data stored there. A simple solution would be to use environment as a function, in that case we could change the function's returned value and it would be very straightforward. But as [react-router-relay does not support this feature](https://goo.gl/vwxrPK) we have to do the following:
```javascript
/*
  Extract routes as a constant so it is re used for every render
  To avoid errors like:
  Warning: [react-router] You cannot change <Router routes>; it will be ignored
 */

const routes = (
 <Route path="/">
   <IndexRoute component={Hello}/>
   <Route path="/login" component={Login}  onEnter={verifySession}/>
   <Route path="/admin" component={AdminLayout} onEnter={requireAuth}>
     <IndexRoute component={Hello}/>
     <Route path="star-wars" component={StarWarsApp} queries={StarWarsQueries}/>
     <Route path="graphiql" component={GraphiQL} />
   </Route>
 </Route>
)

/*
  Wrapp the routes in another component so you can use the state to trigger
  react render every time the environment changes
*/

class Application extends React.Component{

 constructor(props){
   super(props);
   this.state = { environment: Auth.getEnvironment() };
   Auth.onLogout = ()=> this.handleLogout();
 }

 /*
 Now every time you change the state's environment
 For example with 'handleLogout', react will re render the routes
 */
 handleLogout(){
   this.setState({ environment: Auth.getEnvironment() })
 }

 render(){
   return (
     <Router history={browserHistory}
       render={applyRouterMiddleware(useRelay)}
       environment={this.state.environment}>
       {routes}
     </Router>
   );
 }
}

ReactDOM.render(
 <Application/>,
 document.getElementById('react-root')
);

```
