import { lazy, Suspense } from "react";
import { useMediaQuery } from "react-responsive";

// import stron

const MobileView = lazy(() => import("./mobile/MobileView"));

export const App = () => {
  const mobile = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const desktop = useMediaQuery({ minWidth: 2560 });

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        {mobile && <MobileView />}
      </Suspense>
    </>
  );
};
