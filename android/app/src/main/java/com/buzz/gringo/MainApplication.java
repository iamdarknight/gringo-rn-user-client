package com.buzz.gringo;

import android.app.Application;

import com.facebook.react.ReactApplication;
import org.reactnative.camera.RNCameraPackage;
import com.wix.interactable.Interactable;
import ui.bottomactionsheet.RNBottomActionSheetPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import cl.json.RNSharePackage;
import cl.json.ShareApplication;
import com.cmcewen.blurview.BlurViewPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import com.oblador.vectoricons.VectorIconsPackage;
import com.arttitude360.reactnative.rngoogleplaces.RNGooglePlacesPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.github.wumke.RNExitApp.RNExitAppPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.marianhello.bgloc.react.BackgroundGeolocationPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.functions.RNFirebaseFunctionsPackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ShareApplication, ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(),
            new RNCameraPackage(),
            new Interactable(),
            new RNBottomActionSheetPackage(),
            new RNCWebViewPackage(),
            new LottiePackage(),
            new FastImageViewPackage(), new RNSharePackage(), new BlurViewPackage(),
          new PickerPackage(),  new ReactNativeContacts(), new VectorIconsPackage(), new RNFirebasePackage(),
          new RNFirebaseAuthPackage(), new RNFirebaseFirestorePackage(), new MapsPackage(), new RNFirebaseFunctionsPackage(), 
          new SplashScreenReactPackage(), new ReactVideoPackage(), new RNExitAppPackage(), new BackgroundGeolocationPackage(), new RNGooglePlacesPackage(), new RNFirebaseMessagingPackage(),
          new RNFirebaseNotificationsPackage());
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public String getFileProviderAuthority() {
    return "com.buzz.gringo.provider";
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
