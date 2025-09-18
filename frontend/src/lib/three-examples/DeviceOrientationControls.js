import * as THREE from 'three';

class DeviceOrientationControls {
  constructor(object) {
    this.object = object;
    this.object.rotation.reorder('YXZ');
    this.enabled = true;
    this.deviceOrientation = {};
    this.screenOrientation = 0;
    this.alphaOffsetAngle = 0;

    const scope = this;

    const onDeviceOrientationChangeEvent = function (event) {
      scope.deviceOrientation = event;
    };

    const onScreenOrientationChangeEvent = function () {
      scope.screenOrientation = window.orientation || 0;
    };

    const setObjectQuaternion = (function () {
      const zee = new THREE.Vector3(0, 0, 1);
      const euler = new THREE.Euler();
      const q0 = new THREE.Quaternion();
      const q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));

      return function (quaternion, alpha, beta, gamma, orient) {
        euler.set(beta, alpha, -gamma, 'YXZ');
        quaternion.setFromEuler(euler);
        quaternion.multiply(q1);
        quaternion.multiply(q0.setFromAxisAngle(zee, -orient));
      };
    })();

    this.connect = function () {
      onScreenOrientationChangeEvent();
      window.addEventListener('orientationchange', onScreenOrientationChangeEvent, false);
      window.addEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
      scope.enabled = true;
    };

    this.disconnect = function () {
      window.removeEventListener('orientationchange', onScreenOrientationChangeEvent, false);
      window.removeEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
      scope.enabled = false;
    };

    this.update = function () {
      if (!scope.enabled) return;

      const alpha = scope.deviceOrientation.alpha
        ? THREE.MathUtils.degToRad(scope.deviceOrientation.alpha) + scope.alphaOffsetAngle
        : 0;
      const beta = scope.deviceOrientation.beta
        ? THREE.MathUtils.degToRad(scope.deviceOrientation.beta)
        : 0;
      const gamma = scope.deviceOrientation.gamma
        ? THREE.MathUtils.degToRad(scope.deviceOrientation.gamma)
        : 0;
      const orient = scope.screenOrientation
        ? THREE.MathUtils.degToRad(scope.screenOrientation)
        : 0;

      setObjectQuaternion(scope.object.quaternion, alpha, beta, gamma, orient);
    };
  }
}

export { DeviceOrientationControls };