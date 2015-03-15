Template.yaksSubmit.events({
	'submit .yaksSubmitForm': function(event,err) {

		event.preventDefault();
		var yak = event.target.yak.value; 		// get yak value

		// check if the value is empty
		if (yak == "") {
			alert("You can't insert empty yak. Try to write something funny instead! :)");
		} else {
			Meteor.call('yakInsert', yak);
			/*post._id = Yaks.insert(post);*/
			Router.go('yaksList');
		}
		
	}
});