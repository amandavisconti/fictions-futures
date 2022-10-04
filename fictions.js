var fictions = [
"The work of learning encomapsses everyone learning themselves or supporting others who are learning, so we call all learners our colleagues regardless of their role or affiliation with our library or university",
"Every worker in our library has not just a living wage for our area's cost of living, but a wage that allows healthy and convenient food, secure housing, savings, security taking a slow librarianship approach to work-life balance, elective healthcare, the ability to provide these for chosen family, the ability to participate in mutual aid projects...",
"Every worker's pay rises to match cost of living increases every year.",
"Our library tries to balance the benefits of flatter organizational structures, with transparency and clarity about the ways we can't do this inside larger university systems, and the ease with which power and its problems hide within structures declared to be flatter",
"Our library has a system for workers to bring in their pets—one that doesn't burden the experience of folks with allergies, who don't like to be around animals, have bad experiences with animals, or other reasons this policy could make things worse for someone",
"Our library does not charge fines for overdue materials",
"Our library has free, accessible parking that makes it easy for workers and library users to get to the library",
"Our library has a transparent and well documented system for promotion, funding requests, budgets, and hiring ranges.",
"Our library actively incentivizes slow librarianship, putting systems in place to encourage and reward healthy work-life balance",
"Our library has an explicit policy of banking any hours worked over 40/week for future time off use",
"In our library, we attend to the difference between listening and hearing. Managers aren't just available to listen to staff concerns—they're also accountable to update their plans based on new knowledge and follow through with actions"
]

function newFictions() {
	var randomNumber = Math.floor(Math.random() * (fictions.length));
	document.getElementById('fictionsDisplay').innerHTML = fictions[randomNumber];
}
