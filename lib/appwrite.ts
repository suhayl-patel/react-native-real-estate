
import { Account, Avatars, Client } from 'react-native-appwrite';
import * as Linking from 'expo-linking';

export const config = {
    platform: 'com.gc.naccs',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();

client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!)

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
    try {
    // use an expo-linking for handling deeplinks and redirect urls.
        const redirectUri = Linking.createURL('/');
    } catch (error) {
        console.error(error);
        return false;
    }
}

