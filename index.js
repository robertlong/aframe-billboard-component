AFRAME.registerComponent("billboard", {
  init: function() {
    this.target = new THREE.Vector3();
  },
  tick: function(t) {
    const camera = this.el.sceneEl.camera;
    const object3D = this.el.object3D;

    if (camera) {
      // Set the camera world position as the target.
      this.target.setFromMatrixPosition(camera.matrixWorld);

      if (object3D.parent) {
        // lookAt does not support objects with a rotated and/or translated parent.
        // Convert to a local target position to avoid this.
        object3D.parent.worldToLocal(this.target);
      }

      return object3D.lookAt(this.target);
    }
  }
});