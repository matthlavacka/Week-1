Yaks = new Meteor.Collection('yaks');

Comments = new Mongo.Collection("comments");

Router.route('/', {name: 'firstpage'})

Router.route('/yakslist', {name: 'yaksList'})

Router.route('/submit', {name: 'yaksSubmit'});

Router.route('/login', {name: 'accounts'});


// Josh: tried routing to a new list from /wellness
// Router.route('/wellness', {name: 'yaksList'})
// Router.route('/wellness', {name: 'yaks'})

Router.route('/yaks/:_id', {
	name: 'yakPage',
	data: function() {
		return Yaks.findOne(this.params._id);
	}
});