<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Collision Test</title>
		<script src="https://cdn.rawgit.com/mrdoob/three.js/r74/build/three.js"></script>
		<script src="https://sdk.altvr.com/libs/altspace.js/0.19.2/altspace.min.js"></script>
	</head>
	<body>
		<script>

		(function(){var a = window.altspace; (function insert(ss, t){for(var i in ss) {for (var j in ss[i]) {t[j] = ss[i][j];}};})([a, a.utilities,a.utilities.behaviors, a.utilities.shims], window.alt = {})})();

		var TestApp = (function() 
		{
			var scene = new THREE.Scene();
			var renderer = altspace.getThreeJSRenderer();
			
			function start()
			{
				
				altspace.instantiateNativeObject("colliders/cubenavigable").then(function (nativeObject) 
				{
					var platformGroup = new THREE.Object3D();
					
					scene.add(platformGroup);
					platformGroup.add(nativeObject);
					
					var platform_material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
					var platform_geometry = new THREE.BoxGeometry(1, 1, 1);
					var platform = new THREE.Mesh(platform_geometry, platform_material);
					
					platformGroup.add(platform);
					
					platformGroup.scale.set(10, 10, 10);
					platformGroup.position.set(0, -360, 0);
					console.log(platformGroup);
				});
				
				console.log(altspace);
				
				animate();
			}
			
			function animate() 
			{
				
				requestAnimationFrame(animate);
				renderer.render(scene);
			}
			
			return { start: start };
		}());
		
		TestApp.start();
		
		</script>
	</body>
</html>