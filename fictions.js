var fictions = [
"We call everyone engaged in the work of learning (learning themselves or supporting others learning) a colleague, because they are.",
"Every worker in our library has not just a living wage for our area's cost of living, but a wage that allows healthy and convenient food, secure housing, savings, security taking a slow librarianship approach to work-life balance, elective healthcare, the ability to provide these for chosen family, the ability to participate in mutual aid projects...",
"Every worker's pay rises to match cost of living increases every year.",
"Our library tries to balance the benefits of flatter organizational structures, with transparency and clarity about the ways we can't do this inside larger university systems, and the ease with which power and its problems hide within structures declared to be flatter",
"Our library has a system for workers to bring in their pets—one that doesn't burden the experience of folks with allergies, who don't like to be around animals, have bad experiences with animals, or other reasons this policy could make things worse for someone",
"Our library does not charge fines for overdue materials",
"Our library has free, accessible parking that makes it easy for workers and library users to get to the library",
"'You are the expert on where and when you do your best work.' In our library, we establish core needs for services/spaces that truly need to be reliably staffed at certain times, the physical and virtual availability needed from staff to support that, the other things that need some reliable presence (e.g. timeframes for replying to emails and meeting requests, how to keep scheduling meetings from overburdening both the scheduler and schedulee's needs and best systems), the factors impacting how staff can fill those needs (including personal factors such as childcare needs, physical and mental health, best working conditions). With that established and met, we don't expect to be able to drop in on or get an immediate response from colleagues outside those agreements, because everyone is their own expert on where and when they do their best work."
]

function newFictions() {
	var randomNumber = Math.floor(Math.random() * (fictions.length));
	document.getElementById('fictionsDisplay').innerHTML = fictions[randomNumber];
}
