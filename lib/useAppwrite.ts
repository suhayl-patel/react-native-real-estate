import { Alert } from "react-native";
import { useEffect, useState, useCallback } from "react";

// Interface for the options that can be passed to the useAppwrite hook
interface UseAppwriteOptions<T, P extends Record<string, string | number>> {
  fn: (params: P) => Promise<T>; // The function to call the Appwrite API
  params?: P; // Optional parameters to pass to the function
  skip?: boolean; // Whether to skip the initial fetch
}

// Interface for the return value of the useAppwrite hook
interface UseAppwriteReturn<T, P> {
  data: T | null; // The data returned from the API
  loading: boolean; // Whether the API call is in progress
  error: string | null; // Any error that occurred during the API call
  refetch: (newParams: P) => Promise<void>; // Function to refetch the data with new parameters
}

// Custom React hook for managing Appwrite API calls with state handling
// This hook uses generic TypeScript parameters to work with different types of API calls
export const useAppwrite = <T, P extends Record<string, string | number>>({
  fn,
  params = {} as P,
  skip = false,
}: UseAppwriteOptions<T, P>): UseAppwriteReturn<T, P> => {
  const [data, setData] = useState<T | null>(null); // State to store the data returned from the API
  const [loading, setLoading] = useState(!skip); // State to store the loading status
  const [error, setError] = useState<string | null>(null); // State to store any error that occurred

  // Function to fetch data from the API
  const fetchData = useCallback(
    async (fetchParams: P) => {
      setLoading(true); // Set loading to true before starting the API call
      setError(null); // Reset any previous error

      try {
        const result = await fn(fetchParams); // Call the API function with the parameters
        setData(result); // Set the data returned from the API
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred"; // Get the error message
        setError(errorMessage); // Set the error message
        Alert.alert("Error", errorMessage); // Show an alert with the error message
      } finally {
        setLoading(false); // Set loading to false after the API call is complete
      }
    },
    [fn]
  );

  // useEffect to fetch data when the component mounts or when the parameters change
  useEffect(() => {
    if (!skip) {
      fetchData(params); // Fetch data if skip is false
    }
  }, []);

  // Refetch function to fetch data with new parameters
  const refetch = async (newParams: P) => await fetchData(newParams);

  // Return the data, loading status, error, and refetch function
  return { data, loading, error, refetch };
};