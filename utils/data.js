const users = [
  {
    "username": "jdoe",
    "email": "jdoe@example.com",
    "thoughts": [],
    "friends": []
  },
  {
    "username": "mwright",
    "email": "mwright@example.com",
    "thoughts": [],
    "friends": []
  },
  {
    "username": "sharper",
    "email": "sharper@example.com",
    "thoughts": [],
    "friends": []
  },
  {
    "username": "nbaker",
    "email": "nbaker@example.com",
    "thoughts": [],
    "friends": []
  },
  {
    "username": "kjackson",
    "email": "kjackson@example.com",
    "thoughts": [],
    "friends": []
  }
];

const thoughts = [
  {
    "thoughtText": "This is a random thought from jdoe.",
    "username": "jdoe",
    "reactions": [
      { "reactionBody": "Great thought!", "username": "mwright" },
      { "reactionBody": "I agree with this.", "username": "sharper" }
    ]
  },
  {
    "thoughtText": "Another interesting thought by mwright.",
    "username": "mwright",
    "reactions": [
      { "reactionBody": "Thanks for sharing!", "username": "jdoe" }
    ]
  },
  {
    "thoughtText": "sharper's thoughts on APIs.",
    "username": "sharper",
    "reactions": []
  },
  {
    "thoughtText": "nbaker shares a thought on coding.",
    "username": "nbaker",
    "reactions": [
      { "reactionBody": "Interesting point!", "username": "kjackson" }
    ]
  },
  {
    "thoughtText": "kjackson's random thought.",
    "username": "kjackson",
    "reactions": []
  }
];

module.exports = { users, thoughts };
