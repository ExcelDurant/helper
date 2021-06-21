const faker = require('faker');
const fs = require('fs')

function generateUsers() {

  let users = []

  for (let id = 1; id <= 100; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let country = faker.address.country();
    let city = faker.address.city();
    let street = faker.address.streetName();
    let phone = faker.phone.phoneNumber();
    let avatar = faker.image.avatar();
    let desc = faker.lorem.paragraph();
    let work1 = faker.image.business();
    let work2 = faker.image.business();
    let review = faker.datatype.number(5);
    let completed_tasks = faker.datatype.number(200);
    let created_tasks = faker.datatype.number(10);

    users.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "street": street,
      "city": city,
      "country": country,
      "phone": phone,
      "profilePic": avatar,
      "jobDesc": desc,
      "work1": "https://source.unsplash.com/1600x900/?computer",
      "work2": "https://source.unsplash.com/1600x900/?work",
      "review": review,
      "completedNum": completed_tasks,
      "created_tasks": created_tasks
    });
  }

  return { "data": users }
}

let dataObj = generateUsers();

fs.writeFileSync('helpers.json', JSON.stringify(dataObj, null, '\t'));