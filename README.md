# Hackathon-Level-Up-Society
Repo for the 48-hour hackathon, giving you the chance to help level-up society through gamification

## What is this App? Who is it for?

Families with kids need a simple way to let each other know where everybody is and when they can expect to be back home. Our project provides a simple, interactive way for kids and parents to quickly share their plans in a dedicated space. In the user interface, a family member chooses from a customizable list of destinations, selects who is going with them, and provides an estimated return time. The status of each member of the family is displayed visually on the app. A visual indication is given if the estimated return time elapses and the family member hasn't updated their status as being home.

## Mind-Map
### Front-End
- Actions

*    "Heading out": PUT request to update the database object with the names, destination, and expected return time (ERT) of the people leaving the house.
*    "Check In": PUT request to update the database object with the names, destination, and expected return time of the people returning to the house.
*    "Add family member": PUT request to add family member to the database object.
*    "Remove family member": PUT request to remove family member to the database object.

- Components

*    Avatar: Used to represent the family members and the home location.
*    Button: Used to navigate through the app and select the who and where options.
*    Range Slider: Used to input the ERT.
*    "Clock Face": Used to display the current status of the family members.
*    Badge: Used to display how many people are currently at home.
*    Section Banner: Displays a daily greeting on the clock section and give the user instruction on the input sections.

* Context

    State for each family member.
        Populated from the initial GET request and updated by subsequent PUT request response messages.
        ERT is calculated when the family member leaves the house (time of request + expected duration of trip)

Back-End
Server

Routes

    app.Route("/check-in-out")

Models

      {familyMembers: [],
      familyMember: {
      name: {
      type: String,
      unique: true,}
      atHome: Boolean,
      estReturnTime: Number,
      location: String

    },
