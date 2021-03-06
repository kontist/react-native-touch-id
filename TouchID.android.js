/**
 * Stub of TouchID for Android.
 *
 * @providesModule TouchID
 * @flow
 */
'use strict';

export default {
  isSupported() {
    return new Promise((resolve) => resolve(false));
  }
};
