import {Routes} from "../routing";
import {Route, Switch} from "react-router-dom";

const AppRouter = () => {
    return (
        <Switch>
            {Routes.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}
        </Switch>
    )
}
export default AppRouter;