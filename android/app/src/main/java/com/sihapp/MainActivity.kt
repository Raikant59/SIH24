package com.sihapp
<<<<<<< HEAD
import expo.modules.ReactActivityDelegateWrapper
=======
>>>>>>> origin/main

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "SIHAPP"
<<<<<<< HEAD
  @Override
  protected String getMainComponentName() {
    return "main";
  }
=======
>>>>>>> origin/main

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
<<<<<<< HEAD
      ReactActivityDelegateWrapper(this, BuildConfig.IS_NEW_ARCHITECTURE_ENABLED, DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled))
=======
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
>>>>>>> origin/main
}
