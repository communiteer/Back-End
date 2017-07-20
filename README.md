# Back-End
Server and PostgreSQL
Routes =>

	/areas  																							get all the areas
	/skills																								get all skills
	/user/:id 																						get user by its id
	/group/:id																						get group by their id
	/groups/group/:area																		get groups by area
	/events/area/:area																		get events by area
	/events/:id																						get Event by its id
	/users/:user_id/groups																get All groups for given user
	/groups/:group_id/users																get All users for given Group
	'/users/:userID/events',DB.getUserEvents							get All events for a given user
	'/events/:eventId/users', DB.getEventUsers						get all users for a given event
	'/users/:userId/skills', DB.getUserSkills							get all user skills
	'/events/:eventId/skills', DB.getEventSkills					get all event skills

	'/users/:userId/group', DB.addGroup										add new group
	'/event', DB.addEvent																	add new event and new event skills
	'/user', DB.addUser																		add new user and new user skills