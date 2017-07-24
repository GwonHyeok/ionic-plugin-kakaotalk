import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

@Plugin({
    pluginName: 'KakaoTalk',
    plugin: 'cordova-plugin-ghyeok-kakaotalk',
    pluginRef: 'KakaoTalk',
    repo: 'https://github.com/GwonHyeok/cordova-plugin-kakaotalk',
    platforms: ['Android', 'iOS']
})
@Injectable()
export class KakaoTalk extends IonicNativePlugin {

    @Cordova()
    login(successCallback: Function, errorCallback: Function): void {
        return;
    }

}
