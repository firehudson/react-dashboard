const faker = require('Faker');
const fs = require('fs');
const times = require('lodash/times');
const config = require('./config');

const generateDatabase = () => {
  const db = {
    users: [],
    posts: [],
  };

  /**
   * Generate unique user ids.
   * Later these ids can be used to prepare connections record.
   */
  const userIds = new Array(config.userCount).fill(0).map((value, index) => index);

  times(config.userCount, (index) => {
    const connectionCount = faker.random.number(config.maxConnectionsPerUser);
    const connections = faker.Helpers.shuffle(userIds)
      .slice(0, connectionCount);

    // if random connections array also contains current user id (index), remove it.
    if (connections.indexOf(index)) {
      connections.splice(connections.indexOf(index), 1);
    }

    db.users.push({
      id: index,
      firstName: faker.Name.firstName(),
      lastName: faker.Name.lastName(),
      username: faker.Internet.userName(),
      email: faker.Internet.email(),
      password: faker.Lorem.words(1)[0],
      fullname: faker.Name.findName(),
      avatar: faker.random.avatar_uri(),
      status: faker.random.array_element(config.userStatuses),
      connections,
    });
  });

  times(config.postCount, (index) => {
    db.posts.push({
      id: index,
      title: faker.Lorem.sentence(6),
      content: faker.Lorem.paragraph(3),
      userId: faker.random.array_element(userIds),
    });
  });

  fs.writeFile('./mock/db.json', JSON.stringify(db), (err) => {
    if (err) {
      console.error('writting data to file db.json failed.');
    } else {
      console.error('written data to file db.json.');
    }
  });

  return db;
};

module.exports = generateDatabase;
