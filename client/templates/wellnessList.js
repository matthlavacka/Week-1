Template.wellnessList.helpers({
	yaks: function() {
		return Yaks.find({}, {sort : {score: -1}});
	}
})