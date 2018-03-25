const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
	database: "ntask",
	username: "",
	password: "",
	params: {
		operatorsAliases: false,
		dialect: "sqlite",
		storage: "ntask.sqlite",
		define: {
			underscored: true
		}
	}
};