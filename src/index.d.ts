import { IonicNativePlugin } from '@ionic-native/core';
export declare class KakaoTalk extends IonicNativePlugin {
    login(): Promise<any>;
    logout(): Promise<any>;
    share(options: any): Promise<any>;
}
