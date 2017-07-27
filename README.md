# communiteer-app
An app that brings together communities/community projects and volunteers behind a common goal.

# Proposal

* The project is to create a mobile app tentatively titled "Communiteer"!. 

* It allows community groups (or people wanting to bring people together behind a common cause) to create a community of volunteers. 

* It should be just as applicable to a long running community group or as a quick set up reaction to an event that may require volunteers to offer something to the cause. 

## Basic Implementations
* User sign up.
* All Users will also volunteer.
* User will have a `Volunteer` section and a `Community Group Admin` section if they have created a group.
* User has a volunteer profile listing...
  * Skills/tasks they would volunteer for (could potentially include suggestions based on most common volunteering activities).
  * General location based on address.
  * Profile picture.
  * Ability to update this information at any time.
  * Track what community groups the User is a member of.
* User has the ability to create a `Community Group`. (this will make them the `Admin` of that community).
  * When User is an admin of a community they should have the ability to make other people admins.
    * User should be able to update the profile picture and banner of the community group
    * User should be able to create new `Projects/Events`.
    * Upon save the newly created project/event should notify each Volunteer that is matched to the project/event keywords supplied at creation of event
    * User should have the ability to update events and re-notify Volunteers who are signed up to the project/event.
* User as a Volunteer has the ability to search existing Community Groups and request to join.
* User notified when a project or task is listed that matches their skills.
* User has an "honour count" which tracks points they collect as they complete each project/task within the community.
  * This also updates if they recommend a friend to join up and that new volunteer goes on to participate.
* Admins will be able to recognise the work of the volunteers based on this honour system.
* Users as Volunteers can assign another Volunteer to a job if they can't fulfil their agreed role on a project/event.
* `Project/Event Page`
 * Once created the Project/Event Page will detail the event (timings/location/date), the skills required, show an event icon and background based on the community groups profile pic and banner.
 * Should be listed on the Community Group page so people can browse open Projects/Events.

## Extra Implementations
* Authentication and data privacy - log in passwords for Users
* The ability to message admins in real time. 
* Make suggestions to admins for activities the group could be undertaking. 

## Basic Routes/Requests

`App` -> `Sign Up` -> `Create User`

`User` -> `Create Community Group` 

`User` -> `Search` -> `Community Group`

`User` -> `Search` `Volunteer opportunities (matched to skills) based on Location??`

`User` -> `Update details`

`Community Group` -> `invite/add/ Volunteers` 

`Community Group` -> `Create Project/Event` -> `Send event notification to volunteers based on skill on save`

`Community Group` -> `Event Feed`

`Community Group` -> `Event Feed` -> `Event Page`

`Volunteer` -> `Update honour validated by Admin`

## Extra Routes/Requests

`Volunteer` -> `Community Group` (recommend a friend)

`Volunteer` -> `Live Message` -> `Community Group`

`Volunteer` -> `Community Group` -> `Activity/Project Suggestion`

`Volunteer` -> `Newsfeed (potentially drawing articles and data from other volunteering sources)` 

## DataBase 
using SQL data base with 9 tables and connect the tables with relations as showm in the image link: 
https://user-images.githubusercontent.com/25569778/28660086-90decb7e-72a9-11e7-87bc-0d95f8958083.png

## Team

Leo, Kamran, Wasan and Ben.
