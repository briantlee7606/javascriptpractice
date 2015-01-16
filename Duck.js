function Duck(sound) {
this.sound = sound;
this.quack = function() {document.write(this.sound);}
}

var toy = new Duck("quack quack");

toy.quack();

document.write("<br /><br />"+typeof toy);
document.write("<br />" + (toy instanceof Duck));