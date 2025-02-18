import type { UseQueryResult } from "@tanstack/react-query";
import { LoadingSpinner } from "./LoadingSpinner";
import { getIsDataEmpty } from "../lib/utils";

/**
 * HOC for rendering a loading state
 * If a custom loading component is provided via `loadingFeedback`, it will be used; otherwise,
 * default loading spinner will be shown.
 */
const withLoadingFeedback = <P extends UseQueryResult<any, Error>>(
  loadingFeedback?: React.ReactNode,
) => {
  return (Component: React.ComponentType<P>): React.FC<P> => {
    const WithLoadingFeedback: React.FC<P> = (props) => {
      if (props.isPending) {
        return (
          <>
            {loadingFeedback ?? (
              <div className="grid place-content-center size-full">
                <LoadingSpinner className="w-1/2 max-w-32" />
              </div>
            )}
          </>
        );
      }

      return <Component {...props} />;
    };
    return WithLoadingFeedback;
  };
};

/**
 * HOC for rendering an error state
 * If a custom error component is provided via `errorFeedback`, it will be used; otherwise,
 * the error will be thrown.
 */
const withErrorFeedback = <P extends UseQueryResult<any, Error>>(
  errorFeedback?: (error: unknown) => React.ReactNode,
) => {
  return (Component: React.ComponentType<P>): React.FC<P> => {
    const WithErrorFeedback: React.FC<P> = (props) => {
      if (props.isError && props.error) {
        if (!errorFeedback) throw props.error;

        return <>{errorFeedback(props.error)}</>;
      }
      return <Component {...props} />;
    };
    return WithErrorFeedback;
  };
};

/**
 * HOC for rendering a “no data” state.
 * If a custom predicate is provided via `isDataEmpty`, it will be used; otherwise,
 * the default check is applied.
 */
const withNoDataFeedback = <P extends UseQueryResult<any, Error>>(
  noDataFeedback?: React.ReactNode,
  isDataEmpty?: (data: unknown) => boolean,
) => {
  const checkDataEmpty = isDataEmpty ?? getIsDataEmpty;

  return (Component: React.ComponentType<P>): React.FC<P> => {
    const WithNoDataFeedback: React.FC<P> = (props) => {
      const isDataEmpty = checkDataEmpty(props.data);
      if (isDataEmpty) {
        return (
          <>
            {noDataFeedback ?? (
              <p className="font-semibold opacity-75">No data available.</p>
            )}
          </>
        );
      }
      return isDataEmpty ? <>{noDataFeedback}</> : <Component {...props} />;
    };
    return WithNoDataFeedback;
  };
};

export { withLoadingFeedback, withErrorFeedback, withNoDataFeedback };
