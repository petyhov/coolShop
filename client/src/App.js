import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { fetchPhones } from "./redux/operations";
import { GlobalStyle, MyLoader } from "./components/ui";
import { Header } from "./components/header";
import routes from "./routes";

const Home = lazy(() => import("./pages/Home" /* webpackChunkName: "home" */));
const Cart = lazy(() => import("./pages/Cart" /* webpackChunkName: "cart" */));

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />

      <Suspense fallback={<MyLoader />}>
        {isLoading ? (
          <MyLoader />
        ) : (
          <Switch>
            <Route path={routes.home} component={Home} exact />
            <Route path={routes.cart} component={Cart} />
          </Switch>
        )}
      </Suspense>
    </>
  );
}

export default App;
