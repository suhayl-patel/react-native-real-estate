// special layout for the properties and tabs, those that you need to be authenticated to see

import { useGlobalContext } from "@/lib/global-provider";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, Slot } from "expo-router";

export default function AppLayout() {
    const { loading, isLoggedIn } = useGlobalContext();

    // Show loading indicator while loading
    if (loading) {
        return (
            <SafeAreaView className="bg-white h-full flex justify-center items-center">
                <ActivityIndicator 
                    className="text-primary-300" 
                    size="large"
                />
            </SafeAreaView>
        );
    }

    // Redirect to sign-in if not logged in
    if (!isLoggedIn) return <Redirect href='/sign-in' />;

    // Return the current screen
    return <Slot />;
}