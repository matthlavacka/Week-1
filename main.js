Yaks = new Meteor.Collection('yaks');

Comments = new Mongo.Collection("comments");

Router.route('/', {name: 'yaksList'})

Router.route('/submit', {name: 'yaksSubmit'});

Router.route('/login', {name: 'accounts'});

Router.route('/yaks/:_id', {
	name: 'yakPage',
	data: function() {
		return Yaks.findOne(this.params._id);
	}
});