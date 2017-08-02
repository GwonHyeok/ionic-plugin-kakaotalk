import { IonicNativePlugin } from '@ionic-native/core';
export declare class KakaoTalk extends IonicNativePlugin {
    login(): Promise<any>;
    logout(): Promise<any>;
    getAccessToken(): Promise<string>;
    share(options: any): Promise<any>;
}
