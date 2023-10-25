AFRAME.registerComponent("create-markers", {
  init: async function() {
    var mainScene = document.querySelector("#main-scene");

    var dishes = await this.getDishes();

    dishes.map(dish => {
      var marker = document.createElement("a-marker");

      marker.setAttribute("id", dish.id);
      marker.setAttribute("type", "pattern");
      marker.setAttribute("url", dish.marker_pattern_url);
      marker.setAttribute("cursor", {
        rayOrigin: "mouse"
      });
      marker.setAttribute("markerhander", {});

      mainScene.appendChild(marker);

      var model = document.createElement("a-entity");

      model.setAttribute("id", `model-${dish.id}`);
      model.setAttribute("position", dish.model_geometry.position);
      model.setAttribute("rotation", dish.model_geometry.rotation);
      model.setAttribute("scale", dish.model_geometry.scale);
      model.setAttribute("gltf-model", `url(${dish.model_url})`);
      model.setAttribute("gesture-handler", {});

      marker.appendChild(model);

      var main_plane = document.createElement("a-plane");

      main_plane.setAttribute("id", `main-plane-${dish.id}`);
      main_plane.setAttribute("position", {x: 0, y: 0, z: 0});
      main_plane.setAttribute("rotation", {x: -90, y: 0, z: 0});
      main_plane.setAttribute("width", 1.7);
      main_plane.setAttribute("height", 1.5);

      marker.appendChild(main_plane);

      var title_plane = document.createElement("a-plane");

      title_plane.setAttribute("id", `main-plane-${dish.id}`);
      title_plane.setAttribute("position", {x: 0, y: 0, z: 0});
      title_plane.setAttribute("rotation", {x: -120, y: 0, z: 0});
      title_plane.setAttribute("width", 1.7);
      title_plane.setAttribute("height", 1.5);

      marker.appendChild(title_plane);
    });
  },
});