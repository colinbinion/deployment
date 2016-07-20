var yaMama= [
   "Ya mama has knuckles that drag down to the ground when she walks",
   "Ya mama got a glass eye with the fish in it",
   "Ya mama held up the ice cream truck with a slingshot",
   "Ya mama got the wooden legs with real feet",
   "Ya mama's glasses are so thick she look into a map and see people wavin at her",
   "Ya mama's an extra on the Simpsons",
   ];

   function generate() {
     return Math.floor(Math.random() * yaMama.length);
   }
console.log(generate());

$("button").on("click", function(){
$("#result h1").html(yaMama[generate()])
});
