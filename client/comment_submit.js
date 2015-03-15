Template.commentSubmit.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var $body = $(e.target).find('[name=body]');
		var comment = {
			body: $body.val(),
			postId: template.data._id,
			submitted: new Date()
		};

		var commentBody = e.target.body.value;
		// Check if the comment is not empty
		if (commentBody == "") {
			alert("You can't insert empty comment. Try to comment something nice instead! :)")
		} else {
			Meteor.call('commentInsert', comment);
		}

		// clear field
		e.target.body.value = "";
	}
});	