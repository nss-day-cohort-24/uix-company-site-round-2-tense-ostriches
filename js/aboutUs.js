function Person(first, last, bio, phone) {
    this.firstName = first;
    this.lastName = last;
    this.title = title;
    this.phone = phone;
}
Person.prototype.badge = function() {
    return "<h3>" + this.firstName + " " + this.lastName + "</h3>" + "<p>" + this.title + "<br>" + this.phone + "</p>"
};

var staffThip = new Person("Phonethip", "Hobson", "Fit-U team lead", 888-567-8910);
document.getElementById("thip").innerHTML = staffThip.badge();

var staffMeg = new Person("Meg", "Scholl", "Fit-U CSS Workout Guru", 888-567-8911);
document.getElementById("meg").innerHTML = staffMeg.badge();

var staffMillion = new Person("Million", "Asseghegn", "Fit-U HTML Dietitian ", 888-567-8912);
document.getElementById("million").innerHTML = staffMillion.badge();

var staffRyan = new Person("Ryan", "Brisentine", "Fit-U JS Life Coach", 888-567-8913);
document.getElementById("ryan").innerHTML = staffRyan.badge();
