import Realm from 'realm';

export class User extends Realm.Object { }
User.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: {type: 'int'},
    firstName: {type: 'string'},
    lastName: {type: 'string'},
    phone: {type: 'string'},
    country: {type: 'string'},
    email: {type: 'string'},
    password: {type: 'string'},
    newPassword: {type: 'string'},
    confirmPassword: {type: 'string'},
    photo: {type: 'int'},
    postCount: {type: 'int'},
    followersCount: {type: 'int'},
    followingCount: {type: 'int'},
    images: {type: 'list', objectType: 'Photo'}
  }
};

export class Version extends Realm.Object { }
Version.schema = {
  name: 'Version',
  properties: {
    id: 'int'
  }
};
