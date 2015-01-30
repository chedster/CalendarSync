$(function() {
		var accessToken;

		var currentCourses = [];

		$.ajax({
			url: "https://canvas.instructure.com/api/v1/courses?access_token=" + accessToken,
			type: "GET",
			success: function(data) {
				for(var i = 0; i < data.length; i++) {
					currentCourses[i] = data[i].id;
					// Attempt to just call for assignments using the course id here instead of storing the course ids
				}
			},
			error: function(data) {
				alert("There was an error while retrieving your course information. Please try again. If this problem presists, please report the bug.");
			}
		})
});