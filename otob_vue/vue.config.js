module.exports = {
	devServer: {
		proxy: {
			"/route": {
				target: "http://localhost:8080",
			}
		}
	}
}