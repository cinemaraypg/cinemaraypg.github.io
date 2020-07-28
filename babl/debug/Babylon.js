var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var MoviePlayer = /** @class */ (function (_super) {
        __extends(MoviePlayer, _super);
        function MoviePlayer(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            var _this = _super.call(this, owner, scene, tick, propertyBag) || this;
            _this.videoLocation = "movie.mp4";
            return _this;
        }
        MoviePlayer.prototype.ready = function () {
            // Scene execute when ready
        };
        MoviePlayer.prototype.start = function () {
            // Start component function
            this.videoLocation = this.getProperty("videoLocation", "movie.mp4");
            // Brute force my way to play video
            var myMaterial = new BABYLON.StandardMaterial("textVid", this.scene);
            var videoTexture = new BABYLON.VideoTexture("video", this.videoLocation, this.scene, false);
            myMaterial.diffuseTexture = videoTexture;
            myMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
            myMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
            myMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
            this.mesh.material = myMaterial;
            this.scene.onPointerUp = function () {
                videoTexture.video.play();
            };
        };
        MoviePlayer.prototype.update = function () {
            // Update render loop function
        };
        MoviePlayer.prototype.after = function () {
            // After render loop function
        };
        MoviePlayer.prototype.destroy = function () {
            // Destroy component function
        };
        return MoviePlayer;
    }(BABYLON.MeshComponent));
    PROJECT.MoviePlayer = MoviePlayer;
})(PROJECT || (PROJECT = {}));
