AFRAME.registerComponent('raycaster-listen', {
    init: function () {
      // Use events to figure out what raycaster is listening so we don't have to
      // hardcode the raycaster.
      this.el.addEventListener('raycaster-intersected', evt => {
        this.raycaster = evt.detail.el;
      });
      
      this.el.addEventListener('raycaster-intersected-cleared', evt => {
        this.raycaster = null;
      });

      this.el.addEventListener('click', () => {
        if (!this.raycaster) { return; }  // Not intersecting.
        let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
        if (!intersection) { return; } // Null checker

        var camera = document.querySelector("#camera"); // Get camera by id
        var cam_curr_pos = camera.getAttribute('position'); // Get camera current position

        // Edit the animation
        camera.setAttribute('animation__move','to', {x: intersection.point.x, y: cam_curr_pos.y, z: intersection.point.z });
        camera.setAttribute('animation__move','from', {x: cam_curr_pos.x, y: cam_curr_pos.y, z: cam_curr_pos.z });

        // Emit event to start animation
        camera.emit('move');
      })
    }
  });
