var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet" };
var bees = { character: "Bees" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var robin = { character: "Christopher Robin" };
var owl = { character: "Owl" };
var kanga = { character: "Kanga" };
var eeyore = { character: "Eeyore" };
var heffalumps = { character: "Heffalumps" };

tigger.north = pooh;

pooh.south = tigger;
pooh.west =piglet;
pooh.east =bees;
pooh.north = robin;

piglet.east.pooh;
piglet.north = owl;

owl.south = piglet;
owl.east = robin;

bees.west = pooh;
bees.north = rabbit;

robin.south = pooh;
robin.west = owl;
robin.east = rabbit;
robin.north = kanga;

rabbit.south = bees;
rabbit.east = gopher;
rabbit.west = robin;

gopher.west = rabbit;

kanga.south = robin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffalumps;

heffalumps.west = eeyore;

