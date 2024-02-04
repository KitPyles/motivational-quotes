window.addEventListener("load", function() {
	const quote = document.getElementById("quote");
	const citation = document.getElementById("citation");
	const image = document.querySelector("#bgImg");
	let bgImages = [
		"giants-causeway-by-kevin-mcmahon",
		"ireland-by-dorothe",
		"ireland-by-iain",
		"ireland-by-jonas-fehre",
		"ireland-by-kelly",
		"ireland-by-steven-hylands",
		"ireland-by-tom-balabaud",
		"ireland2-by-steven-hylands",
		"ireland3-by-steven-hylands",
		"ireland4-by-steven-hylands",
		"orkney-by-david-mccreight",
		"orkney-by-laura-flannigan",
		"scotland-by-alan-caldwell",
		"scotland-by-frank-winkler",
		"scotland-by-john-martin-bramham",
		"scotland-by-miquel-rosselló-calafell",
		"scotland-by-miro-alt",
		"scotland-by-pexels",
		"scotland-by-ron-sharp",
		"scotland-by-trina"
	]
	let randomImg = 'images/' + bgImages[Math.floor(Math.random() * bgImages.length)] + '.jpg';
	let quotes = [
		["Do not bring people in your life who weigh you down. And trust your instincts... good relationships feel good. They feel right. They don't hurt.","Billie Eilish"],
		["The more I like me, the less I want to pretend to be other people.","Jamie Lee Curtis"],
		["It's not your job to be everything to everyone.","Tracee Ellis Ross"],
		["You can't go back & change the beginning, but you can start where you are & change the ending.","Angela Davis"],
		["The most common way people give up their power is by thinking they don't have any.","Alice Walker"],
		["The only way to do good work is to love what you do.","Malala Yousafzai"],
		["Courage is the most important of all virtues because without courage, you can't practice any other virtue consistently.","Mary Tyler Moore"],
		["It's not what happens to you, but how you react to it that matters.","Anne Frank"],
		["The question isn't who's going to let me, it's who is going to stop me.","Ayn Rand"],
		["Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.","Angela Davis"],
		["Success is liking yourself, liking what you do, & liking how youdo it.","Jane Fonda"],
		["Be a first-rate version of yourself, not a second-rate version of somebody else.","Judy Garland"],
		["Believe you can & you're halfway there.","Eleanor Roosevelt"],
		["Success is not final, failure is not fatal; It is the courage to continue that counts.","Amelia Earhart"],
		["You have to have confidence in your ability, & then be tough enough to follow through","Rosalynn Carter"],
		["What you get by achieving your goals is not as important as what you become by achieving your goals.","Marie Curie"],
		["Don't watch the clock; do what it does. Keep going.","Katherine Johnson"],
		["The only limit to our realization of tomorrow is our doubts of today.","Susan B. Anthony"],
		["The past can hurt. But the way I see it, you can either run from it or learn from it.","The Lion King"],
		["The flower that blooms in adversity is the most rare & beautiful of all.","Mulan"],
		["You control your destiny -- you don't need magic to do it. There are no magical shortcuts to solving your problems.","Brave"],
		["The only way to acheive the impossible is to believe it is possible.","Time Burton's Alice in Wonderland"],
		["The strength of the pack is the wolf, & the strength of the wolf is the pack.","The Jungle Book"],
		["The only limit to your impact is your imagination and commitment.","Zootopia"],
		["Life's not a spectator sport. If watching is all you're gonna do, then you're gonna watch your life go by without you.","Disney's The Hunchback of Notre Dame"]
	];
	let randomIndex = Math.floor(Math.random() * quotes.length);
	
	image.style.backgroundImage = `url(${randomImg})`;
	image.style.height = "auto";
	image.style.max-width = "100%";
	/* image.style.overflow = "hidden"; */
	quote.innerHTML = quotes[randomIndex][0];
	citation.innerHTML = quotes[randomIndex][1];
});

setTimeout(function(){
	 window.location.reload();
}, (1000 * 60 * 60));
