var fictions = [
"The work of learning encompasses everyone learning themselves or supporting others who are learning, so we call all learners our colleagues regardless of their role or affiliation with our library or university",
"Every worker in our library has not just a living wage for our area's cost of living, but a wage that allows healthy and convenient food, secure housing, savings, security taking a slow librarianship approach to work-life balance, elective healthcare, the ability to provide these for chosen family, the ability to participate in mutual aid projects...",
"Every worker's pay rises to match cost of living increases every year.",
"Our library tries to balance the benefits of flatter organizational structures, with transparency and clarity about the ways we can't do this inside larger university systems, and the ease with which power and its problems hide within structures declared to be flatter",
"Dog Club! Or better yet: our library has a system for workers to bring in their pets—one that doesn't burden the experience of folks with allergies, who don't like to be around animals, have bad experiences with animals, or other reasons this policy could make things worse for someone",
"Our library does not charge fines for overdue materials",
"Our library has free, accessible parking that makes it easy for workers and library users to get to the library",
"Our library has a transparent and well documented system for promotion, funding requests, budgets, and hiring ranges.",
"Our library actively incentivizes slow librarianship, putting systems in place to encourage and reward healthy work-life balance",
"Our library has an explicit policy of banking any hours worked over 40/week for future time off use",
"In our library, we attend to the difference between listening and hearing. Managers aren't just available to listen to staff concerns—they're also accountable to update their plans based on new knowledge and follow through with actions",
"Our library workers are encouraged to feel comfortable if they want to join their union or take collective action",
"Our library works to provide accommodations to staffers that request them. Staff have the option to simply ask for accommodations and note its an accommodation without disclosing further, and we start from a place of abundance and equity, rather than scarcity and equality, in trying to support this request or its goal. Staff have the support and advocacy of the library if they wish to use the university's formal HR accommodations process.",
"Our library pushes back on university emails that don't match our values and understandings, such as emails framing burnout and mental illness as personal failings, or university projects that encourage fatphobia as part of gathering health data for 3rd parties",
"Our library works to keep all its workers able to successfully find a job elsewhere should they wish to",
"Our library truly wishes to retain all its current staff, and staff know it",
"Our library gives the staff a real say in the design of policies",
"Workers at our Library know that they'll have the Library's complete support if someone is racist toward them",
"Our library closed all its buildings through as much of the pandemic as it could, including not pressuring staff to work in 'closed' buildings",
"When our library needed to reopen after the pandemic, it provided an ongoing supply of n95s to all staff",
"Our library advocates for the expressed needs and rights of all people in its spaces, including workers employed elsewhere in the university, such as housecleaning staff",
"Our library goes beyond the 'libraries are for everyone' idea by actively attending to behaviors and practices that *aren't* welcome in the library because they make it a less just and accessible space",
"Our library proactively created a policy and checklist on how to respond to harassment experience by its staff, including student workers and harassment in online spaces, and staff know they'll have the library's support, advocacy, care, and don't need to fear punishment if they are targeted by harassers"
]

function newFictions() {
	var randomNumber = Math.floor(Math.random() * (fictions.length));
	document.getElementById('fictionsDisplay').innerHTML = fictions[randomNumber];
}
