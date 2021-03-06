const messages = [
	"has vanished into nothingness!",
	"visited zeriloa's bedroom and never returned!",
	"was squished by zeriloa's large behind!",
	"became a fgt!",
	"got salted.",
        "got swept by Hophip!",
	"saw zeriloa fapping!",
	"was shot by Aerow's Arrow!",
        "used Memento on Pawniard!",
        "felt the need to poop",
	"turned into a nerd!",
	"fell in love with Slugma!",
	"fell in love with Aerow!",
	"got banned by sparktrain for insulting Seel!",
	"is salty!",
	"got hit by sparktrain's poop!",
	"saw Dhaora's ghost!",
	"got lost in a maze!",
	"left the party!",
	"got lost in a cave of salt!",
	"A large 8-eyed spiedr descended from the sky and picked up {{user}}.",
	"took an Aerow to the knee... and then one to the face.",
	"took all of Nineage's money!",
	"married Nineage!",
	"turned into trash!",
	"pooped on Aerow!",
	"fender accidently kicked {{user}} from the server!",
	"Aerow accidently kicked {{user}} from the server!",
	"was BLEGHED on by Fender!",
];

exports.commands = {
	d: 'poof',
	cpoof: 'poof',
	poof: function (target, room, user) {
		if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
		if (target && !this.can('broadcast')) return false;
		if (room.id !== 'lobby') return false;
		var message = target || messages[Math.floor(Math.random() * messages.length)];
		if (message.indexOf('{{user}}') < 0)
			message = '{{user}} ' + message;
		message = message.replace(/{{user}}/g, user.name);
		if (!this.canTalk(message)) return false;

		var colour = '#' + [1, 1, 1].map(function () {
			var part = Math.floor(Math.random() * 0xaa);
			return (part < 0x10 ? '0' : '') + part.toString(16);
		}).join('');

		room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
		user.disconnectAll();
	},

	poofoff: 'nopoof',
	nopoof: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = true;
		return this.sendReply("Poof is now disabled.");
	},

	poofon: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = false;
		return this.sendReply("Poof is now enabled.");
	}
};
